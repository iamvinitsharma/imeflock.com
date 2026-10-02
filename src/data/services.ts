// Services from "limeflock.com Keywords List.xlsx" (Sheet2). Slugs follow the recommended URLs.
export type Service = {
  slug: string;
  title: string;
  cat: string;
  img: string;
  hot?: boolean;
  desc: string;
  features: string[];
};

export type Category = {
  slug: string;
  title: string;
  icon: string;
  img: string;
  desc: string;
  bullets: string[];
};

const s = (n: string) => `/img/stock/${n}.webp`;

export const categories: Category[] = [
  { slug: 'web', title: 'Web Design & Development', icon: 'code', img: s('web-design'), desc: 'Fast, beautiful websites and online stores engineered to turn visitors into enquiries and sales.', bullets: ['Website design', 'Custom development', 'Ecommerce', 'WordPress'] },
  { slug: 'seo', title: 'SEO & AI Search', icon: 'search', img: s('seo'), desc: 'Rank on Google and get cited by ChatGPT, Gemini and AI Overviews when customers search in Dubai.', bullets: ['Local SEO', 'AEO & GEO', 'ChatGPT SEO', 'Technical SEO'] },
  { slug: 'performance', title: 'Digital & Performance Marketing', icon: 'chart', img: s('analytics'), desc: 'Paid campaigns on Google, Meta and social that are measured on leads and revenue - not likes.', bullets: ['Google Ads', 'Meta Ads', 'Social media', 'Lead generation'] },
  { slug: 'ai', title: 'AI & Automation', icon: 'bot', img: s('ai'), desc: 'AI chatbots, WhatsApp automation and smart workflows that answer, qualify and follow up 24/7.', bullets: ['AI chatbots', 'WhatsApp API', 'CRM automation', 'AI marketing'] },
  { slug: 'ooh', title: 'OOH Advertising', icon: 'billboard', img: s('led-billboard'), desc: 'Billboards, LED screens, metro, taxis, buses and mobile trucks across Dubai and the UAE.', bullets: ['Billboards & LED', 'Metro & taxi', 'Mobile LED trucks', 'Mall media'] },
  { slug: 'media', title: 'Media Buying & PR', icon: 'mic', img: s('radio-studio'), desc: 'Negotiated media plans across radio, print and digital, plus PR that earns real coverage.', bullets: ['Media buying', 'Press releases', 'Radio ads'] },
  { slug: 'branding', title: 'Branding & Creative', icon: 'pen', img: s('branding'), desc: 'Memorable brand identities, campaign creative, video production and premium corporate gifts.', bullets: ['Brand identity', 'Video production', 'Corporate gifts'] },
  { slug: 'direct', title: 'Direct Marketing', icon: 'send', img: s('sms'), desc: 'Reach customers directly through WhatsApp, SMS, email and targeted flyer distribution.', bullets: ['WhatsApp marketing', 'SMS & email', 'Flyer distribution'] },
  { slug: 'events', title: 'Events & Brand Activation', icon: 'spark', img: s('concert'), desc: 'BTL activations, event marketing and promoters that put your brand face-to-face with buyers.', bullets: ['BTL activation', 'Event marketing', 'Promoters & artists'] },
];

export const services: Service[] = [
  // 1. Web Design & Development
  { slug: 'website-design-dubai', title: 'Website Design', cat: 'web', img: s('web-design'), hot: true,
    desc: 'Custom, responsive website design for Dubai businesses - crafted to look premium, load fast and convert visitors into enquiries.',
    features: ['Custom UI/UX design tailored to your brand', 'Mobile-first, responsive layouts', 'Conversion-focused page structure and CTAs', 'Arabic & English bilingual design'] },
  { slug: 'web-development-dubai', title: 'Website Development', cat: 'web', img: s('web-dev'), hot: true,
    desc: 'Robust website development using modern frameworks, built for speed, security and easy content management.',
    features: ['Fast, SEO-friendly code', 'CMS so your team can edit content', 'Integrations with CRM, payment and booking tools', 'Hosting, SSL and launch support'] },
  { slug: 'ecommerce-development-dubai', title: 'Ecommerce Development', cat: 'web', img: s('ecommerce'), hot: true,
    desc: 'Online stores on Shopify, WooCommerce or custom stacks with UAE payment gateways, shipping and VAT built in.',
    features: ['Shopify & WooCommerce stores', 'UAE payment gateways (Telr, Network, Stripe)', 'Product, inventory and order workflows', 'Speed and checkout optimisation'] },
  { slug: 'wordpress-development-dubai', title: 'WordPress Development', cat: 'web', img: s('code'),
    desc: 'Custom WordPress themes and plugins that are fast, secure and easy for your team to manage.',
    features: ['Custom themes - no bloated page builders', 'Plugin development & integrations', 'Speed and security hardening', 'Ongoing maintenance & updates'] },

  // 2. SEO & AI Search
  { slug: 'seo-services-dubai', title: 'SEO Services', cat: 'seo', img: s('seo'), hot: true,
    desc: 'Data-driven SEO that grows your organic traffic and rankings for the keywords your Dubai customers actually search.',
    features: ['Keyword research & competitor analysis', 'On-page optimisation & content', 'Technical SEO & Core Web Vitals', 'Link building & monthly reporting'] },
  { slug: 'local-seo-dubai', title: 'Local SEO', cat: 'seo', img: s('dubai'), hot: true,
    desc: 'Dominate the Google Map Pack and “near me” searches in Dubai with an optimised Google Business Profile and local citations.',
    features: ['Google Business Profile optimisation', 'Local citations & NAP consistency', 'Review generation strategy', 'Location landing pages'] },
  { slug: 'ai-search-optimization-dubai', title: 'AI Search Optimization', cat: 'seo', img: s('ai-chip'), hot: true,
    desc: 'Make your brand visible inside AI answers from Google AI Overviews, ChatGPT, Gemini and Perplexity.',
    features: ['AI visibility audit', 'Entity & schema optimisation', 'Answer-ready content structure', 'Brand mention & citation building'] },
  { slug: 'aeo-geo-services-dubai', title: 'AEO & GEO Services', cat: 'seo', img: s('dashboard'), hot: true,
    desc: 'Answer Engine and Generative Engine Optimization so AI assistants recommend your business by name.',
    features: ['Question & intent mapping', 'Structured FAQs and schema markup', 'Topical authority content clusters', 'AI citation tracking'] },
  { slug: 'chatgpt-seo-dubai', title: 'ChatGPT SEO', cat: 'seo', img: s('chatbot'),
    desc: 'Get recommended when people ask ChatGPT for the best providers in Dubai - through content, citations and authority.',
    features: ['ChatGPT visibility benchmarking', 'Authoritative third-party mentions', 'Content optimised for LLM retrieval', 'Monthly AI share-of-voice reports'] },

  // 3. Digital & Performance Marketing
  { slug: 'performance-marketing-dubai', title: 'Performance Marketing', cat: 'performance', img: s('analytics'), hot: true,
    desc: 'Full-funnel paid media managed against one goal: more qualified leads and sales at a lower cost.',
    features: ['Cross-channel media strategy', 'Conversion tracking & attribution', 'Creative testing at scale', 'Weekly optimisation & reporting'] },
  { slug: 'google-ads-dubai', title: 'Google Ads', cat: 'performance', img: s('laptop-phone'), hot: true,
    desc: 'Search, Performance Max, Display and YouTube campaigns built to capture high-intent buyers in the UAE.',
    features: ['Search & Performance Max campaigns', 'Keyword and negative keyword strategy', 'Landing page & conversion tracking', 'Bid and budget optimisation'] },
  { slug: 'meta-ads-dubai', title: 'Meta Ads', cat: 'performance', img: s('social-phone'), hot: true,
    desc: 'Facebook and Instagram ads that combine scroll-stopping creative with precise audience targeting.',
    features: ['Lead-form and conversion campaigns', 'Audience & lookalike building', 'Reels and static ad creative', 'Pixel & Conversions API setup'] },
  { slug: 'social-media-marketing-dubai', title: 'Social Media Marketing', cat: 'performance', img: s('social'), hot: true,
    desc: 'Social media management, content and community building across Instagram, TikTok, LinkedIn and Facebook.',
    features: ['Monthly content calendars', 'Reels & short-form video', 'Community management', 'Influencer collaborations'] },
  { slug: 'lead-generation-dubai', title: 'Lead Generation', cat: 'performance', img: s('leads'),
    desc: 'Predictable B2B and B2C lead generation systems that fill your sales pipeline every month.',
    features: ['Funnels & landing pages', 'LinkedIn & email outreach', 'Lead qualification & scoring', 'CRM integration'] },
  { slug: 'arabic-digital-marketing-dubai', title: 'Arabic Digital Marketing', cat: 'performance', img: s('dubai-burj'), hot: true,
    desc: 'Native Arabic campaigns, content and SEO that connect with Emirati and GCC audiences.',
    features: ['Arabic copywriting & transcreation', 'Arabic SEO & ads', 'Culturally tuned creative', 'Bilingual social media'] },

  // 4. AI & Automation
  { slug: 'ai-marketing-agency-dubai', title: 'AI Marketing', cat: 'ai', img: s('ai'), hot: true,
    desc: 'Use AI to research, create and optimise marketing faster - with humans in control of strategy and quality.',
    features: ['AI-assisted content production', 'Predictive audience targeting', 'Automated reporting dashboards', 'AI creative testing'] },
  { slug: 'ai-automation-agency-dubai', title: 'AI Automation', cat: 'ai', img: s('robot'),
    desc: 'Automate repetitive sales, marketing and operations tasks so your team focuses on high-value work.',
    features: ['Workflow automation (Make, Zapier, n8n)', 'AI document & email processing', 'CRM and lead routing', 'Custom AI agents'] },
  { slug: 'ai-chatbot-development-dubai', title: 'AI Chatbot Development', cat: 'ai', img: s('chatbot'), hot: true,
    desc: 'Custom AI chatbots trained on your business that answer questions, qualify leads and book appointments 24/7.',
    features: ['Website & app chatbots', 'Trained on your FAQs and documents', 'Arabic & English conversations', 'Human hand-off and CRM sync'] },
  { slug: 'whatsapp-business-api-dubai', title: 'WhatsApp Business API & Automation', cat: 'ai', img: s('whatsapp'), hot: true,
    desc: 'Official WhatsApp Business API setup with chatbots, broadcasts and automated follow-ups.',
    features: ['Official API onboarding & green tick support', 'WhatsApp chatbots & flows', 'Broadcast campaigns', 'Shared team inbox'] },

  // 5. OOH Advertising
  { slug: 'ooh-advertising-dubai', title: 'OOH Advertising', cat: 'ooh', img: s('ooh'), hot: true,
    desc: 'End-to-end out-of-home advertising in Dubai - planning, booking, design, printing and installation.',
    features: ['Location & audience planning', 'Media booking at negotiated rates', 'Creative design & printing', 'Campaign photo reports'] },
  { slug: 'billboard-advertising-dubai', title: 'Billboard Advertising', cat: 'ooh', img: s('billboard'),
    desc: 'High-impact billboards on Sheikh Zayed Road, Al Khail and key highways across the UAE.',
    features: ['Unipoles, megacoms & bridges', 'Permits and RTA approvals', 'Large-format printing', 'Installation & maintenance'] },
  { slug: 'led-billboard-advertising-dubai', title: 'LED Billboard Advertising', cat: 'ooh', img: s('led-billboard'), hot: true,
    desc: 'Digital LED screens in prime Dubai locations - launch quickly with motion creative and flexible slots.',
    features: ['Prime digital screen locations', 'Daypart & slot scheduling', 'Motion creative production', 'Proof-of-play reporting'] },
  { slug: 'glass-truck-advertising-dubai', title: 'Glass Truck Advertising', cat: 'ooh', img: s('glass-truck'), hot: true,
    desc: 'Eye-catching glass-box trucks that showcase real products and displays on the streets of Dubai.',
    features: ['Product showcase in glass trucks', 'Route planning across hotspots', 'Branding & display setup', 'GPS tracking & photo reports'] },
  { slug: 'led-truck-advertising-dubai', title: 'LED Truck Advertising', cat: 'ooh', img: s('led-truck'),
    desc: 'Mobile LED screen trucks that take your video ads to events, malls and busy districts.',
    features: ['3-sided LED screens', 'Custom routes & parking spots', 'Video & audio playback', 'Event and launch support'] },
  { slug: 'mobile-meeting-bus-dubai', title: 'Mobile Meeting & Experience Bus', cat: 'ooh', img: s('mobile-bus'), hot: true,
    desc: 'A branded mobile meeting room and experience bus for roadshows, launches and VIP client visits.',
    features: ['Fully branded exterior wrap', 'Premium interior for meetings & demos', 'Roadshows across the UAE', 'Event staffing on request'] },
  { slug: 'dubai-metro-advertising', title: 'Dubai Metro Advertising', cat: 'ooh', img: s('metro'), hot: true,
    desc: 'Train wraps, station domination and digital screens reaching hundreds of thousands of daily metro riders.',
    features: ['Train interior & exterior wraps', 'Station branding & domination', 'Digital metro screens', 'RTA approvals handled'] },
  { slug: 'taxi-advertising-dubai', title: 'Taxi Advertising', cat: 'ooh', img: s('taxi'),
    desc: 'Taxi rooftop screens, wraps and in-cab advertising that travel across every district of Dubai.',
    features: ['Rooftop digital screens', 'Full & partial taxi wraps', 'In-cab media', 'Fleet-wide or targeted zones'] },
  { slug: 'bus-advertising-dubai', title: 'Bus Advertising', cat: 'ooh', img: s('bus'),
    desc: 'Full-wrap and panel advertising on RTA buses for broad, repeated city-wide exposure.',
    features: ['Full & partial bus wraps', 'Route selection', 'Design & vinyl printing', 'Installation & removal'] },
  { slug: 'bus-shelter-advertising-dubai', title: 'Bus Shelter Advertising', cat: 'ooh', img: s('bus-shelter'),
    desc: 'Backlit bus shelter panels at street level - ideal for retail, F&B and neighbourhood campaigns.',
    features: ['Backlit & digital shelters', 'Neighbourhood targeting', 'Print & installation', 'Campaign photo proof'] },
  { slug: 'mall-advertising-dubai', title: 'Mall Advertising', cat: 'ooh', img: s('mall'),
    desc: 'Digital screens, atrium activations and branding in Dubai’s busiest shopping malls.',
    features: ['Mall digital screens', 'Atrium & kiosk activations', 'Escalator & lift branding', 'Sampling & promotions'] },

  // 6. Media Buying & PR
  { slug: 'media-buying-agency-dubai', title: 'Media Buying', cat: 'media', img: s('strategy'),
    desc: 'Strategic media planning and buying across TV, radio, print, outdoor and digital at negotiated rates.',
    features: ['Integrated media planning', 'Negotiated rates & added value', 'Booking & trafficking', 'Post-campaign analysis'] },
  { slug: 'pr-agency-dubai', title: 'PR & Press Release', cat: 'media', img: s('newspaper'),
    desc: 'Press release writing and distribution to UAE and GCC media, plus PR that builds credibility.',
    features: ['Press release writing (EN/AR)', 'Distribution to UAE & GCC outlets', 'Media relations & interviews', 'Coverage reports'] },
  { slug: 'radio-advertising-dubai', title: 'Radio Advertising', cat: 'media', img: s('radio-studio'),
    desc: 'Radio campaigns on leading UAE stations - script, voice-over, production and airtime booking.',
    features: ['Station & slot planning', 'Script writing & voice-over', 'Spot production', 'Sponsorships & live reads'] },

  // 7. Branding & Creative
  { slug: 'branding-agency-dubai', title: 'Branding & Creative', cat: 'branding', img: s('branding'),
    desc: 'Brand strategy, logo and identity systems, and campaign creative that make you instantly recognisable.',
    features: ['Brand strategy & naming', 'Logo & visual identity', 'Brand guidelines', 'Campaign & ad creative'] },
  { slug: 'video-production-dubai', title: 'Video Production', cat: 'branding', img: s('camera'),
    desc: 'Corporate films, ads, reels and product videos - from concept and shoot to edit and motion graphics.',
    features: ['Concept & scripting', 'Shoot crew & equipment', 'Editing & colour grading', 'Motion graphics & reels'] },
  { slug: 'corporate-gifts-dubai', title: 'Corporate Gifts', cat: 'branding', img: s('gift'),
    desc: 'Premium branded corporate gifts and giveaways for clients, staff and events in the UAE.',
    features: ['Custom branded merchandise', 'Executive gift sets', 'Eid & year-end hampers', 'Packaging & delivery'] },

  // 8. Direct Marketing
  { slug: 'whatsapp-marketing-dubai', title: 'WhatsApp Marketing', cat: 'direct', img: s('phone-chat'),
    desc: 'Compliant WhatsApp broadcast and conversational campaigns with industry-leading open rates.',
    features: ['Opt-in list building', 'Template message approval', 'Broadcast & drip campaigns', 'Click & reply tracking'] },
  { slug: 'sms-marketing-dubai', title: 'SMS Marketing', cat: 'direct', img: s('sms'),
    desc: 'Bulk SMS campaigns with sender ID, scheduling and delivery reports across UAE networks.',
    features: ['Branded sender ID', 'Bulk & personalised SMS', 'Scheduling & automation', 'Delivery reports'] },
  { slug: 'email-marketing-dubai', title: 'Email Marketing', cat: 'direct', img: s('email'),
    desc: 'Newsletters and automated email journeys that nurture leads and bring customers back.',
    features: ['Template design', 'Automated welcome & nurture flows', 'List segmentation', 'Deliverability & analytics'] },
  { slug: 'flyer-distribution-dubai', title: 'Flyer Distribution', cat: 'direct', img: s('flyer'),
    desc: 'Targeted flyer and leaflet distribution to homes, offices and high-footfall areas across Dubai.',
    features: ['Flyer design & printing', 'Door-to-door distribution', 'Hand-to-hand at hotspots', 'GPS-tracked teams'] },

  // 9. Events & Brand Activation
  { slug: 'btl-activation-dubai', title: 'BTL & Brand Activation', cat: 'events', img: s('event'),
    desc: 'Below-the-line activations, sampling and experiential campaigns that create real-world engagement.',
    features: ['Concept & activation design', 'Sampling & in-store promotions', 'Booth fabrication', 'Staffing & reporting'] },
  { slug: 'event-marketing-dubai', title: 'Event Marketing', cat: 'events', img: s('concert'),
    desc: 'Promote launches, exhibitions and events with integrated digital, outdoor and on-ground marketing.',
    features: ['Event promotion strategy', 'Ticketing & registration funnels', 'On-site branding', 'Social coverage'] },
  { slug: 'event-promoters-dubai', title: 'Event Promoters & Artists', cat: 'events', img: s('promoter'),
    desc: 'Professional promoters, hosts, models and artists for events, exhibitions and activations.',
    features: ['Promoters & brand ambassadors', 'Hosts, MCs & models', 'Performers & artists', 'Uniforms & briefing'] },
];

export const byCat = (cat: string) => services.filter((x) => x.cat === cat);
export const catOf = (slug: string) => categories.find((c) => c.slug === slug)!;
