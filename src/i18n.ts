// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// --- Inline resources (DE + IT) ---
const resources = {
  de: {
    translation: {
      meta: {
        title: 'b*nature – Monitoring, Umweltbildung, naturnahe Gestaltung',
        description:
          'b*nature verbindet Wissenschaft, Praxis und Storytelling: Monitoring & Erhebungen, Umweltbildung und naturnahe Flächengestaltung für Gemeinden, Hotels, Schulen & Betriebe.',
      },
      alt: {
        logo: 'b*nature Logo',
        heroImage: 'Illustration: naturnah gestaltete Fläche',
        heroBadge: 'Biodiversität & Beratung',
        aboutImage: 'bnature – Team, Arbeit im Feld und Beratung',
      },
      nav: {
        home: 'Start',
        about: 'Über uns',
        services: 'Leistungen',
        faq: 'FAQ',
        contact: 'Kontakt',
      },
      hero: {
        badge: 'bnature · Monitoring, Bildung, Beratung',
        verified: 'geprüft',
        title: 'Biodiversität messbar machen.\nLebensräume naturnah gestalten.',
        subtitle:
          'Wissenschaft verbindet sich mit Praxis – für messbare ökologische Wirkung.',
        ctaPrimary: 'Projekt anfragen',
        ctaSecondary: 'Leistungen ansehen',
        expertise:
          'Expertise von Biolog:innen, Ökolog:innen, Naturvermittler:innen und Gärtner:innen',
      },
      about: {
        heading: 'Warum b*nature?',
        text: 'Wir verbinden ökologische Expertise mit didaktischer Erfahrung und klarer Kommunikation. So entstehen Projekte, die Menschen erreichen und Lebensräume nachweislich verbessern.',
        callouts: {
          scienceTitle: 'Wissenschaftliche Basis',
          scienceText:
            'Aktuelle Literatur, Standards & Monitoring-Designs – fundiert und nachvollziehbar.',
          impactTitle: 'Praxis & Wirkung',
          impactText:
            'Planbar, umsetzbar, messbar – mit klaren Prioritäten und Erfolgskontrolle.',
        },
        usps: {
          process:
            'Transparente Prozesse: Erstgespräch, Maßnahmenplan, Umsetzung, Monitoring.',
          target: 'Zielgruppengerecht: Gemeinden, Hotels, Schulen & Betriebe.',
          didactic:
            'Mehrsprachig & didaktisch: Materialien und Formate, die Wissen erlebbar machen.',
        },
        cta: 'Erstgespräch anfragen',
      },
      services: {
        heading: 'Unsere Leistungen',
        lead: 'Von der Analyse bis zur Umsetzung – alles aus einer Hand, transparent und wirksam.',
        monitoring: {
          title: 'Monitoring & Erhebungen',
          text: 'Faunistische und floristische Erhebungen, Designs & Reporting.',
          desc: 'Standardisierte Erfassungen, klare Befunde, belastbare Entscheidungen.',
          bullets: [
            'Methodik nach Stand der Wissenschaft',
            'Dokumentation & Ergebnisse',
            'Langfristige Erfolgskontrolle',
          ],
        },
        education: {
          title: 'Umweltbildung & Formate',
          text: 'Workshops, Führungen und Programme – naturnah & interaktiv.',
          desc: 'Workshops, Exkursionen, Seminare – Natur verstehen und erleben.',
          bullets: [
            'Didaktische Konzepte',
            'Mehrsprachige Materialien',
            'Outreach & Events',
          ],
        },
        consulting: {
          title: 'Naturnahe Flächengestaltung',
          text: 'Beratung & Planung für artenreiche Flächen – von der Idee bis zur Umsetzung.',
          desc: 'Planung & Begleitung – artenreich, pflegeleicht und standortgerecht.',
          bullets: [
            'Pflanzkonzepte & Pflege',
            'Habitat-Module',
            'Biodiversitäts-Check',
          ],
        },
        more: 'Mehr erfahren →',
      },
      faq: {
        heading: 'Häufige Fragen',
        q1: 'Wie läuft ein Erstgespräch ab?',
        a1: '30–45 Min online oder vor Ort. Wir klären Ziele, Flächen, Budgetrahmen und Zeitplan.',
        q2: 'Welche Ergebnisse bekomme ich?',
        a2: 'Ein maßgeschneidertes Konzept mit konkreten Empfehlungen und Prioritäten – je nach Bedarf ergänzt durch Monitoring-Design oder Bildungspakete.',
        q3: 'Für wen eignet sich b*nature?',
        a3: 'Für Gemeinden, Schulen, Hotels, Betriebe, Institutionen und Privatpersonen – überall dort, wo Wissen, Natur und Praxis verbunden werden sollen.',
      },
      contact: {
        heading: 'Kontakt',
        lead: 'Teilen Sie uns kurz mit, wobei wir Sie unterstützen dürfen – wir melden uns mit einem Vorschlag für das Erstgespräch.',
        button: 'Anfrage senden',
        form: {
          name: 'Name',
          email: 'E-Mail',
          message: 'Nachricht',
          placeholder: 'Projekt, Ziel, Zeitrahmen …',
          privacy:
            'Mit dem Senden stimmen Sie der Verarbeitung Ihrer Angaben zur Kontaktaufnahme zu.',
          directMail: 'Direkt per Mail',
        },
      },
      cta: {
        heading: 'Zeit, Ihr Projekt Wirklichkeit werden zu lassen.',
        text: 'Kostenfreies Erstgespräch – wir klären Ziele, Rahmen und die nächsten Schritte.',
        primary: 'Erstgespräch anfragen',
        secondary: 'Leistungen ansehen',
      },
      testimonials: {
        heading: 'Stimmen aus Projekten',
        items: [
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
        ],
      },
      footer: {
        rights: 'Alle Rechte vorbehalten.',
        tagline:
          'Monitoring & Erhebungen · Umweltbildung · Naturnahe Gestaltung',
        contactMail: 'info@bnature.example',
        contactLocation: 'Südtirol · Italien',
        imprint: 'Impressum',
        privacy: 'Datenschutz',
      },
    },
  },
  it: {
    translation: {
      meta: {
        title:
          'b*nature – Monitoraggi, educazione ambientale, progettazione naturalistica',
        description:
          'b*nature unisce scienza, pratica e storytelling: monitoraggi, educazione ambientale e progettazione di aree naturalistiche per Comuni, hotel, scuole e aziende.',
      },
      alt: {
        logo: 'Logo b*nature',
        heroImage: 'Illustrazione: area rinaturalizzata',
        heroBadge: 'Biodiversità & Consulenza',
        aboutImage: 'bnature – team, lavoro sul campo e consulenza',
      },
      nav: {
        home: 'Home',
        about: 'Chi siamo',
        services: 'Servizi',
        faq: 'FAQ',
        contact: 'Contatti',
      },
      hero: {
        badge: 'bnature · monitoraggi, educazione, consulenza',
        verified: 'verificato',
        title:
          'Rendere misurabile la biodiversità.\nProgettare habitat a misura di natura.',
        subtitle:
          'La scienza incontra la pratica – per impatti ecologici misurabili.',
        ctaPrimary: 'Richiedi un colloquio',
        ctaSecondary: 'Vedi i servizi',
        expertise:
          'Competenze di biologi, ecologi, divulgatori ambientali e giardinieri',
      },
      about: {
        heading: 'Perché b*nature?',
        text: 'Uniamo competenze ecologiche, esperienza didattica e comunicazione chiara. Così nascono progetti che raggiungono le persone e migliorano concretamente gli habitat.',
        callouts: {
          scienceTitle: 'Base scientifica',
          scienceText:
            'Letteratura aggiornata, standard & design di monitoraggio – fondati e trasparenti.',
          impactTitle: 'Pratica & impatto',
          impactText:
            'Pianificabile, realizzabile, misurabile – con priorità chiare e controllo dei risultati.',
        },
        usps: {
          process:
            "Processi trasparenti: primo colloquio, piano d'azione, attuazione, monitoraggio.",
          target: 'Adatto ai destinatari: Comuni, hotel, scuole & aziende.',
          didactic:
            "Multilingue & didattico: materiali e formati che rendono la conoscenza un'esperienza.",
        },
        cta: 'Richiedi un colloquio',
      },
      services: {
        heading: 'I nostri servizi',
        lead: "Dall'analisi all'implementazione – tutto da un'unica fonte, in modo trasparente ed efficace.",
        monitoring: {
          title: 'Monitoraggi & rilievi',
          text: 'Rilievi faunistici/floristici, design & reporting.',
          desc: 'Rilevazioni standardizzate, risultati chiari, decisioni affidabili.',
          bullets: [
            "Metodologie secondo lo stato dell'arte",
            'Documentazione & risultati',
            'Controllo del successo a lungo termine',
          ],
        },
        education: {
          title: 'Educazione ambientale & formati',
          text: 'Workshop, visite guidate e programmi interattivi.',
          desc: 'Workshop, escursioni, seminari – comprendere e vivere la natura.',
          bullets: [
            'Concept didattici',
            'Materiali multilingue',
            'Outreach & eventi',
          ],
        },
        consulting: {
          title: 'Progettazione naturalistica',
          text: "Consulenza e pianificazione di aree ricche di specie – dall'idea all'implementazione.",
          desc: 'Progettazione & accompagnamento – ricco di specie, di facile manutenzione e adatto al sito.',
          bullets: [
            'Concept di impianto & manutenzione',
            'Moduli habitat',
            'Biodiversity check',
          ],
        },
        more: 'Scopri di più →',
      },
      faq: {
        heading: 'Domande frequenti',
        q1: 'Come si svolge il primo colloquio?',
        a1: '30–45 min online o in loco. Allineiamo obiettivi, superfici, quadro di budget e tempistiche.',
        q2: 'Quali risultati ricevo?',
        a2: 'Un concept su misura con raccomandazioni concrete e priorità — integrabile, se necessario, con design di monitoraggio o pacchetti educativi.',
        q3: 'Per chi è adatto b*nature?',
        a3: 'Per Comuni, scuole, hotel, aziende, istituzioni e privati — ovunque si vogliano connettere conoscenza, natura e pratica.',
      },
      contact: {
        heading: 'Contatti',
        lead: 'Dicci brevemente in cosa possiamo supportarti – ti ricontatteremo con una proposta per il primo colloquio.',
        button: 'Invia richiesta',
        form: {
          name: 'Nome',
          email: 'E-mail',
          message: 'Messaggio',
          placeholder: 'Progetto, obiettivo, tempistica …',
          privacy:
            'Inviando il modulo acconsenti al trattamento dei tuoi dati per essere ricontattato.',
          directMail: 'Direttamente via mail',
        },
      },
      cta: {
        heading: 'È ora di realizzare il tuo progetto.',
        text: 'Colloquio iniziale gratuito – chiariremo obiettivi, contesto e i prossimi passi.',
        primary: 'Richiedi un colloquio',
        secondary: 'Vedi i servizi',
      },
      testimonials: {
        heading: 'Voci dai progetti',
        items: [
          {
            quote:
              'I rapporti di monitoraggio sono chiari e pratici. Così abbiamo potuto migliorare miratamente le nostre aree.',
            name: 'Mag. A. Muster',
            role: 'Direzione Parco Naturale XY',
          },
          {
            quote:
              'I nostri ospiti apprezzano le aree naturalistiche – e il team sa perché e come le curiamo.',
            name: 'H. Hofer',
            role: 'Struttura alberghiera',
          },
        ],
      },
      footer: {
        rights: 'Tutti i diritti riservati.',
        tagline:
          'Monitoraggi & rilievi · Educazione ambientale · Progettazione naturalistica',
        contactMail: 'info@bnature.example',
        contactLocation: 'Alto Adige · Italia',
        imprint: 'Note legali',
        privacy: 'Privacy',
      },
    },
  },
} as const;

// --- Init ---
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de',
    supportedLngs: ['de', 'it'],
    interpolation: { escapeValue: false },
    detection: {
      // Prefer ?lng=de / localStorage / navigator
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

// Keep <html lang> in sync
i18n.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('lang', lng);
});

export default i18n;
