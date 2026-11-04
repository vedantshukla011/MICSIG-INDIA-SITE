# Micsig India site

Static HTML website for VIANOVA INDUSTRIAL SOLUTIONS, an authorised Micsig distributor in India.

## Deploy with Vercel

Import this GitHub repository as a Vercel project. This is a static HTML site with no build step: use the repository root as the project root, choose the `Other` framework preset, leave the build command empty, and serve the project root as the output directory. Connect the final domain in Vercel after it is selected.

Vercel Git integration creates preview deployments for non-production branches when the project is connected. Review the preview before merging this branch into the production branch.

## Site structure

- `index.html` — home page and India distributor contact details
- `catalog.html` — oscilloscope and probe family catalogue with datasheet links
- `probes/` — focused landing pages for current probes, high-voltage differential probes, and optically isolated probes
- `products/` — probe family detail pages
- `assets/` — selected Micsig product images, logo, CSS and product PDFs
- `robots.txt` — allows search crawlers

After choosing the primary domain, create/enable an XML sitemap and submit it in Google Search Console. See `SITEMAP-SETUP.txt` and `SEARCH-SEO-PLAN.md`.
