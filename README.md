# bnature-astro

Landing Page mit Astro (SSG) und zweisprachigen statischen Routen:
- `/de`
- `/it`

## Entwicklung

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Netlify

Netlify ist via `netlify.toml` vorkonfiguriert:
- Build command: `npm run build`
- Publish directory: `dist`

## GitHub Pages (Test-Deployment)

Ein Workflow ist bereits vorhanden: `.github/workflows/deploy.yml`.

### 1) Lokales Repo mit GitHub verbinden (falls noch nicht passiert)

```bash
git remote add origin https://github.com/<USER_OR_ORG>/<REPO>.git
git branch -M main
git push -u origin main
```

### 2) GitHub Pages in den Repo-Settings aktivieren

1. `Settings` -> `Pages`
2. Bei `Build and deployment` als `Source` **GitHub Actions** wählen
3. Speichern

### 3) Deployment auslösen

Ein Push auf `main` startet automatisch den Workflow `Deploy to GitHub Pages`.
Die Seite ist danach erreichbar unter:

- User/Org Pages Repo (`<USER_OR_ORG>.github.io`): `https://<USER_OR_ORG>.github.io/`
- Project Repo (`my-project`): `https://<USER_OR_ORG>.github.io/my-project/`
