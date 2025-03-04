import { create } from 'zustand';

const useAreaStore = create((set) => {
  return {
    selectedArea: '',
    setSelectedArea: (area) => {
      set({ selectedArea: area });
    },
  };
});

export default useAreaStore;
