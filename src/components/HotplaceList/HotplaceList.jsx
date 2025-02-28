import { useState } from 'react';
import { Spacer } from './Spacer';
import { useGetHotplaces } from '@/lib/queries/GetHotplaces';

const HotplaceList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { data: hotplaces = [], isPending, isError } = useGetHotplaces();

  function toggleHotPlaceList() {
    setIsVisible((prev) => !prev);
  }

  if (isPending) {
    return <div>로딩 중...</div>;
  }

  if (isError) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <aside className={`m-3 ${isVisible && 'bg-neutral-50 w-[250px]'}`}>
      {isVisible && (
        <div className='overflow-y-auto'>
          {hotplaces.map((data) => (
            <section key={data.id} className='border-2 w-[250px] p-3 mb-3 bg-neutral-50 cursor-pointer'>
              <div className='flex gap-4 items-center'>
                <div className='text-orange-400 text-[23px]'>{data.name}</div>
                <div className='text-neutral-400 text-[15px]'>{data.category_name}</div>
              </div>
              <div className='text-[13px]'>{data.address_road_name}</div>
              <div className='flex gap-4 items-center'>
                <div className='text-lime-600'>{data.contact_number}</div>
              </div>
            </section>
          ))}
        </div>
      )}
      <Spacer y={50} />
      <button onClick={toggleHotPlaceList} className='fixed p-2 w-[250px] bg-button bottom-3 border-2  rounded-t-2xl'>
        {isVisible ? '핫플 닫기' : '핫플 보기'}
      </button>
    </aside>
  );
};

export default HotplaceList;
