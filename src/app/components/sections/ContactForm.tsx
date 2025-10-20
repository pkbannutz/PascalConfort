"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/app/components/ui/Button';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { CONTACT_INFO, WHATSAPP_MESSAGES } from '@/app/lib/constants';

const contactSchema = z.object({
  name: z.string().min(2, 'Numele trebuie să aibă cel puțin 2 caractere'),
  phone: z.string().regex(/^(\+40 \d{2} \d{3} \d{4}|07\d{2} \d{3} \d{3})$/, 'Format invalid. Folosiți +40 XX XXX XXXX sau 07XX XXX XXX'),
  address: z.string().min(5, 'Adresa trebuie să aibă cel puțin 5 caractere'),
  message: z.string().min(10, 'Mesajul trebuie să aibă cel puțin 10 caractere'),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

interface ContactFormProps {
  hideTitle?: boolean;
  hideNormalButton?: boolean;
  hideContactInfo?: boolean;
}

const FormInput = ({ label, error, children }: { label: string; error?: { message?: string }; children: React.ReactNode }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    {children}
    {error?.message && (
      <p className="mt-1 text-sm text-red-600">{error.message}</p>
    )}
  </div>
);

export function ContactForm({ hideTitle = false, hideNormalButton = false, hideContactInfo = false }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  const handleNormalSubmit = async (data: ContactFormInputs) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_123456789', // Replace with actual service ID
        'template_123456789', // Replace with actual template ID
        {
          from_name: data.name,
          from_phone: data.phone,
          from_address: data.address,
          message: data.message,
          to_email: CONTACT_INFO.email,
        },
        'public_key_123456789' // Replace with actual public key
      );

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUrgentSubmit = (data: ContactFormInputs) => {
    const whatsappMessage = `*PascalConfort - Cerere Ofertă Instalator Iași* 🚨 *URGENT!*\n\n*Mesaj:* *${data.message}*\n\n*Adresa:* ${data.address}\n\n*Nume:* ${data.name}\n*Telefon:* ${data.phone}\n\n🚨 CERERE URGENTĂ - INTERVENȚIE RAPIDĂ NECESARĂ!`;
    const whatsappUrl = `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideTitle && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact / Cere Ofertă Instalator Iași
            </h2>
            <p className="text-xl text-gray-600">
              Completează formularul pentru o ofertă personalizată sau sună direct pentru urgențe
            </p>
          </div>
        )}

        <div className={`grid grid-cols-1 ${hideContactInfo ? '' : 'lg:grid-cols-2'} gap-12`}>
          {/* Contact Form */}
          <div className={`bg-white rounded-lg shadow-md p-8 ${hideContactInfo ? 'max-w-2xl mx-auto' : ''}`}>
            <form className="space-y-6">
              <FormInput label="Nume complet *" error={errors.name}>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                  placeholder="Numele dumneavoastră"
                />
              </FormInput>

              <FormInput label="Număr telefon *" error={errors.phone}>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                  placeholder="+40 7XX XXX XXX"
                />
              </FormInput>

              <FormInput label="Cartierul sau adresa aproximativă *" error={errors.address}>
                <input
                  {...register('address')}
                  type="text"
                  id="address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                  placeholder="Ex: Copou, Șoseaua Pavel Dimitrie Kiseleff 10"
                />
              </FormInput>

              <FormInput label="Mesaj / Descriere problemă *" error={errors.message}>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                  placeholder="Descrieți lucrarea sau problema..."
                />
              </FormInput>

              <div className="flex flex-col gap-4">
                {!hideNormalButton && (
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                    onClick={handleSubmit(handleNormalSubmit)}
                  >
                    {isSubmitting ? 'Se trimite...' : 'Trimite Cerere Ofertă'}
                  </Button>
                )}

                <Button
                  type="button"
                  variant="secondary"
                  size="lg"
                  className="w-full bg-red-600 hover:bg-red-700 focus:ring-red-500"
                  onClick={handleSubmit(handleUrgentSubmit)}
                >
                  🚨 URGENT
                </Button>
              </div>

              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800 text-sm">
                    ✅ Mesajul a fost trimis cu succes! Vă vom contacta în curând.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800 text-sm">
                    ❌ Eroare la trimiterea mesajului. Vă rugăm să încercați din nou sau să ne contactați direct.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          {!hideContactInfo && (
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
          )}
        </div>
      </div>
    </section>
  );
}