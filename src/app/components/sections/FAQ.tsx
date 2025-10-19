import { Accordion } from '@/app/components/ui/Accordion';

export function FAQ() {
  const faqItems = [
    {
      id: '1',
      question: 'Cât costă o intervenție de urgență la instalații în Iași?',
      answer: (
        <div className="space-y-2">
          <p>Costurile pentru intervenții de urgență variază în funcție de complexitatea problemei:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Desfundare simplă: 150-300 lei</li>
            <li>Reparație țeavă spartă: 200-500 lei</li>
            <li>Înlocuire robinet: 100-250 lei</li>
            <li>Probleme cu centrala termică: 300-800 lei</li>
          </ul>
          <p>Ofer consultanță gratuită telefonică pentru evaluarea preliminară a costurilor.</p>
        </div>
      )
    },
    {
      id: '2',
      question: 'În cât timp puteți interveni pentru urgențe instalații Iași?',
      answer: (
        <p>
          Pentru urgențe, intervin în maximum 2 ore de la apel în zona Iași.
          În cazuri critice (inundații, lipsă căldură iarna), prioritatea este maximă.
          Pentru lucrări programate, stabilim împreună data cea mai convenabilă.
        </p>
      )
    },
    {
      id: '3',
      question: 'Oferiți garanție pe lucrările de instalații sanitare?',
      answer: (
        <div className="space-y-2">
          <p>Da, ofer garanție pe toate lucrările efectuate:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Instalații sanitare: 2 ani garanție</li>
            <li>Centrale termice: 3 ani garanție</li>
            <li>Reparații: 1 an garanție</li>
            <li>Desfundări: 6 luni garanție</li>
          </ul>
        </div>
      )
    },
    {
      id: '4',
      question: 'Ce documente aveți pentru lucrări la centrale termice?',
      answer: (
        <p>
          Efectuez montaj și service centrale termice cu materiale certificate și conform
          cu normativele în vigoare.
        </p>
      )
    },
    {
      id: '5',
      question: 'Lucrați și în afara orașului Iași?',
      answer: (
        <p>
          Da, intervin în toată zona metropolitană Iași și în localitățile din apropiere
          (Holboca, Tomești, Ciurea, etc.). Pentru distanțe mai mari, evaluăm fiecare caz în parte.
        </p>
      )
    },
    {
      id: '6',
      question: 'Ce materiale folosiți pentru instalații?',
      answer: (
        <p>
          Folosesc doar materiale de calitate superioară: țevi din cupru sau PPR,
          armături de la producători recunoscuți, centrale termice certificate.
          Prioritatea este durabilitatea și siguranța instalațiilor.
        </p>
      )
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Întrebări Frecvente - Instalator Iași
          </h2>
          <p className="text-xl text-gray-600">
            Răspunsuri la cele mai comune întrebări despre serviciile de instalații în Iași
          </p>
        </div>

        <Accordion items={faqItems} />
      </div>
    </section>
  );
}