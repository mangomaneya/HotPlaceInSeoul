import supabase from '@/lib/api/supabaseAPI';
import { useQuery } from '@tanstack/react-query';

export const useGetHotplaces = () => {
  const getHotplaces = async () => {
    const { data, error } = await supabase.from('hotplaces').select('*');
    if (error) {
      throw new Error(error.message);
    }
    return data;
  };

  return useQuery({
    queryKey: ['hotplaces'],
    queryFn: getHotplaces,
    staleTime: 60 * 60 * 1000, //1시간
  });
};
