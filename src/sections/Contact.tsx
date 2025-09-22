export default function Contact() {
  return (
    <section id="kontakt" className="section">
      <div className="container grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-extrabold md:text-3xl">Kontakt & Angebot</h2>
          <p className="mt-2 max-w-prose text-gray-600">
            Erzähl uns kurz von deinem Anliegen – wir melden uns mit einem konkreten Vorschlag.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-gray-700">
            <li>• Monitoring & Erhebungen (Wildbienen, Tagfalter, Vegetation, Boden)</li>
            <li>• Umweltbildung (Workshops, Führungen, Rätsel-Touren)</li>
            <li>• Naturnahe Gestaltung (Gemeinden, Schulen, Hotels, Betriebe)</li>
          </ul>
        </div>
        <form className="card space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
            <input id="name" type="text" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500/40" />
          </div>
          <div>
            <label htmlFor="mail" className="text-sm font-medium text-gray-700">E-Mail</label>
            <input id="mail" type="email" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500/40" />
          </div>
          <div>
            <label htmlFor="msg" className="text-sm font-medium text-gray-700">Nachricht</label>
            <textarea id="msg" rows={4} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500/40" placeholder="Kurzbeschreibung des Projekts …" />
          </div>
          <label className="inline-flex items-start gap-2 text-sm text-gray-600">
            <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-700 focus:ring-primary-700" />
            <span>Ich stimme zu, dass meine Angaben zur Kontaktaufnahme gespeichert und verarbeitet werden.</span>
          </label>
          <button type="button" className="btn-primary">Nachricht senden</button>
          <p className="text-xs text-gray-500">Hinweis: Wir verarbeiten Ihre Angaben ausschließlich zur Bearbeitung der Anfrage.</p>
        </form>
      </div>
    </section>
  );
}
