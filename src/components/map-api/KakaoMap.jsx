import { useEffect, useRef } from 'react';
import { positions } from './boundary';
import supabase from '../../lib/api/supabaseAPI';
function KakaoMap() {
  const mapContainer = useRef(null);

  const hotplacePos = async () => {
    const { data, error } = await supabase.from('hotplaces').select('*');

    if (error) {
      console.log('핫플레이스 데이터테이블', error);
      return;
    }
  };
  hotplacePos();

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      const { kakao } = window;

      const options = {
        center: new window.kakao.maps.LatLng(37.52375220020471, 126.98016344995719),
        level: 3,
      };
      const map = new kakao.maps.Map(mapContainer.current, options);

      positions.forEach((item) => {
        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(item.coord.lat, item.coord.lng),
          name: item.name,
        });

        const infoWindow = new kakao.maps.InfoWindow({
          content: `${item.title}`,
          removable: true,
        });

        kakao.maps.event.addListener(marker, 'click', function () {
          infoWindow.open(map, marker);
        });
      });
    } else {
      console.error('카카오맵 API가 로드되지 않았습니다.');
    }
  }, []);
  return (
    <div className='flex flex-col items-center justify-center bg-[#f5f5f5] w-full h-full'>
      {/* <h2 className='text-2xl font-semibold '>카카오맵 지도</h2> */}
      <div id='map' ref={mapContainer} className='w-full h-[480px]'></div>
    </div>
  );
}

export default KakaoMap;
