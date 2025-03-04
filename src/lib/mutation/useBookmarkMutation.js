import useAuthStore from '@/store/zustand/authStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postToBookmark, removeFromBookmark } from '../api/bookmarkAPI';
import { useState } from 'react';

const ERROR_MESSAGE = {
  POST: '북마크를 추가하지 못했습니다.',
  DELETE: '북마크에서 삭제하지 못했습니다.',
};

export const useBookmarkMutation = ({ storeId }) => {
  const [error, setError] = useState(null);
  const queryClient = useQueryClient();
  const {
    userData: { userId },
  } = useAuthStore();

  const addToBookmark = async () => {
    await postToBookmark({ userId, storeId });
  };

  const { mutate: addMutate, isLoading: isAdding } = useMutation({
    mutationFn: addToBookmark,
    onSuccess: () => {
      queryClient.invalidateQueries(['bookmark', userId, storeId]);
    },
    onError: (err) => {
      console.error(err);
      setError(ERROR_MESSAGE['POST']);
    },
  });

  const cancelBookmark = async () => {
    await removeFromBookmark({ userId, storeId });
  };

  const { mutate: deleteMutate, isLoading: isDeleting } = useMutation({
    mutationFn: cancelBookmark,
    onSuccess: () => {
      queryClient.invalidateQueries(['bookmark', userId, storeId]);
    },
    onError: (err) => {
      console.error(err);
      setError(ERROR_MESSAGE['DELETE']);
    },
  });

  const isMutatePending = isAdding || isDeleting;
  return {
    addMutate,
    deleteMutate,
    isMutatePending,
    error,
  };
};
