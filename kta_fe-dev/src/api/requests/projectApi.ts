// 파일 이름 수정
import { AxiosResponse } from 'axios';
import { WriteProps } from '../../types/write';
import axios from '../client';
const baseDirectory = '/project/';

export const projectApi = async () => {
  try {
    const res = await axios.get(baseDirectory + 'all'); // 프로젝트 데이터를 가져옴
    return res; // Project[] 반환
  } catch (error) {
    console.error('Error fetching data:', error); // 오류 처리
    return []; // 에러가 발생할 경우 빈 배열 반환
  }
};

export const projectWriteApi = async ({
  body,
}: WriteProps): Promise<AxiosResponse | []> => {
  try {
    const res = await axios.post(baseDirectory + '/write', { body });
    return res; // 정상적인 응답 반환
  } catch (error) {
    console.error('Error :', error);
    return []; // 에러 시 빈 배열 반환
  }
};

export const projectDetailApi = async (id: string) => {
  try {
    const ids = Number(id);
    const res = await axios.get(baseDirectory + `${ids}`);
    return res.data; // 데이터 반환
  } catch (error) {
    return console.error('Error :', error); // 에러 시 로고 반환
  }
};
export const projectPutApi = async ({
  body,
}: WriteProps): Promise<AxiosResponse | []> => {
  try {
    const res = await axios.put(baseDirectory + '/modify', { body });
    return res; // 정상적인 응답 반환
  } catch (error) {
    console.error('Error :', error);
    return []; // 에러 시 빈 배열 반환
  }
};

export const projectStatusModifyApi = async (id: string, status: string) => {
  try {
    const ids = Number(id);
    const res = await axios.put(baseDirectory + `${ids}/${status}`);
    return res.data; // 상태 변경 결과 반환
  } catch (error) {
    console.error('Error modifying project status:', error);
    return { error: '프로젝트 상태 변경 중 문제가 발생했습니다.' };
  }
};

export const projectDeleteApi = async (
  id: number
): Promise<AxiosResponse | null> => {
  try {
    const res = await axios.delete(baseDirectory + `${id}`);
    return res; // 정상적인 응답 반환
  } catch (error) {
    console.error('Error :', error);
    return null; // 에러 시 로고 반환
  }
};

export const projectSupportApi = async (
  id: number
): Promise<AxiosResponse | null> => {
  try {
    const res = await axios.post(baseDirectory + `support/${id}`);
    return res; // 정상적인 응답 반환
  } catch (error) {
    console.error('Error :', error);
    return null; // 에러 시 로고 반환
  }
};
