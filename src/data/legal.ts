import type { Lang } from './content';

export type LegalSlug = 'impressum' | 'privacy' | 'cookies';

type LegalDoc = {
  title: string;
  description: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
};

export const legalContent: Record<Lang, Record<LegalSlug, LegalDoc>> = {
  de: {
    impressum: {
      title: 'Impressum',
      description: 'Angaben gemaess geltender Informationspflichten.',
      updated: 'Stand: Februar 2026',
      sections: [
        {
          heading: 'Diensteanbieter',
          body: [
            'b*nature',
            'Suedtirol, Italien',
            'E-Mail: info@bnature.example',
          ],
        },
        {
          heading: 'Inhaltlich verantwortlich',
          body: ['b*nature Team'],
        },
        {
          heading: 'Haftungshinweis',
          body: [
            'Trotz sorgfaeltiger Kontrolle uebernehmen wir keine Haftung fuer die Inhalte externer Links.',
            'Fuer den Inhalt verlinkter Seiten sind ausschliesslich deren Betreiber verantwortlich.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Datenschutzerklaerung',
      description: 'Informationen zur Verarbeitung personenbezogener Daten.',
      updated: 'Stand: Februar 2026',
      sections: [
        {
          heading: 'Verantwortlicher',
          body: ['b*nature', 'E-Mail: info@bnature.example'],
        },
        {
          heading: 'Zweck der Verarbeitung',
          body: [
            'Wir verarbeiten Daten zur Beantwortung von Anfragen ueber das Kontaktformular oder per E-Mail.',
            'Die Daten werden nicht fuer andere Zwecke ohne Rechtsgrundlage verwendet.',
          ],
        },
        {
          heading: 'Ihre Rechte',
          body: [
            'Sie haben das Recht auf Auskunft, Berichtigung, Loeschung und Einschraenkung der Verarbeitung.',
            'Bei Fragen zum Datenschutz erreichen Sie uns unter info@bnature.example.',
          ],
        },
      ],
    },
    cookies: {
      title: 'Cookie-Richtlinie',
      description: 'Informationen zum Einsatz von Cookies auf dieser Website.',
      updated: 'Stand: Februar 2026',
      sections: [
        {
          heading: 'Was sind Cookies?',
          body: ['Cookies sind kleine Textdateien, die im Browser gespeichert werden.'],
        },
        {
          heading: 'Verwendung auf dieser Website',
          body: [
            'Wir setzen nur technisch notwendige Cookies ein, soweit dies fuer den Betrieb erforderlich ist.',
            'Es werden keine Tracking-Cookies ohne Einwilligung gesetzt.',
          ],
        },
        {
          heading: 'Cookie-Einstellungen',
          body: [
            'Sie koennen Cookies in Ihrem Browser jederzeit loeschen oder blockieren.',
            'Bitte beachten Sie, dass dadurch Funktionen der Website eingeschraenkt sein koennen.',
          ],
        },
      ],
    },
  },
  it: {
    impressum: {
      title: 'Impressum',
      description: 'Informazioni legali ai sensi degli obblighi informativi applicabili.',
      updated: 'Aggiornato: febbraio 2026',
      sections: [
        {
          heading: 'Fornitore del servizio',
          body: ['b*nature', 'Alto Adige, Italia', 'E-mail: info@bnature.example'],
        },
        {
          heading: 'Responsabile dei contenuti',
          body: ['Team b*nature'],
        },
        {
          heading: 'Limitazione di responsabilita',
          body: [
            'Nonostante un controllo accurato non assumiamo responsabilita per i contenuti di link esterni.',
            'Per i contenuti delle pagine collegate sono responsabili esclusivamente i rispettivi gestori.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Informativa privacy',
      description: 'Informazioni sul trattamento dei dati personali.',
      updated: 'Aggiornato: febbraio 2026',
      sections: [
        {
          heading: 'Titolare del trattamento',
          body: ['b*nature', 'E-mail: info@bnature.example'],
        },
        {
          heading: 'Finalita del trattamento',
          body: [
            'Trattiamo i dati per rispondere alle richieste inviate tramite modulo di contatto o e-mail.',
            'I dati non vengono utilizzati per altre finalita senza adeguata base giuridica.',
          ],
        },
        {
          heading: 'Diritti dell interessato',
          body: [
            'Hai diritto di accesso, rettifica, cancellazione e limitazione del trattamento.',
            'Per richieste privacy puoi contattarci a info@bnature.example.',
          ],
        },
      ],
    },
    cookies: {
      title: 'Cookie policy',
      description: 'Informazioni sull uso dei cookie su questo sito.',
      updated: 'Aggiornato: febbraio 2026',
      sections: [
        {
          heading: 'Cosa sono i cookie',
          body: ['I cookie sono piccoli file di testo memorizzati nel browser.'],
        },
        {
          heading: 'Uso su questo sito',
          body: [
            'Utilizziamo solo cookie tecnici necessari al funzionamento del sito.',
            'Non utilizziamo cookie di tracciamento senza consenso.',
          ],
        },
        {
          heading: 'Gestione preferenze',
          body: [
            'Puoi eliminare o bloccare i cookie dalle impostazioni del browser in qualsiasi momento.',
            'La disattivazione dei cookie potrebbe limitare alcune funzionalita del sito.',
          ],
        },
      ],
    },
  },
};
