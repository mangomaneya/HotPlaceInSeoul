import KakaoMap from '@/components/map-api/KakaoMap';
import HotplaceList from '@/components/HotplaceList/HotplaceList';
export default function Home() {
  return (
    <div className='flex justify-around '>
      <HotplaceList className='w-1/3' />
      <KakaoMap className='flex-auto' />
    </div>
  );
}
