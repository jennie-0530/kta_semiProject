// src/components/UserInfoForm.tsx
import React from "react";

interface UserInfoFormProps {
    username: string;
    setUsername: (username: string) => void;
    currentPassword: string;
    setCurrentPassword: (password: string) => void;
    newPassword: string;
    setNewPassword: (password: string) => void;
    isPasswordChange: boolean;
    setIsPasswordChange: (state: boolean) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const UserInfoForm: React.FC<UserInfoFormProps> = ({
    username,
    setUsername,
    currentPassword,
    setCurrentPassword,
    newPassword,
    setNewPassword,
    isPasswordChange,
    setIsPasswordChange,
    handleSubmit,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    사용자명
                </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                    기존 비밀번호
                </label>
                <input
                    type="password"
                    id="current-password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            <div className="mb-4 flex items-center">
                <input
                    type="checkbox"
                    id="password-change"
                    checked={isPasswordChange}
                    onChange={() => setIsPasswordChange(!isPasswordChange)}
                    className="mr-2"
                />
                <label htmlFor="password-change" className="text-sm font-medium text-gray-700">
                    비밀번호 변경
                </label>
            </div>

            {isPasswordChange && (
                <div className="mb-4">
                    <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                        새 비밀번호
                    </label>
                    <input
                        type="password"
                        id="new-password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
            )}

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
                정보 수정하기
            </button>
        </form>
    );
};

export default UserInfoForm;