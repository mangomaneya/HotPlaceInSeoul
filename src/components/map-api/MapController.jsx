import { useState } from 'react';

export default function MapController({ handlePlaceSelect }) {
  const [coordinate, setCoordinate] = useState('');
  const locationCoords = {
    '성수동': { lat: 37.5432, lon: 127.0563 },
    '인사/낙원': { lat: 37.5744, lon: 126.9871 },
    '망원동': { lat: 37.5568, lon: 126.9014 },
  };

  const handleSelect = (e) => {
    const area = e.target.value;
    setCoordinate(area);

    if (locationCoords[area]) {
      handlePlaceSelect(locationCoords[area].lat, locationCoords[area].lon);
    }
  };
  return (
    <div className='flex items-center '>
      <select
        className='w-[200px] h-[50px] border-solid border-[6px] rounded-xl border-neutral-300'
        value={coordinate}
        onChange={handleSelect}
      >
        <option value='성수동'>성수동</option>
        <option value='인사/낙원'>인사/낙원</option>
        <option value='망원동'>망원동</option>
      </select>
      <button className='w-[250px] h-[40px] rounded-md bg-orange-500 '>목록</button>
    </div>
  );
}
