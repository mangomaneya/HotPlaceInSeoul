import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import Layout from '@/components/layout/Layout';
import { PATH } from '@/constants/path-constant';
import SignUp from '@/pages/SignUp';
const { LOGIN, SIGN_UP } = PATH;
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          {/* //TODO: 로그인 컴포넌트 연결해 주세요 */}
          <Route path={LOGIN} element={<div>login</div>} />
          {/*  //TODO: 회원가입 페이지 연결해 주세요 */}
          <Route path={SIGN_UP} element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
