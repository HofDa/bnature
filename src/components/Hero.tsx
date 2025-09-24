import Icon from './ui/Icon';
import { Leaf, BadgeCheck } from 'lucide-react';
import HeroImage from '../assets/hero.jpg';

export default function Hero() {
  return (
    <section className="section-muted">
      <div className="container grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="badge">
            <Icon as={Leaf} />
            bnature · Monitoring, Bildung, Beratung
            <span className="ml-2 inline-flex items-center gap-1 text-leaf-700">
              <Icon as={BadgeCheck} size={18} />
              geprüft
            </span>
          </span>
          <h1 className="mt-6 h1">
            Biodiversität messbar machen.
            <br /> Lebensräume naturnah gestalten.
          </h1>
          <p className="mt-5 lead max-w-prose">
            Wissenschaft verbindet sich mit Praxis – für messbare ökologische
            Wirkung.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#kontakt" className="btn-primary">
              Projekt anfragen
            </a>
            <a href="#leistungen" className="btn-ghost">
              Leistungen ansehen
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Expertise von Biolog:innen, Ökolog:innen, Naturvermittler:innen und
            Gärtner:innen
          </p>
        </div>

        <div
          className="relative rounded-3xl overflow-hidden shadow-sm ring-1 ring-black/5
                aspect-[16/10] lg:aspect-auto lg:h-[420px]"
        >
          <img
            src={HeroImage}
            alt="Fallkaefer auf Schafgarbe"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
