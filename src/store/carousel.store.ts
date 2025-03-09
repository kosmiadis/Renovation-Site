import { create } from 'zustand'

type Store = {
  currentSlide: number,
  groups: number,
  setGroups: (n:number) => void,
  goToSlide: (n:number) => void
}

export const useCarousel = create<Store>()((set) => ({
  currentSlide: 0,
  groups: 0,
  setGroups: (n: number) => {
    set(() => ({ 
      groups: n
    }))
  },
  goToSlide: (n: number) => {
    set(() => ({
        currentSlide: n
    }))
  },
}))