import { useState } from 'react';
import { useGetHotplaces } from '@/lib/queries/GetHotplaces';
import DetailModal from '../modal/detail-modal';

const HotplaceList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
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
    <article className='m-3 w-[250px]'>
      <div
        className={`${
          isVisible ? 'slide-up opacity-100' : 'opacity-0'
        } transition-opacity duration-300 bg-neutral-50 w-[250px] pb-[50px]`}
      >
        {hotplaces.map((data) => (
          <section
            key={data.id}
            onClick={() => setSelectedPost(data.id)}
            className='border-2 w-[250px] p-3 mb-3 bg-neutral-50 cursor-pointer'
          >
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
      <button onClick={toggleHotPlaceList} className='fixed p-2 w-[250px] bg-button bottom-0 border-2 rounded-t-2xl'>
        {isVisible ? '핫플 닫기' : '핫플 보기'}
      </button>
      {selectedPost && <DetailModal id={selectedPost} />}
    </article>
  );
};

export default HotplaceList;
