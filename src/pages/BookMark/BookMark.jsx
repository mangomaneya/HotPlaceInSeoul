import { ListData } from './ListData';

const BookMark = () => {
  const booksNum = ListData.length;
  return (
    <div>
      <section className='flexCenter pt-[70px]'>
        <div className='flex flex-col md:flex-row gap-[120px] justify-evenly items-center rounded-lg'>
          <div className='flex flex-wrap text-[26px]'>
            <span className='text-accent font-bold'>진채</span>님 안녕하세요!
          </div>
          <div className='flexCenter flex-col gap-6 bg-neutral-200 w-[170px] h-[170px] rounded-full'>
            <div className='text-[20px] font-bold'>북마크 수</div>
            <span className='text-[27px] font-light'>{booksNum}</span>
          </div>
        </div>
      </section>
      <main className='mx-3 mt-[120px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'>
        {ListData.map((data) => (
          <div key={data.id} className='flexCenter mb-[20px]'>
            <section className='relative m-3 bg-neutral-50 rounded-lg pb-3 cursor-pointer shadow-lg hover:-translate-y-3 transition-transform duration-300 ease-in-out'>
              <div className='bg-neutral-400 h-[300px] w-[280px] rounded-t-lg'>이미지</div>
              <div className='flexCenter'>
                <p className='flexCenter mt-3 text-[20px]'>{data.name}</p>
              </div>
            </section>
          </div>
        ))}
      </main>
    </div>
  );
};

export default BookMark;
