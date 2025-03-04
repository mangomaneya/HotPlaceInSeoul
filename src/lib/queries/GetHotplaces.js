import { QUERY_KEYS } from '@/constants/query-keys';
import supabase from '@/lib/api/supabaseAPI';
import { useQuery } from '@tanstack/react-query';

export const useGetHotplaces = () => {
  const { HOTPLACE } = QUERY_KEYS;
  const getHotplaces = async () => {
    const { data, error } = await supabase.from('hotplaces').select('*');
    if (error) {
      throw new Error(error.message);
    }
    return data;
  };

  return useQuery({ queryKey: [HOTPLACE], queryFn: getHotplaces, staleTime: 60 * 60 * 1000 }); //1시간
};
