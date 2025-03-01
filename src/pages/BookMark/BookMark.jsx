import React from 'react';
import DetailModal from '@/components/modal/detail-modal';
import { useGetBookmarks } from '@/lib/queries/GetBookmarks';
import { useState } from 'react';

const BookMark = () => {
  const { data: bookmarkList = [], isPending, isError } = useGetBookmarks();
  const booksNum = bookmarkList.length;
  const [selectPost, setSelectPost] = useState(null);
  const userNickName = localStorage.getItem('nickname');

  if (isPending) {
    return <div>로딩 중...</div>;
  }

  if (isError) {
    <div>에러가 발생했습니다.</div>;
  }
  console.log('bookmarkList', bookmarkList);

  return (
    <div>
      <section className='flexCenter pt-[70px]'>
        <div className='flex flex-col md:flex-row gap-[120px] justify-evenly items-center rounded-lg'>
          <div className='flex flex-wrap text-[26px]'>
            <span className='text-accent font-bold'>{userNickName}</span>님 안녕하세요!
          </div>
          <div className='flexCenter flex-col gap-6 bg-neutral-200 w-[170px] h-[170px] rounded-full'>
            <p className='text-[20px] font-bold'>북마크 수</p>
            <span className='text-[27px] font-light'>{booksNum}</span>
          </div>
        </div>
      </section>
      {booksNum === 0 && <p className='flexCenter mt-[90px]'>아직 북마크 된 장소가 없습니다!</p>}
      <main className='grid place-items-center mt-[120px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'>
        {bookmarkList.map((data) => (
          <React.Fragment key={data.id} onClick={() => setSelectPost(data.place_id)} className='flexCenter mb-[20px]'>
            <section className='relative m-3 w-[280px] bg-neutral-50 rounded-lg pb-3 cursor-pointer shadow-lg hover:-translate-y-3 transition-transform duration-300 ease-in-out'>
              <img src={data.hotplaces.img_url} className='bg-neutral-400 h-[300px] w-[280px] rounded-t-lg' />
              <div className='flexCenter'>
                <p className='flexCenter mt-3 text-[20px]'>{data.hotplaces.name}</p>
              </div>
            </section>
            {selectPost && <DetailModal id={selectPost} />}
          </React.Fragment>
        ))}
      </main>
    </div>
  );
};

export default BookMark;
