import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import { PATH } from '@constants/path-constant';
import Home from '@pages/Home';
import SignUp from '@pages/SignUp';
import Login from '@pages/Login';
const { LOGIN, SIGN_UP, HOME } = PATH;
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Layout />}>
          <Route index element={<Home />} />
          {/* //TODO: 로그인 컴포넌트 연결해 주세요 */}
          <Route path={LOGIN} element={<Login />} />
          <Route path={SIGN_UP} element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
