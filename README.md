# The Odyssey — bilingual cinematic film showcase

A responsive, single-page HTML/CSS/JavaScript site with English/Dutch language switching, official trailer and retailer links, editorial synopsis, SEO metadata, JSON-LD Movie structured data, and a donation panel prepared for owner-supplied crypto wallets.

## Preview locally

Open `index.html` in a modern browser. For best results, serve the folder through a local static server or your hosting provider.

## Before publishing

1. Replace every `https://YOUR-DOMAIN.example/` value in `index.html`, `robots.txt`, and `sitemap.xml` with the real domain.
2. Replace the sample moodboard images with official/licensed artwork if you have permission to use it. The current images are atmospheric editorial images from Unsplash, not official film stills or posters.
3. Confirm all film facts, links, local retailer availability, and any required legal text for the target market.
4. If accepting crypto donations, add verified public wallet addresses in `script.js` under `walletAddresses`. Verify each address and network carefully. Never put private keys or seed phrases in the website.
5. Add a real privacy policy page and update the privacy link. Add cookie controls only if the site uses cookies or tracking that require them.
6. Confirm rights to all logos, artwork, fonts, and other assets. This is an independent fan/editorial concept and does not imply endorsement by the filmmakers or studio.
7. Consider adding a real Open Graph share image hosted on your own domain.

## Deploy

Upload the contents of this folder to any static hosting provider (for example, your domain's public web directory, GitHub Pages, Netlify, or Cloudflare Pages). No build step or framework is required. Then submit the sitemap URL in Google Search Console.

## Add another film

Duplicate the page or create a new HTML file, then update the title, meta description, canonical URL, JSON-LD data, film facts, synopsis translations, images and official links. For a multi-film site, the next step would be to move film content into a data file and generate pages from a reusable template.

## Notes

- The trailer links to Universal Pictures' official YouTube upload.
- The watch/buy section links to Universal Pictures Home Entertainment.
- The site intentionally does not host or link to unauthorized full-film downloads or torrents.
- Runtime is shown as 172 minutes, based on official festival listing information; verify against the intended regional source before launch.
