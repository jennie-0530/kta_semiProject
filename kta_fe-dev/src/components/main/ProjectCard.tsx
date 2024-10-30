import React from 'react';
import { getProgress } from '../../util/projectUtils';
import Project from '../../types/project';
import { Link } from 'react-router-dom';

interface ProjectProps {
  project: Project; // project라는 이름의 prop
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <Link
      to={`/projects/detail/${project.project_id}`}
      key={project.project_id}
      className='relative flex flex-col justify-between border-2 border-gray-200 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl w-[90%] md:w-[30%] h-[380px] m-4'
    >
      {/* 이미지 부분 */}
      <div className='relative w-full h-[70%]'>
        <span className='absolute top-2 left-2 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded'>
          {project.type}
        </span>
        <img
          className='w-full h-full object-cover rounded-t'
          // src="https://i.namu.wiki/i/oU0avPQmlPv0p13BPnuEqyzmtGl9SoTArdKVYpb1r5CYXrpUjEqtiurvlFDjpXdOMyDXwIFYpz0x3PgtS92_8A.webp"
          src={
            project.title_img ||
            'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fsolid-part-6%2F128%2Fimage_icon-512.png&type=sc960_832'
          }
          alt={project.title}
        />
      </div>

      {/* 프로젝트 설명 부분 */}
      <div className='p-4 flex flex-col justify-between bg-white h-[30%]'>
        <p className='text-lg font-bold text-gray-800 truncate'>
          {project.title}
        </p>
        <p className='text-sm text-gray-600'>
          달성률:{' '}
          <span className='text-indigo-500 font-semibold'>
            {getProgress(project)}%
          </span>
        </p>
      </div>

      {/* Hover 효과 */}
      <div className='absolute inset-0 bg-black bg-opacity-10 opacity-0 hover:opacity-20 transition-opacity'></div>
    </Link>
  );
};

export default ProjectCard;
