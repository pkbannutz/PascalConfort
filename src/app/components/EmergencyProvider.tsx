"use client";

import { useEffect } from 'react';
import { useEmergencyStore } from '../hooks/useEmergencyStore';

export function EmergencyProvider({ children }: { children: React.ReactNode }) {
  const { isEmergency } = useEmergencyStore();

  useEffect(() => {
    if (isEmergency) {
      document.body.classList.add('theme-emergency');
    } else {
      document.body.classList.remove('theme-emergency');
    }
  }, [isEmergency]);

  return <>{children}</>;
}