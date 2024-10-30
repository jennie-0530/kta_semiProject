import axios from '../client';
const baseDirectory = '/admin/';
const projectDirectory = 'project/';

export const getAllProjects = async () => {
  try {
    const res = await axios.get(baseDirectory + projectDirectory + 'all');
    const data = res.data;
    return data;
  } catch (error) {
    console.error('Error fetching images:', error);
    return []; // 에러 시 빈 배열 반환
  }
};

export const getProject = async (id: number) => {
  try {
    const res = await axios.get(baseDirectory + projectDirectory + id);
    const data = res.data;
    return data;
  } catch (error) {
    console.error('Error fetching images:', error);
    return {}; // 에러 시 빈 객체 반환
  }
};