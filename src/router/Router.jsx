import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import { PATH } from '@constants/path-constant';
import Home from '@pages/Home';
import SignUp from '@pages/SignUp';
import Login from '@pages/Login';
const { LOGIN, SIGN_UP } = PATH;
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={LOGIN} element={<Login />} />
          <Route path={SIGN_UP} element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
