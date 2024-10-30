import SignupForm from "../components/signup/SignUpForm";
import { useState } from "react";
import { signup } from "../api/requests/authApi";
import { useNavigate } from "react-router-dom";

interface SignupData {
  username: string;
  email: string;
  password: string;
  checkPassword: string;
}

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignupData>({
    username: "",
    email: "",
    password: "",
    checkPassword: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { username, email, password, checkPassword } = formData;

    if (!username || !email || !password || !checkPassword) {
      return alert("모든 필드를 입력해주세요.");
    }

    if (password !== checkPassword) {
      return alert("입력한 비밀번호를 다시 확인해주세요.");
    }
    if (!email.includes("@")) {
      return alert("유효한 이메일 주소를 입력해 주세요.");
    }
    if (password.length < 6) {
      return alert("비밀번호는 최소 6자리 이상이어야 합니다.");
    }
    try {
      const response = await signup({ username, email, password });
      console.log(response);
      alert("회원가입 성공!");
      navigate("/");
    } catch (error) {
      console.error("회원가입 중 오류 발생", error);
      alert("회원가입 중 오류 발생");
    }
  };

  return (
    <div>
      <SignupForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Signup;
