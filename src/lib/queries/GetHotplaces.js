import { QUERY_KEYS } from '@/constants/query-keys';
import supabase from '@/lib/api/supabaseAPI';
import useAreaStore from '@/store/zustand/useAreaStore';
import { useQuery } from '@tanstack/react-query';

export const useGetHotplaces = () => {
  const { HOTPLACE } = QUERY_KEYS;
  const selectedArea = useAreaStore((state) => state.selectedArea);

  const getHotplaces = async () => {
    const { data, error } = await supabase.from('hotplaces').select('*').eq('area', selectedArea);

    if (error) {
      throw new Error(error.message);
    }
    return data;
  };

  return useQuery({
    queryKey: [HOTPLACE, selectedArea],
    queryFn: getHotplaces,
    staleTime: 60 * 60 * 1000, // 1시간
    enabled: !!selectedArea,
  });
};
