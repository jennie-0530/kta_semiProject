import ProjectMenu from '../components/projectlist/ProjectMenu';
import ProjectList from '../components/projectlist/ProjectList';
import { useEffect, useState } from 'react';
import { getProjects } from '../util/projectUtils';
import type Project from '../types/project';
import { useParams } from 'react-router-dom'; // URL 파라미터를 가져오기 위해 추가

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { type } = useParams<{ type: string }>(); // URL에서 'type' 파라미터 받아옴

  useEffect(() => {
    getProjects().then(setProjects).catch(console.error);
  }, []);

  const filteredType = type || 'all';

  // selectedType에 따라 필터링된 프로젝트 리스트
  const filteredProjects =
    filteredType === 'all'
      ? projects // 'all'일 때는 모든 프로젝트를 보여줌
      : projects.filter((project) => project.type === type); // 선택된 타입에 따라 필터링

  return (
    <>
      <ProjectMenu />
      <ProjectList projects={filteredProjects} />
    </>
  );
};

export default Projects;
