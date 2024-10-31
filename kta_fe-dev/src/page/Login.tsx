import LoginForm from "../components/login/LoginForm";
import { useState } from "react";
import { login } from "../api/requests/authApi";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      const response = await login({ email, password });
      if (response.accessToken) {
        Cookies.set("accessToken", response.accessToken);
      }
      navigate("/");
    } catch (error) {
      console.error("로그인 중 오류 발생", error);
    }
  };

  return (
    <div>
      <LoginForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;
