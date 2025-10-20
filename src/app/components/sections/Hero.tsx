import Image from 'next/image';
import { Button } from '@/app/components/ui/Button';
import { ScrollReveal } from '@/app/components/ui/ScrollReveal';
import { CONTACT_INFO, WHATSAPP_MESSAGES, COMPANY_INFO } from '@/app/lib/constants';

const ImageSection = ({ className, height }: { className: string; height: string }) => (
  <div className={`relative ${className}`}>
    <div className={`relative ${height} rounded-lg overflow-hidden shadow-2xl`}>
      <Image
        src="/images/portfolio/PascalConfort .png"
        alt={`${COMPANY_INFO.name} Logo - ${COMPANY_INFO.tagline}`}
        fill
        className="object-contain"
        priority
      />
    </div>
    <ScrollReveal direction="up" delay={0.4}>
      <div className="absolute -bottom-4 -right-4 bg-blue-900 text-white px-4 py-2 rounded-lg shadow-lg">
        <div className="text-sm font-semibold">24/7 Disponibil</div>
      </div>
    </ScrollReveal>
  </div>
);

export function Hero() {
  return (
    <section className="pt-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <ScrollReveal direction="left">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Instalator Autorizat Iași
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                {COMPANY_INFO.description}
              </p>
              {/* Mobile Image */}
              <ImageSection className="lg:hidden mb-8" height="h-96" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  variant="primary"
                  size="lg"
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-lg px-8 py-4"
                >
                  Sună Acum - Urgențe
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(WHATSAPP_MESSAGES.normal)}`}
                  className="text-lg px-8 py-4"
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Desktop Image */}
          <ScrollReveal direction="right" delay={0.2}>
            <ImageSection className="hidden lg:block" height="h-96 lg:h-[500px]" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}