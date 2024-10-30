import { useEffect, useState } from 'react';
import Project from '../../types/project';
import MyProjectItem from './MyProjectItem';
import { getProjects } from '../../util/projectUtils';
import { userInfoApi } from '../../api/requests/userApi';

const makeFundingList = (userFunding: null | string) => {
  if (userFunding === null) return [];
  else return userFunding.split(",");
}

const FundingList = () => {
  const [projects, setProjects] = useState([]);
  const [isReady, setIsReady] = useState(false); // 렌더링 완료 상태를 관리
  const userId = sessionStorage.getItem("user_id") || "3"; // 사용자 ID 가져오기



  // 렌더링이 완료된 후에 데이터를 가져오는 로직
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projects = await getProjects();
        const userInfo = await userInfoApi(userId); // userId를 숫자로 전달
        const fundedList = makeFundingList(userInfo.funding);

        const filteredProjects = projects.filter((project: Project) => {
          return fundedList.includes(String(project.project_id));
        });

        console.log("fundingList: " + fundedList);
        setProjects(filteredProjects); // 프로젝트 데이터 설정

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

export default FundingList;
