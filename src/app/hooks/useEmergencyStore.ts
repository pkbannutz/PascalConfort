"use client";

import { create } from 'zustand';

interface EmergencyState {
  isEmergency: boolean;
  toggleEmergency: () => void;
}

export const useEmergencyStore = create<EmergencyState>((set) => ({
  isEmergency: false,
  toggleEmergency: () =>
    set((state) => {
      const newEmergency = !state.isEmergency;
      if (newEmergency) {
        document.body.classList.add('theme-emergency');
      } else {
        document.body.classList.remove('theme-emergency');
      }
      return { isEmergency: newEmergency };
    }),
}));