import KakaoMap from '@/components/map-api/KakaoMap';
export default function Home() {
  return (
    <div className=' bg-point flex   items-center justify-center bg-[#f5f5f5] w-3/4 h-[400px] rounded-lg border border-solid border-black mx-auto'>
      <KakaoMap />
    </div>
  );
}
