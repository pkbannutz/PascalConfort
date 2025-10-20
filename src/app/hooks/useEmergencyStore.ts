"use client";

import { create } from 'zustand';

interface EmergencyState {
  isEmergency: boolean;
  toggleEmergency: () => void;
}

export const useEmergencyStore = create<EmergencyState>((set) => ({
  isEmergency: false,
  toggleEmergency: () =>
    set((state) => ({ isEmergency: !state.isEmergency })),
}));