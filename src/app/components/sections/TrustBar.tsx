export function TrustBar() {
  const trustItems = [
    {
      icon: '🏆',
      title: 'ANRE Autorizat',
      description: 'Certificare oficială pentru instalații termice'
    },
    {
      icon: '⭐',
      title: 'Experiență 15+ Ani',
      description: 'Lucrări profesioniste în Iași și împrejurimi'
    },
    {
      icon: '🛡️',
      title: 'Garanție',
      description: 'Garanție pe toate lucrările efectuate'
    },
    {
      icon: '⚡',
      title: 'Intervenții Rapide',
      description: 'Urgențe rezolvate în maxim 2 ore'
    }
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}