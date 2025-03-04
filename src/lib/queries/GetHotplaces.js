import { QUERY_KEYS } from '@/constants/query-keys';
import supabase from '@/lib/api/supabaseAPI';
import useAreaStore from '@/store/zustand/useAreaStore';
import { useQuery } from '@tanstack/react-query';

export const useGetHotplaces = ({ area = null } = {}) => {
  const { HOTPLACE } = QUERY_KEYS;
  const selectedArea = useAreaStore((state) => state.selectedArea);
  const getHotplaces = async () => {
    const { data, error } = await supabase.from(HOTPLACE).select('*').eq('area', area); // area:현재 지역
    if (error) {
      throw new Error(error.message);
    }
    return data; // 현재 지역에 해당하는 area를 가진 테이블의 값들을 return
  };

  const filterArea = (places) => {
    return places.filter((place) => place.area === selectedArea);
  };

  return useQuery({
    queryKey: selectedArea ? [HOTPLACE, selectedArea] : [HOTPLACE],
    queryFn: getHotplaces,
    select: filterArea,
    staleTime: 60 * 60 * 1000, //1시간
    enabled: !!selectedArea, // selectedArea가 존재할 때만 실행
  });
};
