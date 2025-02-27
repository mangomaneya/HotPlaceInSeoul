import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { FaYoutube } from 'react-icons/fa6';
import { FaRegBookmark } from 'react-icons/fa6';
import { FaBookmark } from 'react-icons/fa';
import { useState } from 'react';
const STORE_MOCK_DATA = {
  name: '양복점',
  category_name: '음식점',
  address_road_name: '서울 용산구 새창로 209 5동 지하층 3호',
  contact_number: '02-1234-5678',
  open_hours: '10:00 ~  22:00',
  img_url:
    'https://ugc-images.catchtable.co.kr/catchtable/shopinfo/s2ITBk3Dv9LVsluH7e0DjIw/3619ed3090ef45d0a7e3f3c93e8489db',
}; //TODO: supabase 데이터 완성되면 지울 예정

const STORE_CONSTANT = {
  STORE_NAME: 'name',
  STORE_ADDRESS: 'address_road_name',
  STORE_CONTACT: 'contact_number',
  CATEGORY: 'category_name',
  STORE_PIC: 'img_url',
  BUSINESS_HOUR: 'open_hours',
}; //@TODO: 현재 기준 supabase의 data table을 기준으로 가져온 key입니다.

const { STORE_NAME, STORE_ADDRESS, STORE_CONTACT, STORE_PIC, BUSINESS_HOUR, CATEGORY } = STORE_CONSTANT;

const DETAIL_LIST = [
  {
    key: CATEGORY,
    title: '분류',
  },
  {
    key: STORE_ADDRESS,
    title: '주소',
    default: '등록된 주소가 없습니다.',
  },
  {
    key: STORE_CONTACT,
    title: '전화번호',
    default: '등록된 전화번호가 없습니다.',
  },
  {
    key: BUSINESS_HOUR,
    title: '영업 시간',
    default: '업체에 직접 문의해 주세요.',
  },
];

//TODO: props로 리스트에서 타겟팅한 가게의 id 받아오기 , 혹시 모달 밖에 클릭했을 때 닫히는 이벤트 구현한다면 onClose 상태도 같이 받아오기 & 이벤트 버블링 막아서 처리하기
export default function DetailModal() {
  //TODO: user정보 받아와서 bookmark 여부 확인 후 초기값으로 넣어주기
  const [isBookMarked, setIsBookMarked] = useState(false);

  const addToBookmark = () => {
    setIsBookMarked(!isBookMarked);
    alert(`북마크${isBookMarked ? '에서 삭제' : '에 추가'}되었습니다.`);
    //TODO: alert 추후에 sweetAlert를 쓰든 바꾸기
    //TODO: user의 bookmark 상태 바꾸기 (->post api연결)
  };

  return (
    <section className='bg-accent w-[40%] max-w-[650px] min-w-[300px] min-h-[50dvh] max-h-[85dvh] overflow-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-10 rounded-lg '>
      <p className='h-[80%] md:h-[65%] max-h-[400px] mb-5'>
        <img
          src={STORE_MOCK_DATA[STORE_PIC]}
          alt={STORE_MOCK_DATA[STORE_NAME]}
          className='object-cover w-full h-full rounded-lg'
        />
        <span className='text-text-light absolute top-2 right-2 text-2xl cursor-pointer '>
          <IoCloseOutline />
        </span>
      </p>

      <div className='flexCenter !justify-between  mb-[10px]'>
        <h4 className='font-bold text-2xl sm:text-3xl text-text-light'>{STORE_MOCK_DATA[STORE_NAME]}</h4>
        <span className='text-2xl cursor-pointer' onClick={addToBookmark}>
          {isBookMarked ? <FaBookmark className='text-text-light' /> : <FaRegBookmark className='text-text-light' />}
        </span>
      </div>

      <dl className='flex flex-wrap mb-[20px] text-text-light'>
        {DETAIL_LIST.map((list) => (
          <React.Fragment key={list.key}>
            <dt className='w-[30%] sm:w-[20%] m-w-[150px] mb-1'>{list.title}</dt>
            <dd className='w-[70%] sm:w-[80%]'>{STORE_MOCK_DATA[list.key] ?? list?.default}</dd>
          </React.Fragment>
        ))}
      </dl>
      <button className='w-full bg-white text-text-primary text-center py-1 rounded-lg'>
        <FaYoutube className='text-4xl w-full' />
      </button>
    </section>
  );
}
