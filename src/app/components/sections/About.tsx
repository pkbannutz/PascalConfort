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
              Despre – Daniel Pascal
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Daniel are peste 30 de ani de experiență în instalații sanitare și termice, oferind servicii profesionale complete — de la montaj și reparații până la întreținere și modernizări.
              </p>
              <p>
                A acumulat mai bine de 14 ani de activitate la APAVITAL S.A. Iaşi, unde a lucrat cu sisteme complexe de alimentare cu apă, canalizare și epurare, gestionând echipamente și tehnologii de mari dimensiuni. De asemenea, a petrecut 15 ani în Marea Britanie, lucrând pentru clienți de top și folosind exclusiv scule și echipamente de nivel profesional.
              </p>
              <p>
                Pe parcursul carierei, Daniel a colaborat cu sute de clienți — de la apartamente moderne până la case tradiționale — prioritatea sa fiind calitatea lucrărilor, satisfacția deplină a fiecărui client și un ochi atent pentru estetică și simetrie.
              </p>
              <p>
                În situații de urgență, Daniel intervine rapid și oferă garanție pentru toate serviciile prestate. Utilizează doar materiale de înaltă calitate și echipamente profesionale pentru rezultate durabile și sigure.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-900">30+</div>
                <div className="text-sm text-gray-600">Ani Experiență</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">500+</div>
                <div className="text-sm text-gray-600">Clienți Mulțumiți</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}