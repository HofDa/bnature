// src/sections/Hero.tsx
import LeafBackdrop from "../components/LeafBackdrop";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden section">
      <LeafBackdrop />
      <div className="container grid gap-10 md:grid-cols-2">
        <div>
          <span className="badge mb-3">Monitoring • Umweltbildung • Beratung</span>
          <h1 className="font-extrabold text-4xl md:text-5xl text-bark-700">
            Biodiversität sichtbar machen.<br className="hidden md:block" /> Wirkung entfalten.
          </h1>
          <p className="mt-4 max-w-prose text-lg text-bark-700/80">
            Wir sind Biolog:innen aus Südtirol und entwickeln fundierte Monitoring- und Gestaltungskonzepte –
            für Gemeinden, Schulen, Hotels und Unternehmen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#kontakt" className="btn-primary">Angebot anfragen</a>
            <a href="#leistungen" className="btn-outline">Leistungen ansehen</a>
          </div>

          {/* Mini-Features in „Kärtchen“-Optik */}
          <div className="mt-10 grid grid-cols-2 gap-4 text-sm">
            {[
              ["Wissenschaftlich fundiert", "Aktuelle Methoden, sauber dokumentiert."],
              ["Umsetzungsorientiert", "Maßnahmen, die wirklich machbar sind."],
              ["Partizipativ", "Einbindung von Schulen & Gemeinden."],
              ["Lokal verankert", "Direkt aus Südtirol – kurze Wege."],
            ].map(([t, d]) => (
              <div key={t} className="card">
                <div className="font-semibold">{t}</div>
                <div className="mt-1 text-bark-700/75">{d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bild-/Diagramm-Platzhalter */}
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl border border-primary-200/60 bg-white/70 shadow-sm" />
          <div className="absolute -bottom-6 left-6 right-6 h-2 rounded-full dotted-path text-primary-700" />
          <p className="mt-8 text-xs text-bark-700/60">
            Platzhalter für Titelbild / Monitoring-Diagramm / Teamfoto.
          </p>
        </div>
      </div>
    </section>
  );
}
