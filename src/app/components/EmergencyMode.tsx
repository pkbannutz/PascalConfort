"use client";

import { Header } from './layout/Header';
import { ContactForm } from './sections/ContactForm';
import { Button } from './ui/Button';
import { CONTACT_INFO, WHATSAPP_MESSAGES, COMPANY_INFO } from '@/app/lib/constants';

export function EmergencyMode() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Footer removed in emergency mode */}

      {/* Contact Info Bar */}
      <div className="bg-red-50 py-6 px-4 border-b border-red-200">
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
              <Button
                variant="secondary"
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(WHATSAPP_MESSAGES.urgent)}`}
                className="bg-green-600 text-white border border-green-600 hover:bg-green-700"
              >
                💬 WhatsApp
              </Button>
            </div>
          </div>
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

      {/* Contact Form */}
      <div className="py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold mb-2 text-red-800">
              Solicită Intervenție Rapidă
            </h2>
            <p className="text-gray-600 text-sm">
              Completează formularul pentru o estimare rapidă și programare urgentă
            </p>
          </div>
          <ContactForm hideTitle={true} hideNormalButton={true} />
        </div>
      </div>

    </div>
  );
}
