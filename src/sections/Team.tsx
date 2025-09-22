export default function Team() {
  return (
    <section id="team" className="border-t bg-gray-50/60 section">
      <div className="container">
        <h2 className="text-2xl font-extrabold md:text-3xl">Team</h2>
        <p className="mt-2 max-w-prose text-gray-600">
          Wir kombinieren Biologie, Umweltbildung und Technologie zu Lösungen, die wissenschaftlich fundiert und in der Praxis machbar sind.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="card">
            <div className="aspect-square w-full rounded-xl bg-gray-100" />
            <div className="mt-3">
              <div className="font-semibold">David Hofer</div>
              <div className="text-sm text-gray-600">Biodiversitätsberater & Storyteller</div>
            </div>
          </div>
          <div className="card">
            <div className="aspect-square w-full rounded-xl bg-gray-100" />
            <div className="mt-3">
              <div className="font-semibold">Benjamin Hofer</div>
              <div className="text-sm text-gray-600">Senior Full-Stack Engineer</div>
            </div>
          </div>
          <div className="card">
            <div className="aspect-square w-full rounded-xl bg-gray-100" />
            <div className="mt-3">
              <div className="font-semibold">Friends & Partner</div>
              <div className="text-sm text-gray-600">Biologie • Didaktik • Grafik • Forschung</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 h-2 w-full dotted-path text-primary-700"></div>
    </section>
  );
}
