"use client";

import { useEffect, useState } from 'react';
import { useEmergencyStore } from '@/app/hooks/useEmergencyStore';

export function TransitionOverlay() {
  const { isTransitioning, isEmergency } = useEmergencyStore();
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      setShowOverlay(true);
    } else {
      // Delay hiding to allow exit animation
      const timer = setTimeout(() => setShowOverlay(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  if (!showOverlay) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ${
      isTransitioning ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className={`bg-white rounded-lg p-6 shadow-xl max-w-sm mx-4 text-center transition-all duration-300 ${
        isTransitioning ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {!isEmergency ? 'Switching to Emergency Mode' : 'Switching to Normal Mode'}
        </h3>
        <p className="text-gray-600 text-sm">
          {!isEmergency
            ? 'Loading emergency page...'
            : 'Loading main page...'
          }
        </p>
      </div>
    </div>
  );
}