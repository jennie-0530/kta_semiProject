import { useEffect, useState } from 'react';
import Project from '../../types/project';
import MyProjectItem from './MyProjectItem';
import { myProjectApi } from '../../api/requests/userApi';

const MyList = () => {
  const [projects, setProjects] = useState([]);
  const [isReady, setIsReady] = useState(false); // 렌더링 완료 상태를 관리
  const userId = sessionStorage.getItem("user_id") || "3"; // 사용자 ID 가져오기

  // 렌더링이 완료된 후에 데이터를 가져오는 로직
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await myProjectApi(userId);
        setProjects(data); // 프로젝트 데이터 설정
      } catch (error: any) {
        console.log("불러오기 실패: ", error.message);
      }
    };

    // 렌더링이 완료된 후(isReady가 true일 때) 데이터 가져오기
    if (isReady) {
      fetchProjects();
    }
  }, [isReady, userId]);

  // 렌더링이 완료되었을 때 isReady를 true로 설정
  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <div className='container w-[70%] mx-auto'>
      {projects.map((project: Project, i) => {
        return (<MyProjectItem key={i} project={project} />);
      })}
    </div>
  );
};

export default MyList;
