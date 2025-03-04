import supabase from '@api/supabaseAPI';
import { useQuery } from '@tanstack/react-query';

export const useGetBookmarks = () => {
  const getBookmarks = async () => {
    const { data, error } = await supabase.from('bookmarks').select('*, users(id, nickname), hotplaces(name, img_url)');
    if (error) {
      throw new Error(error.message);
    }
    return data;
  };

  return useQuery({
    queryKey: ['bookmarks'],
    queryFn: getBookmarks,
  });
};
