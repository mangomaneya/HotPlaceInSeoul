import { ALERT_TYPE } from '@/constants/alert-constant';
import { STORE_CONSTANT } from '@/constants/store-constant';
import { useBookmarkMutation } from '@/lib/mutation/useBookmarkMutation';
import { useBookmarkQuey } from '@/lib/queries/useBookmarkQuery';
import { openAlert } from '@/lib/utils/openAlert';
import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import { FaRegBookmark, FaYoutube } from 'react-icons/fa6';
import { IoCloseOutline } from 'react-icons/io5';
import Loading from '../common/Loading';
import Error from '../common/Error';
const STORE_MOCK_DATA = {
  name: '뮤직컴플렉스서울 안녕인사동점',
  category_name: '카페,디저트',
  address_road_name: '서울 종로구 인사동길 49 안녕인사동 5층 뮤직컴플렉스서울',
  contact_number: '0507-1308-2939',
  open_hours: '12:00 - 24:00',
  img_url:
    'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220629_195%2F1656480008768WTIii_JPEG%2FKakaoTalk_20220628_005204934.jpg',
}; //TODO: 디테일 모달에서 데이터 넘어오면 지울 예정
const { WARNING } = ALERT_TYPE;
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

//@TODO: store tanstackQuery에서 select를 통해 STORE_ID랑 일치하는 데이터만 뽑아와서 사용
const STORE_ID = '3239d179-918a-48fb-b3c5-273b776b2c0e';
//TODO: props로 리스트에서 타겟팅한 가게의 id 받아오기 , onClose 받아오기
export default function DetailModal() {
  const { bookmarkData, isError, isPending, error } = useBookmarkQuey({ storeId: STORE_ID });
  const { addMutate, deleteMutate, isMutatePending, error: mutateError } = useBookmarkMutation({ storeId: STORE_ID });
  const isBookMarked = bookmarkData?.length > 0;

  const handleBookmark = () => {
    if (isBookMarked) {
      openAlert({ type: WARNING, text: '북마크에서 삭제하시겠습니까?' }).then((res) => {
        if (res.isConfirmed) return deleteMutate();
      });
    } else {
      openAlert({ type: WARNING, text: '북마크에 추가하시겠습니까?' }).then((res) => {
        if (res.isConfirmed) return addMutate();
      });
    }
  };

  if (isPending || isMutatePending) return <Loading />;
  if (isError || mutateError)
    return <Error isOpenErrorAlert={true} errorMessage={isError ? error.message : mutateError} />;

  return (
    <section className='modal fixedCenter flex flex-col justify-evenly'>
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
        <span className='text-2xl cursor-pointer' onClick={handleBookmark}>
          {isBookMarked ? <FaBookmark className='text-accent' /> : <FaRegBookmark className='text-accent' />}
        </span>
      </div>

      <dl className='flex flex-wrap mb-[20px] '>
        {DETAIL_LIST.map((list) => (
          <React.Fragment key={list.key}>
            <dt className='w-[30%] sm:w-[80px] mb-1'>{list.title}</dt>
            <dd className='w-[70%] sm:w-[calc(100%-80px)]'>{STORE_MOCK_DATA[list.key] ?? list?.defaultMessage}</dd>
          </React.Fragment>
        ))}
      </dl>
      <button className='modalBtn'>
        <FaYoutube className='text-4xl w-full text-white' />
      </button>
    </section>
  );
}
