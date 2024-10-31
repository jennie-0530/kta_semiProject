import React, { useEffect } from "react";
import WriteForm from "../components/write/WriteForm";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Write = () => {
  const navigate = useNavigate();
  // useLayoutEffect(() => {
  //   const sessionUser = sessionStorage.getItem('user_id');
  //   if (!sessionUser) {
  //     return navigate('/login');
  //   }
  // });
  useEffect(() => {
    const token = Cookies.get("accessToken"); // 쿠키에서 토큰을 확인
    if (!token) {
      navigate("/login"); // 토큰이 없으면 로그인 페이지로 이동
    }
  }, [navigate]);

  return (
    <div>
      <WriteForm type={"write"} />
    </div>
  );
};

export default Write;
