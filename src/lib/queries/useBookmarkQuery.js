import useAuthStore from '@/store/zustand/authStore';
import { useQuery } from '@tanstack/react-query';
import { reqUserBookmark } from '../api/bookmarkAPI';

export const useBookmarkQuey = ({ storeId }) => {
  const {
    userData: { userId },
  } = useAuthStore();

  const getUserBookmark = async () => {
    const data = reqUserBookmark({ userId, storeId });
    return data;
  };

  const {
    data: bookmarkData,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['bookmark', userId, storeId],
    queryFn: getUserBookmark,
    staleTime: 1000 * 60 * 10,
    cacheTime: 1000 * 60 * 30,
  });

  return {
    bookmarkData,
    isPending,
    isError,
    error,
  };
};
