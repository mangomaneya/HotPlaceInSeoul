import HotplaceList from '@/components/HotplaceList/HotplaceList';
import KakaoMap from '@/components/map-api/KakaoMap';

export default function Home() {
  return (
    <div className='flex justify-center w-full max-w-[1260px] min-h-screen gap-6 mx-auto items-cmaxenter '>
      <KakaoMap className='flex-1' />
      <HotplaceList className='absolute top-0 right-0 w-[250px] h-full bg-white shadow-lg overflow-y-auto' />
    </div>
  );
}
