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
        level: 8,
      };
      const map = new kakao.maps.Map(mapContainer.current, options);

      positions.forEach((item) => {
        const hotplaceMarkerImgSrc = '../../../public/hotplaceMarker.svg';
        const hotplaceMarkerSize = new kakao.maps.Size(20, 40);
        const hotplaceMarkerOption = { offset: new kakao.maps.Point(20, 40) };

        const hotplaceMarker = new kakao.maps.MarkerImage(
          hotplaceMarkerImgSrc,
          hotplaceMarkerSize,
          hotplaceMarkerOption
        );

        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(item.coord.lat, item.coord.lng),
          image: hotplaceMarker,
        });

        const customInfoOverlay = new kakao.maps.CustomOverlay({
          content: `${item.name}`,
          removable: true,
          position: marker.getPosition(),
          yAnchor: 2,
          zIndex: 3,
        });
        // const infoWindow = new kakao.maps.InfoWindow({
        //   content: `${item.name}`,
        //   removable: true,
        //   width: 50,
        //   height: 100,
        // });

        kakao.maps.event.addListener(marker, 'click', function () {
          if (customInfoOverlay.getMap()) {
            customInfoOverlay.setMap(null);
          } else {
            customInfoOverlay.setMap(map);
          }
        });
      });
    } else {
      console.error('카카오맵 API가 로드되지 않았습니다.');
    }
  }, []);
  return (
    <div className='flex flex-col items-center justify-center bg-[#f5f5f5] w-full h-full'>
      <div id='map' ref={mapContainer} className='w-10/12 h-[480px]'></div>
    </div>
  );
}

export default KakaoMap;
