import { PATH } from '@/constants/path-constant';
import { useNavigate } from 'react-router-dom';

function NotFoundedPage() {
  const navigate = useNavigate();
  const { HOME } = PATH;

  return (
    <div className='flex-col flexCenter'>
      <header>
        <h1 className='font-gugi text-[50px]'>NOT FOUNDED PAGES</h1>
      </header>
      <main className='mt-[100px]'>
        <section>
          <button
            onClick={() => navigate(HOME)}
            className='text-[20px] w-[200px] h-[50px] border rounded-md bg-button text-text-primary hover:bg-point-active hover:text-text-light transition duration-300'
          >
            홈으로 돌아가기
          </button>
        </section>
      </main>
    </div>
  );
}

export default NotFoundedPage;
