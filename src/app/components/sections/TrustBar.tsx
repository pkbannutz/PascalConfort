const TrustItem = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="text-center">
    <div className="text-3xl mb-2">{icon}</div>
    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

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
            <TrustItem {...trustItems[0]} />
            <TrustItem {...trustItems[2]} />
          </div>
          <TrustItem {...trustItems[1]} />
        </div>
        {/* Desktop: Grid layout (centered) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 lg:max-w-fit lg:mx-auto">
          {trustItems.map((item, index) => (
            <TrustItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}