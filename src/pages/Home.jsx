import KakaoMap from '@/components/map-api/KakaoMap';
import DetailModal from '@/components/modal/detail-modal';
import YoutubeModal from '@/components/modal/youtube-modal';
export default function Home() {
  return (
    <div className='flex flex-col'>
      <KakaoMap />
      {/* <DetailModal /> */}
      {/* <YoutubeModal /> */}
    </div>
  );
}
