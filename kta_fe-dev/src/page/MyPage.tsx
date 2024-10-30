import MyInfo from '../components/mypage/MyInfo';
import MyMenu from '../components/mypage/MyMenu';
import { Outlet } from 'react-router-dom';

const MyPage = () => {

  return (
    <div>
      <MyInfo />
      <MyMenu />
      <Outlet />
    </div>
  );
};

export default MyPage;
