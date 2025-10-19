"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/app/components/ui/Button';
import { ContactFormData } from '@/app/lib/types';

const contactSchema = z.object({
  name: z.string().min(2, 'Numele trebuie să aibă cel puțin 2 caractere'),
  phone: z.string().min(10, 'Numărul de telefon trebuie să aibă cel puțin 10 cifre'),
  message: z.string().min(10, 'Mesajul trebuie să aibă cel puțin 10 caractere'),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormInputs) => {
    const whatsappMessage = `Salut! Nume: ${data.name}\nTelefon: ${data.phone}\nMesaj: ${data.message}`;
    const whatsappUrl = `https://wa.me/40752399616?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact / Cere Ofertă Instalator Iași
          </h2>
          <p className="text-xl text-gray-600">
            Completează formularul pentru o ofertă personalizată sau sună direct pentru urgențe
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nume complet *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Numele dumneavoastră"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Număr telefon *
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+40 7XX XXX XXX"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mesaj / Descriere problemă *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Descrieți lucrarea sau problema..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Trimite pe WhatsApp
              </Button>
            </form>
          </div>

          {/* Contact Info */}
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
                    <a href="tel:+40752399616" className="text-blue-600 hover:text-blue-800">
                      +40 752 399 616
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
                    <a href="https://wa.me/40752399616" className="text-green-600 hover:text-green-800">
                      +40 752 399 616
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Urgențe 24/7</h4>
              <p className="text-gray-600 text-sm">
                Pentru situații de urgență (țevi sparte, inundații, centrale defecte),
                sunați direct. Intervin rapid în toată zona Iași.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}