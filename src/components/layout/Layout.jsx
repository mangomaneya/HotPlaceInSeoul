import Header from './Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div id='layout' className='bg-bg-primary min-h-[100dvh]'>
      <Header />
      <div className='p-6'>
        <Outlet />
      </div>
    </div>
  );
}
