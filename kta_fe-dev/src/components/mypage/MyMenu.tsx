import { Link } from "react-router-dom";

const MyMenu = () => {

    return (
        <nav className="flex justify-center space-x-10">
            <Link to="/mypage/my" className="font-medium px-3 py-5 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">내 프로젝트</Link>
            <Link to="/mypage/funding" className="font-medium px-3 py-5 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">펀딩한 프로젝트</Link>
            <Link to="/mypage/inquiry" className="font-medium px-3 py-5 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">1:1 문의내역</Link>
        </nav>
    );
};

export default MyMenu;