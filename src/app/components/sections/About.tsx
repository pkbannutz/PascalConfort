import Image from 'next/image';

export function About() {
  return (
    <section id="despre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/portfolio/freepik__remove-text-add-him-overlay-crosing-a-bit-on-top-o__45494.png"
                alt="Daniel Pascal - Instalator profesionist cu peste 30 de ani de experiență în instalații sanitare și termice în Iași și UK"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Despre Mine - Daniel Pascal
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Cu peste 30 de ani de experiență în instalații sanitare și termice, Daniel Pascal oferă servicii profesionale în Iași și nu numai. A lucrat peste 14 ani la APAVITAL S.A. Iași, acumulând o expertiză vastă în domeniu.
              </p>
              <p>
                Ulterior, a lucrat 15 ani în Marea Britanie, utilizând unelte și echipamente profesionale pentru a servi o clientelă diversă. Având 1000+ de clienți mulțumiți, Daniel se angajează să ofere calitate și satisfacție clienților.
              </p>
              <p>
                Oferă intervenții rapide în caz de urgență și garantează calitatea tuturor serviciilor. Utilizând doar materiale și echipamente profesionale, Daniel asigură rezultate durabile și fiabile pentru fiecare proiect.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-900">30+</div>
                <div className="text-sm text-gray-600">Ani Experiență</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">1000+</div>
                <div className="text-sm text-gray-600">Clienți Mulțumiți</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}