import axios from '../client';
const baseDirectory = '/user';

export const userInfoApi = async (userId: string) => {

    try {
        const res = await axios.get(baseDirectory + "/info", {
            // userId가 있으면 헤더에 추가
            headers: userId ? { 'user_id': userId } : {}
        });
        return res.data; // 데이터 반환
    } catch (error) {
        console.error('Error fetching images:', error);
        return []; // 에러 시 빈 배열 반환
    }
};


export const myProjectApi = async (userId: string) => {
    const URL = baseDirectory + '/projects';
  
    try {
      const res = await axios.get(URL, {
        headers: { user_id: userId },
      });
  
      return res.data; // 데이터 반환
    } catch (error) {
      console.error('Error fetching images:', error);
      return []; // 에러 시 빈 배열 반환
    }
  };

// userModifyApi 수정
export const userModifyApi =
    async (body: { userId: string; username: string; currentPassword: string; password?: string }) => {
        try {
            const res = await axios.post(baseDirectory + '/modify', body);
            return res;
        } catch (error: any) {
            console.error('Error :', error);
            throw new Error(error.response?.data?.message || '사용자 정보 수정 중 오류가 발생했습니다.');
        }
    };
