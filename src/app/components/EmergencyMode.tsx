"use client";

import { ContactForm } from './sections/ContactForm';
import { Button } from './ui/Button';

export function EmergencyMode() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Emergency Header */}
      <div className="bg-red-600 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-2">🚨 URGENȚĂ PLUMBING</h1>
          <p className="text-lg">Intervenție rapidă - Disponibil 24/7</p>
        </div>
      </div>

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
                href="tel:+40752399616"
                className="bg-red-600 hover:bg-red-700"
              >
                📞 Sună Acum
              </Button>
              <Button
                variant="secondary"
                href="https://wa.me/40752399616"
                className="bg-white text-red-600 border-red-600 hover:bg-red-50"
              >
                💬 WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Services */}
      <div className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
              <h3 className="text-lg font-semibold text-red-800 mb-3">🚰 Urgențe Apa</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Înlocuire robinete sparte</li>
                <li>• Reparații conducte de apă</li>
                <li>• Deblocări urgente</li>
                <li>• Scurgere apă caldă</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
              <h3 className="text-lg font-semibold text-red-800 mb-3">🔥 Urgențe Termice</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Reparații boiler</li>
                <li>• Probleme încălzire</li>
                <li>• Înlocuire calorifere</li>
                <li>• Reparații instalații gaz</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-8 px-4" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
              Solicită Intervenție Rapidă
            </h2>
            <p className="text-gray-600">
              Completează formularul pentru o estimare rapidă și programare urgentă
            </p>
          </div>
          <ContactForm />
        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-gray-50 py-6 px-4 mt-8">
        <div className="max-w-4xl mx-auto text-center text-gray-600">
          <p className="font-semibold mb-2">Garanție pentru toate serviciile</p>
          <p className="text-sm">Materiale de calitate • Echipamente profesionale • Intervenție rapidă</p>
        </div>
      </div>
    </div>
  );
}
