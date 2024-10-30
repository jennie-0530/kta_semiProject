import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="));
    setIsLoggedIn(!!token);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white   h-[80px]  md:w-[70%] mx-auto w-full">
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        {/* 로고 및 사이트 이름 */}
        <div className="flex items-center">
          <img
            src="/img/user-solid.png"
            alt="logo"
            className="h-10 w-10 object-contain mr-3"
          />
          <Link
            className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-300"
            to="/"
          >
            펀딩펀 - Crowdfunding Platform
          </Link>
        </div>

        {/* 데스크탑용 메뉴 */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            className="text-lg font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-300"
            to="/projects"
          >
            모든 프로젝트
          </Link>
          <Link
            className="text-lg font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-300"
            to="/write"
          >
            프로젝트 등록
          </Link>
          <Link
            className="text-lg font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-300"
            to="/faq"
          >
            고객지원
          </Link>

          {isLoggedIn ? (
            <Link
              className="text-lg font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-300"
              to="/mypage"
            >
              마이페이지
            </Link>
          ) : (
            <Link
              className="text-lg font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-300"
              to="/login"
            >
              로그인
            </Link>
          )}
        </div>

        {/* 모바일 메뉴 버튼 */}
        <div className="md:hidden ">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-indigo-600 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일용 메뉴 */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-white border-t-2 shadow-md absolute top-[80px] left-0 w-full z-50"
          style={{ zIndex: "50" }}
        >
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                className="text-lg font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-300"
                to="/projects"
                onClick={toggleMobileMenu}
              >
                모든 프로젝트
              </Link>
            </li>
            <li>
              <Link
                className="text-lg font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-300"
                to="/write"
                onClick={toggleMobileMenu}
              >
                프로젝트 등록
              </Link>
            </li>
            <li>
              <Link
                className="text-lg font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-300"
                to="/faq"
                onClick={toggleMobileMenu}
              >
                고객지원
              </Link>
            </li>
            {isLoggedIn ? (
              <li>
                <Link
                  className="text-lg font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-300"
                  to="/mypage"
                  onClick={toggleMobileMenu}
                >
                  마이페이지
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  className="text-lg font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-300"
                  to="/login"
                  onClick={toggleMobileMenu}
                >
                  로그인
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
