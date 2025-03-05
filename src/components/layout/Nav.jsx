import { PATH } from '@/constants/path-constant';
import useLogout from '@lib/hooks/useLogout';
import useAuthStore from '@/store/zustand/authStore';
import { Link } from 'react-router-dom';
const { LOGIN, SIGN_UP, BOOK_MARK } = PATH;

const publicMenu = () => [
  {
    name: '로그인',
    type: 'link',
    path: LOGIN,
  },
  {
    name: '회원가입',
    type: 'link',
    path: SIGN_UP,
  },
];

//로그인 되어야만 이동 가능한 경로
const privateMenu = (btnEventFunc) => [
  {
    name: '북마크',
    type: 'link',
    path: BOOK_MARK,
  },
  {
    name: '로그아웃',
    type: 'button',
    btnEvent: btnEventFunc,
  },
];

export default function Nav() {
  const setUserData = useAuthStore((state) => state.setUserData);
  const handleLogout = useLogout();

  //로그인 여부를 토큰 키값 유무로 지정
  const token = JSON.parse(localStorage.getItem('sb-frzxflvdpgomgaanvqyf-auth-token')) || null;
  const isAuthenticated = !!token;
  if (isAuthenticated) {
    const { user, access_token } = token;
    const { user_metadata } = user;
    //전역상태 유저정보 세팅
    setUserData(access_token, user.id, user_metadata.email, user_metadata.nickname);
  }

  const navMenu = isAuthenticated ? privateMenu(handleLogout) : publicMenu();

  return (
    <nav>
      <ul className='flex items-center gap-[15px]'>
        {navMenu.map((menu) => (
          <li key={menu.name}>
            {menu.type === 'link' ? (
              <Link className='hover:font-bold text-[20px]' to={menu.path}>
                {menu.name}
              </Link>
            ) : (
              <button className='hover:font-bold text-[20px] ' onClick={menu.btnEvent}>
                {menu.name}
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
