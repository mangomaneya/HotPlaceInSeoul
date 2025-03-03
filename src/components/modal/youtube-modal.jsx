import { useYoutubeQuery } from '@/lib/queries/useYoutubeQuery';
import { formatDateFromISO } from '@/lib/utils/formatDate';
import Loading from '../common/Loading';
import Error from '../common/Error';
import { openAlert } from '@/lib/utils/openAlert';
import { ALERT_TYPE } from '@/constants/alert-constant';
const { ERROR } = ALERT_TYPE;
//TODO: hotplaces 데이터를 디테일 리스트에서 받아오기   (아래는 테스트를 위한 목데이터)
const STORE_NAME = '양복점';
const AREA = '용산';
const STORE_ID = '1c3a14f9-2664-4e9b-8435-71d620716efc';

//@TODO: closeModal 받아오기
export default function YoutubeModal() {
  const { youtubeData, isPending, isError, error } = useYoutubeQuery({
    storeName: STORE_NAME,
    area: AREA,
    storeId: STORE_ID,
  });

  if (isPending) {
    return (
      <div className='youtubeModal'>
        <Loading />
      </div>
    );
  }

  if (isError) {
    openAlert({ type: ERROR, text: `[${error.code}]${error.message}` });
    return (
      <div className='youtubeModal'>
        <Error />
      </div>
    );
  }

  return (
    <section className='youtubeModal fixedCenter'>
      <button className='modalBtn !py-2 !mb-4'>유튜브 닫기</button>
      {youtubeData?.map((data, index) => (
        <div
          key={data.title}
          className={`py-[20px] ${index === youtubeData.length - 1 ? null : 'border-b-2 border-stone-200'}`}
        >
          <div className='flexCenter !justify-between mb-3'>
            <p>{data.channelTitle}</p>
            <p>{formatDateFromISO(data.publishedAt)}</p>
          </div>
          <div className='w-full h-[50vh] mb-5'>
            <iframe width={'100%'} height={'100%'} src={`https://www.youtube.com/embed/${data.videoId}`}></iframe>
          </div>
          <h4 className='text-xl font-bold'>{data.title}</h4>
          <p className='mb-2'>{data.description}</p>
        </div>
      ))}
    </section>
  );
}
