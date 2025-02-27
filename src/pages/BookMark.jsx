const BookMark = () => {
  return (
    <div>
      <section className='flexCenter pt-[70px]'>
        <div className='flex gap-8 bg-neutral-200 p-[20px] w-[55%] justify-evenly items-center rounded-lg'>
          <div className='text-[26px]'>
            <span className='text-orange-400 font-bold'>진채</span>님 안녕하세요!
          </div>
          <div className='flexCenter flex-col gap-6'>
            <div className='text-[20px] font-bold'>북마크 수</div>
            <span>{}개</span>
          </div>
        </div>
      </section>
      <main className='flexCenter pt-[70px]'>
        <section className='flex bg-neutral-200 p-[20px] w-[80%]'>
          <div className='flex-1 bg-neutral-400 h-[300px] w-[40%]'>이미지</div>
          <div className='flex-1 flex-col ml-5'>
            <div className='flex gap-3'>
              <p>상호명</p>
              <p>분류</p>
            </div>
            <button className='flex justify-start'>상세보기</button>
          </div>
          <div className='flex-2'>북마크이미지</div>
        </section>
      </main>
    </div>
  );
};

export default BookMark;
