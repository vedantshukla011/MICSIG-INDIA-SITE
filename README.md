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

The root `sitemap.xml` and `robots.txt` are configured for `https://www.micsig.in`; page-level canonical tags use the same preferred host. Submit `https://www.micsig.in/sitemap.xml` in Google Search Console after domain verification. See `SITEMAP-SETUP.txt`.
