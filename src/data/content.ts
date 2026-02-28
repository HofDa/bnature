export type Lang = 'de' | 'it';

type Faq = { q: string; a: string };
type Collaborator = {
  name: string;
  description: string;
  image: 'nils_bertol' | 'katherina_damisch' | 'pau_luther' | 'johannes_ruedl' | 'david_hofer' | 'birgith_unterthurner';
};
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
    emailLabel: string;
    messageLabel: string;
    privacyNotice: string;
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
          text: 'Biodiversitätsmonitoring und ökologische Erhebungen mit botanischer und zoologischer Expertise. Standardisierte Vegetationsaufnahmen, Artenerfassung, Habitatbewertung und langfristige Erfolgskontrolle für fundierte Umweltentscheidungen.',
          bullets: ['Methodik nach Stand der Wissenschaft', 'Dokumentation und Ergebnisse', 'Langfristige Erfolgskontrolle'],
        },
        {
          title: 'Bildung für nachhaltige Entwicklung',
          text: 'Workshops, Exkursionen und Bildungsformate, die ökologische Zusammenhänge erfahrbar machen. Wissenschaftlich fundierte Inhalte, innovative Vermittlungskonzepte und die Verbindung analoger und digitaler Lernformate.',
          bullets: ['Didaktische Konzepte', 'Mehrsprachige Materialien', 'Veranstaltungen und innovative Vermittlung'],
        },
        {
          title: 'Naturnahe Gestaltung',
          text: 'Planung und fachliche Begleitung artenreicher, standortgerechter Flächen. Entwicklung ökologisch fundierter Konzepte zur Förderung von Biodiversität, Strukturvielfalt und funktionalen Lebensräumen.',
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
      text: 'Wir verbinden ökologische Expertise mit didaktischer Erfahrung und klarer Kommunikation.',
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
          image: 'nils_bertol',
        },
        {
          name: 'Katherina Damisch',
          description: 'Katherina Damisch ist Zoologin, Bergwanderführerin und Naturpädagogin mit Schwerpunkten in Feldarbeit, Landschaftspflege und Biodiversitätsmonitoring. Sie verbindet praktische Naturschutzarbeit mit wissenschaftlicher Expertise und vermittelt auch komplexe Inhalte klar und nachvollziehbar.',
          image: 'katherina_damisch',
        },
        {
          name: 'Paul Luther',
          description: 'Paul Luther bringt langjährige gärtnerische Erfahrung mit und verbindet gestalterisches Gespür mit ökologischer Verantwortung. Sein Fokus liegt auf harmonischen Lösungen, die Biodiversität fördern und langfristig funktionieren.',
          image: 'pau_luther',
        },
        {
          name: 'Birgith Unterthurner',
          description: 'Birgith Unterturner arbeitet an der Schnittstelle von Wildtierökologie, Vermittlung und Illustration. Mit wissenschaftlicher Genauigkeit und gestalterischem Feingefühl übersetzt sie komplexe Inhalte in zugängliche Bilder und Formate.',
          image: 'birgith_unterthurner',
        },
        {
          name: 'Johannes Ruedl',
          description: 'Johannes Ruedl verbindet Didaktik und Design mit einer breiten Naturkenntnis. Ob Wald oder Wiese, Berge oder Geologie – er entwickelt anschauliche Vermittlungsformate und bringt komplexe Inhalte verständlich auf den Punkt.',
          image: 'johannes_ruedl',
        },
        {
          name: 'David Hofer',
          description: 'David Hofer arbeitet zu Wildbienen, Tagfaltern und Pilzen im Kontext der Biodiversität. Er verantwortet Datenerhebung und -auswertung und sorgt für eine verlässliche digitale Struktur im Hintergrund der Projekte.',
          image: 'david_hofer',
        },
        
      ],
    },
    faq: {
      heading: 'Informationen im Überblick',
      items: [
        { q: 'Wie läuft ein Erstgespräch ab?', a: 'Das Erstgespräch dauert in der Regel 30–45 Minuten und findet online oder vor Ort statt. Wir klären Zielsetzung, Rahmenbedingungen und vorhandene Flächenstrukturen. Bei Bedarf erfolgt eine erste Begutachtung vor Ort. Anschließend definieren wir einen realistischen Zeitplan sowie die nächsten fachlichen Schritte.' },
        { q: 'Welche Ergebnisse bekomme ich?', a: 'Sie erhalten ein fachlich fundiertes Konzept mit klar priorisierten Empfehlungen. Je nach Projektumfang umfasst dies Bestandsanalyse, ökologische Bewertung, konkrete Maßnahmenvorschläge sowie Hinweise zur Umsetzung und langfristigen Entwicklung der Fläche.' },
        { q: 'Für wen ist b*nature geeignet?', a: 'Unsere Leistungen richten sich an Gemeinden, Schulen, Hotels, landwirtschaftliche Betriebe, Unternehmen, Institutionen sowie engagierte Privatpersonen. Besonders geeignet für alle, die Biodiversität fachlich fundiert fördern und nachhaltige Maßnahmen strukturiert umsetzen möchten.' },
      ],
    },
    contact: {
      heading: 'Kontakt',
      lead: 'Teilen Sie uns kurz mit, wobei wir unterstützen dürfen.',
      button: 'Anfrage senden',
      mailLabel: 'Direkt per Mail',
      emailLabel: 'E-Mail',
      messageLabel: 'Nachricht',
      privacyNotice: 'Mit dem Senden stimmst du der Verarbeitung deiner Angaben (E-Mail und Nachricht) zur Kontaktaufnahme zu.',
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
    title: 'b*nature - Monitoraggio, educazione ambientale, progettazione naturalistica',
    description:
      'b*nature unisce scienza, pratica e storytelling: monitoraggio, educazione ambientale e progettazione di spazi naturali.',
    nav: { services: 'Servizi', about: 'Chi siamo', faq: 'FAQ', contact: 'Contatti' },
    hero: {
      badge: 'b*nature - monitoraggio, educazione, consulenza',
      verified: 'verificato',
      heading: 'Rendere misurabile la biodiversita. Progettare habitat in modo naturale.',
      subheading: 'La scienza incontra la pratica - per impatti ecologici misurabili.',
      ctaPrimary: 'Richiedi un progetto',
      ctaSecondary: 'Vedi i servizi',
      expertise: 'Competenze di biologhe e biologi, ecologhe e ecologi, educatrici e educatori ambientali e giardinieri.',
    },
    services: {
      heading: 'I nostri servizi',
      lead: 'Dall analisi all implementazione - in modo trasparente ed efficace.',
      more: 'Scopri di piu',
      items: [
        {
          title: 'Rilievi e consulenza',
          text: 'Monitoraggio della biodiversita e rilievi ecologici con competenze botaniche e zoologiche. Rilievi standardizzati della vegetazione, censimento delle specie, valutazione degli habitat e controllo degli effetti nel lungo periodo per decisioni ambientali fondate.',
          bullets: ['Metodologia aggiornata secondo lo stato della scienza', 'Documentazione e risultati', 'Controllo degli effetti nel lungo periodo'],
        },
        {
          title: 'Educazione ambientale',
          text: 'Workshop, escursioni e format educativi che rendono tangibili le relazioni ecologiche. Contenuti fondati scientificamente, concetti innovativi di divulgazione e integrazione di formati di apprendimento analogici e digitali.',
          bullets: ['Concetti didattici', 'Materiali multilingue', 'Eventi e divulgazione innovativa'],
        },
        {
          title: 'Progettazione naturalistica',
          text: 'Pianificazione e accompagnamento tecnico di aree ricche di specie e adatte al sito. Sviluppo di concetti ecologicamente fondati per promuovere biodiversita, diversita strutturale e habitat funzionali.',
          bullets: ['Concetti di piantumazione e cura', 'Moduli habitat', 'Check biodiversita'],
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
        'Contenuti multilingue facili da comunicare',
      ],
      callouts: {
        scienceTitle: 'Base scientifica',
        scienceText: 'Letteratura aggiornata, standard e piani di monitoraggio solidi - fondati e tracciabili.',
        impactTitle: 'Pratica e impatto',
        impactText: 'Pianificabile, realizzabile, misurabile - con priorita chiare e verifica dei risultati.',
      },
      cta: 'Richiedi colloquio',
    },
    collaborators: {
      heading: 'Il nostro team',
      lead: 'Fondato sulla scienza. Realizzato con esperienza pratica.',
      items: [
        {
          name: 'Nils Bertol',
          description:
            'Nils Bertol e botanico con specializzazione in rilievi floristici e analisi della vegetazione. Coordina i lavori sul campo e unisce competenza botanica e pianificazione efficiente dei progetti.',
          image: 'nils_bertol',
        },
        {
          name: 'Katherina Damisch',
          description:
            'Katherina Damisch e zoologa, accompagnatrice di media montagna ed educatrice ambientale. I suoi ambiti principali sono il lavoro sul campo, la cura del paesaggio e il monitoraggio della biodiversita. Unisce pratica concreta nella conservazione della natura, solida base scientifica e una comunicazione chiara anche dei contenuti complessi.',
          image: 'katherina_damisch',
        },
        {
          name: 'Paul Luther',
          description:
            'Paul Luther porta con se una lunga esperienza nel giardinaggio e combina sensibilita progettuale e responsabilita ecologica. Il suo focus e su soluzioni armoniche che promuovono la biodiversita e funzionano nel lungo periodo.',
          image: 'pau_luther',
        },
        {
          name: 'Birgith Unterthurner',
          description:
            'Birgith Unterthurner lavora all intersezione tra ecologia della fauna selvatica, divulgazione e illustrazione. Con rigore scientifico e sensibilita progettuale traduce contenuti complessi in immagini e formati accessibili.',
          image: 'birgith_unterthurner',
        },
        {
          name: 'Johannes Ruedl',
          description:
            'Johannes Ruedl unisce didattica e design a una vasta conoscenza della natura. Che si tratti di bosco o prato, montagna o geologia, sviluppa formati di divulgazione chiari e rende comprensibili anche i contenuti complessi.',
          image: 'johannes_ruedl',
        },
        {
          name: 'David Hofer',
          description:
            'David Hofer lavora all intersezione tra ricerca sulla biodiversita e IT. I suoi ambiti principali sono api selvatiche, farfalle diurne e funghi, oltre alla preparazione digitale, analisi e visualizzazione di dati ecologici.',
          image: 'david_hofer',
        },
      ],
    },
    faq: {
      heading: 'Informazioni in sintesi',
      items: [
        { q: 'Come si svolge il primo colloquio?', a: 'Il primo colloquio dura di norma 30-45 minuti e si svolge online oppure sul posto. Definiamo obiettivi, condizioni di contesto e strutture esistenti dell area. Se necessario effettuiamo una prima valutazione in loco. In seguito definiamo un calendario realistico e i prossimi passaggi tecnici.' },
        { q: 'Quali risultati ricevo?', a: 'Riceverai un concept tecnicamente fondato con raccomandazioni chiaramente prioritarie. A seconda della portata del progetto puo includere analisi dello stato attuale, valutazione ecologica, proposte concrete di intervento e indicazioni per l attuazione e lo sviluppo a lungo termine dell area.' },
        { q: 'Per chi e adatto b*nature?', a: 'I nostri servizi si rivolgono a Comuni, scuole, hotel, aziende agricole, imprese, istituzioni e privati particolarmente motivati. Sono particolarmente adatti a chi desidera promuovere la biodiversita con basi tecniche solide e attuare misure sostenibili in modo strutturato.' },
      ],
    },
    contact: {
      heading: 'Contatti',
      lead: 'Dicci brevemente come possiamo supportarti.',
      button: 'Invia richiesta',
      mailLabel: 'Direttamente via mail',
      emailLabel: 'E-mail',
      messageLabel: 'Messaggio',
      privacyNotice: 'Con l invio acconsenti al trattamento dei tuoi dati (e-mail e messaggio) per ricontattarti.',
      location: 'Alto Adige - Italia',
      successMessage: 'Grazie! La tua richiesta e stata inviata. Ti contatteremo presto.',
      errorMessage: 'Controlla i campi del modulo e riprova.',
    },
    cta: {
      heading: 'E il momento di trasformare il tuo progetto in realta.',
      text: 'Primo colloquio gratuito - definiamo obiettivi, quadro di riferimento e prossimi passi.',
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
