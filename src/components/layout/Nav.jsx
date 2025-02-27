import { PATH } from '@/constants/path-constant';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const { LOGIN, SIGN_UP } = PATH;

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

const privateMenu = (btnEventFunc) => [
  {
    name: '로그아웃',
    type: 'button',
    btnEven: btnEventFunc,
  },
];

export default function Nav() {
  const isLogin = false; //TODO: 로그인 연결되면 수정하기
  const navigate = useNavigate();

  const moveToHome = () => {
    navigate('/', { replace: true });
  };

  const navMenu = isLogin ? privateMenu(moveToHome) : publicMenu();

  return (
    <nav>
      <ul className='flex items-center gap-[15px]'>
        {navMenu.map((menu) => (
          <li key={menu.name}>
            {menu.type === 'link' ? (
              <Link to={menu.path}>{menu.name}</Link>
            ) : (
              <button onClick={menu.btnEven}>{menu.name}</button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
