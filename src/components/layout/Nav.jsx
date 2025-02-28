import { PATH } from '@/constants/path-constant';
import { openAlert } from '@/lib/utils/openAlert';
import useAuthStore from '@/store/zustand/authStore';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const { LOGIN, SIGN_UP, HOME } = PATH;
import { ALERT_TYPE } from '@/constants/alert-constant';
const { WARNING } = ALERT_TYPE;

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
    path: HOME,
  },
  {
    name: '로그아웃',
    type: 'button',
    btnEvent: btnEventFunc,
  },
];

export default function Nav() {
  //전역상태 선택적 구독 반영
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  //로그아웃 버튼 동작
  const handleLogout = async () => {
    //로그아웃 confirm message
    const response = await openAlert({ type: WARNING, text: '정말 로그아웃 하시겠습니까', buttonText: '로그아웃' });
    // confirm 후 로그아웃 - 메인화면으로 이동
    if (response.isConfirmed) {
      logout();
      navigate(HOME, { replace: true });
    }
  };

  const navMenu = isAuthenticated ? privateMenu(handleLogout) : publicMenu();

  return (
    <nav>
      <ul className='flex items-center gap-[15px]'>
        {navMenu.map((menu) => (
          <li key={menu.name}>
            {menu.type === 'link' ? (
              <Link to={menu.path}>{menu.name}</Link>
            ) : (
              <button onClick={menu.btnEvent}>{menu.name}</button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
