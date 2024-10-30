import Button from '../common/Button';
import { DetailProps } from '../../types/project';
import { calculateDaysLeft } from '../../util/calculateDaysLeft';
import { formatAmount } from '../../util/formatAmount';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { formatDate } from '../../util/projectUtils';
import {
  projectDeleteApi,
  projectSupportApi,
} from '../../api/requests/projectApi';

interface detailProps {
  data: DetailProps;
  percentage: number;
  isData: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailHead = ({ data, percentage, isData }: detailProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const sessionUser = sessionStorage.getItem('user_id') ?? null;

  const isProjectUserId = data.created_by ? data.created_by.toString() : '-1';
  const handleCopy = async () => {
    const url = window.location.href; // 현재 페이지의 URL을 가져옴
    try {
      await navigator.clipboard.writeText(url); // URL을 클립보드에 복사
      console.log('URL이 클립보드에 복사되었습니다.');
      alert('링크가 클립보드에 복사되었습니다!'); // 사용자에게 알림
    } catch (error) {
      console.error('복사 중 오류 발생:', error);
    }
  };
  const dDay = calculateDaysLeft(data.end_date);
  const goalAmount = formatAmount(data.goal_amount);
  const currentAmount = formatAmount(String(data.current_amount));
  const deleteProject = async () => {
    try {
      const res = await projectDeleteApi(Number(id));
      if (res && res.status === 200) {
        // res가 null이 아닌 경우에만 실행
        navigate('/projects');
      } else {
        // res가 null인 경우 처리
        console.log('삭제 중 문제가 발생했습니다.');
      }
    } catch (error) {
      console.log('오류:', error);
    }
  };
  const supportProject = async () => {
    if (!sessionUser) {
      return navigate('/login');
    }
    if (sessionUser === isProjectUserId) {
      return alert('본인꺼에는 펀딩이 안됩니다.');
    }
    try {
      const res = await projectSupportApi(Number(id));
      if (res && res.status === 200) {
        // res가 null이 아닌 경우에만 실행
        isData((prev) => !prev);
        alert('펀딩완료');
      } else {
        // res가 null인 경우 처리
        console.log('삭제 중 문제가 발생했습니다.');
      }
    } catch (error) {
      console.log('오류:', error);
    }
  };

  return (
    <div className='w-full bg-[#dae5e4] h-[400px] pt-3'>
      <div className='w-[70%]  mx-auto h-[350px] flex'>
        <div className='w-[50%] h-[200px] p-[20px] '>
          <div className=' w-full h-[350px] mx-auto rounded-md px-[20px]'>
            <img
              className='w-full h-full object-fill rounded-md '
              src={
                data.title_img ||
                'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fsolid-part-6%2F128%2Fimage_icon-512.png&type=sc960_832'
              }
              alt='타이틀섬네일'
            />
          </div>
        </div>
        <div className='w-[50%] h-[200px] py-[20px] flex flex-col pl-[80px]'>
          <div className='flex flex-row justify-between mb-[10px]'>
            <span className='px-[10px] py-10px bg-gray400 text-[#ffffff] font-semibold'>
              {data.type}
            </span>
            {sessionUser === isProjectUserId && (
              <div className='text-gray-400'>
                <Link to={`/modify/${id}`}>
                  <span className='mx-2 cursor-pointer'>수정</span>
                </Link>
                <button style={{ border: 'none' }}>
                  <span className='mx-2 cursor-pointer' onClick={deleteProject}>
                    삭제
                  </span>
                </button>
              </div>
            )}
          </div>
          <div className='border-b text-start pb-[10px]'>
            <p className='text-h1 font-bold'>{data.title}</p>
          </div>
          <div className='text-start mt-[20px]'>
            <p className='text-h3 font-medium'>목표금액: {goalAmount}원</p>
            <p className='text-h2 font-medium'>
              달성금액: {currentAmount}원
              <span className='bg-[#062E54] text-[#ffffff] text-h4 mx-[3px]  px-[8px] rounded-lg relative bottom-[2px]'>
                {percentage}%
              </span>
            </p>
          </div>
          <div className='text-start mt-[30px]'>
            <p className='text-h2 font-medium'>
              종료일: {data.end_date && formatDate(data.end_date)}
              <span className='bg-[#E8B605] text-[#ffffff] text-h4 mx-[4px]  px-[8px] rounded-lg relative bottom-[2px]'>
                {dDay}
              </span>
            </p>
          </div>
          <div className='flex justify-start mt-[30px]'>
            <button
              className='border-2 w-[60px] h-[50px] relative top-[20px] rounded-lg mr-[20px]'
              onClick={handleCopy}
            >
              <svg
                aria-hidden='true'
                fill='currentColor'
                focusable='false'
                height='30'
                preserveAspectRatio='xMidYMid meet'
                viewBox='0 0 24 24'
                width='30'
                className='mx-auto'
              >
                <path
                  d='M18 9.35278C19.6569 9.35278 21 8.00964 21 6.35278C21 4.69593 19.6569 3.35278 18 3.35278C16.3431 3.35278 15 4.69593 15 6.35278C15 6.51444 15.0128 6.6731 15.0374 6.82783L8.15718 10.2679C7.6117 9.70365 6.84683 9.35278 6 9.35278C4.34315 9.35278 3 10.6959 3 12.3528C3 14.0096 4.34315 15.3528 6 15.3528C6.84683 15.3528 7.61171 15.0019 8.1572 14.4376L15.0374 17.8777C15.0128 18.0324 15 18.1911 15 18.3528C15 20.0096 16.3431 21.3528 18 21.3528C19.6569 21.3528 21 20.0096 21 18.3528C21 16.6959 19.6569 15.3528 18 15.3528C17.1532 15.3528 16.3883 15.7037 15.8428 16.268L8.9626 12.8279C8.98721 12.6731 9 12.5144 9 12.3528C9 12.1911 8.98721 12.0324 8.96259 11.8777L15.8428 8.4376C16.3883 9.0019 17.1532 9.35278 18 9.35278Z'
                  xmlns='http://www.w3.org/2000/svg'
                ></path>
              </svg>
            </button>

            <Button
              onClick={supportProject}
              disabled={false}
              text={'Support'}
              styles={
                'rounded-lg bg-[#000] text-[#ffffff] h-[50px] mt-[20px] w-[140px]'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailHead;
