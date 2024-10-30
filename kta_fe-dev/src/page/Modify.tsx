import { useEffect, useState } from 'react';
import WriteForm from '../components/write/WriteForm';
import { useParams } from 'react-router-dom';
import { projectDetailApi } from '../api/requests/projectApi';

const Modify = () => {
  const [detail, setDetail] = useState<any>([]);
  const { id } = useParams();
  // 이미지 데이터 가져오는 함수
  useEffect(() => {
    const fetchData = async () => {
      const data = await projectDetailApi(id as string); // 이미지 데이터 가져오기
      setDetail(data); // 상태 업데이트
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <WriteForm detail={detail[0]} type={'modify'} />
    </div>
  );
};

export default Modify;
