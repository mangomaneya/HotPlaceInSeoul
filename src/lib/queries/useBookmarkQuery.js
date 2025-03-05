import useAuthStore from '@/store/zustand/authStore';
import { useQuery } from '@tanstack/react-query';
import { reqUserBookmark } from '../api/bookmarkAPI';
import { QUERY_KEYS } from '@/constants/query-keys';
const { BOOKMARKS } = QUERY_KEYS;
export const useBookmarkQuey = ({ storeId }) => {
  const {
    userData: { userId },
  } = useAuthStore();
  console.log('u', userId);
  const getUserBookmark = async () => {
    if (!userId) return [];
    const data = reqUserBookmark({ userId, storeId });
    return data;
  };

  const {
    data: bookmarkData,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: [BOOKMARKS, userId, storeId],
    queryFn: getUserBookmark,
    enabled: true,
    staleTime: 1000 * 60 * 10,
    cacheTime: 1000 * 60 * 10,
  });

  return {
    bookmarkData,
    isPending,
    isError,
    error,
  };
};
