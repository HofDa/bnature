export default function Contact() {
  return (
    <section id="kontakt" className="section-muted">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="h2">Kontakt</h2>
            <p className="mt-3 lead max-w-prose">
              Teilen Sie uns kurz mit, wobei wir Sie unterstützen dürfen – wir
              melden uns mit einem Vorschlag für das Erstgespräch.
            </p>
            <div className="mt-6 text-sm text-gray-600">
              <p>
                Mail:{' '}
                <a
                  className="text-leaf-700 hover:underline"
                  href="mailto:info@bnature.example"
                >
                  info@bnature.example
                </a>
              </p>
              <p>Südtirol · Italien</p>
            </div>
          </div>

          <form
            className="card p-6 space-y-4"
            action="mailto:info@bnature.example"
            method="post"
            encType="text/plain"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input className="input" name="name" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                E-Mail
              </label>
              <input className="input" type="email" name="email" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nachricht
              </label>
              <textarea
                className="textarea"
                name="message"
                placeholder="Projekt, Ziel, Zeitrahmen …"
              />
            </div>
            <div className="text-xs text-gray-500">
              Mit dem Senden stimmst du der Verarbeitung deiner Angaben zur
              Kontaktaufnahme zu.
            </div>
            <div className="flex gap-3">
              <button type="submit" className="btn-primary">
                Anfrage senden
              </button>
              <a href="mailto:info@bnature.example" className="btn-ghost">
                Direkt per Mail
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
