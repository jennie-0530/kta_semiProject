import { useEffect, useState } from 'react';
import { inquiryApi } from '../../api/requests/inquiryApi';
import { formatDate } from "../../util/projectUtils";

interface Inquiry {
  title: string;
  user_id: string;
  inquiry_content: string;
  created_at: string;
  reply?: string;
}

function InquiryList() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  const getInquiries = async () => {
    try {
      const data = await inquiryApi(); // 프로젝트 데이터를 가져옴
      return data; // Project[] 반환
    } catch (error) {
      console.error('Error fetching data:', error); // 오류 처리
      return []; // 에러가 발생할 경우 빈 배열 반환
    }
  };

  useEffect(() => {
    getInquiries().then((data) => {
      console.log(data);
      setInquiries(data);
    }).catch(console.error);
  }, []);

  // const addReply = (index: number, reply: string) => {
  //   const updatedInquiries = [...inquiries];
  //   updatedInquiries[index].reply = reply;
  //   setInquiries(updatedInquiries);
  //   sessionStorage.setItem('inquiries', JSON.stringify(updatedInquiries));
  // };

  // const editReply = (index: number, newReply: string) => {
  //   const updatedInquiries = [...inquiries];
  //   updatedInquiries[index].reply = newReply;
  //   setInquiries(updatedInquiries);
  //   sessionStorage.setItem('inquiries', JSON.stringify(updatedInquiries));
  // };

  // const deleteReply = (index: number) => {
  //   const updatedInquiries = [...inquiries];
  //   delete updatedInquiries[index].reply;
  //   setInquiries(updatedInquiries);
  //   sessionStorage.setItem('inquiries', JSON.stringify(updatedInquiries));
  // };

  const userId = sessionStorage.getItem('user_id');
  console.log('user:' + userId);

  return (
    <div className='container w-[70%] mx-auto items-center'>
      {inquiries // eslint-disable-next-line
        .filter((inquiry) => inquiry.user_id == userId)
        .map((inquiry, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 space-y-4 border border-gray-300 mb-5 items-center text-center"
          >
            <div className="flex justify-center items-center">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {inquiry.title}
                </h3>
                <p className="text-gray-600 my-2">{inquiry.inquiry_content}</p>
                <p className="text-gray-600 font-semibold">{formatDate(inquiry.created_at)}</p>
              </div>
            </div>

            {/* {inquiry.reply ? (
              <div className="bg-blue-50 p-4 rounded-md space-y-2 text-center">
                <h4 className="font-semibold text-blue-800">답변:</h4>
                <p className="text-blue-700">{inquiry.reply}</p>
                <div className="space-x-2">
                  <button
                    onClick={() =>
                      editReply(
                        index,
                        prompt('답변을 수정하세요:', inquiry.reply) || ''
                      )
                    }
                    className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => deleteReply(index)}
                    className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
                  >
                    삭제
                  </button>
                </div>
              </div>
            )
              : (
                <button
                  onClick={() =>
                    addReply(index, prompt('답변을 입력하세요:') || '')
                  }
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                >
                  답변하기
                </button>
              )
            } */}
          </div>
        ))}
    </div>
  );
}

export default InquiryList;
