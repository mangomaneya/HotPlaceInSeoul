import { create } from 'zustand';

//토큰과 유저 정보만 전역상태로 관리 
const useAuthStore = create((set) => ({
  userData: { token: '', userId: '', userEmail: '', userNickname: '' },
  setUserData: (token, userId, userEmail, userNickname) => {
    const newUserData = { token, userId, userEmail, userNickname };
    set({ userData: newUserData });
  },
  resetUserData: () => {
    set({ userData: { token: '', userId: '', userEmail: '', userNickname: '' } });
  },
}));

export default useAuthStore;
