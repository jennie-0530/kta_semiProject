const pool = require('../util/database');
import type { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET_KEY;
let refreshTokens: string[] = []; // 원래는 db에 저장해야되는데 연습이니까 걍 변수로 저장함.

exports.login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const query = `select * from Users where email = ?`;
  console.log(process.env.JWT_SECRET_KEY);
  console.log(secretKey);
  // secretKey가 정의되어 있는지 확인
  if (!secretKey) {
    return res
      .status(500)
      .json({ error: 'JWT 비밀 키가 설정되지 않았습니다.' });
  }

  try {
    const [results] = await pool.query(query, [email]);
    // 사용자 검증
    if (results.length === 0) {
      return res.status(401).json({ error: '일치하는 사용자 없음' });
    }

    // 로그인 성공
    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: '비밀번호가 일치하지 않습니다.' });
    }
    const accessToken = jwt.sign({ userId: user.user_id }, secretKey, {
      expiresIn: '15m',
    });

    const refreshToken = jwt.sign({ userId: user.user_id }, secretKey, {
      expiresIn: '7d',
    });

    refreshTokens.push(refreshToken);
    res.cookie('refreshToken', refreshToken, {
      httpOnly: false, // true=JavaScript에서 접근 불가
      secure: false,
      sameSite: 'Lax' as 'lax', // CSRF 공격 방지
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7일
    });

    // Access Token을 쿠키에 저장합니다.
    res.cookie('accessToken', accessToken, {
      httpOnly: false,
      secure: false,
      sameSite: 'Lax' as 'lax',
      maxAge: 15 * 60 * 1000, // 15분
    });
    res.json({ accessToken }); // 클라이언트에 Access Token 반환
  } catch (error) {
    res.status(401).json({ message: '로그인 실패', error });
  }
};

// access token이 만료됐을 때 refresh 토큰으로  access token 갱신하기
exports.refreshTokenHandler = (req: Request, res: Response) => {
  const token = req.cookies.refreshToken;
  if (!token || !refreshTokens.includes(token)) return res.sendStatus(403); // Forbidden (403)
  if (!secretKey) {
    return res
      .status(500)
      .json({ error: 'JWT 비밀 키가 설정되지 않았습니다.' });
  }
  jwt.verify(token, secretKey, (err: JsonWebTokenError | null, user: any) => {
    if (err) return res.sendStatus(403);
    const accessToken = jwt.sign({ id: user.id }, secretKey, {
      expiresIn: '15m',
    }); // 새로운 Access Token 생성
    res.json({ accessToken });
  });
};

exports.logout = (req: Request, res: Response) => {
  const token = req.cookies.refreshToken;
  refreshTokens = refreshTokens.filter((t) => t !== token);
  res.clearCookie('refreshToken');
  res.clearCookie('accessToken');
  res.sendStatus(204);
};
