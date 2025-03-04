import { QUERY_KEYS } from '@/constants/query-keys';
import supabase from '@/lib/api/supabaseAPI';
import { useQuery } from '@tanstack/react-query';

export const useGetHotplaces = ({ area = null }) => {
  const { HOTPLACE } = QUERY_KEYS;
  const { selectedArea } = useAreaStore((area) => area.selectedArea);
  const getHotplaces = async () => {
    const { data, error } = await supabase.from(HOTPLACE).select('*').eq('area', selectedArea);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  };

  const filterArea = (places) => {
    if (area) {
      return places.filter((place) => place.area === selectedArea.area);
    }
    return places;
  };

  return useQuery({ queryKey: [HOTPLACE], queryFn: getHotplaces, select: filterArea, staleTime: 60 * 60 * 1000 }); //1시간
};
