import useAuthStore from '@/store/zustand/authStore';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { PATH } from '@/constants/path-constant';
const { LOGIN } = PATH;

function ProtectedRouter() {
  const { pathname } = useLocation();
  const token = useAuthStore((state) => {
    state.userData.token;
  });
  //로그인 안되어있다면 로그인 페이지로 이동
  if (!token) {
    return <Navigate to={LOGIN} replace state={{ from: pathname }} />;
  }
  //로그인 되어있으면 요청한 페이지로 이동
  return <Outlet />;
}

export default ProtectedRouter;
