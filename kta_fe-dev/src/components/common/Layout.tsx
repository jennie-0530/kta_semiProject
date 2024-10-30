import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* 화면 전체를 차지하는 레이아웃 */}
      <Suspense fallback={<>로딩중...</>}>
        <Header />
        <div className='flex-grow'>
          {/* 본문을 유동적으로 차지 */}
          <Outlet />
        </div>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Layout;
