import Image from 'next/image';
import { Button } from '@/app/components/ui/Button';
import { ScrollReveal } from '@/app/components/ui/ScrollReveal';

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
                <span className="hidden md:block text-blue-900">Urgențe Non-Stop</span>
              </h1>
              {/* Mobile Image */}
              <div className="relative lg:hidden mb-8">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/portfolio/freepik__remove-text-add-him-overlay-crosing-a-bit-on-top-o__45494.png"
                    alt="Instalator autorizat Iași lucrând la instalații sanitare - PascalConfort"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Floating badges */}
                <ScrollReveal direction="up" delay={0.4}>
                  <div className="absolute -bottom-4 -right-4 bg-blue-900 text-white px-4 py-2 rounded-lg shadow-lg">
                    <div className="text-sm font-semibold">24/7 Disponibil</div>
                  </div>
                </ScrollReveal>
              </div>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Intervenții rapide pentru instalații sanitare și termice în Iași.
                Reparații, montaj centrale, desfundări. Seriozitate și garanție pe toate lucrările.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  variant="primary"
                  size="lg"
                  href="tel:+40752399616"
                  className="text-lg px-8 py-4"
                >
                  Sună Acum - Urgențe
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="https://wa.me/40752399616"
                  className="text-lg px-8 py-4"
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Desktop Image */}
          <ScrollReveal direction="right" delay={0.2} className="hidden lg:block">
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/portfolio/freepik__remove-text-add-him-overlay-crosing-a-bit-on-top-o__45494.png"
                  alt="Instalator autorizat Iași lucrând la instalații sanitare - PascalConfort"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating badges */}
              <ScrollReveal direction="up" delay={0.4}>
                <div className="absolute -bottom-4 -right-4 bg-blue-900 text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="text-sm font-semibold">24/7 Disponibil</div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}