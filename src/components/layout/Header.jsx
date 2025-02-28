import { Link } from 'react-router-dom';
import Nav from './Nav';

export default function Header() {
  return (
    <header className='flexCenter !justify-between bg-bg-primary py-[20px] px-[2%] w-full fixed top-0 left-0'>
      <h1 className='font-gugi text-3xl'>
        <Link to='/'>서울핫플</Link>
      </h1>
      <Nav />
    </header>
  );
}
