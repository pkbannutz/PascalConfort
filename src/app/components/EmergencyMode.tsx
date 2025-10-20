"use client";

import { Header } from './layout/Header';
import { ContactForm } from './sections/ContactForm';
import { Button } from './ui/Button';
import { CONTACT_INFO, WHATSAPP_MESSAGES, COMPANY_INFO } from '@/app/lib/constants';

export function EmergencyMode() {
  return (
    <div className="min-h-screen bg-white pt-8">
      <Header />
      {/* Contact Info Bar */}
      <div className="bg-red-50 py-6 px-4 border-b border-red-200 pt-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-red-800">
            <div className="text-center sm:text-left">
              <p className="font-semibold">Daniel Pascal - Instalator Expert</p>
              <p className="text-sm">30+ ani experiență • 500+ clienți mulțumiți</p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="primary"
                href={`tel:${CONTACT_INFO.phone}`}
                className="bg-red-600 hover:bg-red-700"
              >
                📞 Sună Acum
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer removed in emergency mode */}



      {/* Contact Form */}
      <div className="py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold mb-2 text-red-800">
              Solicită Intervenție Rapidă
            </h2>
            <p className="text-gray-600 text-sm">
              Completează formularul pentru o estimare rapidă și programare urgentă
            </p>
          </div>
          <ContactForm hideTitle={true} hideNormalButton={true} hideContactInfo={true} />
        </div>
      </div>

      {/* Emergency Services */}
      <div className="py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
              <h3 className="text-base font-semibold text-red-800 mb-2">🚰 Urgențe Apa</h3>
              <ul className="text-gray-700 space-y-1 text-xs">
                <li>• Înlocuire robinete sparte</li>
                <li>• Reparații conducte de apă</li>
                <li>• Deblocări urgente</li>
                <li>• Scurgere apă caldă</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
              <h3 className="text-base font-semibold text-red-800 mb-2">🔥 Urgențe Termice</h3>
              <ul className="text-gray-700 space-y-1 text-xs">
                <li>• Reparații boiler</li>
                <li>• Probleme încălzire</li>
                <li>• Înlocuire calorifere</li>
                <li>• Reparații instalații termice</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Direct
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 font-medium">Telefon</p>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-blue-600 hover:text-blue-800">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 font-medium">WhatsApp</p>
                    <a href={CONTACT_INFO.whatsappUrl} className="text-green-600 hover:text-green-800">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Urgențe 24/7</h4>
              <p className="text-gray-600 text-sm text-center">
                Pentru situații de urgență (țevi sparte, inundații, centrale defecte),
                sunați direct. Intervin rapid în toată zona Iași.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
