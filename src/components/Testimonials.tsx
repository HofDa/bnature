const items = [
  {
    quote:
      'Die Monitoring-Berichte sind klar und praxisnah. So konnten wir unsere Flächen gezielt verbessern.',
    name: 'Mag. A. Muster',
    role: 'Leitung Naturpark XY',
  },
  {
    quote:
      'Unsere Gäste schätzen die naturnahen Bereiche – und das Team weiß, warum wir was pflegen.',
    name: 'H. Hofer',
    role: 'Hotelbetrieb',
  },
];

export default function Testimonials() {
  return (
    <section className="section-muted">
      <div className="container">
        <h2 className="h2">Stimmen aus Projekten</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {items.map((t) => (
            <figure key={t.name} className="card p-6">
              <blockquote className="text-gray-800">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-gray-600">
                {t.name} · {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
