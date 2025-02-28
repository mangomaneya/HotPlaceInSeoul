import { useEffect, useRef, useState } from 'react';
import { positions } from './boundary';
import supabase from '../../lib/api/supabaseAPI';
function KakaoMap() {
  const mapContainer = useRef(null);
  const [markerData, setMarkerData] = useState([]);
  console.log(markerData);
  useEffect(() => {
    const handlemarkerData = async () => {
      const { data, error } = await supabase.from('hotplaces').select('*');

      if (error) {
        console.log('supabase 데이터 호출 에러', error);
      } else {
        setMarkerData(data);
        console.log(data);
      }
    };
    handlemarkerData();
  }, []);
  useEffect(() => {
    //supabase의 데이터 호출부
    if (window.kakao && window.kakao.maps) {
      const { kakao } = window;

      const options = {
        center: new window.kakao.maps.LatLng(37.52375220020471, 126.98016344995719),
        level: 8,
      };
      const map = new kakao.maps.Map(mapContainer.current, options);

      markerData.forEach((item) => {
        const name = item.name;
        const lat = parseFloat(item.latitude);
        const lon = parseFloat(item.longitude);
        const markerPosition = new kakao.maps.LatLng(lat, lon);
        //커스텀 오버레이 설정 변수
        const hotplaceMarkerImgSrc = '../../../public/hotplaceMarker.svg';
        const hotplaceMarkerSize = new kakao.maps.Size(20, 40);
        const hotplaceMarkerOption = { offset: new kakao.maps.Point(20, 40) };
        //커스텀 오버레이 마커 생성
        const hotplaceMarker = new kakao.maps.MarkerImage(
          hotplaceMarkerImgSrc,
          hotplaceMarkerSize,
          hotplaceMarkerOption
        );

        const marker = new kakao.maps.Marker({
          map: map,
          position: markerPosition,
          image: hotplaceMarker,
        });

        const customInfoOverlay = new kakao.maps.CustomOverlay({
          content: name,
          removable: true,
          position: markerPosition,
          yAnchor: 2,
          zIndex: 3,
        });

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
  }, [markerData]);
  return <div id='map' ref={mapContainer} className='w-full h-full'></div>;
}

export default KakaoMap;
