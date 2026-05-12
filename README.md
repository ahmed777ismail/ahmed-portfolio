# Ahmed Ismail Portfolio

Premium backend-focused portfolio for Ahmed Ismail, built with Next.js, TailwindCSS, Framer Motion, and Lucide Icons.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The project uses `output: "export"` in `next.config.mjs`, so the production output is fully static in `out/`.

## GitHub Pages

This repo includes `.github/workflows/deploy.yml`. Push to `main`, then enable GitHub Pages with **GitHub Actions** as the source.

For project pages, the workflow builds with:

```bash
NEXT_PUBLIC_BASE_PATH=/<repo-name>
NEXT_PUBLIC_SITE_URL=https://<owner>.github.io
npm run build
```

For a root user/organization site or custom domain, set `NEXT_PUBLIC_BASE_PATH` to an empty value before building.
