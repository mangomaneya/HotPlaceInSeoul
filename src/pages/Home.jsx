import KakaoMap from '@/components/map-api/KakaoMap';
import HotplaceList from '@/components/HotplaceList/HotplaceList';
export default function Home() {
  return (
    <div className='flex w-[1280px] mx-auto h-screen'>
      <KakaoMap className='flex-1' />
      <HotplaceList className='w-[200px]' />
    </div>
  );
}
