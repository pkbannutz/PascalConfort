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
                alt="Daniel Pascal - Professional plumber with 30+ years experience in plumbing and heating in Iași and UK"
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
                With over 30 years of experience in plumbing and heating, Daniel Pascal has been providing professional services in Iași and beyond. He spent 14+ years at APAVITAL S.A. Iaşi, gaining extensive expertise in the field.
              </p>
              <p>
                Following that, he worked for 15 years in the UK, utilizing professional tools and equipment to serve a diverse clientele. Having served hundreds of clients, Daniel is committed to quality and customer satisfaction.
              </p>
              <p>
                He offers rapid emergency response and provides quality guarantees on all services. Using only professional materials and equipment, Daniel ensures durable and reliable results for every project.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-900">30+</div>
                <div className="text-sm text-gray-600">Ani Experiență</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">Hundreds</div>
                <div className="text-sm text-gray-600">Clienți Mulțumiți</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}