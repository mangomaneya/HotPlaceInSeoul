import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { PATH } from '@/constants/path-constant';
import Home from '@/pages/Home';
import ProtectedRouter from '@router/ProtectedRouter';
import SignUp from '@/pages/SignUp';
import Login from '@/pages/Login';
import BookMark from '@/pages/BookMark';
import NotFoundedPage from '@/pages/NotFoundedPage';
const { LOGIN, SIGN_UP, HOME, BOOK_MARK } = PATH;

function Routes() {
  // 라우트 설정 배열
  const AuthenticatedRouter = [
    {
      path: HOME,
      element: <Layout />,
      children: [
        { path: '', element: <Home /> },
        {
          path: '',
          element: <ProtectedRouter />,
          children: [
            {
              path: BOOK_MARK,
              element: <BookMark />, //북마크 페이지 경로 추가 
            },
          ],
        },
        {
          path: SIGN_UP,
          element: <SignUp />,
        },
        {
          path: LOGIN,
          element: <Login />,
        },
        {
          path:'*',
          element: <NotFoundedPage/>
        }
      ],
    },
  ];

  const router = createBrowserRouter([...AuthenticatedRouter]);
  return <RouterProvider router={router} />;
}

export default Routes;
