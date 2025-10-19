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
                src="/images/daniel-pascal.jpg"
                alt="Daniel Pascal - Instalator autorizat Iași cu 30+ ani experiență"
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
                Cu peste 30 ani de experiență în instalații sanitare și termice în Iași,
                ofer servicii profesioniste pentru toate tipurile de lucrări. Efectuez montaje și reparații la centrale termice.
              </p>
              <p>
                Am lucrat cu sute de clienți în Iași și împrejurimi, de la apartamente moderne
                până la case tradiționale. Prioritatea mea este calitatea lucrărilor și
                satisfacția clienților mei.
              </p>
              <p>
                Intervin rapid la urgențe și ofer garanție pe toate serviciile prestate.
                Folosesc doar materiale de calitate și echipamente profesionale pentru
                rezultate durabile.
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