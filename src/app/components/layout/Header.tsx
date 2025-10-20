"use client";

import { useState } from 'react';
import { useEmergencyStore } from '@/app/hooks/useEmergencyStore';
import { Button } from '@/app/components/ui/Button';
import { CONTACT_INFO, WHATSAPP_MESSAGES, COMPANY_INFO } from '@/app/lib/constants';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isEmergency, toggleEmergency, isTransitioning } = useEmergencyStore();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigateToSection = async (sectionId: string) => {
    if (isEmergency) {
      await toggleEmergency();
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-blue-900">{COMPANY_INFO.name}</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigateToSection('servicii')}
              disabled={isTransitioning}
              className={`text-gray-700 hover:text-blue-900 font-medium transition-colors ${
                isTransitioning ? 'pointer-events-none opacity-50' : ''
              }`}
            >
              Servicii
            </button>
            <button
              onClick={() => navigateToSection('despre')}
              disabled={isTransitioning}
              className={`text-gray-700 hover:text-blue-900 font-medium transition-colors ${
                isTransitioning ? 'pointer-events-none opacity-50' : ''
              }`}
            >
              Despre
            </button>
            <button
              onClick={() => navigateToSection('contact')}
              disabled={isTransitioning}
              className={`text-gray-700 hover:text-blue-900 font-medium transition-colors ${
                isTransitioning ? 'pointer-events-none opacity-50' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Emergency Toggle */}
            <button
              onClick={toggleEmergency}
              disabled={isTransitioning}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                isEmergency
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-red-600 text-white hover:bg-red-700'
              } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
              aria-label={isEmergency ? 'Dezactivează mod urgență' : 'Activează mod urgență'}
            >
              {isTransitioning ? '...' : (isEmergency ? 'Normal' : 'Urgent')}
            </button>


            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { label: 'Servicii', section: 'servicii' },
                { label: 'Despre', section: 'despre' },
                { label: 'Contact', section: 'contact' }
              ].map(({ label, section }) => (
                <button
                  key={section}
                  onClick={() => navigateToSection(section)}
                  className={`block w-full text-left px-2 py-1 text-sm text-gray-700 hover:text-blue-900 hover:bg-gray-50 font-medium ${
                    isTransitioning ? 'pointer-events-none opacity-50' : ''
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}