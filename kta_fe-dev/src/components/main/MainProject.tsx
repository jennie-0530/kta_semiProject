import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import Button from '../common/Button';
import { getProjects } from '../../util/projectUtils';
import Project from '../../types/project';
import { useNavigate } from 'react-router-dom';

const MainProject = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]); // 초기값을 props로 설정

  useEffect(() => {
    getProjects().then(setProjects).catch(console.error);
  }, []);

  function getRandomItems(arr: [...any], count: number) {
    return arr.sort(() => Math.random() - 0.5).slice(0, count);
  }
  const randomItems = getRandomItems(projects, 6); // 6개의 항목 랜덤 추출

  return (
    <div className='w-[70%] mx-auto my-[100px]'>
      <div className='flex justify-between w-full flex-wrap mb-[50px] '>
        {randomItems.map((project: Project) => {
          return (
            <React.Fragment key={project.project_id}>
              <ProjectCard project={project} />
            </React.Fragment>
          );
        })}
      </div>
      <Button
        disabled={false}
        onClick={() => navigate('projects')}
        text={'모든프로젝트보기'}
        styles={'rounded-md bg-[#000] text-[#ffffff] h-[50px]  w-[140px]'}
      />
    </div>
  );
};

export default MainProject;
