import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import Layout from '@/components/layout/Layout';
import { PATH } from '@/constants/path-constant';
import BookMark from '@/pages/BookMark/BookMark';
import HotplaceList from '@/components/HotplaceList/HotplaceList';
const { LOGIN, SIGN_UP, BOOK_MARK } = PATH;
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          {/* //TODO: 로그인 컴포넌트 연결해 주세요 */}
          <Route path={LOGIN} element={<div>login</div>} />
          {/*  //TODO: 회원가입 페이지 연결해 주세요 */}
          <Route path={SIGN_UP} element={<div>회원가입</div>} />
          {/* MOCK-DATA 제거 시 파일 위치 변경 필요 */}
          <Route path={BOOK_MARK} element={<BookMark />} />
          <Route path={'/list'} element={<HotplaceList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
