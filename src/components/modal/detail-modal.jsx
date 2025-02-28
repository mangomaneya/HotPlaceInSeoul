import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { FaYoutube } from 'react-icons/fa6';
import { FaRegBookmark } from 'react-icons/fa6';
import { FaBookmark } from 'react-icons/fa';
import { useState } from 'react';
import { STORE_CONSTANT } from '@/constants/store-constant';
import { openAlert } from '@/lib/utils/openAlert';
import { ALERT_TYPE } from '@/constants/alert-constant';
const STORE_MOCK_DATA = {
  name: '양복점',
  category_name: '음식점',
  address_road_name: '서울 용산구 새창로 209 5동 지하층 3호',
  contact_number: '02-1234-5678',
  open_hours: '10:00 ~  22:00',
  img_url:
    'https://ugc-images.catchtable.co.kr/catchtable/shopinfo/s2ITBk3Dv9LVsluH7e0DjIw/3619ed3090ef45d0a7e3f3c93e8489db',
}; //TODO: supabase 데이터 완성되면 지울 예정
const { INFO } = ALERT_TYPE;
const { STORE_NAME, STORE_ADDRESS, STORE_CONTACT, STORE_PIC, BUSINESS_HOUR, CATEGORY } = STORE_CONSTANT;

const DETAIL_LIST = [
  {
    key: CATEGORY,
    title: '분류',
  },
  {
    key: STORE_ADDRESS,
    title: '주소',
    defaultMessage: '등록된 주소가 없습니다.',
  },
  {
    key: STORE_CONTACT,
    title: '전화번호',
    defaultMessage: '등록된 전화번호가 없습니다.',
  },
  {
    key: BUSINESS_HOUR,
    title: '영업 시간',
    defaultMessage: '업체에 직접 문의해 주세요.',
  },
];

//TODO: props로 리스트에서 타겟팅한 가게의 id 받아오기 , 혹시 모달 밖에 클릭했을 때 닫히는 이벤트 구현한다면 onClose 상태도 같이 받아오기 & 이벤트 버블링 막아서 처리하기
export default function DetailModal() {
  //TODO: user정보 받아와서 bookmark 여부 확인 후 초기값으로 넣어주기
  const [isBookMarked, setIsBookMarked] = useState(false);

  const addToBookmark = () => {
    setIsBookMarked(!isBookMarked);
    openAlert({ type: INFO, text: `북마크${isBookMarked ? '에서 삭제' : '에 추가'}되었습니다.` });
    //TODO: user의 bookmark 상태 바꾸기 (->post api연결)
  };

  return (
    <section className='modal'>
      <p className='h-[80%] md:h-[65%] max-h-[400px] mb-5'>
        <img
          src={STORE_MOCK_DATA[STORE_PIC]}
          alt={STORE_MOCK_DATA[STORE_NAME]}
          className='object-cover w-full h-full rounded-lg'
        />
        <span className='text-text-primary absolute top-2 right-2 text-2xl cursor-pointer '>
          <IoCloseOutline />
        </span>
      </p>

      <div className='flexCenter !justify-between  mb-[10px]'>
        <h4 className='font-bold text-2xl sm:text-3xl text-accent-active'>{STORE_MOCK_DATA[STORE_NAME]}</h4>
        <span className='text-2xl cursor-pointer' onClick={addToBookmark}>
          {isBookMarked ? <FaBookmark className='text-accent' /> : <FaRegBookmark className='text-accent' />}
        </span>
      </div>

      <dl className='flex flex-wrap mb-[20px] '>
        {DETAIL_LIST.map((list) => (
          <React.Fragment key={list.key}>
            <dt className='w-[30%] sm:w-[20%] m-w-[150px] mb-1'>{list.title}</dt>
            <dd className='w-[70%] sm:w-[80%]'>{STORE_MOCK_DATA[list.key] ?? list?.defaultMessage}</dd>
          </React.Fragment>
        ))}
      </dl>
      <button className='w-full bg-accent text-text-primary text-center py-1 rounded-lg'>
        <FaYoutube className='text-4xl w-full text-white' />
      </button>
    </section>
  );
}
