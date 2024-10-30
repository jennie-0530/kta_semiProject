import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { inquirySubmitApi } from "../../api/requests/inquiryApi";
// 
function InquiryForm({sessionUser,IsModalOpen}:{sessionUser:string | null,IsModalOpen:React.Dispatch<React.SetStateAction<boolean>>}) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const navigate = useNavigate();
  
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await inquirySubmitApi({title,content,user_id:sessionUser}); // 프로젝트 데이터를 가져옴
      alert("문의가 성공적으로 접수되었습니다.");
      IsModalOpen(false)
      navigate('/mypage/inquiry')
    } catch (error) {
      console.error("문의 제출 중 오류 발생:", error);
    }
 
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        1:1 문의 남기기
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            제목
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="문의 제목을 입력해주세요"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            내용
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            placeholder="문의 내용을 자세히 적어주세요"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          접수 하기
        </button>
      </form>
    </div>
  );
}

export default InquiryForm;
