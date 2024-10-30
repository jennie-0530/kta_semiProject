import axios from "axios";

const baseURL = "http://localhost:3333";

const axiosInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true, // 쿠키 전송을 허용합니다.
});

// 요청 인터셉터 설정
axiosInstance.interceptors.request.use((config) => {
  // 쿠키에서 JWT 토큰 가져오기
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="));

  if (token) {
    // 쿠키에서 토큰 값을 가져와서 Authorization 헤더에 추가합니다.
    config.headers.Authorization = `Bearer ${token.split("=")[1]}`;
  } else {
    // 토큰이 없으면 Authorization 헤더를 null로 설정합니다.
    config.headers.Authorization = null;
  }

  return config;
});

export default axiosInstance;
