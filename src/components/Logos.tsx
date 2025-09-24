const logos = [
  { src: '/logo-park.svg', alt: 'EURAC' },
  { src: '/logo-geo.svg', alt: 'Gemeinde Brixen' },
  { src: '/logo-city.svg', alt: 'Raiffeisenkasse Bozen' },
  { src: '/logo-school.svg', alt: 'Bildungshaus Kloster Neustift' },
];

export default function Logos() {
  return (
    <section id="referenzen" className="section">
      <div className="container text-center">
        <p className="text-sm text-gray-600">Vertraut von</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 items-center gap-8 grayscale opacity-80">
          {logos.map((l) => (
            <img
              key={l.alt}
              src={l.src}
              alt={l.alt}
              className="mx-auto h-10 w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
