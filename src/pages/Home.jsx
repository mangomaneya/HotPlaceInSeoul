import KakaoMap from '@/components/map-api/KakaoMap';
import HotplaceList from '@/components/HotplaceList/HotplaceList';
export default function Home() {
  return (
    <div className='flex flex-col'>
      <KakaoMap />
      <HotplaceList />
      {/* <DetailModal /> */}
      {/* <YoutubeModal /> */}
    </div>
  );
}
