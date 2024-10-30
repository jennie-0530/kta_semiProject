// 파일 이름 수정
import axios from '../client';
const baseDirectory = '/inquiries/';

export const inquiryApi = async () => {
  try {
    const res = await axios.get(baseDirectory + 'all');
    return res.data; // 데이터 반환
  } catch (error) {
    console.error('Error fetching images:', error);
    return []; // 에러 시 빈 배열 반환
  }
};
export const inquirySubmitApi= async ({title,content, user_id}:{
  title: string,
  content:string,
  user_id: string|null,
})=>{
  try {
    await axios.post(baseDirectory+"/submit", {
      title,
      content,
      user_id ,
      });
  } catch (error) {
    console.error("문의 제출 중 오류 발생:", error);
    alert("문의 제출 중 오류가 발생했습니다. 다시 시도해 주세요.");
  }

} 