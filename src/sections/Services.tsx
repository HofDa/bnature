export default function Services() {
  return (
    <section id="leistungen" className="border-t bg-gray-50/60 section">
      <div className="container">
        <h2 className="text-2xl font-extrabold md:text-3xl">Unsere Leistungen</h2>
        <p className="mt-2 max-w-prose text-gray-600">
          Klar strukturiert, modular kombinierbar – auf Wunsch mit Jahresbetreuung.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="card">
            <h3 className="text-lg font-semibold">Monitoring & Erhebungen</h3>
            <p className="mt-2 text-gray-600">Wildbienen, Tagfalter, Vegetation, Bodenthemen – sauber erhoben & dokumentiert.</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold">Umweltbildung</h3>
            <p className="mt-2 text-gray-600">Workshops, Führungen, Rätsel-Touren – Wissen erlebbar machen.</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold">Naturnahe Gestaltung</h3>
            <p className="mt-2 text-gray-600">Flächenkonzepte für Gemeinden, Schulen, Hotels & Betriebe – praxisnah.</p>
          </div>
        </div>
      </div>
      <div className="mt-12 h-2 w-full dotted-path text-primary-700"></div>
    </section>
  );
}
