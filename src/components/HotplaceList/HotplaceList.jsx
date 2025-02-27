import React from 'react';
import { useState } from 'react';
const HotplaceList = () => {
  const [isVisible, setIsVisible] = useState(false);

  function toggleHotPlaceList() {
    setIsVisible((prev) => !prev);
  }

  return (
    <div className='m-3'>
      {isVisible && (
        <div className='overflow-y-auto max-height-[400px] mb-[80px]'>
          <div className='border-2 w-[40%] p-3 mb-3 bg-neutral-50'>
            <div className='flex gap-4 items-center'>
              <div className='text-orange-400 text-[23px]'>양복점 용산점</div>
              <div className='text-neutral-400 text-[15px]'>양꼬치</div>
            </div>
            <div className='flex gap-3 items-center'>
              <div className='text-orange-600 text-[13px]'>5 ★★★★★</div>
              <div className='text-neutral-400 text-[13px]'>40건</div>
            </div>
            <div>
              <div className='text-[13px]'>서울 용산구 새창로 209 5동 지하층 3호</div>
              <div>지번</div>
              <div className='flex gap-3 items-center'>
                <div className='text-[13px] border-2 p-[2px] text-neutral-400'>영업전</div>
                <div className='text-[13px]'>영업시간 월~금 15:30 ~ 24:00</div>
              </div>
            </div>
            <div className='flex gap-4 items-center'>
              <div className='text-lime-600'>0507-1443-0789</div>
            </div>
            <button className='flex mx-auto justify-center p-2 m-2 w-[90%] bg-orange-600 text-white'>
              이 핫플 유튜브 보기
            </button>
          </div>
          <div className='border-2 w-[40%] p-3 mb-3 bg-neutral-50'>
            <div className='flex gap-4 items-center'>
              <div className='text-orange-400 text-[23px]'>양복점 용산점</div>
              <div className='text-neutral-400 text-[15px]'>양꼬치</div>
            </div>
            <div className='flex gap-3 items-center'>
              <div className='text-orange-600 text-[13px]'>5 ★★★★★</div>
              <div className='text-neutral-400 text-[13px]'>40건</div>
            </div>
            <div>
              <div className='text-[13px]'>서울 용산구 새창로 209 5동 지하층 3호</div>
              <div>지번</div>
              <div className='flex gap-3 items-center'>
                <div className='text-[13px] border-2 p-[2px] text-neutral-400'>영업전</div>
                <div className='text-[13px]'>영업시간 월~금 15:30 ~ 24:00</div>
              </div>
            </div>
            <div className='flex gap-4 items-center'>
              <div className='text-lime-600'>0507-1443-0789</div>
            </div>
            <button className='flex mx-auto justify-center p-2 m-2 w-[90%] bg-orange-600 text-white'>
              이 핫플 유튜브 보기
            </button>
          </div>
          <div className='border-2 w-[40%] p-3 mb-3 bg-neutral-50'>
            <div className='flex gap-4 items-center'>
              <div className='text-orange-400 text-[23px]'>양복점 용산점</div>
              <div className='text-neutral-400 text-[15px]'>양꼬치</div>
            </div>
            <div className='flex gap-3 items-center'>
              <div className='text-orange-600 text-[13px]'>5 ★★★★★</div>
              <div className='text-neutral-400 text-[13px]'>40건</div>
            </div>
            <div>
              <div className='text-[13px]'>서울 용산구 새창로 209 5동 지하층 3호</div>
              <div>지번</div>
              <div className='flex gap-3 items-center'>
                <div className='text-[13px] border-2 p-[2px] text-neutral-400'>영업전</div>
                <div className='text-[13px]'>영업시간 월~금 15:30 ~ 24:00</div>
              </div>
            </div>
            <div className='flex gap-4 items-center'>
              <div className='text-lime-600'>0507-1443-0789</div>
            </div>
            <button className='flex mx-auto justify-center p-2 m-2 w-[90%] bg-orange-600 text-white'>
              이 핫플 유튜브 보기
            </button>
          </div>
          <div className='border-2 w-[40%] p-3 mb-3 bg-neutral-50'>
            <div className='flex gap-4 items-center'>
              <div className='text-orange-400 text-[23px]'>양복점 용산점</div>
              <div className='text-neutral-400 text-[15px]'>양꼬치</div>
            </div>
            <div className='flex gap-3 items-center'>
              <div className='text-orange-600 text-[13px]'>5 ★★★★★</div>
              <div className='text-neutral-400 text-[13px]'>40건</div>
            </div>
            <div>
              <div className='text-[13px]'>서울 용산구 새창로 209 5동 지하층 3호</div>
              <div>지번</div>
              <div className='flex gap-3 items-center'>
                <div className='text-[13px] border-2 p-[2px] text-neutral-400'>영업전</div>
                <div className='text-[13px]'>영업시간 월~금 15:30 ~ 24:00</div>
              </div>
            </div>
            <div className='flex gap-4 items-center'>
              <div className='text-lime-600'>0507-1443-0789</div>
            </div>
            <button className='flex mx-auto justify-center p-2 m-2 w-[90%] bg-orange-600 text-white'>
              이 핫플 유튜브 보기
            </button>
          </div>
          <div className='border-2 w-[40%] p-3 mb-3 bg-neutral-50'>
            <div className='flex gap-4 items-center'>
              <div className='text-orange-400 text-[23px]'>양복점 용산점</div>
              <div className='text-neutral-400 text-[15px]'>양꼬치</div>
            </div>
            <div className='flex gap-3 items-center'>
              <div className='text-orange-600 text-[13px]'>5 ★★★★★</div>
              <div className='text-neutral-400 text-[13px]'>40건</div>
            </div>
            <div>
              <div className='text-[13px]'>서울 용산구 새창로 209 5동 지하층 3호</div>
              <div>지번</div>
              <div className='flex gap-3 items-center'>
                <div className='text-[13px] border-2 p-[2px] text-neutral-400'>영업전</div>
                <div className='text-[13px]'>영업시간 월~금 15:30 ~ 24:00</div>
              </div>
            </div>
            <div className='flex gap-4 items-center'>
              <div className='text-lime-600'>0507-1443-0789</div>
            </div>
            <button className='flex mx-auto justify-center p-2 m-2 w-[90%] bg-orange-600 text-white'>
              이 핫플 유튜브 보기
            </button>
          </div>
        </div>
      )}

      <button onClick={toggleHotPlaceList} className='p-2 w-[40%] fixed bottom-5 border-2 bg-neutral-50'>
        {isVisible ? '핫플 닫기' : '핫플 보기'}
      </button>
    </div>
  );
};

export default HotplaceList;
