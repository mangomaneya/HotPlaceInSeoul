import { ALERT_TYPE } from '@/constants/alert-constant';
import { openAlert } from '@/lib/utils/openAlert';
import { useEffect } from 'react';
import { BiSolidError } from 'react-icons/bi';
const { ERROR } = ALERT_TYPE;
export default function Error({ isOpenErrorAlert = false, errorMessage = '에러가 발생했습니다.' }) {
  useEffect(() => {
    if (isOpenErrorAlert) {
      openAlert({
        type: ERROR,
        text: errorMessage,
      });
    }
  }, [isOpenErrorAlert, errorMessage]);
  return (
    <div className='flexCenter !flex-col h-full'>
      <BiSolidError className='text-9xl text-accent-active' />
      {errorMessage}
    </div>
  );
}
