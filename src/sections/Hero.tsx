export default function Hero() {
return (
<section id="top" className="relative overflow-hidden section">
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
</div>


<div className="relative">
<div className="aspect-[4/3] w-full rounded-2xl border border-primary-200/60 bg-white shadow-sm" />
<p className="mt-3 text-xs text-bark-700/60">Platzhalter für Titelbild / Monitoring-Diagramm / Teamfoto.</p>
</div>
</div>
</section>
);
}