import { MoonLoader } from 'react-spinners';

export default function Loading({ message }) {
  return (
    <div className='flexCenter !flex-col h-full'>
      <MoonLoader size={100} color='#ea580c' />
      {message && <p className='mt-5'>{message}</p>}
    </div>
  );
}
