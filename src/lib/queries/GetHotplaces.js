import { QUERY_KEYS } from '@/constants/query-keys';
import supabase from '@/lib/api/supabaseAPI';
import { useQuery } from '@tanstack/react-query';
export const useGetHotplaces = ({ area = null } = {}) => {
  const { HOTPLACE } = QUERY_KEYS;
  // const selectedArea = useAreaStore((state) => state.selectedArea);

  let query = supabase.from(HOTPLACE).select('*');
  if (area) query.eq('area', area);

  const getHotplaces = async () => {
    const { data, error } = await query;
    if (error) {
      throw new Error(error.message);
    }
    return data;
  };
  const filterArea = (places) => {
    if (area) {
      return places.filter((place) => place.area === area);
    }
    return places;
  };

  return useQuery({
    queryKey: area ? [HOTPLACE, area] : [HOTPLACE],
    queryFn: getHotplaces,
    select: filterArea, // 가공한 값을 전달
    staleTime: 60 * 60 * 1000, //1시간
  });
};
