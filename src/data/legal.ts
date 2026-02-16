import type { Lang } from './content';

export type LegalSlug = 'impressum' | 'privacy' | 'cookies';

type LegalDoc = {
  title: string;
  description: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
};

const bcoopCore = [
  'Cooperativa di comunita b*coop (ETS)',
  'Sede legale: Via Vintler 34, I-39042 Bressanone (BZ), Alto Adige, Italia',
  'Ufficio: Piazza Duomo 15, I-39042 Bressanone (BZ), Alto Adige, Italia',
  'E-Mail: info@bcoop.bz',
  'Web: https://bcoop.bz/',
  'P.I.: 03148040219',
  'PEC: bcoop@pec.it',
  'Codice identificativo: USAL8PV',
  'OID: E10328943',
  'RUNTS: Rep. 123207',
];

export const legalContent: Record<Lang, Record<LegalSlug, LegalDoc>> = {
  de: {
    impressum: {
      title: 'Impressum',
      description: 'Anbieterkennzeichnung und Pflichtangaben gemaess anwendbarem italienischem und EU-Recht.',
      updated: 'Stand: 16. Februar 2026',
      sections: [
        {
          heading: 'Projekttraegerschaft',
          body: [
            'b*nature ist ein Projekt der Buerger:innengenossenschaft b*coop (KDS/ETS).',
            'Massgeblich fuer die rechtlichen Anbieterangaben ist b*coop.',
          ],
        },
        {
          heading: 'Diensteanbieter / Betreiberin der Website',
          body: bcoopCore,
        },
        {
          heading: 'Register und Eintragungen',
          body: [
            'Camera di Commercio: BZ-236128 del 18.01.2022',
            'Ateco: 70.20.09; 56.30.01; 82.99.99; 88.99.0; 82.30.0',
            'Iscrizione nel Registro provinciale degli enti cooperativi: decreto n. 7043/2022 del 12.05.2022, numero C137525',
            'Durata della societa: 31.12.2099',
          ],
        },
        {
          heading: 'Kontakt fuer rechtliche Anliegen',
          body: [
            'Allgemein: info@bcoop.bz',
            'Projektkontakt b*nature: info@bnature.bz',
          ],
        },
        {
          heading: 'Haftung fuer Inhalte und Links',
          body: [
            'Die Inhalte dieser Website wurden mit groesster Sorgfalt erstellt.',
            'Eine Haftung fuer die Vollstaendigkeit, Richtigkeit und Aktualitaet kann dennoch nicht dauerhaft uebernommen werden.',
            'Fuer Inhalte externer Links sind ausschliesslich die jeweiligen Betreiber verantwortlich.',
          ],
        },
        {
          heading: 'Urheberrecht',
          body: [
            'Texte, Bilder und sonstige Inhalte dieser Website unterliegen dem Urheberrecht und sonstigen Schutzrechten.',
            'Jede Nutzung ausserhalb der gesetzlich zulaessigen Faelle bedarf der vorherigen Zustimmung der Rechteinhaber.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Datenschutzerklaerung',
      description: 'Informationen zur Verarbeitung personenbezogener Daten gemaess DSGVO (EU 2016/679).',
      updated: 'Stand: 16. Februar 2026',
      sections: [
        {
          heading: 'Verantwortliche Stelle (Art. 4 Nr. 7 DSGVO)',
          body: [
            'Verantwortlich fuer die Datenverarbeitung auf dieser Website ist b*coop.',
            ...bcoopCore,
            'Datenschutzkontakt: info@bcoop.bz',
          ],
        },
        {
          heading: 'Verarbeitete Datenkategorien',
          body: [
            'Server- und Protokolldaten (z. B. IP-Adresse, Datum/Uhrzeit, angeforderte Ressource, User Agent).',
            'Kommunikationsdaten aus Kontaktanfragen (E-Mail-Adresse, Nachricht).',
            'Technische Metadaten zur Sicherstellung von IT-Sicherheit und Stabilitaet.',
          ],
        },
        {
          heading: 'Zwecke und Rechtsgrundlagen (Art. 6 DSGVO)',
          body: [
            'Bereitstellung der Website und IT-Sicherheit auf Grundlage berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO).',
            'Bearbeitung von Kontaktanfragen und vorvertraglicher Kommunikation (Art. 6 Abs. 1 lit. b DSGVO).',
            'Erfuellung rechtlicher Pflichten, soweit einschlaegig (Art. 6 Abs. 1 lit. c DSGVO).',
            'Sofern eine Einwilligung erforderlich ist, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO.',
          ],
        },
        {
          heading: 'Empfaenger und Auftragsverarbeiter',
          body: [
            'Hosting und technische Bereitstellung erfolgen ueber externe Dienstleister (derzeit Netlify, Inc.).',
            'Kontaktformulare koennen technisch ueber Netlify Form Handling verarbeitet werden.',
            'Mit Dienstleistern werden erforderliche Vereinbarungen zur Auftragsverarbeitung abgeschlossen.',
          ],
        },
        {
          heading: 'Datenuebermittlung in Drittlaender',
          body: [
            'Eine Uebermittlung personenbezogener Daten ausserhalb der EU/des EWR kann nicht ausgeschlossen werden (z. B. bei US-Dienstleistern).',
            'Falls erforderlich, erfolgt die Uebermittlung auf Grundlage geeigneter Garantien gemaess Art. 44 ff. DSGVO (insb. Standardvertragsklauseln).',
          ],
        },
        {
          heading: 'Speicherdauer',
          body: [
            'Server-Logs werden nur so lange gespeichert, wie dies fuer Sicherheit, Fehleranalyse und Missbrauchsabwehr erforderlich ist.',
            'Anfragen aus dem Kontaktformular werden gespeichert, solange dies fuer die Bearbeitung und gesetzliche Nachweise erforderlich ist.',
            'Nach Wegfall des Zwecks und Ablauf gesetzlicher Aufbewahrungsfristen werden Daten geloescht oder anonymisiert.',
          ],
        },
        {
          heading: 'Ihre Rechte',
          body: [
            'Sie haben das Recht auf Auskunft, Berichtigung, Loeschung, Einschraenkung der Verarbeitung und Datenuertragbarkeit.',
            'Sie haben das Recht, Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO einzulegen.',
            'Erteilte Einwilligungen koennen jederzeit mit Wirkung fuer die Zukunft widerrufen werden.',
            'Sie haben ein Beschwerderecht bei der zustaendigen Aufsichtsbehoerde (in Italien: Garante per la protezione dei dati personali, https://www.garanteprivacy.it/).',
          ],
        },
      ],
    },
    cookies: {
      title: 'Cookie-Richtlinie',
      description: 'Informationen zum Einsatz von Cookies und aehnlichen Technologien.',
      updated: 'Stand: 16. Februar 2026',
      sections: [
        {
          heading: 'Allgemeines',
          body: [
            'Cookies sind kleine Textdateien, die im Browser gespeichert werden und Funktionen der Website unterstuetzen.',
            'Aehnliche Technologien (z. B. Local Storage) werden rechtlich vergleichbar behandelt.',
          ],
        },
        {
          heading: 'Einsatz auf dieser Website',
          body: [
            'Nach aktuellem Stand setzt diese Website keine nicht notwendigen Marketing- oder Tracking-Cookies ein.',
            'Es koennen technisch notwendige Cookies durch die Hosting-Infrastruktur gesetzt werden (z. B. fuer Lastverteilung, Sicherheit, Fehlerabwehr).',
          ],
        },
        {
          heading: 'Rechtsgrundlage',
          body: [
            'Technisch notwendige Cookies werden auf Grundlage berechtigter Interessen gem. Art. 6 Abs. 1 lit. f DSGVO eingesetzt.',
            'Nicht notwendige Cookies duerfen nur mit vorheriger Einwilligung eingesetzt werden.',
          ],
        },
        {
          heading: 'Cookie-Kategorien',
          body: [
            'Technisch notwendig: erforderlich fuer Betrieb und Sicherheit der Website.',
            'Praeferenzen/Analyse/Marketing: derzeit nicht aktiv.',
          ],
        },
        {
          heading: 'Steuerung durch Nutzer:innen',
          body: [
            'Sie koennen Cookies ueber Ihre Browser-Einstellungen loeschen oder blockieren.',
            'Bitte beachten Sie, dass dadurch einzelne Funktionen der Website eingeschraenkt sein koennen.',
          ],
        },
        {
          heading: 'Aenderungen dieser Richtlinie',
          body: [
            'Wir aktualisieren diese Cookie-Richtlinie bei technischen oder rechtlichen Aenderungen.',
            'Die jeweils aktuelle Fassung ist auf dieser Seite veroeffentlicht.',
          ],
        },
      ],
    },
  },
  it: {
    impressum: {
      title: 'Impressum',
      description: 'Dati obbligatori del fornitore del servizio secondo il diritto applicabile italiano ed europeo.',
      updated: 'Aggiornato: 16 febbraio 2026',
      sections: [
        {
          heading: 'Titolarita del progetto',
          body: [
            'b*nature e un progetto della cooperativa di comunita b*coop (KDS/ETS).',
            'Per i dati legali del fornitore fa fede b*coop.',
          ],
        },
        {
          heading: 'Fornitore del servizio / gestore del sito',
          body: bcoopCore,
        },
        {
          heading: 'Registri e iscrizioni',
          body: [
            'Camera di Commercio: BZ-236128 del 18.01.2022',
            'Ateco: 70.20.09; 56.30.01; 82.99.99; 88.99.0; 82.30.0',
            'Iscrizione nel Registro provinciale degli enti cooperativi: decreto n. 7043/2022 del 12.05.2022, numero C137525',
            'Durata della societa: 31.12.2099',
          ],
        },
        {
          heading: 'Contatti per comunicazioni legali',
          body: [
            'Generale: info@bcoop.bz',
            'Contatto progetto b*nature: info@bnature.bz',
          ],
        },
        {
          heading: 'Responsabilita per contenuti e link',
          body: [
            'I contenuti del sito sono redatti con la massima cura.',
            'Non e comunque possibile garantire in modo permanente completezza, correttezza e aggiornamento.',
            'Per i contenuti dei link esterni rispondono esclusivamente i rispettivi gestori.',
          ],
        },
        {
          heading: 'Diritto d autore',
          body: [
            'Testi, immagini e altri contenuti del sito sono protetti da diritto d autore e da altri diritti di proprieta intellettuale.',
            'Ogni utilizzo oltre i limiti di legge richiede il consenso preventivo dei titolari dei diritti.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Informativa privacy',
      description: 'Informazioni sul trattamento dei dati personali ai sensi del GDPR (UE 2016/679).',
      updated: 'Aggiornato: 16 febbraio 2026',
      sections: [
        {
          heading: 'Titolare del trattamento (Art. 4 n. 7 GDPR)',
          body: [
            'Il titolare del trattamento dei dati su questo sito e b*coop.',
            ...bcoopCore,
            'Contatto privacy: info@bcoop.bz',
          ],
        },
        {
          heading: 'Categorie di dati trattati',
          body: [
            'Dati tecnici e di log del server (es. indirizzo IP, data/ora, risorsa richiesta, user agent).',
            'Dati di comunicazione inviati tramite modulo contatti (e-mail, messaggio).',
            'Metadati tecnici necessari per sicurezza e stabilita dei sistemi.',
          ],
        },
        {
          heading: 'Finalita e basi giuridiche (Art. 6 GDPR)',
          body: [
            'Erogazione del sito e sicurezza IT sulla base del legittimo interesse (Art. 6 par. 1 lett. f GDPR).',
            'Gestione delle richieste di contatto e attivita precontrattuali (Art. 6 par. 1 lett. b GDPR).',
            'Adempimento di obblighi legali, ove applicabile (Art. 6 par. 1 lett. c GDPR).',
            'Quando necessario, il trattamento avviene previo consenso (Art. 6 par. 1 lett. a GDPR).',
          ],
        },
        {
          heading: 'Destinatari e responsabili del trattamento',
          body: [
            'Hosting e infrastruttura tecnica sono gestiti da fornitori esterni (attualmente Netlify, Inc.).',
            'I moduli di contatto possono essere elaborati tecnicamente tramite Netlify Form Handling.',
            'Con i fornitori vengono conclusi gli accordi richiesti in materia di trattamento dati.',
          ],
        },
        {
          heading: 'Trasferimenti verso Paesi terzi',
          body: [
            'Non si puo escludere il trasferimento di dati personali fuori da UE/SEE (es. fornitori negli Stati Uniti).',
            'Se necessario, il trasferimento avviene con garanzie adeguate ai sensi degli Art. 44 e seguenti GDPR (in particolare clausole contrattuali standard).',
          ],
        },
        {
          heading: 'Periodo di conservazione',
          body: [
            'I log tecnici sono conservati per il tempo strettamente necessario a sicurezza, diagnosi errori e prevenzione abusi.',
            'Le richieste dal modulo contatti sono conservate per il tempo necessario alla gestione e agli obblighi di legge.',
            'Terminata la finalita e decorsi i termini legali, i dati vengono cancellati o anonimizzati.',
          ],
        },
        {
          heading: 'Diritti degli interessati',
          body: [
            'Hai diritto di accesso, rettifica, cancellazione, limitazione del trattamento e portabilita dei dati.',
            'Hai diritto di opporti ai trattamenti basati su Art. 6 par. 1 lett. f GDPR.',
            'Puoi revocare in qualsiasi momento i consensi prestati con effetto per il futuro.',
            'Hai diritto di proporre reclamo all autorita competente (Italia: Garante per la protezione dei dati personali, https://www.garanteprivacy.it/).',
          ],
        },
      ],
    },
    cookies: {
      title: 'Cookie policy',
      description: 'Informazioni su cookie e tecnologie simili utilizzate da questo sito.',
      updated: 'Aggiornato: 16 febbraio 2026',
      sections: [
        {
          heading: 'Informazioni generali',
          body: [
            'I cookie sono piccoli file di testo salvati nel browser per supportare funzioni del sito.',
            'Tecnologie simili (es. Local Storage) sono trattate in modo analogo dal punto di vista normativo.',
          ],
        },
        {
          heading: 'Uso su questo sito',
          body: [
            'Allo stato attuale questo sito non utilizza cookie di marketing o tracciamento non necessari.',
            'Possono essere impostati cookie tecnici dall infrastruttura di hosting (es. bilanciamento carico, sicurezza, mitigazione errori).',
          ],
        },
        {
          heading: 'Base giuridica',
          body: [
            'I cookie tecnici necessari sono trattati sulla base del legittimo interesse ai sensi dell Art. 6 par. 1 lett. f GDPR.',
            'I cookie non necessari possono essere utilizzati solo previo consenso.',
          ],
        },
        {
          heading: 'Categorie di cookie',
          body: [
            'Tecnici necessari: indispensabili per funzionamento e sicurezza del sito.',
            'Preferenze/analisi/marketing: attualmente non attivi.',
          ],
        },
        {
          heading: 'Gestione da parte dell utente',
          body: [
            'Puoi cancellare o bloccare i cookie nelle impostazioni del browser.',
            'La disattivazione puo limitare alcune funzionalita del sito.',
          ],
        },
        {
          heading: 'Aggiornamenti della policy',
          body: [
            'La presente cookie policy viene aggiornata in caso di modifiche tecniche o normative.',
            'La versione aggiornata e sempre disponibile su questa pagina.',
          ],
        },
      ],
    },
  },
};
