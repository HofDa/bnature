export default function Projects() {
  return (
    <section id="projekte" className="section">
      <div className="container">
        <h2 className="text-2xl font-extrabold md:text-3xl">Ausgewählte Projekte</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <figure className="card">
            <div className="aspect-[4/3] w-full rounded-xl bg-gray-100" />
            <figcaption className="mt-3 text-sm text-gray-700">Beispielprojekt 1</figcaption>
          </figure>
          <figure className="card">
            <div className="aspect-[4/3] w-full rounded-xl bg-gray-100" />
            <figcaption className="mt-3 text-sm text-gray-700">Beispielprojekt 2</figcaption>
          </figure>
          <figure className="card">
            <div className="aspect-[4/3] w-full rounded-xl bg-gray-100" />
            <figcaption className="mt-3 text-sm text-gray-700">Beispielprojekt 3</figcaption>
          </figure>
        </div>
      </div>
      <div className="mt-12 h-2 w-full dotted-path text-primary-700"></div>
    </section>
  );
}
