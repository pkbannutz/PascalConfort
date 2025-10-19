import { Card, CardHeader, CardContent } from '@/app/components/ui/Card';
import { ScrollReveal } from '@/app/components/ui/ScrollReveal';

export function Services() {
  const services = [
    {
      id: '1',
      title: 'Instalații Sanitare Complete',
      description: 'Montaj și reparații instalații sanitare în apartamente, case și spații comerciale. Țevi, robinete, chiuvete, WC-uri.',
      icon: '🔧'
    },
    {
      id: '2',
      title: 'Instalații Termice',
      description: 'Montaj și service centrale termice, boilere, radiatoare. Întreținere și reparații pentru încălzire eficientă.',
      icon: '🔥'
    },
    {
      id: '3',
      title: 'Urgențe Non-Stop',
      description: 'Intervenții de urgență 24/7 pentru avarii: țevi sparte, centrale defecte, inundații. Rezolvăm rapid orice problemă.',
      icon: '🚨'
    },
    {
      id: '4',
      title: 'Desfundări Profesionale',
      description: 'Desfundare canalizări, sifoane, WC-uri cu echipamente speciale. Prevenție și întreținere pentru funcționarea optimă.',
      icon: '🪠'
    },
    {
      id: '5',
      title: 'Montaj Centrale Termice',
      description: 'Instalare centrale noi, înlocuire centrale vechi, racordări la rețea. Lucrări conform normelor în vigoare.',
      icon: '🏠'
    },
    {
      id: '6',
      title: 'Reparații și Întreținere',
      description: 'Service complet pentru toate tipurile de instalații. Diagnosticare, reparații, optimizare consum energetic.',
      icon: '⚙️'
    }
  ];

  return (
    <section id="servicii" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Servicii Instalații Oferite în Iași
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Servicii complete de instalații sanitare și termice pentru locuințe și afaceri în Iași.
              Lucrări profesioniste cu garanție și prețuri competitive.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.1}>
              <Card hover className="h-full">
                <CardHeader className="text-center md:text-left">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}