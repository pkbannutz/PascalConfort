import Image from 'next/image';
import { Card } from '@/app/components/ui/Card';

export function Portfolio() {
  const portfolioItems = [
    {
      id: '1',
      title: 'Înlocuire Centrală Termică',
      beforeAlt: 'Centrală termică veche defectă în baie Iași',
      afterAlt: 'Centrală termică nouă montată profesional în Iași',
      beforeImage: '/images/portfolio/1e12e89bf7bdce548ff2b302e762efcd.jpg',
      afterImage: '/images/portfolio/41f6f66a97b86cf219e690c6cf8cc684.jpg'
    },
    {
      id: '2',
      title: 'Reparație Instalații Sanitare',
      beforeAlt: 'Instalații sanitare deteriorate în bucătărie Iași',
      afterAlt: 'Instalații sanitare complet renovate în Iași',
      beforeImage: '/images/portfolio/87960c17a7f18ec03e991442ce4cf6f2.jpg',
      afterImage: '/images/portfolio/cfb4022c80b443cdce678a116b037682.jpg'
    },
  ];

  return (
    <section id="portofoliu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Portofoliu Lucrări Instalații
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rezultate profesionale din lucrările efectuate în Iași. De la urgențe la proiecte complete,
            fiecare lucrare este executată cu atenție la detalii și respectarea normelor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card key={item.id} hover className="overflow-hidden">
              <div className="relative">
                {/* Before/After Images */}
                <div className="grid grid-cols-2 gap-1">
                  <div className="relative h-32">
                    <Image
                      src={item.beforeImage}
                      alt={item.beforeAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-32">
                    <Image
                      src={item.afterImage}
                      alt={item.afterAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Title */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ai nevoie de lucrări similare? Contactează-mă pentru o ofertă personalizată.
          </p>
          <a
            href="tel:+40752399616"
            className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
          >
            Cere Ofertă Gratuită
          </a>
        </div>
      </div>
    </section>
  );
}