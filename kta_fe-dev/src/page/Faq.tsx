import React, { useState } from 'react';
import FAQ from '../components/faq/FAQ';
import InquiryForm from '../components/faq/InquiryForm';
import { Link, useNavigate } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
}

function Faq() {
  const [isModalOpen, setIsModalOpen] = useState(false);  // 모달 상태 관리
  const sessionUser = sessionStorage.getItem('user_id') ?? null;
  const navigate = useNavigate();

  const faqData: FAQItem[] = [
    {
      question: '회원가입은 어떻게 하나요?',
      answer: '회원가입은 홈페이지 상단의 \'회원가입\' 버튼을 클릭한 후, 이메일 주소와 비밀번호를 입력하여 간단히 진행할 수 있습니다. 소셜 미디어 계정을 사용한 간편 가입도 지원합니다.'
    },
    {
      question: '비밀번호를 잊어버렸어요. 어떻게 해야 하나요?',
      answer: '비밀번호 찾기 페이지에서 이메일 주소를 입력하시면, 비밀번호 재설정 링크가 전송됩니다. 해당 링크를 클릭하여 새 비밀번호를 설정하시면 됩니다.'
    },
    {
      question: '서비스 이용 요금은 얼마인가요?',
      answer: '기본 서비스는 무료로 제공되며, 프리미엄 기능을 이용하시려면 유료 요금제가 필요합니다. 요금제에 대한 자세한 내용은 요금제 페이지를 참조하세요.'
    },
    {
      question: '환불 정책은 어떻게 되나요?',
      answer: '유료 서비스 이용 중 환불을 원하시는 경우, 결제일로부터 7일 이내에 환불 요청이 가능합니다. 자세한 환불 정책은 이용 약관을 참고해주세요.'
    },
    {
      question: '개인정보는 어떻게 보호되나요?',
      answer: '저희는 고객님의 개인정보를 보호하기 위해 최신 보안 시스템을 적용하고 있으며, 개인정보 보호 정책에 따라 엄격하게 관리하고 있습니다.'
    }
  ];

  // 모달 토글 함수
  const toggleModal = () => {
    if (!sessionUser) {
      return navigate('/login');
    }
    setIsModalOpen(prev => !prev)}

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">FAQ 고객 지원 센터</h1>
      <div className="space-y-4 mb-8">
        
        {faqData.map((faq, index) => (
          <FAQ key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={toggleModal}
          className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
        >
          1:1 문의 하기
        </button>
        <Link to="/inquiries" className="px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition duration-300">
          문의 목록
        </Link>
      </div>

      {/* 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: "rgba(0, 0, 0, 0.8)" }}>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              X
            </button>
            <InquiryForm  IsModalOpen={setIsModalOpen} sessionUser={sessionUser}/> {/* InquiryForm이 모달 안에 표시됨 */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Faq;
