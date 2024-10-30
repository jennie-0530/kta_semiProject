import { DetailProps } from '../../types/project';
import { calculatePercentage } from '../../util/calculatePercentage';
import ProgressBar from '../common/ProgressBar';
import DetailHead from './DetailHead';

type props = {
  isData: React.Dispatch<React.SetStateAction<boolean>>;
  data: DetailProps;
};

const Detail = ({ data, isData }: props) => {
  // 목표 금액 대비 현재 금액의 달성률을 계산하는 함수
  const percentage = calculatePercentage(
    Number(data && data.goal_amount),
    data && data.current_amount
  );

  return (
    <div className='min-h-[600px] w-full'>
      {/* 데이터가 존재할 경우에만 DetailHead 컴포넌트를 렌더링 */}
      {data && (
        <DetailHead data={data} isData={isData} percentage={percentage} />
      )}

      <div className='flex w-[70%] mx-auto min-h-[500px] justify-between mt-[30px]'>
        {/* 왼쪽 섹션: 프로젝트 설명 */}
        <div className='w-[63%] min-h-[500px] h-auto'>
          {/* 위험할 수 있는 HTML 렌더링 방식으로, description을 삽입 */}
          <div
            dangerouslySetInnerHTML={{ __html: data && data.description }}
            className='pb-7 [&_img]:w-full '
          />
        </div>

        {/* 오른쪽 섹션: 펀딩 달성률 표시 */}
        <div className='w-[35%] relative'>
          <div className='fixed top-[500px] left-1/5 border w-[24%] h-[150px] rounded-md py-[10px] px-[15px] text-start'>
            <p className='text-h2 font-bold'>펀딩 달성률</p>
            {/* ProgressBar 컴포넌트를 사용해 달성률을 시각적으로 표시 */}
            <ProgressBar width={percentage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
