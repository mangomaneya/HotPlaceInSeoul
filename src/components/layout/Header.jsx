import { Link } from 'react-router-dom';
import Nav from './Nav';

export default function Header() {
  return (
    <header className='flexCenter !justify-between py-[20px] px-[2%]'>
      <h1 className='font-gugi text-3xl'>
        <Link to='/'>서울핫플</Link>
      </h1>
      <Nav />
    </header>
  );
}
