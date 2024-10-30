import React, { useEffect, useRef, useState } from 'react';
import CustomEditor from './CustomEditor';
import { projectPutApi, projectWriteApi } from '../../api/requests/projectApi';
import { useNavigate } from 'react-router-dom';
import CustomDatePicker from '../common/datePicker';
import { DetailProps } from '../../types/project';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Firebase 관련 import 추가
import { storage } from '../../config/firebaseConfig'; // Firebase 설정 파일 import

const WriteForm = ({
  type,
  detail,
}: {
  type: string;
  detail?: DetailProps;
}) => {
  const title = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const targetAmount = useRef<HTMLInputElement>(null);
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [endDate, setEndDate] = useState(new Date());
  const [thumbnail, setThumbnail] = useState<File | null>(null); // File 형식으로 변경
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const user_id = sessionStorage.getItem('user_id');

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    if (detail && detail.type) {
      setCategory(detail.type);
    }
    if (detail && detail.title_img) {
      setThumbnailPreview(detail.title_img);
    }
  }, [detail]);

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setThumbnail(file);
      setThumbnailPreview(URL.createObjectURL(file)); // 미리보기용 URL 생성
    }
  };

  const uploadThumbnailToFirebase = async () => {
    if (!thumbnail) return '';
    const storageRef = ref(storage, `thumbnails/${thumbnail.name}`);
    await uploadBytes(storageRef, thumbnail);
    return await getDownloadURL(storageRef); // Firebase에서 이미지 URL 가져오기
  };

  const createSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const uploadedThumbnailUrl = await uploadThumbnailToFirebase(); // Firebase에 이미지 업로드
    const body = {
      title: title.current?.value || '',
      amount: targetAmount.current?.value || '',
      category: category,
      content: content,
      startDate: new Date(),
      endDate: endDate,
      titleImg: uploadedThumbnailUrl, // Firebase에서 받아온 URL 저장
      createdId: user_id,
    };
    try {
      const res = await projectWriteApi({ body: body });
      if (Array.isArray(res)) {
        console.error('API 요청 중 에러가 발생했습니다.');
      } else if (res.status === 200) {
        console.log(res.data.message);
        navigate('/projects');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const modifySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const uploadedThumbnailUrl = thumbnail
      ? await uploadThumbnailToFirebase() // 새로운 썸네일이 있으면 Firebase에 업로드
      : detail?.title_img; // 기존 썸네일을 유지
    const body = {
      title: title.current?.value || '',
      amount: targetAmount.current?.value || '',
      category: category,
      content: content,
      startDate: detail?.start_date ? new Date(detail.start_date) : new Date(),
      endDate: endDate,
      created_by: detail?.created_by,
      titleImg: uploadedThumbnailUrl || '', // undefined 대신 빈 문자열 할당
      id: detail?.project_id,
    };
    try {
      const res = await projectPutApi({ body: body });
      if (Array.isArray(res)) {
        console.error('API 요청 중 에러가 발생했습니다.');
      } else if (res.status === 200) {
        console.log(res.data.message);
        navigate(`/projects/detail/${detail?.project_id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='w-[95%] mx-auto min-h-[650px] p-6 lg:w-[70%]'>
      <form
        className='bg-white rounded-lg shadow-md p-8 space-y-6'
        onSubmit={(e) =>
          type === 'modify' ? modifySubmit(e) : createSubmit(e)
        }
      >
        <h2 className='text-2xl font-bold text-gray-800 text-center mb-4'>
          프로젝트 작성
        </h2>

        <div className='w-full'>
          <label
            htmlFor='title'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            제목
          </label>
          <input
            type='text'
            ref={title}
            className='border border-gray-300 rounded-md p-3  w-[80%]  focus:outline-none focus:ring-2 focus:ring-blue-400'
            placeholder='제목을 입력하세요'
            defaultValue={detail && detail.title}
          />
        </div>

        <div className='w-full'>
          <label
            htmlFor='thumbnail'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            썸네일 이미지
          </label>
          {thumbnailPreview && (
            <div className='w-full flex justify-center mb-4'>
              <img
                src={thumbnailPreview}
                alt='Thumbnail Preview'
                className='mt-3 w-[200px] h-[200px] object-cover rounded-md'
              />
            </div>
          )}
          <input
            type='file'
            id='thumbnail'
            accept='image/*'
            onChange={handleThumbnailChange}
            className='border border-gray-300 rounded-md p-3 w-[80%] focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
        </div>

        <div className='w-full'>
          <label
            htmlFor='targetAmount'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            목표금액
          </label>
          <input
            type='text'
            ref={targetAmount}
            className='border border-gray-300 rounded-md p-3  w-[80%]  focus:outline-none focus:ring-2 focus:ring-blue-400'
            placeholder='목표금액을 입력하세요'
            readOnly={type === 'modify' && true}
            defaultValue={detail && detail.goal_amount}
          />
        </div>

        <div className='w-full'>
          <label
            htmlFor='category'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            카테고리
          </label>
          <select
            id='category'
            value={category}
            onChange={handleCategoryChange}
            className='border border-gray-300 rounded-md p-3 w-[80%] focus:outline-none focus:ring-2 focus:ring-blue-400'
          >
            <option value=''>카테고리를 선택하세요</option>
            <option value='goods'>굿즈</option>
            <option value='event'>이벤트</option>
            <option value='promotion'>프로모션</option>
            <option value='etc'>기타</option>
          </select>
        </div>

        <div className='w-full mx-auto'>
          <label
            htmlFor='endDate'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            마감일
          </label>
          <CustomDatePicker
            defaultValue={detail && detail.end_date}
            startDate={endDate}
            setStartDate={setEndDate}
          />
        </div>
        <CustomEditor
          defaultValue={detail && detail.description}
          content={content}
          setContent={setContent}
        />
        <div className='text-center'>
          <button
            type='submit'
            className='bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200'
          >
            제출하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default WriteForm;
