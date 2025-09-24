export default function CTA() {
  return (
    <section id="kontakt" className="section">
      <div className="container">
        <div className="card p-8 md:p-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Zeit, Ihr Projekt Wirklichkeit werden zu lassen.
          </h2>
          <p className="mt-3 text-gray-600">
            Kostenfreies Erstgespräch – wir klären Ziele, Rahmen und die
            nächsten Schritte.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="mailto:info@bnature.example" className="btn-primary">
              Erstgespräch anfragen
            </a>
            <a href="#leistungen" className="btn-ghost">
              Leistungen ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
