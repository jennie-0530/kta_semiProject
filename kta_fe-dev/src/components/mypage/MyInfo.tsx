import { useEffect, useState } from "react";
import { userInfoApi, userModifyApi } from "../../api/requests/userApi";
import { useNavigate } from "react-router-dom";
import UserInfoForm from "./UserInfoForm";
import Modal from "./Modal";
import { formatDate } from "../../util/projectUtils";

interface UserInfo {
  user_id: number;
  username: string;
  email: string;
  password: string;
  user_type: "fan" | "influencer" | "admin";
  created_at: string;
  funding: string;
}

const MyInfo = () => {
  const navigate = useNavigate();
  const userId = sessionStorage.getItem("user_id") || "3";
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [isPasswordChange, setIsPasswordChange] = useState<boolean>(false);

  useEffect(() => {
    userInfoApi(userId)
      .then((data) => {
        setUserInfo(data);
        setUsername(data.username);
      })
      .catch(console.error);
  }, [userId]);

  if (!userInfo) {
    return <div>Loading...</div>; // userInfo가 null일 경우 로딩 표시
  }

  const handleLogout = () => {
    sessionStorage.removeItem("user_id");
    navigate("/");
  };

  const toggleModal = () => {
    setCurrentPassword("");
    setNewPassword("");
    setIsPasswordChange(false);
    setIsModalOpen((prev) => !prev);
  };

  const handleUserInfoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentPassword) {
      alert("기존 비밀번호를 입력해주세요.");
      return;
    }

    const modifyData = isPasswordChange
      ? { userId, username, password: newPassword, currentPassword }
      : { userId, username, currentPassword };

    try {
      await userModifyApi(modifyData);
      alert("회원 정보가 성공적으로 수정되었습니다.");
      toggleModal();
      const updatedUserInfo = await userInfoApi(userId);
      setUserInfo(updatedUserInfo);
    } catch (error: any) {
      alert(error.message);
    }
  };

  if (!userInfo) return <div>Loading...</div>;

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10 mb-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-3">
        {userInfo.username}님, 반가워요!
      </h1>
      <p>
        <strong>
          {userInfo.user_type === "fan"
            ? "팬"
            : userInfo.user_type === "influencer"
              ? "인플루언서"
              : "관리자"}
        </strong>{" "}
        계정입니다.
      </p>
      <div className="space-y-2">
        <p className="my-4">{userInfo.email}</p>
        <p>
          <strong>{formatDate(userInfo.created_at)}</strong>부터 함께 하고
          있어요.
        </p>
      </div>
      총 펀딩 횟수: <strong>{userInfo.funding?userInfo.funding.split(",").length:0}</strong>
      <div className="space-y-4 mt-3">
        <button
          className="bg-blue-500 text-white px-4 py-2 mx-2 rounded hover:bg-blue-600 transition duration-300"
          onClick={toggleModal}
        >
          회원정보 수정
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 mx-2 rounded hover:bg-green-600 transition duration-300"
          onClick={handleLogout}
        >
          로그아웃
        </button>
      </div>

      <Modal isOpen={isModalOpen} toggleModal={toggleModal}>
        <UserInfoForm
          username={username}
          setUsername={setUsername}
          currentPassword={currentPassword}
          setCurrentPassword={setCurrentPassword}
          newPassword={newPassword}
          setNewPassword={setNewPassword}
          isPasswordChange={isPasswordChange}
          setIsPasswordChange={setIsPasswordChange}
          handleSubmit={handleUserInfoSubmit}
        />
      </Modal>
    </div>
  );
};

export default MyInfo;
