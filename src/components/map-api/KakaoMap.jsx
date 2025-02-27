import { useEffect, useRef } from 'react';

function KakaoMap() {
  const mapContainer = useRef(null);
  const markerRef = useRef(null);
  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      const options = {
        center: new window.kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
        level: 3,
      };
      const map = new window.kakao.maps.Map(mapContainer.current, options);

      const markerPosition = new window.kakao.maps.LatLng(37.365264512305174, 127.10676860117488);
      const marker = new window.kakao.maps.Marker({ position: markerPosition });

      marker.setMap(map);
      markerRef.current = marker;
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
