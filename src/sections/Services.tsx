export default function Services() {
return (
<section id="leistungen" className="border-t bg-gray-50/60 section">
<div className="container">
<h2 className="text-2xl font-extrabold md:text-3xl text-bark-700">Unsere Leistungen</h2>
<p className="mt-2 max-w-prose text-bark-700/80">
Fachlich fundiert, klar strukruriert....
</p>
<div className="mt-10 grid gap-6 md:grid-cols-3">
<div className="card">
<h3 className="text-lg font-semibold">Monitoring & Erhebungen</h3>
<p className="mt-2 text-bark-700/80">Flora und Fauna – sauber erhoben & dokumentiert.</p>
</div>
<div className="card">
<h3 className="text-lg font-semibold">Umweltbildung</h3>
<p className="mt-2 text-bark-700/80">Workshops, Führungen – Wissen erlebbar machen.</p>
</div>
<div className="card">
<h3 className="text-lg font-semibold">Naturnahe Gestaltung</h3>
<p className="mt-2 text-bark-700/80">Flächenkonzepte für Gemeinden, Schulen, Hotels & Betriebe – praxisnah.</p>
</div>
</div>
</div>
</section>
);
}