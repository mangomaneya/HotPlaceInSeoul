//로그인 한 유저의 정보와 로그인 여부등을 localStorage에 저장하여 사용합니다.
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 초기 상태 설정
const initialState = {
  isAuthenticated: false,
  token: null,
  userData: {
    userId: '',
    nickname: '',
  },
};

const useAuthStore = create(
  persist(
    (set) => ({
      ...initialState,
      // 로그인 시 상태 업데이트
      login: (token, userId, nickname) => {
        set({ isAuthenticated: true, token, userData: { userId, nickname } });
      },

      // 로그아웃 시 상태 초기화
      logout: () => {
        set(initialState);
      },
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
