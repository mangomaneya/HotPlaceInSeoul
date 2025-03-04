import { useEffect, useRef, useState } from 'react';
// import { positions } from './boundary'; 마커 표시 임시 데이터
import supabase from '../../lib/api/supabaseAPI';
import MapController from './MapController';
import { openAlert } from '@/lib/utils/openAlert';
import { ALERT_TYPE } from '@/constants/alert-constant';
import YoutubeModal from '../modal/youtube-modal';
import DetailModal from '../modal/detail-modal';
const { ERROR } = ALERT_TYPE;
function KakaoMap({ selectedArea }) {
  const mapContainer = useRef(null); //지도 컨테이너
  const [markerData, setMarkerData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 37.5487477114048, lon: 127.04589900432654 });
  const [clickedMarker, setClickedMarker] = useState({}); // toggle여부를 위한 상태
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [dataLoading, setDataLoading] = useState(true);
  const [isYoutubeModalOpen, setIsYoutubeModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  //supabase의 데이터 호출부

  useEffect(() => {
    const handlemarkerData = async () => {
      try {
        const { data, error } = await supabase.from('hotplaces').select('*');
        if (error) {
          throw error;
        }
        setMarkerData(data);
      } catch (error) {
        openAlert({ type: ERROR, text: '데이터 로드에 실패했습니다' });
      } finally {
        setDataLoading(false);
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
      if (!dataLoading && markerData.length === 0) {
        openAlert({ type: ERROR, text: '마커 데이터를 불러오는데 실패했습니다, 새로고침해주세요' });
        return;
      }
      markerData.forEach((item) => {
        const name = item.name;
        const uniqueId = item.id;
        const area = item.area;
        //지도 마커 좌표 설정정
        const lat = parseFloat(item.latitude);
        const lon = parseFloat(item.longitude);
        const markerPosition = new kakao.maps.LatLng(lat, lon);

        //커스텀 오버레이 설정 변수
        const clickedMarkerImgSrc = '/activeMarker.svg';
        const hotplaceMarkerImgSrc = '/hotplaceMarker.svg';
        const isMarkerClicked = clickedMarker[item.id] || false;
        const markerImgSrc = isMarkerClicked ? clickedMarkerImgSrc : hotplaceMarkerImgSrc;
        const hotplaceMarkerSize = new kakao.maps.Size(25, 45);
        const hotplaceMarkerOption = { offset: new kakao.maps.Point(20, 40) };

        //커스텀 오버레이 마커 생성
        const hotplaceMarker = new kakao.maps.MarkerImage(markerImgSrc, hotplaceMarkerSize, hotplaceMarkerOption);
        const marker = new kakao.maps.Marker({
          map: map,
          position: markerPosition,
          image: hotplaceMarker,
        });

        //커스텀 오버레이 내부 요소
        const overlayContent = document.createElement('div');
        overlayContent.innerHTML = `
                    <div class="bg-orange-500 w-[200px] p-4 rounded-md shadow-lg text-white">
            <h3 class="font-bold">${item.name}</h3>
            <p>${item.area}</p>
            <button id="detail-btn-${item.id}" class="bg-lime-300 px-2 py-1 mt-2 text-white rounded-md w-full">
              자세히 보기
            </button>
          </div>
        `;

        //커스텀 오버레이 호출
        const customInfoOverlay = new kakao.maps.CustomOverlay({
          content: overlayContent,
          removable: true,
          position: markerPosition,
          yAnchor: 2,
          zIndex: 3,
        });
        //커스텀 오버레이 이벤트 등록록
        overlayContent.querySelector(`#detail-btn-${item.id}`).addEventListener('click', () => {
          setSelectedMarker({ id: item.id, name: item.name, area: item.area });
          setIsYoutubeModalOpen(true);
        });

        kakao.maps.event.addListener(marker, 'click', function () {
          setClickedMarker((prev) => {
            const toggleMarker = !prev[item.id];

            if (toggleMarker) {
              marker.setImage(
                new kakao.maps.MarkerImage(clickedMarkerImgSrc, new kakao.maps.Size(40, 75), {
                  offset: new kakao.maps.Point(28, 70),
                })
              );
            } else {
              marker.setImage(
                new kakao.maps.MarkerImage(hotplaceMarkerImgSrc, new kakao.maps.Size(25, 45), {
                  offset: new kakao.maps.Point(20, 40),
                })
              );
            }
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
      openAlert({ type: ERROR, text: '마커 데이터 로드를 실패했습니다' });
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
      {isDetailModalOpen && selectedMarker && (
        <DetailModal id={selectedMarker.id} closeModal={() => setIsDetailModalOpen(false)} />
      )}
    </>
  );
}

export default KakaoMap;
