import { QUERY_KEYS } from '@/constants/query-keys';
import supabase from '@/lib/api/supabaseAPI';
import { useQuery } from '@tanstack/react-query';

export const useGetHotplaces = ({ area = null } = {}) => {
  const { HOTPLACE } = QUERY_KEYS;
  const getHotplaces = async () => {
    const { data, error } = await supabase.from(HOTPLACE).select('*').eq('area', area); // area:현재 지역
    if (error) {
      throw new Error(error.message);
    }
    return data; // 현재 지역에 해당하는 area를 가진 테이블의 값들을 return
  };

  const filterArea = (places) => {
    return places.filter((place) => place.area === area);
  };

  return useQuery({
    queryKey: area ? [HOTPLACE, area] : [HOTPLACE], // area가 없는 전체값은 HOTPLACE로 캐싱
    queryFn: getHotplaces,
    select: filterArea, // 가공한 값을 전달
    staleTime: 60 * 60 * 1000, //1시간
    enabled: !!area, // area가 null이 아닌 값이 경우 실행
  });
};
