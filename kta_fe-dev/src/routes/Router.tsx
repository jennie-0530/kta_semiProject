import Layout from "../components/common/Layout";
import Index from "../page";
import Faq from "../page/Faq";
import MyPage from "../page/MyPage";
import NotFound from "../page/NotFound";
import ProjectDetail from "../page/ProjectDetail";
import Projects from "../page/Projects";
import Write from "../page/Write";
import InquiryList from "../components/faq/InquiryList";
import MyList from "../components/mypage/MyList";
import Signup from "../page/Signup";
import Modify from "../page/Modify";
import Login from "../page/Login";
import ProtectedRoute from "./ProtectedRoute";
import FundingList from "../components/mypage/FundingList";
import Terms from "../page/Terms";
import Company from "../page/Company";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Index />, index: true },
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
      { path: "/projects", element: <Projects /> },
      { path: "/projects/:type", element: <Projects /> },
      { path: "/projects/detail/:id", element: <ProjectDetail /> },
      {
        path: "/write",
        element: (
          <ProtectedRoute>
            <Write />
          </ProtectedRoute>
        ),
      },
      {
        path: "/modify/:id",
        element: (
          <ProtectedRoute>
            <Modify />
          </ProtectedRoute>
        ),
      },
      // { path: "inquiries", element: <InquiryList /> },
      {
        path: "/mypage",
        element: <MyPage />,
        children: [
          { path: "", element: <MyList />, index: true },
          { path: "my", element: <MyList /> },
          { path: "funding", element: <FundingList /> },
          { path: "inquiry", element: <InquiryList /> },
        ],
      },

      { path: "/faq", element: <Faq /> },
      { path: "/company", element: <Company /> },
      { path: "/terms", element: <Terms /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
