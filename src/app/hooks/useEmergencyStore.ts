"use client";

import { create } from 'zustand';

interface EmergencyState {
  isEmergency: boolean;
  isTransitioning: boolean;
  toggleEmergency: () => Promise<void>;
}

export const useEmergencyStore = create<EmergencyState>((set) => ({
  isEmergency: false,
  isTransitioning: false,
  toggleEmergency: async () => {
    set({ isTransitioning: true });
    await new Promise(resolve => setTimeout(resolve, 500));
    set((state) => ({ isEmergency: !state.isEmergency, isTransitioning: false }));
  },
}));