import { useEffect, useState } from 'react';
import Detail from '../components/projectDetail/Detail';
import { projectDetailApi } from '../api/requests/projectApi';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const [detail, setDetail] = useState<any>([]);
  const { id } = useParams();
  const [isDetail, setIsDetail] = useState<boolean>(false);
  console.log(isDetail);

  // 이미지 데이터 가져오는 함수
  useEffect(() => {
    const fetchData = async () => {
      const data = await projectDetailApi(id as string); // 이미지 데이터 가져오기
      setDetail(data); // 상태 업데이트
    };
    fetchData();
  }, [id, isDetail]);

  return detail && <Detail data={detail[0]} isData={setIsDetail} />;
};

export default ProjectDetail;
