import { useState } from 'react';
import Project from '../../types/project';
import ProjectItem from './ProjectItem';

export interface ProjectListProps {
  projects: Project[]; // projects가 null일 수 있음
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const [visibleProjects, setVisibleProjects] = useState(5); // 처음에 보여줄 프로젝트 개수 설정

  if (!projects || projects.length === 0) {
    return (
      <div className='container mx-auto my-10'>표시할 내용이 없습니다.</div>
    );
  }

  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 5); // '더보기' 버튼 클릭 시 추가로 5개씩 표시
  };

  return (
    <div className='container w-[70%] mx-auto'>
      {projects.slice(0, visibleProjects).map((project: Project, i) => {
        return <ProjectItem key={i} project={project} />;
      })}

      {visibleProjects < projects.length && (
        <div className='text-center mt-4'>
          <button 
            className='bg-blue-500 text-white py-2 px-4 rounded mb-5'
            onClick={handleLoadMore}
          >
            더보기
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
