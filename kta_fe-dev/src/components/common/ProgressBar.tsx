import React from 'react';

interface ProgressBarProps {
  width: number; // 진행률을 퍼센트로 설정
}

const ProgressBar: React.FC<ProgressBarProps> = ({ width }) => {
  const displayWidth = width > 100 ? 100 : width; // 진행률은 최대 100으로 제한

  return (
    <div className='flex flex-col items-center mt-5'>
      <div className='w-full h-[30px] bg-[#5a92c6] rounded-lg relative'>
        <div
          className='h-full bg-[#1F5587] rounded-lg transition-all duration-300 ease-in-out'
          style={{ width: `${displayWidth}%` }} // 진행률 표시, 최대 100%
        />
        <span
          className='absolute top-[28%] transform text-xs text-white overflow-hidden transition-all duration-300 ease-in-out'
          style={{
            left:
              displayWidth <= 15
                ? `${displayWidth}%` // displayWidth가 15 이하일 때는 오른쪽으로 정렬
                : (`${displayWidth - 5}%` as React.CSSProperties['left']), // 그 외에는 기존 위치
            transform: displayWidth <= 15 ? 'none' : 'translateX(-50%)', // 15% 이하일 때는 translate 해제
          }}
        >
          {width}% {/* 실제 값은 100 이상이어도 글자는 그대로 표시 */}
        </span>
      </div>
      <div className='flex justify-between w-full mt-1'>
        <span className='text-xs text-[#1F5587]'>0%</span>
        <span className='text-xs text-[#1F5587]'>100%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
