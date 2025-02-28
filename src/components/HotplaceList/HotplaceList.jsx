import { useState } from 'react';
import { ListData } from './ListData';
const HotplaceList = () => {
  const [isVisible, setIsVisible] = useState(false);

  function toggleHotPlaceList() {
    setIsVisible((prev) => !prev);
  }

  return (
    <aside className='m-3'>
      {isVisible && (
        <div className='overflow-y-auto mb-8'>
          {ListData.map((data) => (
            <section key={data.id} className='border-2 w-[30%] p-3 mb-3 bg-neutral-50 cursor-pointer'>
              <div className='flex gap-4 items-center'>
                <div className='text-orange-400 text-[23px]'>{data.name}</div>
                <div className='text-neutral-400 text-[15px]'>{data.category}</div>
              </div>
              <div className='text-[13px]'>{data.adress}</div>
              <div className='flex gap-4 items-center'>
                <div className='text-lime-600'>{data.number}</div>
              </div>
            </section>
          ))}
        </div>
      )}
      <button onClick={toggleHotPlaceList} className='p-2 w-[30%] fixed bottom-5 border-2 bg-neutral-50'>
        {isVisible ? '핫플 닫기' : '핫플 보기'}
      </button>
    </aside>
  );
};

export default HotplaceList;
