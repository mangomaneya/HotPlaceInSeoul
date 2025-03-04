import { useEffect, useRef, useState } from 'react';
// import { positions } from './boundary'; 마커 표시 임시 데이터터
import supabase from '../../lib/api/supabaseAPI';
import MapController from './MapController';
import MarkerInfo from './markerInfo';
function KakaoMap() {
  const mapContainer = useRef(null); //지도 컨테이너
  // const map = useRef(null); // 지도 객체
  const [markerData, setMarkerData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 37.5487477114048, lon: 127.04589900432654 });
  const [clickedMarker, setClickedMarker] = useState({});
  //supabase의 데이터 호출부
  useEffect(() => {
    const handlemarkerData = async () => {
      const { data, error } = await supabase.from('hotplaces').select('*');

      if (error) {
        console.log('supabase 데이터 호출 에러', error);
      } else {
        setMarkerData(data);
        // console.log(data);
      }
    };
    handlemarkerData();
  }, []);

  //KakaoMap API 호출부
  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      const { kakao } = window;
      //API 호출 시 window.kakao를 받는다

      const options = {
        center: new kakao.maps.LatLng(mapCenter.lat, mapCenter.lon),
        level: 5,
      };
      const map = new kakao.maps.Map(mapContainer.current, options);
      //지도생성
      markerData.forEach((item) => {
        const name = item.name;
        const lat = parseFloat(item.latitude);
        const lon = parseFloat(item.longitude);
        const markerPosition = new kakao.maps.LatLng(lat, lon);
        //커스텀 오버레이 설정 변수
        const clickedMarkerImgSrc = '../../../public/activeMarker.svg';
        const hotplaceMarkerImgSrc = '../../../public/hotplaceMarker.svg';

        const isMarkerClicked = clickedMarker[item.id] || false;
        const markerImgSrc = isMarkerClicked ? clickedMarkerImgSrc : hotplaceMarkerImgSrc;
        const hotplaceMarkerSize = new kakao.maps.Size(20, 40);
        const hotplaceMarkerOption = { offset: new kakao.maps.Point(20, 40) };
        //커스텀 오버레이 마커 생성
        const hotplaceMarker = new kakao.maps.MarkerImage(markerImgSrc, hotplaceMarkerSize, hotplaceMarkerOption);

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
          setClickedMarker((prev) => {
            const toggleMarker = !prev[item.id];
            const newMarkerImgSrc = toggleMarker ? clickedMarkerImgSrc : hotplaceMarkerImgSrc;
            const newMarkerImage = new kakao.maps.MarkerImage(
              newMarkerImgSrc,
              hotplaceMarkerSize,
              hotplaceMarkerOption
            );
            marker.setImage(newMarkerImage);
            return { ...prev, [item.id]: toggleMarker };
          });

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
  }, [markerData, mapCenter]);
  const handlePlaceSelect = (lat, lon) => {
    setMapCenter({ lat, lon });
  };
  return (
    <>
      <div className='flex w-3/4 h-[50px] mx-auto '>
        <MapController handlePlaceSelect={handlePlaceSelect} />
      </div>
      <div className=' bg-point flex items-center  w-3/4 h-[480px] rounded-sm  border-solid border-[3px] border-black mx-auto'>
        <div id='map' ref={mapContainer} className='w-full h-full'></div>
      </div>
    </>
  );
}

export default KakaoMap;
