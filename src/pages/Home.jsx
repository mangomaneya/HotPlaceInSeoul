import { useState } from 'react';
import KakaoMap from '@/components/map-api/KakaoMap';
import DetailModal from '@/components/modal/detail-modal';
import YoutubeModal from '@/components/modal/youtube-modal';
import HotplaceList from '@/components/HotplaceList/HotplaceList';
import MapController from '@/components/map-api/MapController';
export default function Home() {
  const [selectedArea, setSelectedArea] = useState('');

  return (
    <div className='flex flex-col'>
      <KakaoMap selectedArea={selectedArea} />
      <HotplaceList selectedArea={selectedArea} />
      {/* <DetailModal /> */}
      {/* <YoutubeModal /> */}
    </div>
  );
}
