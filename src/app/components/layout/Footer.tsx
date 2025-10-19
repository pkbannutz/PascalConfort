export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">PascalConfort</h3>
            <p className="text-gray-300 mb-4">
              Instalator sanitar și termic autorizat în Iași. Intervenții rapide pentru urgențe, reparații și montaj centrale.
            </p>
            <div className="text-sm text-gray-400">
              <p>ANRE Autorizat</p>
              <p>Garanție pe lucrări</p>
              <p>Intervenții non-stop</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <span className="block font-medium">Telefon:</span>
                <a href="tel:+40752399616" className="hover:text-orange-400 transition-colors">
                  +40 752 399 616
                </a>
              </p>
              <p>
                <span className="block font-medium">WhatsApp:</span>
                <a href="https://wa.me/40752399616" className="hover:text-orange-400 transition-colors">
                  +40 752 399 616
                </a>
              </p>
              <p>
                <span className="block font-medium">Email:</span>
                <a href="mailto:pascaldaniel1978@gmail.com" className="hover:text-orange-400 transition-colors">
                  pascaldaniel1978@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Zona Servicii</h3>
            <div className="text-gray-300">
              <p className="mb-2">Iași și împrejurimi</p>
              <p className="text-sm text-gray-400">
                Intervenții rapide în toată zona metropolitană Iași
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 PascalConfort. Toate drepturile rezervate.</p>
          <p className="mt-2">
            Servicii profesionale de instalații sanitare și termice în Iași
          </p>
        </div>
      </div>
    </footer>
  );
}