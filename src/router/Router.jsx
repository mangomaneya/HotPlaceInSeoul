import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@components/layout/Layout';

import { PATH } from '@constants/path-constant';
import Home from '@pages/Home';
import SignUp from '@pages/SignUp';
import Login from '@pages/Login';
import ProtectedRouter from '@router/ProtectedRouter';
import NotFoundedPage from '@/pages/NotFoundedPage';
const { LOGIN, SIGN_UP, HOME, BOOK_MARK } = PATH;


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFoundedPage />} />
          <Route path={LOGIN} element={<Login />} />
          <Route path={SIGN_UP} element={<SignUp />} />
          {/* 로그인해야지만 갈 수 있는 경로 반영 */}
          <Route element={<ProtectedRouter />}>
            <Route path={BOOK_MARK} element={<div> bookmark페이지 pr 확인 후 반영</div>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
