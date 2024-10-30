// 파일 이름 수정
import axios from '../client';

export const mainImgs = async () => {
  try {
    const res = await axios.get('/img');
    return res.data; // 데이터 반환
  } catch (error) {
    console.error('Error fetching images:', error);
    return []; // 에러 시 빈 배열 반환
  }
};