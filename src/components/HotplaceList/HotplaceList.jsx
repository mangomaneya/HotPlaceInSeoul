import supabase from '@/lib/api/supabaseAPI';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spacer } from './Spacer';
const HotplaceList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [datas, setDatas] = useState([]);

  function toggleHotPlaceList() {
    setIsVisible((prev) => !prev);
  }

  // hotplaces 테이블 정보 가져오기
  useEffect(() => {
    const ListData = async () => {
      try {
        const { data: hotplaces, error } = await supabase.from('hotplaces').select('*');
        if (error) throw error;
        setDatas(hotplaces);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    ListData();
  }, []);

  return (
    <aside className='m-3'>
      {isVisible && (
        <div className='overflow-y-auto'>
          {datas.map((data) => (
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
      <Spacer y={100} />
      <button onClick={toggleHotPlaceList} className='p-2 w-[250px] fixed bottom-5 border-2 bg-neutral-50'>
        {isVisible ? '핫플 닫기' : '핫플 보기'}
      </button>
    </aside>
  );
};

export default HotplaceList;
