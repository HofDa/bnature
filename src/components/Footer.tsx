export default function Footer() {
  return (
    <footer className="pt-12 pb-16 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-semibold">b*nature</div>
            <p className="mt-2 text-sm text-gray-600">
              Monitoring & Erhebungen · Umweltbildung · Naturnahe Gestaltung
            </p>
          </div>
          <div>
            <div className="font-semibold">Leistungen</div>
            <ul className="mt-2 space-y-1 text-sm text-gray-700">
              <li>
                <a href="#leistungen" className="hover:underline">
                  Monitoring
                </a>
              </li>
              <li>
                <a href="#leistungen" className="hover:underline">
                  Bildung
                </a>
              </li>
              <li>
                <a href="#leistungen" className="hover:underline">
                  Gestaltung
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Kontakt</div>
            <p className="mt-2 text-sm text-gray-700">info@bnature.example</p>
            <p className="text-sm text-gray-700">Südtirol · Italien</p>
          </div>
        </div>
        <div className="divider my-8"></div>
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} b*nature · Impressum · Datenschutz
        </p>
      </div>
    </footer>
  );
}
