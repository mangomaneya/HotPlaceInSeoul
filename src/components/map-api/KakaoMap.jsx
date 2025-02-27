import { useEffect, useRef } from 'react';
// import boundary from './MapBoundary';
import { positions } from './boundary';
// const positions = [
//   {
//     title: '문래창작촌(셔터갤러리) 입구',
//     coord: { lat: 37.51337657359861, lng: 126.89685235848133 },
//   },
// ];
function KakaoMap() {
  const mapContainer = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      const { kakao } = window;
      const options = {
        center: new window.kakao.maps.LatLng(37.52375220020471, 126.98016344995719),
        level: 3,
      };
      const map = new kakao.maps.Map(mapContainer.current, options);
      const markerSize = new kakao.maps.Size(24, 35);
      // const markerPosition = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488);
      // const marker = new kakao.maps.Marker({ position: markerPosition });
      //

      positions.forEach((item) => {
        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(item.coord.lat, item.coord.lng),
          title: item.title,
        });
      });
      // marker.setMap(map);
      // markerRef.current = marker;
    } else {
      console.error('카카오맵 API가 로드되지 않았습니다.');
    }
  }, []);
  return (
    <div className='flex flex-col items-center justify-center bg-[#f5f5f5] w-screen h-screen '>
      <h2 className='text-2xl font-semibold '>카카오맵 지도</h2>
      <div id='map' ref={mapContainer} className='w-full h-full'></div>
    </div>
  );
}

export default KakaoMap;
