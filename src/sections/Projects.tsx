export default function Projects() {
return (
<section id="projekte" className="section">
<div className="container">
<h2 className="text-2xl font-extrabold md:text-3xl text-bark-700">Ausgewählte Projekte</h2>
<div className="mt-8 grid gap-6 md:grid-cols-3">
{[1, 2, 3].map((i) => (
<figure key={i} className="card">
<div className="aspect-[4/3] w-full rounded-xl bg-gray-100" />
<figcaption className="mt-3 text-sm text-bark-700/80">Beispielprojekt {i}</figcaption>
</figure>
))}
</div>
</div>
</section>
);
}