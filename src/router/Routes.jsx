import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { PATH } from '@/constants/path-constant';
import Home from '@/pages/Home';
import ProtectedRouter from '@router/ProtectedRouter';
import SignUp from '@/pages/SignUp';
import Login from '@/pages/Login';
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
              //로그인해야만 갈수있는 경로
              path: BOOK_MARK,
              element: <BOOK_MARK />,
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
      ],
    },
  ];

  const router = createBrowserRouter([...AuthenticatedRouter]);
  return <RouterProvider router={router} />;
}

export default Routes;
