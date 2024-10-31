import axios from "../client";
interface LoginData {
  email: string;
  password: string;
}

interface SignupData {
  username: string;
  email: string;
  password: string;
}

interface LoginResponse {
  message: string;
  accessToken: string;
  user: {
    user_id: number;
    username: string;
    email: string;
  };
}

export const login = async (loginData: LoginData): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>("/user/login", loginData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    console.error(error.response ? error.response.data : error.message);

    throw new Error("로그인 중 오류 발생");
  }
};

export const signup = async (signupData: SignupData) => {
  try {
    const response = await axios.post("/user/signup", signupData);
    return response.data;
  } catch (error) {
    throw new Error("회원가입 중 오류 발생");
  }
};

export const logout = async () => {
  try {
    const response = await axios.post("/user/logout", null, {
      withCredentials: true, // 쿠키를 포함한 요청
    });

    if (response.status === 204) {
      // 로그아웃 성공
      console.log("로그아웃 성공");

      // 예: 로그인 페이지로 리다이렉트
    } else {
      // 로그아웃 실패
      console.error("Logout failed");
    }
  } catch (error) {
    console.error("Error during logout:", error);
  }
};
