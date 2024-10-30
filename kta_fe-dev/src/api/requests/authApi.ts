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
