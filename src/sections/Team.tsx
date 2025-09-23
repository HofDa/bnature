export default function Team() {
return (
<section id="team" className="bg-primary-50  section">
<div className="container">
<h2 className="text-2xl font-extrabold md:text-3xl text-bark-700">Team</h2>
<p className="mt-2 max-w-prose text-bark-700/80">
Wir kombinieren Biologie, Umweltbildung und Gartengestaltung zu Lösungen, die wissenschaftlich fundiert und in der Praxis machbar sind.
</p>
<div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
<div className="card">
<div className="aspect-square w-full rounded-xl bg-gray-100" />
<div className="mt-3">
<div className="font-semibold text-bark-700">Nils Bertol</div>
<div className="text-sm text-bark-700/80">Vegetation, Projektmanagment, Didaktik.....</div>
</div>
</div>
<div className="card">
<div className="aspect-square w-full rounded-xl bg-gray-100" />
<div className="mt-3">
<div className="font-semibold text-bark-700">David Hofer</div>
<div className="text-sm text-bark-700/80">Entomologie, Bestäuber, Didaktik....</div>
</div>
</div>
<div className="card">
<div className="aspect-square w-full rounded-xl bg-gray-100" />
<div className="mt-3">
<div className="font-semibold text-bark-700">Marco Zema</div>
<div className="text-sm text-bark-700/80">......</div>
</div>
</div>
</div>
</div>
</section>
);
}