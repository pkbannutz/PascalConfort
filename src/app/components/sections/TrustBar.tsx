export function TrustBar() {
  const trustItems = [
    {
      icon: '⭐',
      title: 'Experiență 30+ Ani',
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
        {/* Mobile: Triangle layout with Garanție in middle bottom */}
        <div className="lg:hidden flex flex-col items-center gap-6">
          <div className="flex justify-between w-full max-w-xs">
            <div className="text-center">
              <div className="text-3xl mb-2">{trustItems[0].icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{trustItems[0].title}</h3>
              <p className="text-sm text-gray-600">{trustItems[0].description}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">{trustItems[2].icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{trustItems[2].title}</h3>
              <p className="text-sm text-gray-600">{trustItems[2].description}</p>
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">{trustItems[1].icon}</div>
            <h3 className="font-semibold text-gray-900 mb-1">{trustItems[1].title}</h3>
            <p className="text-sm text-gray-600">{trustItems[1].description}</p>
          </div>
        </div>
        {/* Desktop: Grid layout */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
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