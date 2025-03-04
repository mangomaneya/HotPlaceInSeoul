import { BiSolidError } from 'react-icons/bi';
export default function Error({ errorMessage = '에러가 발생했습니다.' }) {
  return (
    <div className='flexCenter !flex-col h-full'>
      <BiSolidError className='text-9xl text-accent-active' />
      {errorMessage}
    </div>
  );
}
