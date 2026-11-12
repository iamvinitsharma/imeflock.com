// Export /company-profile/ to public/limeflock-company-profile.pdf
// Usage: start the dev server (npm run dev), then:
//   npm i -D playwright   (once)
//   node scripts/profile-pdf.mjs [http://localhost:4321]
import { chromium } from 'playwright';

const base = process.argv[2] || 'http://localhost:4321';
const browser = await chromium.launch({ channel: process.env.PW_CHANNEL || undefined });
const page = await browser.newPage();
await page.goto(`${base}/company-profile/`, { waitUntil: 'networkidle' });
await page.evaluate(() => document.querySelector('astro-dev-toolbar')?.remove());
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: 'public/limeflock-company-profile.pdf', format: 'A4', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
await browser.close();
console.log('saved public/limeflock-company-profile.pdf');
