// Portfolio. Websites are real client projects. Items marked `sample: true` use stock photos as
// placeholders for our capabilities - swap `img` (and the title) for real campaign photos when available.
export type WorkCat = 'ooh' | 'events' | 'web' | 'digital' | 'branding';
export type Work = { img: string; title: string; cat: WorkCat; tags: string[]; href?: string; sample?: boolean };

export const workCats: { slug: WorkCat; title: string }[] = [
  { slug: 'ooh', title: 'Outdoor & OOH' },
  { slug: 'events', title: 'Events & Live Acts' },
  { slug: 'web', title: 'Websites' },
  { slug: 'digital', title: 'Digital Campaigns' },
  { slug: 'branding', title: 'Branding & Video' },
];

const st = (n: string) => `/img/stock/${n}.webp`;

export const works: Work[] = [
  // Websites (real projects)
  { img: '/img/portfolio/work-9.webp', title: 'Radical Communications', cat: 'web', tags: ['Web Design', 'Branding'] },
  { img: '/img/portfolio/work-1.webp', title: 'FA Build Group', cat: 'web', tags: ['Web Design', 'SEO'] },
  { img: '/img/portfolio/work-4.webp', title: 'Muse Beauty Spa', cat: 'web', tags: ['Web Design', 'Social'] },
  { img: '/img/portfolio/work-7.webp', title: 'Yana Cosmo', cat: 'web', tags: ['Web Design', 'Meta Ads'] },
  { img: '/img/portfolio/work-6.webp', title: '8 Cylinders Auto Repair', cat: 'web', tags: ['Web Design', 'Local SEO'] },
  { img: '/img/portfolio/work-8.webp', title: 'ETC Markets', cat: 'web', tags: ['Web Design', 'Development'] },
  { img: '/img/portfolio/work-2.webp', title: 'Women Rise Foundation', cat: 'web', tags: ['Web Design', 'Branding'] },
  { img: '/img/portfolio/work-5.webp', title: 'Sports United', cat: 'web', tags: ['Web Design', 'Google Ads'] },
  { img: '/img/portfolio/work-3.webp', title: 'Youth Soccer Club', cat: 'web', tags: ['Web Design', 'Lead Gen'] },

  // Outdoor & OOH
  { img: st('billboard'), title: 'Highway billboard campaigns', cat: 'ooh', tags: ['Billboards'], href: '/billboard-advertising-dubai/', sample: true },
  { img: st('led-truck'), title: 'LED truck roadshows', cat: 'ooh', tags: ['LED Trucks'], href: '/led-truck-advertising-dubai/', sample: true },
  { img: st('metro'), title: 'Dubai Metro takeovers', cat: 'ooh', tags: ['Metro'], href: '/dubai-metro-advertising/', sample: true },
  { img: st('glass-truck'), title: 'Glass truck product showcases', cat: 'ooh', tags: ['Glass Trucks'], href: '/glass-truck-advertising-dubai/', sample: true },
  { img: st('led-billboard'), title: 'Digital LED screens', cat: 'ooh', tags: ['LED Billboards'], href: '/led-billboard-advertising-dubai/', sample: true },
  { img: st('bus-shelter'), title: 'Bus shelter networks', cat: 'ooh', tags: ['Bus Shelters'], href: '/bus-shelter-advertising-dubai/', sample: true },
  { img: st('mall'), title: 'Mall screens & activations', cat: 'ooh', tags: ['Malls'], href: '/mall-advertising-dubai/', sample: true },

  // Events & live acts
  { img: st('act-african-drummers'), title: 'African drummers at corporate events', cat: 'events', tags: ['Live Acts'], href: '/event-promoters-dubai/', sample: true },
  { img: st('act-led-dancers'), title: 'LED light dancer shows', cat: 'events', tags: ['Live Acts'], href: '/event-promoters-dubai/', sample: true },
  { img: st('act-african-dancers'), title: 'African dance troupes', cat: 'events', tags: ['Live Acts'], href: '/event-promoters-dubai/', sample: true },
  { img: st('event'), title: 'Brand activations & sampling', cat: 'events', tags: ['BTL'], href: '/btl-activation-dubai/', sample: true },
  { img: st('concert'), title: 'Launch events & festivals', cat: 'events', tags: ['Events'], href: '/event-marketing-dubai/', sample: true },
  { img: st('promoter'), title: 'Promoters & hosts', cat: 'events', tags: ['Promoters'], href: '/event-promoters-dubai/', sample: true },

  // Digital campaigns
  { img: st('analytics'), title: 'Google Ads lead campaigns', cat: 'digital', tags: ['Google Ads'], href: '/google-ads-dubai/', sample: true },
  { img: st('social'), title: 'Social media management', cat: 'digital', tags: ['Social Media'], href: '/social-media-marketing-dubai/', sample: true },
  { img: st('whatsapp'), title: 'WhatsApp Business API rollouts', cat: 'digital', tags: ['WhatsApp API'], href: '/whatsapp-business-api-dubai/', sample: true },
  { img: st('cold-calling'), title: 'Cold calling & meeting setting', cat: 'digital', tags: ['Direct Marketing'], href: '/cold-calling-services-dubai/', sample: true },

  // Branding & video
  { img: st('branding'), title: 'Brand identity systems', cat: 'branding', tags: ['Branding'], href: '/branding-agency-dubai/', sample: true },
  { img: st('camera'), title: 'Corporate films & reels', cat: 'branding', tags: ['Video'], href: '/video-production-dubai/', sample: true },
  { img: st('gift'), title: 'Corporate gift sets', cat: 'branding', tags: ['Gifts'], href: '/corporate-gifts-dubai/', sample: true },
];

/** Website projects only - used for the home page portfolio strip. */
export const webWorks = works.filter((w) => w.cat === 'web');
