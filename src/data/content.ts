export type Lang = 'de' | 'it';

type Faq = { q: string; a: string };
type Collaborator = { name: string; description: string; image: 'field' | 'team' | 'workshop' };
type Partner = { name: string; url?: string; logo?: string };

export type PageContent = {
  langLabel: string;
  title: string;
  description: string;
  nav: { services: string; about: string; faq: string; contact: string };
  hero: {
    badge: string;
    verified: string;
    heading: string;
    subheading: string;
    ctaPrimary: string;
    ctaSecondary: string;
    expertise: string;
  };
  services: { heading: string; lead: string; more: string; items: { title: string; text: string; bullets: string[] }[] };
  partners: { heading: string; items: Partner[] };
  about: {
    heading: string;
    text: string;
    bullets: string[];
    callouts: {
      scienceTitle: string;
      scienceText: string;
      impactTitle: string;
      impactText: string;
    };
    cta: string;
  };
  collaborators: { heading: string; lead: string; items: Collaborator[] };
  faq: { heading: string; items: Faq[] };
  contact: {
    heading: string;
    lead: string;
    button: string;
    mailLabel: string;
    location: string;
    successMessage: string;
    errorMessage: string;
  };
  cta: { heading: string; text: string; primary: string };
  footer: { tagline: string; rights: string; links: { impressum: string; privacy: string; cookies: string } };
};

export const content: Record<Lang, PageContent> = {
  de: {
    langLabel: 'DE',
    title: 'b*nature - Monitoring, Umweltbildung, naturnahe Gestaltung',
    description:
      'b*nature verbindet Wissenschaft, Praxis und Storytelling: Monitoring, Umweltbildung und naturnahe Flächengestaltung.',
    nav: { services: 'Leistungen', about: 'Über uns', faq: 'FAQ', contact: 'Kontakt' },
    hero: {
      badge: 'b*nature - Monitoring, Bildung, Beratung',
      verified: 'geprüft',
      heading: 'Biodiversität messbar machen. Lebensräume naturnah gestalten.',
      subheading: 'Wissenschaft verbindet sich mit Praxis - für messbare ökologische Wirkung.',
      ctaPrimary: 'Projekt anfragen',
      ctaSecondary: 'Leistungen ansehen',
      expertise: 'Expertise von Biolog:innen, Ökolog:innen, Naturvermittler:innen und Gärtner:innen',
    },
    services: {
      heading: 'Unsere Leistungen',
      lead: 'Von der Analyse bis zur Umsetzung - transparent und wirksam.',
      more: 'Mehr erfahren',
      items: [
        {
          title: 'Erhebungen & Beratung',
          text: 'Standardisierte Erfassungen, klare Befunde, belastbare Entscheidungen.',
          bullets: ['Methodik nach Stand der Wissenschaft', 'Dokumentation und Ergebnisse', 'Langfristige Erfolgskontrolle'],
        },
        {
          title: 'Bildung für nachhaltige Entwicklung',
          text: 'Workshops, Exkursionen und Formate, die Natur erlebbar machen.',
          bullets: ['Didaktische Konzepte', 'Mehrsprachige Materialien', 'Outreach und Events'],
        },
        {
          title: 'Naturnahe Gestaltung',
          text: 'Planung und Begleitung fur artenreiche, standortgerechte Flächen.',
          bullets: ['Pflanzkonzepte und Pflege', 'Habitat-Module', 'Biodiversitäts-Check'],
        },
      ],
    },
    partners: {
      heading: 'Unser Netzwerk',
      items: [
        { name: 'EURAC', url: '' },
        { name: 'Gemeinde Brixen', url: '' },
        { name: 'Raiffeisenkasse Bozen', url: '' },
        { name: 'Bildungshaus Kloster Neustift', url: '' },
      ],
    },
    about: {
      heading: 'Warum b*nature?',
      text: 'Wir verbinden okologische Expertise mit didaktischer Erfahrung und klarer Kommunikation.',
      bullets: [
        'Transparenter Ablauf von Erstgespräch bis Monitoring',
        'Zielgruppengerecht fur Gemeinden, Hotels, Schulen und Betriebe',
        'Mehrsprachige, gut vermittelbare Inhalte',
      ],
      callouts: {
        scienceTitle: 'Wissenschaftliche Basis',
        scienceText: 'Aktuelle Literatur, Standards und Monitoring-Designs - fundiert und nachvollziehbar.',
        impactTitle: 'Praxis und Wirkung',
        impactText: 'Planbar, umsetzbar, messbar - mit klaren Prioritäten und Erfolgskontrolle.',
      },
      cta: 'Erstgesprach anfragen',
    },
    collaborators: {
      heading: 'Unser Team',
      lead: 'Wissenschaftlich fundiert. Praxisnah umgesetzt.',
      items: [
        {
          name: 'Nils Bertol',
          description: 'Nils Bertol ist Botaniker mit Schwerpunkt auf floristischen Erhebungen und Vegetationsanalyse. Er koordiniert Feldarbeiten und verbindet botanische Expertise mit effizienter Projektplanung.',
          image: 'field',
        },
        {
          name: 'Marco Zema',
          description: 'Marco Zema ist Naturgärtner und verantwortlich für die praktische Umsetzung naturnaher Gestaltungsmaßnahmen. Ob mit Holz, Pflanzen oder Handwerk – er sorgt dafür, dass Konzepte im Gelände funktional und ökologisch sinnvoll umgesetzt werden.',
          image: 'workshop',
        },
        {
          name: 'Katherina Damisch',
          description: 'Katherina Damisch verbindet Vermittlung und Konzeptarbeit mit praktischer Umsetzung. Sie entwickelt Formate, strukturiert Prozesse und greift auch selbst zu Werkzeug und Material, wenn Maßnahmen der Biodiversität zugutekommen.',
          image: 'team',
        },
        {
          name: 'Paul Luther',
          description: 'Paul Luther bringt langjährige gärtnerische Erfahrung mit und verbindet gestalterisches Gespür mit ökologischer Verantwortung. Sein Fokus liegt auf harmonischen Lösungen, die Biodiversität fördern und langfristig funktionieren.',
          image: 'team',
        },
        {
          name: 'Birgith Unterthurner',
          description: 'Birgith Unterturner arbeitet an der Schnittstelle von Wildtierökologie, Vermittlung und Illustration. Mit wissenschaftlicher Genauigkeit und gestalterischem Feingefühl übersetzt sie komplexe Inhalte in zugängliche Bilder und Formate.',
          image: 'team',
        },
        {
          name: 'Johannes Ruedl',
          description: 'Johannes Ruedl verbindet Didaktik und Design mit einer breiten Naturkenntnis. Ob Wald oder Wiese, Berge oder Geologie – er entwickelt anschauliche Vermittlungsformate und bringt komplexe Inhalte verständlich auf den Punkt.',
          image: 'team',
        },
        {
          name: 'David Hofer',
          description: 'David Hofer arbeitet an der Schnittstelle von Biodiversitätsforschung und IT. Seine Schwerpunkte liegen auf Wildbienen, Tagfaltern und Pilzen sowie auf der digitalen Aufbereitung, Analyse und Visualisierung ökologischer Daten.',
          image: 'team',
        },
      ],
    },
    faq: {
      heading: 'Häufige Fragen',
      items: [
        { q: 'Wie lauft ein Erstgesprach ab?', a: '30-45 Minuten online oder vor Ort mit Zielklärung, Flächenbegutachtung und Zeitplan.' },
        { q: 'Welche Ergebnisse bekomme ich?', a: 'Ein passendes Konzept mit klaren Empfehlungen und Prioritäten.' },
        { q: 'Für wen ist b*nature geeignet?', a: 'Für Gemeinden, Schulen, Hotels, Betriebe, Institutionen und Privatpersonen.' },
      ],
    },
    contact: {
      heading: 'Kontakt',
      lead: 'Teilen Sie uns kurz mit, wobei wir unterstützen dürfen.',
      button: 'Anfrage senden',
      mailLabel: 'Direkt per Mail',
      location: 'Südtirol - Italien',
      successMessage: 'Danke! Ihre Anfrage wurde gesendet. Wir melden uns zeitnah.',
      errorMessage: 'Bitte prüfen Sie die Eingaben im Formular.',
    },
    cta: {
      heading: 'Zeit, Ihr Projekt Wirklichkeit werden zu lassen.',
      text: 'Kostenfreies Erstgespräch - wir klären Ziele, Rahmen und nächste Schritte.',
      primary: 'Erstgespräch anfragen',
    },
    footer: {
      tagline: 'Monitoring - Umweltbildung - Naturnahe Gestaltung',
      rights: 'Alle Rechte vorbehalten.',
      links: {
        impressum: 'Impressum',
        privacy: 'Datenschutz',
        cookies: 'Cookies',
      },
    },
  },
  it: {
    langLabel: 'IT',
    title: 'b*nature - Monitoraggi, educazione ambientale, progettazione naturalistica',
    description:
      'b*nature unisce scienza e pratica: monitoraggi, educazione ambientale e progettazione di aree naturalistiche.',
    nav: { services: 'Servizi', about: 'Chi siamo', faq: 'FAQ', contact: 'Contatti' },
    hero: {
      badge: 'bnature - monitoraggi, educazione, consulenza',
      verified: 'verificato',
      heading: 'Rendere misurabile la biodiversita. Progettare habitat a misura di natura.',
      subheading: 'La scienza incontra la pratica - per impatti ecologici misurabili.',
      ctaPrimary: 'Richiedi colloquio',
      ctaSecondary: 'Vedi i servizi',
      expertise: 'Competenza di biologhe e biologi, ecologhe e ecologi, educatrici e educatori ambientali.',
    },
    services: {
      heading: 'I nostri servizi',
      lead: 'Dall analisi all implementazione - in modo trasparente ed efficace.',
      more: 'Scopri di piu',
      items: [
        {
          title: 'Monitoraggi & rilievi',
          text: 'Rilevazioni standardizzate, risultati chiari, decisioni affidabili.',
          bullets: ['Metodologie aggiornate', 'Documentazione e risultati', 'Controllo degli effetti nel tempo'],
        },
        {
          title: 'Educazione ambientale',
          text: 'Workshop, escursioni e format interattivi.',
          bullets: ['Approccio didattico', 'Materiali multilingue', 'Outreach ed eventi'],
        },
        {
          title: 'Progettazione naturalistica',
          text: 'Pianificazione e accompagnamento di aree ricche di specie.',
          bullets: ['Schemi di piantumazione e cura', 'Moduli habitat', 'Check biodiversita'],
        },
      ],
    },
    partners: {
      heading: 'Il nostro network',
      items: [
        { name: 'EURAC', url: '' },
        { name: 'Comune di Bressanone', url: '' },
        { name: 'Cassa Raiffeisen Bolzano', url: '' },
        { name: 'Centro di formazione Novacella', url: '' },
      ],
    },
    about: {
      heading: 'Perche b*nature?',
      text: 'Uniamo competenze ecologiche, esperienza didattica e comunicazione chiara.',
      bullets: [
        'Processo trasparente dal primo colloquio al monitoraggio',
        'Adatto a Comuni, hotel, scuole e aziende',
        'Contenuti multilingue e facilmente fruibili',
      ],
      callouts: {
        scienceTitle: 'Base scientifica',
        scienceText: 'Letteratura aggiornata, standard e monitoraggi solidi - in modo chiaro e tracciabile.',
        impactTitle: 'Pratica e impatto',
        impactText: 'Pianificabile, realizzabile, misurabile - con priorita chiare e controllo dei risultati.',
      },
      cta: 'Richiedi colloquio',
    },
    collaborators: {
      heading: 'Alcuni dei nostri collaboratori',
      lead: 'Persone e organizzazioni con cui lavoriamo su monitoraggi, educazione ambientale e progettazione.',
      items: [
        {
          name: 'Partner dei parchi naturali',
          description: 'Rilievi sul campo e progettazione di monitoraggi per obiettivi di biodiversita a lungo termine.',
          image: 'field',
        },
        {
          name: 'Partner educativi',
          description: 'Collaborazioni con scuole e centri formativi per percorsi ambientali concreti.',
          image: 'workshop',
        },
        {
          name: 'Progetti comunali',
          description: 'Supporto ai comuni per interventi naturalistici e verifica dei risultati.',
          image: 'team',
        },
      ],
    },
    faq: {
      heading: 'Domande frequenti',
      items: [
        { q: 'Come si svolge il primo colloquio?', a: '30-45 minuti online o in loco per definire obiettivi e tempi.' },
        { q: 'Quali risultati ricevo?', a: 'Un concept su misura con raccomandazioni concrete e priorita.' },
        { q: 'Per chi e adatto b*nature?', a: 'Per Comuni, scuole, hotel, aziende, istituzioni e privati.' },
      ],
    },
    contact: {
      heading: 'Contatti',
      lead: 'Dicci brevemente come possiamo supportarti.',
      button: 'Invia richiesta',
      mailLabel: 'Direttamente via mail',
      location: 'Alto Adige - Italia',
      successMessage: 'Grazie! La tua richiesta e stata inviata. Ti contatteremo presto.',
      errorMessage: 'Controlla i campi del modulo e riprova.',
    },
    cta: {
      heading: 'E ora di realizzare il tuo progetto.',
      text: 'Colloquio iniziale gratuito per definire obiettivi e prossimi passi.',
      primary: 'Richiedi colloquio',
    },
    footer: {
      tagline: 'Monitoraggi - Educazione ambientale - Progettazione naturalistica',
      rights: 'Tutti i diritti riservati.',
      links: {
        impressum: 'Impressum',
        privacy: 'Privacy',
        cookies: 'Cookie',
      },
    },
  },
};
