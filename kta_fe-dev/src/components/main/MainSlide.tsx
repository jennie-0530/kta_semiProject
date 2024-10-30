import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { ImgProps } from '../../types/main';
import { mainImgs } from '../../api/requests/mainApi';

// Swiper 모듈 등록
SwiperCore.use([Navigation, Pagination, Autoplay]);

const MainSlide: React.FC = () => {
  const [swiperImgs, setSwiperImgs] = useState<ImgProps[]>([]);

  // 이미지 데이터 가져오는 함수
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await mainImgs(); // 이미지 데이터 가져오기
        if (data && Array.isArray(data)) {
          setSwiperImgs(data); // 상태 업데이트
        } else {
          console.log('Unexpected data format:', data);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* 슬라이드 타이틀 */}
      {/* 슬라이드 컨테이너 */}
      <div className='flex justify-center items-center w-full p-0 mx-auto relative h-[400px] md:h-[500px] md:z-50'>
        <Swiper
          className='w-full h-full rounded-lg shadow-lg overflow-hidden'
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000, // 3초마다 슬라이드
            disableOnInteraction: false, // 사용자가 슬라이드를 클릭해도 autoplay 유지
          }}
          pagination={{ clickable: true }}
          loop
        >
          {swiperImgs &&
            swiperImgs.map((item) => (
              <SwiperSlide key={item.idx} className='w-full h-full'>
                <img
                  className='w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105'
                  src={item.images}
                  alt='poto'
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default MainSlide;
