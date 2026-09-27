// Domain knowledge dictionary for DIGITAL MARKETING services
import type { ServiceContentOverride } from './serviceTypes.ts';

export const MARKETING_DOMAIN_KNOWLEDGE: Record<string, Partial<ServiceContentOverride>> = {
  // === PERFORMANCE MARKETING ===
  'google-ads': {
    primaryKeyword: 'Google Ads Management Agency Bangalore',
    secondaryKeywords: ['Google PPC campaigns', 'Google Search ads', 'Performance Max campaigns', 'Google Ads conversion tracking', 'Google Ads ROAS optimization'],
    visualType: 'analytics',
    whatIs: 'Google Ads is intent-driven pay-per-click (PPC) advertising placing your commercial offerings directly before prospective buyers at the exact moment they query Google Search, Google Maps, and YouTube.',
    problem: 'Companies waste extensive ad spend targeting broad, low-intent keywords with zero negative filters, poor Quality Scores, and broken conversion attribution.',
    solution: 'Review Growth Partners engineers tight keyword thematic clusters, negative match lists, custom-designed landing pages, and server-side tracking to maximize return on ad spend (ROAS).',
    capabilities: [
      { title: 'Search & Performance Max Structuring', description: 'Architecting intent-driven campaign hierarchies with dedicated ad groups and asset combinations.' },
      { title: 'Negative Keyword Filtering', description: 'Actively excluding low-value search queries and competitors to preserve your daily budget.' },
      { title: 'Quality Score & Ad Rank Optimization', description: 'Aligning high-relevance ad copy with dedicated landing pages to drive down cost-per-click (CPC).' },
      { title: 'Server-Side Tagging & Offline Conversions', description: 'Routing verified conversion events through GA4 and CRM APIs to train Google algorithms on actual revenue.' },
    ],
    benefits: [
      { title: 'Immediate High-Intent Inbound Inquiries', description: 'Reach active decision-makers right when they need your specific commercial service.' },
      { title: 'Transparent Cost-Per-Acquisition', description: 'Monitor exact lead costs, pipeline value, and return on ad spend through real-time dashboards.' },
      { title: 'Scalable Revenue Velocity', description: 'Increase daily budgets confidently on proven, profitable campaign clusters.' },
    ],
    faqs: [
      { question: 'How quickly does Google Ads start generating commercial leads?', answer: 'Qualified search traffic starts flowing to your landing page within 24 to 48 hours of campaign approval, with automated bid optimization maturing over the first 14 days.' },
      { question: 'What is the recommended starting ad budget for Google Ads?', answer: 'We advise starting with at least ₹25,000–₹50,000/month for localized service targeting or ₹1,00,000+/month for competitive nationwide categories.' },
      { question: 'Do you manage both Search Ads and Display/PMax?', answer: 'Yes, we isolate bottom-funnel Search ads to capture immediate buyers while running Performance Max for incremental multi-channel scale.' },
      { question: 'How do you prevent junk clicks and click fraud?', answer: 'We implement automated IP exclusion rules, strict geographic radius fencing, exact/phrase match phrasing, and daily search term audits.' },
    ],
  },

  'meta-ads': {
    primaryKeyword: 'Meta Ads Management Agency',
    secondaryKeywords: ['Facebook advertising agency', 'Instagram performance ads', 'Meta Conversions API', 'social media paid ads', 'Meta retargeting campaigns'],
    visualType: 'marketing',
    whatIs: 'Meta Ads harnesses Facebook and Instagram’s behavioral and interest graph to deliver visually compelling video and image campaigns directly into your target audience’s feeds.',
    problem: 'Relying on boosted posts generates surface-level likes and comments without delivering qualified commercial inquiries or verifiable pipeline revenue.',
    solution: 'We construct full-funnel Meta advertising campaigns featuring hook-driven direct response creatives, Conversions API (CAPI) server tracking, and segmented custom retargeting.',
    capabilities: [
      { title: 'Full-Funnel Campaign Architecture', description: 'Cold audience prospecting paired with middle-funnel social proof and bottom-funnel urgency retargeting.' },
      { title: 'Meta Conversions API (CAPI) Deployment', description: 'Server-to-server data transmission ensuring accurate conversion signal attribution despite browser restrictions.' },
      { title: 'Rapid Creative Iteration Sprints', description: 'Weekly multi-creative testing across static carousels, customer review overlays, and short-form video hooks.' },
      { title: 'Lookalike & High-Value Audiences', description: 'Building high-propensity lookalikes seeded from verified customer transaction lists and CRM records.' },
    ],
    benefits: [
      { title: 'Hyper-Targeted Demographic Engagement', description: 'Put your brand in front of verified demographics, industry interests, and behavioral profiles.' },
      { title: 'Visual Authority & Brand Recall', description: 'Showcase your products, client results, and customer testimonials in high-impact visual formats.' },
      { title: 'Lower Blended Acquisition Costs', description: 'Complement high-intent search ads with lower-cost visual awareness and retargeting.' },
    ],
    faqs: [
      { question: 'What is the advantage of Meta Ads Manager over boosting a post?', answer: 'Ads Manager unlocks deep conversion tracking, server-side data, custom audience exclusions, A/B split testing, and machine-learning bid strategies.' },
      { question: 'Who creates the ad images, carousels, and video copy?', answer: 'Review Growth Partners handles the entire creative workflow—from copywriting and static graphic design to video hook editing.' },
      { question: 'How do you handle iOS 14+ tracking limitations?', answer: 'We integrate the Meta Conversions API (CAPI) with first-party cookies and server events to ensure resilient tracking.' },
      { question: 'What average ROAS should an e-commerce brand expect?', answer: 'While results depend on margins and offer appeal, our clients typically achieve 3.5x to 6.5x ROAS within 60 days of campaign maturation.' },
    ],
  },

  'ppc-campaigns': {
    primaryKeyword: 'PPC Campaign Management',
    secondaryKeywords: ['pay per click management', 'paid search campaigns', 'PPC agency Bangalore', 'biddable media strategy', 'CPC bid optimization'],
    visualType: 'analytics',
    whatIs: 'PPC Campaigns encompass multi-platform paid search and display bidding strategies designed to purchase guaranteed, targeted traffic with measurable cost-per-click controls.',
    problem: 'Fragmented paid campaigns across multiple platforms often suffer from duplicate attribution, conflicting keyword bids, and uncoordinated landing page messaging.',
    solution: 'We establish unified pay-per-click strategies with cross-channel attribution modeling, unified budget allocation, and dedicated landing page funnels.',
    capabilities: [
      { title: 'Cross-Network Paid Bidding', description: 'Managing Google Ads, Microsoft Advertising, and niche biddable networks under unified budget governance.' },
      { title: 'Dayparting & Bid Adjustment', description: 'Calibrating aggressive bidding during peak business hours and suppressing spend during low-conversion windows.' },
      { title: 'Landing Page Message Matching', description: 'Aligning PPC search query terms directly with landing page headline hooks to boost conversion rates.' },
      { title: 'Audit & Waste Elimination', description: 'Systematically diagnosing wasted budget across device splits, geographic leaks, and unoptimized match types.' },
    ],
    benefits: [
      { title: 'Immediate Traffic Inflow', description: 'Bypass long organic waiting periods and drive qualified prospects within hours of going live.' },
      { title: 'Complete Budget Elasticity', description: 'Scale spend up during high-demand business cycles or scale back during inventory adjustments.' },
      { title: 'Granular Down-to-the-Rupee Tracking', description: 'Know exactly which keyword, ad headline, and city generated each closed customer invoice.' },
    ],
    faqs: [
      { question: 'What networks do your PPC management services cover?', answer: 'We manage Google Search, Google Display, Bing/Microsoft Ads, YouTube Ads, and Meta paid advertising networks.' },
      { question: 'How do you benchmark PPC success?', answer: 'We judge PPC performance by Cost-Per-Acquisition (CPA), Return on Ad Spend (ROAS), and Marketing Qualified Lead (MQL) velocity.' },
      { question: 'How often are keyword bids adjusted?', answer: 'Our specialists monitor bids and search terms daily, leveraging both automated value-based bidding rules and manual bid interventions.' },
      { question: 'Do we pay ad spend to you or the platforms directly?', answer: 'Ad spend is billed directly to your credit card on Google and Meta; our fee is strictly for professional strategy, management, and creative execution.' },
    ],
  },

  'lead-generation-campaigns': {
    primaryKeyword: 'Lead Generation Campaigns',
    secondaryKeywords: ['B2B lead campaigns', 'digital lead generation', 'sales pipeline campaigns', 'high intent inbound leads', 'lead generation agency Bangalore'],
    visualType: 'marketing',
    whatIs: 'Lead Generation Campaigns are end-to-end inbound marketing funnels engineered to capture qualified prospective buyer contact data, project scopes, and consultation requests.',
    problem: 'Most campaigns drive website visitors who bounce without submitting contact information due to friction-heavy forms and vague value propositions.',
    solution: 'We engineer multi-step lead capture funnels with dedicated pre-qualifying questions, instant lead routing to your sales team, and frictionless forms.',
    capabilities: [
      { title: 'Multi-Step High-Converting Forms', description: 'Reducing cognitive friction by breaking inquiries into micro-steps that increase completion rates.' },
      { title: 'Automated CRM & WhatsApp Lead Sync', description: 'Routing incoming lead phone numbers and scopes to your sales reps within 60 seconds.' },
      { title: 'Lead Magnet & Gated Assets', description: 'Creating industry checklists, pricing calculators, and guides that incentivize decision-makers to submit details.' },
      { title: 'Lead Scoring & Qualification', description: 'Filtering tire-kickers and prioritizing enterprise-level opportunities for rapid follow-up.' },
    ],
    benefits: [
      { title: 'Predictable Sales Pipeline', description: 'Replace feast-or-famine referral cycles with a steady inflow of verified commercial inquiries.' },
      { title: 'Shorter Response Latency', description: 'Immediate WhatsApp and email notifications ensure your sales team responds while the prospect is still warm.' },
      { title: 'Higher Quality Opportunity Value', description: 'Pre-qualifying questions ensure reps spend time only with prospects that have real budgets and timeline needs.' },
    ],
    faqs: [
      { question: 'How do you ensure the leads generated are genuinely qualified?', answer: 'We include qualifying fields such as project budget, company size, and service timeline directly within the form before submission.' },
      { question: 'Can incoming leads automatically connect to my CRM or WhatsApp?', answer: 'Yes, we integrate custom webhooks linking website forms directly to your WhatsApp Business, Zoho, HubSpot, or custom CRM.' },
      { question: 'What is a good benchmark conversion rate for a lead form?', answer: 'While industry averages hover around 2%–3%, our multi-step lead funnels typically convert between 6% and 14% of targeted visitors.' },
      { question: 'How quickly can our sales team receive lead alerts?', answer: 'Alerts are dispatched via WhatsApp webhook and SMS within 3 to 10 seconds of submission.' },
    ],
  },

  'conversion-campaigns': {
    primaryKeyword: 'Conversion Rate Optimization (CRO)',
    secondaryKeywords: ['conversion optimization campaigns', 'landing page CRO', 'A/B testing services', 'funnel conversion audit', 'checkout optimization'],
    visualType: 'analytics',
    whatIs: 'Conversion Campaigns optimize user experience, page messaging, and interaction points across your digital assets to turn a higher percentage of existing visitors into paying customers.',
    problem: 'Businesses spend heavily on driving traffic to pages with high bounce rates, confusing navigation, slow load speeds, and buried calls to action.',
    solution: 'We conduct heatmap audits, A/B copy tests, form friction analysis, and page speed optimizations to double or triple your conversion rates without increasing ad spend.',
    capabilities: [
      { title: 'Heatmap & Scroll Depth Audits', description: 'Analyzing real user session recordings to identify where visitors hesitate, stall, or abandon pages.' },
      { title: 'A/B Split Testing Protocols', description: 'Systematically testing headline variations, CTA placements, button colors, and social proof layouts.' },
      { title: 'Checkout & Form Friction Reduction', description: 'Streamlining input fields, removing unnecessary steps, and integrating autofill capabilities.' },
      { title: 'Social Proof & Trust Architecture', description: 'Strategic placement of verified client reviews, partner badges, and security credentials near conversion points.' },
    ],
    benefits: [
      { title: 'Double Lead Volume on the Same Budget', description: 'Increasing your conversion rate from 2% to 4% yields twice as many customers without spending an extra rupee on ads.' },
      { title: 'Lower Customer Acquisition Costs (CAC)', description: 'Every marketing rupee spent becomes more efficient as your website converts visitors reliably.' },
      { title: 'Enhanced Mobile Checkout Experience', description: 'Eliminate friction points on mobile devices where over 75% of your commercial visitors browse.' },
    ],
    faqs: [
      { question: 'What is the typical conversion rate improvement from a CRO campaign?', answer: 'Clients typically experience a 20% to 80% lift in form submissions and transactions within the first 60 days of implementing CRO recommendations.' },
      { question: 'Do you need our website code to run conversion tests?', answer: 'We can run tests via Google Tag Manager or implement optimized code directly onto your staging server.' },
      { question: 'How much traffic is required for statistically valid A/B testing?', answer: 'A minimum of 1,000–2,000 visitors per month per page is ideal, though qualitative heatmap audits benefit sites of any traffic tier.' },
      { question: 'Does CRO also help organic search rankings?', answer: 'Yes, reduced bounce rates, longer dwell times, and faster page speeds are positive signals favored by Google algorithms.' },
    ],
  },

  'retargeting-campaigns': {
    primaryKeyword: 'Retargeting Campaign Management',
    secondaryKeywords: ['remarketing campaigns', 'Google remarketing', 'Meta retargeting ads', 'cart abandonment retargeting', 'multi-touch remarketing'],
    visualType: 'marketing',
    whatIs: 'Retargeting Campaigns re-engage past website visitors and past leads who did not convert on their first visit, serving tailored ads as they browse the internet.',
    problem: 'Over 95% of first-time website visitors leave without buying or inquiring, representing massive lost marketing investment if not recaptured.',
    solution: 'We build segmented multi-stage retargeting funnels that show specific testimonial, pricing, and FAQ creatives based on the exact pages visitors viewed.',
    capabilities: [
      { title: 'Dynamic Page-Specific Remarketing', description: 'Serving specialized ads corresponding to the specific service page or product category visited.' },
      { title: 'Time-Decay Audience Bucketing', description: 'Aggressively bidding on 0-7 day visitors and shifting to educational content for 8-30 day audiences.' },
      { title: 'Frequency Capping & Burn Codes', description: 'Capping ad frequency to prevent banner fatigue and automatically suppressing users once they convert.' },
      { title: 'Cross-Device & Cross-Platform Reach', description: 'Reaching prospects seamlessly across Instagram, Facebook, Google Display, and YouTube.' },
    ],
    benefits: [
      { title: 'Highest ROAS Across Any Channel', description: 'Retargeting warm audiences consistently yields 3x–6x higher return on ad spend than cold prospecting.' },
      { title: 'Recapture Abandoned Enquiries', description: 'Bring prospects back to complete consultation requests and quote submissions.' },
      { title: 'Persistent Brand Familiarity', description: 'Position your business as an omnipresent industry leader across all major web destinations.' },
    ],
    faqs: [
      { question: 'How do you build retargeting audiences?', answer: 'We use first-party cookies, Google Analytics 4 audiences, Meta Pixel events, and customer email lists.' },
      { question: 'Will retargeting annoy my potential customers?', answer: 'No. We configure strict frequency capping (e.g. max 3 impressions per user per day) and remove users immediately once they convert.' },
      { question: 'Can we retarget people who abandoned halfway through a form?', answer: 'Yes, we track micro-events like form field focus to isolate abandoned entries and show them reassurance ads.' },
      { question: 'How large does our audience pool need to be?', answer: 'Google Ads requires at least 100 active cookies for Display or 1,000 for Search, while Meta can retarget custom audiences of any size.' },
    ],
  },

  // === SEARCH ENGINE MARKETING ===
  'seo': {
    primaryKeyword: 'Search Engine Optimization (SEO)',
    secondaryKeywords: ['SEO agency Bangalore', 'organic ranking services', 'technical SEO', 'Google algorithm optimization', 'sustainable organic search'],
    visualType: 'analytics',
    whatIs: 'SEO is the comprehensive technical, structural, and content optimization of your website to earn dominant, long-term rankings on Google Search for commercial queries.',
    problem: 'Websites suffer from slow page load speeds, unindexed URLs, keyword cannibalization, and shallow content, leaving them invisible on Google page 2 and beyond.',
    solution: 'We perform architectural technical audits, schema implementation, keyword mapping, semantic content enrichment, and safe authority-building.',
    capabilities: [
      { title: 'Technical SEO Infrastructure', description: 'Optimizing Core Web Vitals, crawl budgets, XML sitemaps, robots.txt, and indexation controls.' },
      { title: 'Semantic Keyword Architecture', description: 'Mapping target keywords by intent (informational, commercial, navigational) across dedicated URLs.' },
      { title: 'Schema & Structured Data', description: 'Implementing JSON-LD schemas (Organization, Service, FAQPage, BreadcrumbList) for rich search snippets.' },
      { title: 'Continuous Performance Monitoring', description: 'Weekly tracking of Google Search Console impressions, ranking movements, and click-through rates.' },
    ],
    benefits: [
      { title: 'Sustainable Zero-Cost Organic Traffic', description: 'Acquire high-intent inbound visitors continuously without paying for individual ad clicks.' },
      { title: 'Compounding Brand Authority', description: 'Top rankings establish your firm as the reputable, premier choice in your market segment.' },
      { title: 'Long-Term Return on Investment', description: 'SEO gains compound over months and years, providing durable enterprise valuation.' },
    ],
    faqs: [
      { question: 'How long does SEO take to produce measurable rankings?', answer: 'Typical SEO campaigns show initial indexation and ranking velocity within 60–90 days, with significant commercial traffic compounding over 4–6 months.' },
      { question: 'Do you guarantee #1 rankings on Google?', answer: 'No honest SEO professional guarantees #1 rankings due to Google algorithm updates, but we guarantee best-practice technical execution and demonstrable keyword ranking improvements.' },
      { question: 'What is the difference between On-Page and Technical SEO?', answer: 'Technical SEO ensures search engines can crawl, index, and render your site smoothly; On-Page SEO optimizes headings, keyword placement, content depth, and internal links.' },
      { question: 'Will Google core algorithm updates hurt my site?', answer: 'We strictly execute white-hat, helpful-content methodologies that benefit during core updates rather than risk penalties.' },
    ],
  },

  'local-seo': {
    primaryKeyword: 'Local SEO Services',
    secondaryKeywords: ['Google Business Profile optimization', 'Google Maps 3-pack', 'local citation management', 'local business SEO Bangalore', 'geo targeted search'],
    visualType: 'marketing',
    whatIs: 'Local SEO focuses on optimizing your digital footprint so nearby customers find your business in Google Maps 3-packs, localized organic search, and city-specific queries.',
    problem: 'Local businesses lose customers to competitors because their Google Business Profile is incomplete, citations are inconsistent, or review signals are weak.',
    solution: 'We optimize Google Business Profiles (GBP), audit NAP (Name, Address, Phone) citations, geo-tag assets, and deploy localized landing pages.',
    capabilities: [
      { title: 'Google Business Profile (GBP) Optimization', description: 'Primary/secondary categories, service menus, geo-tagged photo uploads, and weekly verified updates.' },
      { title: 'NAP Citation Consistency', description: 'Standardizing business name, address, and contact number across prominent Indian and international business directories.' },
      { title: 'Geo-Targeted Landing Pages', description: 'Designing fast local landing pages tailored to specific service corridors in Bangalore, Tamil Nadu, and regional hubs.' },
      { title: 'Review Velocity & Reputation Signals', description: 'Integrating authentic review generation workflows to boost prominence in local map algorithms.' },
    ],
    benefits: [
      { title: 'Dominance in Google Maps 3-Packs', description: 'Appear directly in the top map pack where mobile users call and request driving directions immediately.' },
      { title: 'High In-Store & Direct Phone Inquiries', description: 'Local searchers have urgent intent—converting directly into phone consultations and visits.' },
      { title: 'Competitive Local Moat', description: 'A fully optimized profile with consistent citations is difficult for competitors to displace.' },
    ],
    faqs: [
      { question: 'What is the Google Maps 3-pack?', answer: 'The 3-pack is the prominent top section in Google search results displaying the top three local business listings with ratings, reviews, and a map.' },
      { question: 'Can you help if our business serves multiple cities?', answer: 'Yes, we create dedicated localized service landing pages and geo-targeted schema for each service area.' },
      { question: 'How do customer reviews affect local rankings?', answer: 'Review count, average rating, keyword-rich customer feedback, and regular owner responses are major ranking factors in Google local search algorithms.' },
      { question: 'Do you help remove fake or malicious reviews?', answer: 'We audit policy-violating reviews and submit formal policy dispute escalations through Google Business Profile support.' },
    ],
  },

  'on-page-seo': {
    primaryKeyword: 'On-Page SEO Optimization',
    secondaryKeywords: ['on page SEO services', 'meta tag optimization', 'content hierarchy SEO', 'internal link architecture', 'semantic heading SEO'],
    visualType: 'analytics',
    whatIs: 'On-Page SEO is the practice of optimizing individual web page elements—including title tags, headings, content structure, internal links, and image alt text—to rank higher in search engines.',
    problem: 'Websites frequently publish content with duplicate H1 tags, missing meta descriptions, unoptimized images, and zero internal linking, diluting search rankings.',
    solution: 'We conduct full page-level audits, rewriting metadata, optimizing keyword density naturally, implementing semantic heading hierarchies, and structuring internal links.',
    capabilities: [
      { title: 'Title Tag & Meta Description Rewriting', description: 'Crafting click-compelling, keyword-targeted page titles within Google pixel character limits.' },
      { title: 'H1-H6 Heading Structure Alignment', description: 'Organizing content with logical heading tags that clearly communicate topical hierarchy to search crawlers.' },
      { title: 'SILO Internal Linking Architecture', description: 'Interlinking related service pages to pass page authority and guide user exploration.' },
      { title: 'Image SEO & Alt Text Optimization', description: 'Compressing images to modern WebP formats and adding descriptive, contextual alt attributes.' },
    ],
    benefits: [
      { title: 'Higher Search Click-Through Rates (CTR)', description: 'Engaging, relevant meta descriptions entice searchers to click your link over competitors.' },
      { title: 'Immediate Ranking Lifts', description: 'Resolving on-page structural errors often yields fast ranking improvements for underperforming pages.' },
      { title: 'Enhanced Crawl Efficiency', description: 'Clean heading hierarchies make it effortless for Google algorithms to understand your core commercial offerings.' },
    ],
    faqs: [
      { question: 'What is the most important factor in on-page SEO?', answer: 'Search intent alignment, semantic title tags, structured H1-H3 headings, fast page rendering, and clear internal links are the core pillars.' },
      { question: 'Do you touch our existing page copy during on-page SEO?', answer: 'We preserve your authentic brand tone while integrating necessary semantic keywords, FAQs, and structural headers.' },
      { question: 'How long does on-page optimization take to show effect?', answer: 'Once Google recrawls the updated URLs (typically 3 to 14 days), initial ranking and snippet changes become visible in Search Console.' },
      { question: 'Does on-page SEO include mobile responsiveness?', answer: 'Yes, because Google operates on mobile-first indexing, page readability and touch targets on phone screens are strictly verified.' },
    ],
  },

  'technical-seo': {
    primaryKeyword: 'Technical SEO Services',
    secondaryKeywords: ['Core Web Vitals optimization', 'crawl error resolution', 'site speed SEO', 'XML sitemap optimization', 'schema markup implementation'],
    visualType: 'code',
    whatIs: 'Technical SEO focuses on server, code, and infrastructure optimization to ensure search engine spiders can efficiently discover, crawl, render, and index every page of your website.',
    problem: 'Hidden server 500 errors, broken redirects, slow server response times (TTFB), and render-blocking scripts block Google from indexing valuable content.',
    solution: 'We diagnose crawl errors, streamline robots.txt and XML sitemaps, resolve canonical conflicts, and optimize Core Web Vitals (LCP, FID/INP, CLS).',
    capabilities: [
      { title: 'Core Web Vitals Optimization', description: 'Optimizing Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) for Google ranking algorithms.' },
      { title: 'Indexation & Crawl Budget Management', description: 'Ensuring search engines prioritize your money pages without wasting crawl budget on duplicate filters.' },
      { title: 'Redirect & Canonical Auditing', description: 'Eliminating redirect chains, 404 dead ends, and canonical tag mismatches.' },
      { title: 'Server Configuration & HTTPS Security', description: 'Verifying SSL certificates, HTTP/2 or HTTP/3 protocols, and compression headers (Gzip/Brotli).' },
    ],
    benefits: [
      { title: '100% Indexation Coverage', description: 'Guarantee that every published service page and article is properly indexed by Google.' },
      { title: 'Protection Against Algorithm Drops', description: 'Clean technical foundations protect your rankings during major Google core updates.' },
      { title: 'Blazing Fast Page Load Speeds', description: 'Faster loading websites retain visitors better and receive ranking preference in Google mobile search.' },
    ],
    faqs: [
      { question: 'How do you check for technical SEO issues?', answer: 'We use Google Search Console, Screaming Frog SEO Spider, Lighthouse, and server log analysis to pinpoint crawl obstacles.' },
      { question: 'How do Core Web Vitals affect search rankings?', answer: 'Core Web Vitals are official Google ranking signals measuring real-world user experience, speed, and visual stability.' },
      { question: 'What is crawl budget and why does it matter?', answer: 'Crawl budget is the number of pages search bots review per day on your site. Resolving slow server responses ensures Google crawls all your high-value pages.' },
      { question: 'Do you fix JavaScript rendering problems?', answer: 'Yes, we test dynamic single-page applications (React/Vue) to ensure all content and metadata are pre-rendered for search bots.' },
    ],
  },

  'seo-audit': {
    primaryKeyword: 'Comprehensive SEO Audit Services',
    secondaryKeywords: ['website SEO audit', 'technical SEO health check', 'backlink profile audit', 'SEO competitor analysis', 'SEO roadmap Bangalore'],
    visualType: 'analytics',
    whatIs: 'An SEO Audit is a forensic inspection of your website’s technical health, content quality, on-page structure, backlink profile, and competitive positioning.',
    problem: 'Companies invest in marketing without understanding why their website fails to rank, often missing critical algorithmic penalties or indexation blockers.',
    solution: 'We produce an actionable, prioritized roadmap identifying exact technical bugs, content deficiencies, competitor keyword gaps, and quick-win opportunities.',
    capabilities: [
      { title: 'Deep Crawl Health Analysis', description: 'Auditing every internal URL for status codes, canonicals, duplicate content, and orphaned pages.' },
      { title: 'Keyword Gap & Competitive Benchmark', description: 'Analyzing your top 3 commercial competitors to uncover high-volume keywords they rank for that you lack.' },
      { title: 'Backlink Profile & Penalty Check', description: 'Inspecting existing inbound links for toxic anchor text, spam flags, and historical algorithmic manual actions.' },
      { title: 'Prioritized Fixes Blueprint', description: 'Categorizing findings into high-impact, immediate wins versus long-term strategic enhancements.' },
    ],
    benefits: [
      { title: 'Crystal Clear Roadmap', description: 'Eliminate guesswork with a step-by-step checklist of what to fix, why it matters, and expected impact.' },
      { title: 'Uncover Hidden Ranking Penalties', description: 'Identify and resolve obscure server errors and noindex tags that keep your site invisible.' },
      { title: 'Competitor Intelligence', description: 'Learn exactly how market leaders capture traffic and discover gaps you can exploit immediately.' },
    ],
    faqs: [
      { question: 'What do I receive at the end of an SEO audit?', answer: 'You receive an executive summary, a detailed spreadsheet of all page-level issues, and a prioritized developer-ready action plan.' },
      { question: 'How long does an SEO audit take?', answer: 'A comprehensive technical and competitive SEO audit typically takes 5 to 7 business days.' },
      { question: 'Can your team also implement the recommended fixes?', answer: 'Yes, our engineering and content specialists can execute all on-page, code, and technical recommendations directly.' },
      { question: 'Is an audit necessary if my site is newly built?', answer: 'Yes, new websites often launch with staging environment `noindex` tags, unverified sitemaps, or missing structured schema.' },
    ],
  },

  'keyword-research': {
    primaryKeyword: 'Keyword Research Services',
    secondaryKeywords: ['commercial intent keyword analysis', 'search volume research', 'competitor keyword gap', 'long tail SEO keywords', 'keyword mapping strategy'],
    visualType: 'analytics',
    whatIs: 'Keyword Research is the analytical discovery of the exact phrases, questions, and commercial queries your target customers use when searching for your services on Google.',
    problem: 'Businesses target either impossible ultra-competitive terms with low buyer intent or obscure industry jargon that nobody actually searches for.',
    solution: 'We uncover high-intent commercial keywords, evaluate keyword difficulty, analyze search intent, and map them to targeted URLs across your site.',
    capabilities: [
      { title: 'Commercial Intent Classification', description: 'Separating high-intent purchase searches from generic informational queries.' },
      { title: 'Competitor Keyword Mining', description: 'Extracting ranking keywords from your top competitors to identify easy ranking opportunities.' },
      { title: 'Search Volume & Difficulty Modeling', description: 'Balancing monthly search volume against competition levels to prioritize quick wins.' },
      { title: 'URL Keyword Mapping Matrix', description: 'Assigning primary, secondary, and semantic LSI keywords to specific landing pages to prevent cannibalization.' },
    ],
    benefits: [
      { title: 'Target Customers Ready to Buy', description: 'Focus organic ranking efforts on keywords that generate inquiries rather than hollow traffic.' },
      { title: 'Prevent Keyword Cannibalization', description: 'Ensure your own web pages do not compete against each other in Google search results.' },
      { title: 'Informed Content Strategy', description: 'Know exactly what topics, FAQs, and guides your audience is actively seeking.' },
    ],
    faqs: [
      { question: 'How do you determine keyword commercial intent?', answer: 'We evaluate SERP features, cost-per-click values in Google Ads, and query modifier words like "hire", "agency", "pricing", and "near me".' },
      { question: 'How many keywords will be in the research report?', answer: 'A standard project delivers 50 to 200 thoroughly vetted keywords organized by cluster, intent, volume, and assigned landing page.' },
      { question: 'Do you look at local search terms for Bangalore / India?', answer: 'Yes, we isolate localized geo-modified queries to capture regional market share.' },
      { question: 'How often should keyword research be refreshed?', answer: 'We recommend reviewing keyword maps every 6 months to account for evolving consumer terminology and emerging search trends.' },
    ],
  },

  'content-seo': {
    primaryKeyword: 'Content SEO Optimization',
    secondaryKeywords: ['semantic content optimization', 'topic cluster strategy', 'pillar page SEO', 'helpful content update SEO', 'NLP entity optimization'],
    visualType: 'marketing',
    whatIs: 'Content SEO is the strategic authoring and structuring of website content to thoroughly satisfy Google’s helpful content guidelines, search intent, and topical authority.',
    problem: 'Thin, superficial content and keyword-stuffed articles get ignored by search algorithms and fail to convince human decision-makers.',
    solution: 'We craft comprehensive pillar pages, semantic topic clusters, natural entity references, and answer-engine optimized sections that rank on page one.',
    capabilities: [
      { title: 'Topic Cluster & Pillar Architecture', description: 'Building interconnected hub-and-spoke content hubs establishing deep domain authority.' },
      { title: 'Natural Language Processing (NLP) Entities', description: 'Enriching content with related entities and semantic terms that Google algorithms expect to see.' },
      { title: 'Direct Answer Snippet Structuring', description: 'Formatting definitions and bullet points to capture featured snippets and Google SGE summaries.' },
      { title: 'Information Gain & Original Insight', description: 'Integrating proprietary client data, original graphics, and expert quotes to satisfy Google standards.' },
    ],
    benefits: [
      { title: 'Capture Featured Snippets & AI Overviews', description: 'Position your brand directly in Position Zero and Google AI answer boxes.' },
      { title: 'Establish Uncontested Topic Authority', description: 'Become the authoritative source Google trusts for broad and long-tail queries in your niche.' },
      { title: 'Long-Term Compounding Traffic', description: 'Evergreen, comprehensive content continues to attract commercial leads for years after publication.' },
    ],
    faqs: [
      { question: 'What is a topic cluster?', answer: 'A topic cluster is a centralized comprehensive "pillar" page linked to multiple supporting detailed articles, signaling comprehensive authority to Google.' },
      { question: 'How do you optimize for Google SGE / AI Overviews?', answer: 'By providing direct, concise definitions, structured tables, authoritative bullet lists, and original analytical insights.' },
      { question: 'Can existing blog posts be optimized for Content SEO?', answer: 'Yes, historical content refreshes often produce faster ranking jumps than writing completely new posts from scratch.' },
      { question: 'How long should an SEO-optimized page be?', answer: 'Length is dictated by search intent; while commercial service pages average 1,000–1,800 words, technical pillar guides often span 2,500+ words.' },
    ],
  },

  // === SOCIAL MEDIA MARKETING ===
  'social-media-marketing': {
    primaryKeyword: 'Social Media Marketing Services',
    secondaryKeywords: ['social media agency Bangalore', 'SMM company', 'B2B social media strategy', 'social media growth campaigns', 'brand social presence'],
    visualType: 'marketing',
    whatIs: 'Social Media Marketing is the strategic management, content creation, and community building across social channels to build brand resonance, foster trust, and drive business inquiries.',
    problem: 'Inconsistent posting, low-engagement stock imagery, and fragmented messaging produce dormant social profiles that reflect poorly on your business.',
    solution: 'We formulate a bespoke multi-channel social strategy, combining eye-catching visual creative production, authentic brand storytelling, and strategic community outreach.',
    capabilities: [
      { title: 'Multi-Channel Brand Narrative', description: 'Unifying brand messaging across Instagram, LinkedIn, Facebook, and YouTube with professional visual guidelines.' },
      { title: 'High-Impact Creative Production', description: 'Designing aesthetic carousels, engaging video clips, informative infographics, and brand stories.' },
      { title: 'Active Community Moderation', description: 'Promptly answering comments, direct messages, and brand mentions to nurture relationship warm leads.' },
      { title: 'Audience Growth & Engagement Strategy', description: 'Leveraging algorithmic trends, strategic collaboration, and platform-native formats to expand reach.' },
    ],
    benefits: [
      { title: 'Elevated Corporate Reputation', description: 'Active, polished social media channels build immediate credibility with prospective clients and partners.' },
      { title: 'Direct Customer Touchpoints', description: 'Engage decision-makers directly in social feeds, turning casual followers into commercial leads.' },
      { title: 'Organic Word-of-Mouth Reach', description: 'Sharable, high-value posts turn your existing client network into active brand advocates.' },
    ],
    faqs: [
      { question: 'Which social platforms should my business prioritize?', answer: 'B2B companies typically gain highest ROI on LinkedIn and YouTube, while consumer brands thrive on Instagram and Facebook. We tailor platforms to your buyer demographic.' },
      { question: 'How many posts per week do you publish?', answer: 'We typically publish 3 to 5 high-quality pieces of content per week per platform, prioritizing quality and retention over spammy frequency.' },
      { question: 'Do you respond to comments and direct messages?', answer: 'Yes, our community management workflow includes monitoring inquiries and forwarding sales leads to your team within business hours.' },
      { question: 'Can social media marketing directly generate sales inquiries?', answer: 'Yes, through strategic lead magnets, link-in-bio funnels, direct message automation, and educational carousel hooks.' },
    ],
  },

  'instagram-marketing': {
    primaryKeyword: 'Instagram Marketing Agency Bangalore',
    secondaryKeywords: ['Instagram growth services', 'Reels marketing agency', 'Instagram brand aesthetics', 'Instagram lead generation', 'Instagram business strategy'],
    visualType: 'marketing',
    whatIs: 'Instagram Marketing is the visual curation, Reels production, Story engagement, and algorithmic optimization of your brand presence on Meta’s visual platform.',
    problem: 'Businesses struggle with stagnant follower counts, sub-par reach on static photos, and lack of video production capabilities to create high-retention Reels.',
    solution: 'We transform your Instagram into a high-converting visual storefront featuring hook-driven Reels, aesthetic grid design, interactive Stories, and link-in-bio sales funnels.',
    capabilities: [
      { title: 'Short-Form Reels Production', description: 'Scripting, editing, and sound-designing vertical video reels engineered to capture algorithm recommendations.' },
      { title: 'Aesthetic Grid & Carousel Curation', description: 'Designing cohesive 1080x1350 multi-slide educational carousels that maximize save and share metrics.' },
      { title: 'Daily Interactive Story Sequences', description: 'Deploying polls, quizzes, behind-the-scenes glimpses, and direct message call-to-actions.' },
      { title: 'Profile Bio & Highlight Optimization', description: 'Structuring your bio, brand highlights, and call-to-action buttons to convert profile visitors into leads.' },
    ],
    benefits: [
      { title: 'Viral Algorithm Reach', description: 'Reels offer unparalleled organic discovery, exposing your offerings to non-followers across your region.' },
      { title: 'Strong Visual Brand Affinity', description: 'Showcase company culture, customer transformations, and product superiority in vibrant visual formats.' },
      { title: 'Direct Inquiries via DMs', description: 'Turn engaged story viewers into warm direct message conversations that close into business sales.' },
    ],
    faqs: [
      { question: 'How important are Instagram Reels in 2026?', answer: 'Reels remain the primary organic discovery engine on Instagram, accounting for over 60% of all platform watch time.' },
      { question: 'Do we need to appear on camera ourselves?', answer: 'While founder-led content performs exceptionally, we also produce high-performing b-roll, motion graphics, and graphic carousels that require zero on-camera time.' },
      { question: 'How do you handle hashtags on Instagram?', answer: 'We use targeted, descriptive niche hashtags (5–8 relevant tags) that help Instagram categorise your content accurately rather than spamming generic tags.' },
      { question: 'Can you help set up an Instagram Shop?', answer: 'Yes, we integrate your product catalog with Instagram Shopping and product tagging on eligible accounts.' },
    ],
  },

  'facebook-marketing': {
    primaryKeyword: 'Facebook Marketing Services',
    secondaryKeywords: ['Facebook business page management', 'Facebook community building', 'Facebook organic growth', 'Facebook marketing agency', 'Meta business suite management'],
    visualType: 'marketing',
    whatIs: 'Facebook Marketing leverages the world’s largest social network through business page optimization, community group building, long-form video, and audience retargeting.',
    problem: 'Zero organic reach on simple page links, unattended customer reviews, and lack of cohesive community management limit Facebook’s commercial potential.',
    solution: 'We deploy platform-native video content, engaging discussion prompts, local community group management, and Meta Business Suite automation.',
    capabilities: [
      { title: 'Business Page & Verification Setup', description: 'Optimizing verification badges, services menus, location hours, and automated messenger responses.' },
      { title: 'Long-Form Video & Live Streams', description: 'Producing horizontal and square educational video content optimized for Facebook Watch algorithms.' },
      { title: 'Community Group Engagement', description: 'Building branded niche groups where customers interact, ask questions, and share experiences.' },
      { title: 'Review & Recommendation Management', description: 'Actively monitoring customer recommendations and star ratings to maintain high public trust.' },
    ],
    benefits: [
      { title: 'Unrivaled Regional & Demographic Reach', description: 'Reach established decision-makers and regional consumers who remain daily active users of Facebook.' },
      { title: 'Built-In Local Recommendations', description: 'Leverage Facebook’s local recommendation algorithm when users ask friends for vendor suggestions.' },
      { title: 'Direct Messenger Inquiries', description: 'Automated chatbots answer common questions and book consultations right within Messenger.' },
    ],
    faqs: [
      { question: 'Is Facebook still relevant for businesses in India?', answer: 'Absolutely. Facebook maintains over 350 million active users in India, particularly prominent among homeowners, professionals, and SME business owners.' },
      { question: 'How do you overcome low organic reach on Facebook Pages?', answer: 'We prioritize native video uploads, conversational prompts that trigger comment replies, and dedicated community groups which receive algorithmic feed priority.' },
      { question: 'Can Facebook Messenger be integrated into our website?', answer: 'Yes, we can embed the Facebook Chat plugin directly onto your website for real-time customer support.' },
      { question: 'Do you manage Facebook community groups?', answer: 'Yes, we handle member approvals, moderation of spam, discussion prompts, and pinned resource guides.' },
    ],
  },

  'linkedin-marketing': {
    primaryKeyword: 'LinkedIn B2B Marketing Services',
    secondaryKeywords: ['LinkedIn company page management', 'B2B thought leadership', 'executive personal branding', 'LinkedIn lead generation', 'corporate LinkedIn strategy'],
    visualType: 'marketing',
    whatIs: 'LinkedIn Marketing is the premier B2B growth engine for establishing corporate authority, publishing executive thought leadership, and networking with commercial decision-makers.',
    problem: 'Dry, corporate press releases and sporadic personal updates fail to capture attention in the competitive LinkedIn feed or generate enterprise contract leads.',
    solution: 'We craft compelling founder thought-leadership narratives, multi-slide document carousels (PDFs), case study breakdowns, and proactive networking campaigns.',
    capabilities: [
      { title: 'Executive Ghostwriting & Thought Leadership', description: 'Translating leadership expertise into high-engagement articles, opinion essays, and industry commentary.' },
      { title: 'Document Carousel (PDF) Design', description: 'Designing professional slide decks that viewers can flip through directly in the feed, driving massive dwell time.' },
      { title: 'Company Page Authority Building', description: 'Showcasing workplace culture, milestone achievements, client wins, and open career opportunities.' },
      { title: 'Direct Executive Outreach Strategy', description: 'Targeting CXOs, Directors, and Procurement heads with value-first personalized conversational frameworks.' },
    ],
    benefits: [
      { title: 'Direct Access to Corporate Decision-Makers', description: 'Engage enterprise buyers, investors, and B2B leaders without dealing with traditional gatekeepers.' },
      { title: 'High-Ticket Enterprise Contract Inquiries', description: 'LinkedIn leads possess significantly higher average contract values (ACV) than any consumer channel.' },
      { title: 'Employer Brand & Talent Attraction', description: 'Attract top-tier industry talent by highlighting corporate innovation, culture, and achievements.' },
    ],
    faqs: [
      { question: 'How do LinkedIn document carousels benefit our reach?', answer: 'LinkedIn algorithms reward dwell time—users spending 60+ seconds reading your multi-page slide deck causes the algorithm to push your post to thousands of relevant feeds.' },
      { question: 'Do you write content for personal profiles or just company pages?', answer: 'We specialize in both; personal founder profiles typically drive 5x–10x higher organic reach, while company pages establish official enterprise validation.' },
      { question: 'Can LinkedIn generate qualified B2B leads for niche industries?', answer: 'Yes, because LinkedIn allows precise targeting by job title, company headcount, industry classification, and seniority level.' },
      { question: 'What is the ideal posting frequency on LinkedIn?', answer: 'We recommend 2 to 4 high-value posts per week per profile, allowing each piece sufficient algorithmic runway.' },
    ],
  },

  'youtube-marketing': {
    primaryKeyword: 'YouTube Marketing and Channel Growth',
    secondaryKeywords: ['YouTube video SEO', 'corporate YouTube channel management', 'YouTube thumbnail design', 'video content strategy', 'YouTube organic growth Bangalore'],
    visualType: 'video',
    whatIs: 'YouTube Marketing turns the world’s second largest search engine into a 24/7 video lead generation and brand authority asset through optimized long-form videos and Shorts.',
    problem: 'Companies upload unoptimized videos with low-click thumbnails, poor descriptions, zero keyword tags, and weak intros that cause viewer abandonment.',
    solution: 'We handle complete channel architecture—from video title ideation and custom high-CTR thumbnails to video chapter tagging, playlists, and YouTube Shorts sprints.',
    capabilities: [
      { title: 'High-CTR Custom Thumbnail Design', description: 'Crafting vibrant, high-contrast thumbnail graphics with compelling human expressions and bold typography.' },
      { title: 'YouTube Video Search Engine Optimization', description: 'Writing keyword-rich video titles, descriptions, timestamp chapters, and searchable tags.' },
      { title: 'YouTube Shorts Production', description: 'Repurposing long-form episodes into punchy vertical Shorts that capture hundreds of new subscribers.' },
      { title: 'Audience Retention Editing Strategy', description: 'Structuring video pacing, lower-thirds, b-roll cuts, and sound effects to maintain watch time past 50%.' },
    ],
    benefits: [
      { title: 'Perpetual Evergreen Video Search Engine', description: 'Unlike fleeting social feeds, a well-optimized YouTube video continues to generate views and leads for years.' },
      { title: 'Unmatched Trust & Credibility', description: 'Video format allows prospective clients to see your face, hear your voice, and observe real expertise in action.' },
      { title: 'Passive Commercial Consultations', description: 'Direct viewers via end-screens, pinned comments, and description links to your quote booking form.' },
    ],
    faqs: [
      { question: 'How long does it take for a YouTube channel to gain traction?', answer: 'With strategic video SEO and consistent weekly uploads, channels typically begin seeing steady algorithmic recommendation within 90 days.' },
      { question: 'Do you edit the videos or only optimize the channel?', answer: 'Our media team provides complete end-to-end production: script editing, video timeline cutting, sound design, color grading, and thumbnail creation.' },
      { question: 'Are YouTube Shorts better than long-form videos?', answer: 'Shorts are phenomenal for fast subscriber acquisition, while long-form videos build deep brand trust, retention, and commercial conversions. We recommend a hybrid strategy.' },
      { question: 'How do you measure YouTube ROI for a business?', answer: 'We track viewer retention graphs, search impression CTR, subscriber growth, and direct link referral conversions into your CRM.' },
    ],
  },

  'social-media-management': {
    primaryKeyword: 'Social Media Management Agency',
    secondaryKeywords: ['monthly social media management', 'social content calendar', 'social media publishing Bangalore', 'social community moderation', 'cross platform social marketing'],
    visualType: 'marketing',
    whatIs: 'Social Media Management is the complete, day-to-day operational execution of your company’s social presence—including content scheduling, creative publication, and active community moderation.',
    problem: 'Internal teams get overwhelmed with daily posting demands, resulting in missed schedules, inconsistent branding, and unanswered customer inquiries.',
    solution: 'Review Growth Partners assumes complete operational responsibility for your channels with pre-approved 30-day content calendars, reliable automated publishing, and monthly performance reviews.',
    capabilities: [
      { title: '30-Day Pre-Approved Editorial Calendars', description: 'Complete monthly plans outlining posting dates, visual themes, captions, hashtags, and commercial objectives.' },
      { title: 'Automated Multi-Platform Scheduling', description: 'Scheduling posts for optimal time zones across Instagram, LinkedIn, Facebook, and YouTube.' },
      { title: 'Daily Community Monitoring & Responses', description: 'Answering customer questions, acknowledging comments, and filtering spam within agreed business SLAs.' },
      { title: 'Monthly Executive Analytics Reports', description: 'Transparent reporting detailing follower growth, engagement rates, top-performing posts, and lead inquiries.' },
    ],
    benefits: [
      { title: 'Peace of Mind & Zero Burnout', description: 'Free your internal leadership to focus on client delivery while seasoned agency professionals handle daily social execution.' },
      { title: 'Flawless Posting Consistency', description: 'Never leave your channels dormant again; maintain an active, reputable brand presence 365 days a year.' },
      { title: 'Proactive Brand Protection', description: 'Rapidly identify and resolve public customer complaints before they escalate into reputation issues.' },
    ],
    faqs: [
      { question: 'Do we get to review and approve posts before they go live?', answer: 'Yes. We share the complete content calendar for your review and approval 7 to 10 days before the upcoming month begins.' },
      { question: 'What tools do you use for scheduling and reporting?', answer: 'We utilize enterprise tools including Buffer, Hootsuite, Meta Business Suite, and Google Looker Studio for transparent reporting.' },
      { question: 'Can we still post our own spontaneous team photos?', answer: 'Yes! We encourage clients to share live event moments alongside our structured professional campaigns.' },
      { question: 'What is the contract term for social media management?', answer: 'We offer flexible 3-month, 6-month, and annual management retainers with clear monthly deliverable commitments.' },
    ],
  },

  // === CONTENT MARKETING ===
  'content-strategy': {
    primaryKeyword: 'Content Marketing Strategy',
    secondaryKeywords: ['content marketing roadmap', 'B2B content framework', 'editorial planning agency', 'content audit and strategy', 'content marketing Bangalore'],
    visualType: 'marketing',
    whatIs: 'Content Strategy is the foundational blueprint that aligns business goals, target buyer personas, and SEO keyword data into a cohesive editorial roadmap.',
    problem: 'Publishing random articles and social posts without a clear strategy wastes creative resources, producing zero compounding brand equity or sales pipeline.',
    solution: 'We conduct audience persona research, content gap audits, funnel stage mapping, and distribution channel selection to ensure every piece of content drives business value.',
    capabilities: [
      { title: 'Buyer Persona & Intent Mapping', description: 'Defining customer pain points, objections, and informational queries at awareness, consideration, and decision stages.' },
      { title: 'Competitive Content Gap Audit', description: 'Identifying high-value topics your competitors have missed that you can claim and dominate.' },
      { title: 'Omnichannel Distribution Architecture', description: 'Structuring one core content theme to be repurposed across blogs, email newsletters, social carousels, and video.' },
      { title: 'KPI Benchmarking & Governance', description: 'Establishing clear performance metrics: organic traffic velocity, time on page, email signups, and MQLs.' },
    ],
    benefits: [
      { title: 'Maximised Content ROI', description: 'Ensure every rupee spent on writing and graphic design is laser-focused on acquiring commercial customers.' },
      { title: 'Efficient Content Repurposing', description: 'Turn one comprehensive whitepaper or interview into 10 social posts, 2 blog articles, and an email newsletter.' },
      { title: 'Clear Brand Differentiation', description: 'Differentiate your company from competitors through authoritative, opinionated thought leadership.' },
    ],
    faqs: [
      { question: 'What does a Content Strategy deliverable look like?', answer: 'You receive an extensive strategic deck covering target personas, content pillars, competitor keyword gaps, 6-month editorial calendar, and distribution SOPs.' },
      { question: 'How does content strategy integrate with SEO?', answer: 'Content strategy provides the narrative substance and buyer intent, while SEO ensures the technical structure and keyword optimization for discoverability.' },
      { question: 'How long does developing a content strategy take?', answer: 'A comprehensive brand content strategy is delivered in 2 to 3 weeks including stakeholder interviews and competitor audits.' },
      { question: 'Can you help our internal writers execute the strategy?', answer: 'Yes, we provide detailed content briefs with target word counts, heading outlines, semantic keywords, and reference examples.' },
    ],
  },

  'website-content': {
    primaryKeyword: 'Website Content Writing Services',
    secondaryKeywords: ['corporate web copywriting', 'landing page content writing', 'homepage copywriter Bangalore', 'SEO website copy', 'service page content writing'],
    visualType: 'marketing',
    whatIs: 'Website Content Writing is the craft of composing clear, persuasive, search-optimized, and brand-aligned copy across your homepage, service pages, and about pages.',
    problem: 'Vague buzzwords, dense jargon, and wall-to-wall text bore visitors, causing them to bounce within 5 seconds without understanding what you actually offer.',
    solution: 'We write punchy, benefit-driven web copy structured with clear visual hierarchy, scannable subheadings, social proof integration, and compelling conversion hooks.',
    capabilities: [
      { title: 'Homepage Hero & Value Proposition', description: 'Instant clarity articulating who you are, what problem you solve, and why clients should choose you.' },
      { title: 'High-Converting Service Page Copy', description: 'Detailed breakdowns of deliverables, process steps, problem-solution narratives, and client benefits.' },
      { title: 'Authentic About Us & Brand Storytelling', description: 'Humanizing your leadership team and founding mission to establish emotional trust and credibility.' },
      { title: 'Microcopy & Form Call-to-Actions', description: 'Refining button labels, form instructions, and micro-text to eliminate user hesitation at conversion points.' },
    ],
    benefits: [
      { title: 'Immediate Clarity for Prospective Clients', description: 'Visitors instantly understand your commercial offerings and value proposition within 3 seconds of landing.' },
      { title: 'Higher Search Engine Relevance', description: 'Natural keyword integration satisfies Google’s search algorithms without compromising human readability.' },
      { title: 'Frictionless Path to Inquiry', description: 'Persuasive objection handling and strategic CTAs guide visitors effortlessly toward submitting a quote.' },
    ],
    faqs: [
      { question: 'How do you ensure the tone of voice matches our industry?', answer: 'We conduct a tone-of-voice questionnaire and review your existing brand materials to establish the perfect blend of authoritative, professional, and approachable copy.' },
      { question: 'Do you write wireframe-ready website content?', answer: 'Yes, our copy is delivered organized in section-by-section wireframe formats (H1, H2, body, bullet points, CTA) ready for designers and developers.' },
      { question: 'How many revisions are included?', answer: 'Every page includes up to 2 rounds of collaborative revisions to ensure 100% satisfaction before final handoff.' },
      { question: 'Is the website content original and plagiarism-free?', answer: 'Yes, 100% original copy thoroughly verified through Copyscape and originality tools.' },
    ],
  },

  'blog-content': {
    primaryKeyword: 'SEO Blog Content Writing Services',
    secondaryKeywords: ['professional blog writing', 'B2B blog writers Bangalore', 'long form article writing', 'thought leadership articles', 'organic blog content'],
    visualType: 'marketing',
    whatIs: 'Blog Content Writing is the production of well-researched, authoritative, and SEO-optimized long-form articles designed to answer customer search queries and build domain authority.',
    problem: 'Generic AI-generated articles lack depth, factual accuracy, and real-world examples, failing to rank on Google or establish real industry credibility.',
    solution: 'Our specialist writers craft in-depth (1,500–3,000 word) articles featuring industry insights, proprietary examples, structured data tables, and actionable advice.',
    capabilities: [
      { title: 'In-Depth Research & SME Interviews', description: 'Backing articles with verified industry statistics, authoritative citations, and real-world case studies.' },
      { title: 'Search-Intent Header Structuring', description: 'Organizing content with logical H2 and H3 tags answering target People Also Ask (PAA) questions.' },
      { title: 'Actionable Takeaways & Frameworks', description: 'Providing readers with checklists, step-by-step instructions, and practical implementation frameworks.' },
      { title: 'Internal SILO Linking Integration', description: 'Seamlessly weaving natural links back to your core commercial service pages to pass SEO authority.' },
    ],
    benefits: [
      { title: 'Compounding Organic Search Traffic', description: 'High-quality blog posts attract hundreds of qualified monthly searchers for years without ongoing spend.' },
      { title: 'Establish Thought Leadership', description: 'Position your executives and firm as the go-to subject matter experts in your vertical.' },
      { title: 'Nurture Reluctant Prospects', description: 'Educate buyers who are researching solutions, gently guiding them from problem awareness to consultation.' },
    ],
    faqs: [
      { question: 'How often should a company publish new blog articles?', answer: 'For steady organic growth, we recommend 2 to 4 in-depth, high-quality articles per month rather than shallow daily posts.' },
      { question: 'Do your writers understand technical and B2B topics?', answer: 'Yes, our writing team includes domain specialists with experience across technology, finance, healthcare, SaaS, and digital marketing.' },
      { question: 'Do you provide featured images with the articles?', answer: 'Yes, we include custom-designed blog banner graphics and royalty-free contextual imagery.' },
      { question: 'Can blog posts include download links for lead generation?', answer: 'Yes, we strategically embed content upgrade CTAs (checklists, PDF guides) to capture reader email addresses.' },
    ],
  },

  'promotional-content': {
    primaryKeyword: 'Promotional Content Writing and Campaigns',
    secondaryKeywords: ['promotional sales copy', 'product launch copy', 'festival offer marketing', 'limited time discount campaigns', 'promotional copywriting Bangalore'],
    visualType: 'marketing',
    whatIs: 'Promotional Content Writing crafts urgent, persuasive, and offer-driven copy for flash sales, product launches, seasonal campaigns, and limited-time commercial offers.',
    problem: 'Boring discount announcements fail to create genuine urgency, getting lost in cluttered inboxes and social feeds without driving immediate sales.',
    solution: 'We construct irresistible promotional angles leveraging psychological triggers—scarcity, exclusivity, social proof, and risk reversal—to spur immediate buying action.',
    capabilities: [
      { title: 'Urgency & Scarcity Copywriting', description: 'Crafting genuine deadlines, countdowns, and limited-seat frameworks that motivate immediate decisions.' },
      { title: 'Launch Sequence Copywriting', description: 'Multi-phase teaser, launch-day blitz, and last-chance reminder messaging across email, SMS, and social.' },
      { title: 'Offer Structuring & Value Stacking', description: 'Bundling services, bonuses, and guarantees so the commercial offer feels impossible to refuse.' },
      { title: 'Direct-Response Ad & Banner Copy', description: 'Writing punchy copy for promotional flyers, digital banners, WhatsApp blasts, and ad headlines.' },
    ],
    benefits: [
      { title: 'Rapid Revenue Injections', description: 'Generate significant revenue spikes during seasonal holidays, quarters, or company anniversaries.' },
      { title: 'Re-Activate Cold Inquiries', description: 'Compel stalled leads who hesitated on past quotes to finally take action with a limited-time incentive.' },
      { title: 'Accelerated Product Adoption', description: 'Introduce new service lines to existing customer bases with high initial uptake.' },
    ],
    faqs: [
      { question: 'How do you create urgency without sounding spammy?', answer: 'We focus on genuine commercial reasons for the promotion (e.g. limited onboarding capacity, anniversary specials, seasonal milestones) paired with respectful, professional copy.' },
      { question: 'What channels work best for promotional campaigns?', answer: 'Email marketing, WhatsApp broadcasts, and targeted retargeting ads produce the fastest direct revenue return.' },
      { question: 'Can you help design the promotional visuals as well?', answer: 'Yes, our graphic design team creates matching promotional flyers, social banners, and email header graphics.' },
      { question: 'How far in advance should we plan a promotional campaign?', answer: 'We advise planning at least 2 to 3 weeks prior to launch to allow for asset preparation, email warmup, and list segmentation.' },
    ],
  },

  'marketing-copywriting': {
    primaryKeyword: 'Direct Response Marketing Copywriting',
    secondaryKeywords: ['sales copywriting agency', 'direct response copywriter', 'conversion copywriter Bangalore', 'B2B sales letter writing', 'brochure copywriting'],
    visualType: 'marketing',
    whatIs: 'Marketing Copywriting is the strategic science of writing words that directly persuade a reader to take a specific, measurable commercial action: purchase, call, or inquire.',
    problem: 'Clever, poetic slogans win advertising awards but fail to generate revenue because they ignore direct-response sales psychology and objection handling.',
    solution: 'We deploy time-tested direct-response frameworks (PAS, AIDA, FAB) backed by deep customer research to craft compelling sales letters, brochures, and campaign copy.',
    capabilities: [
      { title: 'Proven Direct-Response Frameworks', description: 'Structuring copy around Problem-Agitate-Solve and Attention-Interest-Desire-Action psychology.' },
      { title: 'Customer Objection Dismantling', description: 'Anticipating and resolving common buyer objections regarding price, timing, complexity, and trust.' },
      { title: 'Sales Brochure & Deck Copywriting', description: 'Composing persuasive commercial decks, print brochures, and capability statements that close deals.' },
      { title: 'A/B Test Copy Variations', description: 'Drafting alternative headlines and call-to-actions to test and scale the highest converting narrative.' },
    ],
    benefits: [
      { title: 'Measurable Conversion Lift', description: 'Direct-response copy directly increases response rates across email, landing pages, and print collateral.' },
      { title: 'Shorter Consultative Sales Cycles', description: 'Pre-handle buyer questions and educate prospects before they ever speak with a sales representative.' },
      { title: 'Consistent Value Proposition', description: 'Arm your entire sales team with unified, battle-tested messaging points that win negotiations.' },
    ],
    faqs: [
      { question: 'What is the difference between content writing and copywriting?', answer: 'Content writing informs, educates, and builds long-term organic authority; copywriting is direct-response persuasion engineered to trigger an immediate commercial purchase or lead.' },
      { question: 'What industries do your copywriters specialize in?', answer: 'We have extensive experience in B2B technology, professional services, healthcare, real estate, education, and consumer brands.' },
      { question: 'Can you rewrite our existing sales collateral?', answer: 'Yes, we perform copy audits on existing sales letters, pitch decks, and website pages to dramatically increase response rates.' },
      { question: 'How do you research our target customers?', answer: 'We review customer reviews, conduct stakeholder interviews, analyze competitor messaging, and inspect real sales call recordings.' },
    ],
  },

  // === EMAIL & CRM MARKETING ===
  'email-marketing': {
    primaryKeyword: 'Email Marketing Services Bangalore',
    secondaryKeywords: ['corporate email marketing', 'newsletter marketing agency', 'email marketing campaigns', 'email deliverability optimization', 'Mailchimp Brevo agency'],
    visualType: 'crm',
    whatIs: 'Email Marketing is the highest ROI digital channel, delivering personalized commercial messaging, newsletters, and promotional announcements directly into customer inboxes.',
    problem: 'Emails landing in Gmail spam folders, low open rates below 10%, ugly unformatted templates, and high unsubscribe rates waste your customer list potential.',
    solution: 'We configure bulletproof SPF/DKIM/DMARC deliverability, design sleek responsive mobile templates, segment subscriber lists, and craft irresistible subject lines.',
    capabilities: [
      { title: 'Deliverability & Domain Authentication', description: 'Configuring SPF, DKIM, and DMARC DNS records to ensure primary inbox placement and zero spam flags.' },
      { title: 'Responsive Mobile Email Design', description: 'Designing lightweight HTML templates that render flawlessly on iPhone Mail, Android, Gmail, and Outlook.' },
      { title: 'Segmentation & Personalization', description: 'Segmenting subscribers by past purchase behavior, engagement tier, and industry to send relevant messages.' },
      { title: 'A/B Subject Line & Preview Testing', description: 'Testing emojis, curiosity hooks, and personalization tags to achieve consistent 30%+ open rates.' },
    ],
    benefits: [
      { title: 'Industry-Leading 36:1 Average ROI', description: 'Email consistently generates the highest return of any digital channel because you own the subscriber list.' },
      { title: 'Independent from Algorithm Changes', description: 'Never worry about social algorithm updates wiping out your reach; email is a direct, owned communication asset.' },
      { title: 'Immediate Customer Re-Engagement', description: 'Drive instant traffic and sales within minutes of hitting send on a segmented broadcast.' },
    ],
    faqs: [
      { question: 'What email platforms do you work with?', answer: 'We manage campaigns on Mailchimp, Brevo (Sendinblue), Klaviyo, ActiveCampaign, HubSpot, and Zoho Campaigns.' },
      { question: 'How do you prevent emails from landing in the spam folder?', answer: 'We enforce strict SPF/DKIM/DMARC authentication, maintain clean list hygiene (removing bounces), and avoid spam-trigger phrasing.' },
      { question: 'Can you help us build our email list ethically?', answer: 'Yes, we create high-value lead magnets, exit-intent popups, and gated resources that attract voluntary opt-ins.' },
      { question: 'What average open and click rates should we expect?', answer: 'With our clean segmentation and deliverability protocols, our clients typically see 25%–40% open rates and 3%–7% click-through rates.' },
    ],
  },

  'business-email-campaigns': {
    primaryKeyword: 'Business Email Campaigns',
    secondaryKeywords: ['B2B email marketing', 'executive email outreach', 'corporate email newsletters', 'business email strategy Bangalore', 'corporate announcements'],
    visualType: 'crm',
    whatIs: 'Business Email Campaigns are professional, highly polished communications tailored for B2B stakeholders—including quarterly updates, corporate announcements, and enterprise partnership pitches.',
    problem: 'Overly flashy marketing emails with cartoonish graphics fail in B2B corporate environments and trigger enterprise IT spam firewalls.',
    solution: 'We craft sophisticated, clean, text-centric business emails that speak the language of corporate executives and land cleanly in Microsoft 365 and Google Workspace.',
    capabilities: [
      { title: 'Executive Tone & Narrative', description: 'Articulating corporate achievements, regulatory updates, and strategic partnerships with enterprise gravitas.' },
      { title: 'Minimalist High-Deliverability Layouts', description: 'Clean typographic formatting optimized to bypass corporate spam filters and render on Outlook desktop.' },
      { title: 'C-Suite Account Segmentation', description: 'Tailoring messaging for specific leadership titles: CEOs, CTOs, CFOs, and Procurement Directors.' },
      { title: 'Engagement Tracking & Sales Alerts', description: 'Notifying sales representatives immediately when enterprise target accounts click proposal links.' },
    ],
    benefits: [
      { title: 'Nurture High-Value Enterprise Accounts', description: 'Keep your firm top-of-mind with enterprise procurement teams during long annual contract cycles.' },
      { title: 'High Readability on Corporate Outlook', description: 'Bypass firewall restrictions and image-blocking settings common in large enterprise networks.' },
      { title: 'Direct Replies from Decision-Makers', description: 'Conversational, professional formats encourage direct executive replies and scheduled calls.' },
    ],
    faqs: [
      { question: 'How do B2B business emails differ from consumer newsletters?', answer: 'B2B business emails emphasize executive clarity, concise text formatting, minimal image weight, and clear business outcomes over flashy consumer discounts.' },
      { question: 'Can these emails be sent from our personal corporate domain?', answer: 'Yes, we configure warm-up protocols and dedicated subdomains or custom SMTP to protect your root domain reputation.' },
      { question: 'How do you handle unsubscribe compliance for B2B emails?', answer: 'Every email includes one-click opt-out mechanisms and physical corporate address details complying with international CAN-SPAM and GDPR regulations.' },
      { question: 'What frequency is appropriate for corporate B2B clients?', answer: 'Typically twice monthly or monthly updates strike the ideal balance of staying relevant without cluttering executive inboxes.' },
    ],
  },

  'lead-nurturing': {
    primaryKeyword: 'Lead Nurturing Automation',
    secondaryKeywords: ['automated email drip sequences', 'lead nurturing campaigns', 'sales funnel email sequences', 'B2B lead nurturing agency', 'automated follow up sequence'],
    visualType: 'crm',
    whatIs: 'Lead Nurturing is the automated delivery of helpful, educational, and trust-building email sequences designed to guide warm prospects from initial inquiry to closed sale.',
    problem: 'Over 70% of inbound leads are not ready to buy immediately; businesses that only follow up once abandon massive future pipeline revenue.',
    solution: 'We construct automated multi-week drip campaigns that systematically address common objections, present case studies, and trigger sales rep calls at peak interest.',
    capabilities: [
      { title: 'Behavior-Triggered Drip Workflows', description: 'Dispatching relevant messages automatically based on the specific service form or resource downloaded.' },
      { title: 'Client Proof & Case Study Sequences', description: 'Showcasing real customer success metrics, testimonial videos, and ROI breakdowns to dismantle skepticism.' },
      { title: 'Objection-Handling Automated Content', description: 'Addressing common hesitations regarding implementation timelines, pricing, and transition risks.' },
      { title: 'Lead Scoring & Sales Handoff Triggers', description: 'Assigning engagement points for opened emails and clicked links to notify sales reps when leads become hot.' },
    ],
    benefits: [
      { title: '50% More Sales at 33% Lower Cost', description: 'Companies that excel at lead nurturing generate substantially more sales-ready opportunities at lower cost.' },
      { title: 'Automated 24/7 Pipeline Progression', description: 'Warm prospects are continuously educated and nurtured even while your sales team is asleep.' },
      { title: 'Zero Leads Slipped Through the Cracks', description: 'Every single inquiry enters a structured nurture track ensuring no prospective buyer is ever forgotten.' },
    ],
    faqs: [
      { question: 'How long should a lead nurturing sequence be?', answer: 'A standard nurture sequence spans 5 to 7 emails over 30 days, transitioning from immediate value delivery to case study proof and consultation invites.' },
      { question: 'What happens when a lead replies to an automated email?', answer: 'Replies route directly to your assigned sales representative’s personal inbox so they can immediately continue the conversation manually.' },
      { question: 'Can the nurture sequence stop once a lead books a call?', answer: 'Yes, automated workflow suppression rules immediately remove a prospect from marketing drips once an appointment is scheduled.' },
      { question: 'How do you measure lead nurturing performance?', answer: 'We evaluate email open velocity, link click-throughs, lead-to-opportunity conversion rates, and sales cycle length reduction.' },
    ],
  },

  'customer-follow-ups': {
    primaryKeyword: 'Automated Customer Follow-Up Systems',
    secondaryKeywords: ['sales follow up automation', 'client follow up emails', 'post consultation follow up', 'customer retention follow up', 'CRM follow up workflows'],
    visualType: 'crm',
    whatIs: 'Customer Follow-Ups are automated and semi-automated communication workflows that ensure prompt, professional follow-through after quote deliveries, meetings, and project milestones.',
    problem: 'Sales reps forget to follow up with prospects after sending quotations, leading to stalled proposals and deals lost to more persistent competitors.',
    solution: 'We build multi-channel follow-up systems combining automated email reminders, WhatsApp follow-up prompts, and CRM task alerts that ensure 100% follow-through.',
    capabilities: [
      { title: 'Post-Quote Automated Follow-Up Triggers', description: 'Scheduling timed check-ins at Day 2, Day 5, Day 10, and Day 21 following proposal submission.' },
      { title: 'Multi-Channel Touchpoint Cadence', description: 'Balancing professional email updates with courteous WhatsApp reminders and calendar invites.' },
      { title: 'One-Click Meeting Rescheduling', description: 'Embedding direct Calendly or CRM links to remove friction when prospects need to reschedule demos.' },
      { title: 'Break-Up & Re-Engagement Emails', description: 'Polite "closing the file" emails that frequently prompt silent prospects to respond and re-open discussions.' },
    ],
    benefits: [
      { title: 'Recover 20% to 35% of Stalled Proposals', description: 'Systematic follow-ups consistently resurrect proposals that prospects intended to sign but set aside.' },
      { title: 'Reputation for Professional Reliability', description: 'Prompt, courteous follow-ups signal to clients that your team is organized, reliable, and attentive.' },
      { title: 'Reduced Administrative Burden on Sales Reps', description: 'Automated prompts remove the cognitive overhead of manually remembering who to call each morning.' },
    ],
    faqs: [
      { question: 'How many follow-up attempts should be made after a quote?', answer: 'Research shows that 80% of sales require 5 follow-up attempts; we design respectful 4-to-6 step cadences that maintain dignity without annoyance.' },
      { question: 'Can follow-ups be integrated with WhatsApp?', answer: 'Yes, we integrate official WhatsApp Business APIs to trigger approved template messages alongside emails.' },
      { question: 'What is a "break-up" email?', answer: 'A courteous message stating that you assume the project is on hold and will close their file—this reverse psychology email routinely achieves a 30%+ response rate.' },
      { question: 'Does this system work with our existing CRM?', answer: 'Yes, we integrate with Zoho, HubSpot, Salesforce, Pipedrive, or custom databases via REST webhooks.' },
    ],
  },

  'crm-marketing': {
    primaryKeyword: 'CRM Marketing Automation Agency',
    secondaryKeywords: ['HubSpot marketing automation', 'Zoho CRM marketing', 'lifecycle CRM campaigns', 'customer database marketing', 'CRM marketing Bangalore'],
    visualType: 'crm',
    whatIs: 'CRM Marketing is the orchestration of customer data, lifecycle stages, automated communication triggers, and revenue attribution inside your central CRM platform.',
    problem: 'Disorganized customer databases with duplicate contacts, missing tags, and zero automated triggers leave massive revenue potential untapped.',
    solution: 'We architect complete CRM marketing ecosystems—cleaning contact data, creating automated lifecycle stages, configuring lead scoring, and deploying automated re-order workflows.',
    capabilities: [
      { title: 'CRM Data Cleansing & Architecture', description: 'De-duplicating records, standardizing custom properties, and configuring role-based permissions.' },
      { title: 'Lifecycle Stage Automation', description: 'Automatically advancing contacts from Subscriber to MQL, SQL, Opportunity, Customer, and Evangelist.' },
      { title: 'Predictive Lead Scoring', description: 'Weighting customer actions (page views, email clicks, form fills) to surface high-propensity buyers.' },
      { title: 'Closed-Loop Revenue Attribution', description: 'Connecting closed deal values back to the exact initial ad or campaign source for accurate ROI calculation.' },
    ],
    benefits: [
      { title: 'Single Source of Commercial Truth', description: 'Unify marketing, sales, and customer service teams under one comprehensive, synchronized database.' },
      { title: 'Hyper-Personalized Customer Journeys', description: 'Deliver messaging tailored strictly to where the customer sits in their commercial lifecycle.' },
      { title: 'Increased Customer Lifetime Value (LTV)', description: 'Automated cross-sell and renewal reminders maximize repeat business from existing clients.' },
    ],
    faqs: [
      { question: 'Which CRM platforms do you specialize in?', answer: 'We specialize in HubSpot, Zoho CRM, Salesforce, ActiveCampaign, and custom PostgreSQL/React CRM platforms.' },
      { question: 'Can you migrate our messy spreadsheet data into a CRM?', answer: 'Yes, our engineering team scrubs, deduplicates, and maps your historical CSV records into structured relational CRM objects.' },
      { question: 'How long does a full CRM marketing setup take?', answer: 'Initial setup, pipeline stages, custom fields, and email workflow integrations typically take 2 to 4 weeks.' },
      { question: 'Do you provide employee training on how to use the CRM?', answer: 'Yes, we deliver live video training sessions and recorded SOP documentation for your sales and marketing staff.' },
    ],
  },

  // === LEAD GENERATION ===
  'b2b-lead-generation': {
    primaryKeyword: 'B2B Lead Generation Services Bangalore',
    secondaryKeywords: ['B2B appointment setting', 'enterprise lead generation', 'LinkedIn B2B prospecting', 'high ticket lead generation', 'B2B sales pipeline'],
    visualType: 'marketing',
    whatIs: 'B2B Lead Generation is the focused acquisition of high-value business client inquiries, qualified enterprise appointments, and RFP opportunities through multi-channel inbound and outbound strategies.',
    problem: 'Cold generic outreach emails get marked as spam, low-quality lead scrapers deliver invalid phone numbers, and reps waste months chasing the wrong people.',
    solution: 'We construct verified B2B prospect lists, craft hyper-personalized value-first outreach, build high-converting landing pages, and qualify decision-makers before booking meetings.',
    capabilities: [
      { title: 'Ideal Customer Profile (ICP) Scoping', description: 'Pinpointing target industries, company headcount, revenue tiers, and specific decision-maker job titles.' },
      { title: 'Verified Decision-Maker Data Extraction', description: 'Curating 100% verified corporate email addresses and direct phone numbers with zero bounce rates.' },
      { title: 'Multi-Touch Inbound & Outbound Cadence', description: 'Orchestrating synchronized LinkedIn messages, personalized emails, and retargeting ads.' },
      { title: 'Pre-Qualification & Appointment Booking', description: 'Screening prospect budgets, authority, and project timelines directly onto your sales team’s calendars.' },
    ],
    benefits: [
      { title: 'Predictable Monthly Enterprise Pipeline', description: 'Transform erratic referral business into a steady, reliable flow of qualified corporate appointments.' },
      { title: 'Higher Average Contract Values', description: 'Focus outreach strictly on mid-market and enterprise clients with substantial budgets.' },
      { title: 'Maximized Sales Rep Productivity', description: 'Your closers spend their time holding meetings with decision-makers rather than prospecting manually.' },
    ],
    faqs: [
      { question: 'What makes your B2B lead generation different from generic agencies?', answer: 'We never buy outdated static lists or send generic spam blasts; we perform account-based research, verify every contact in real time, and pre-qualify needs.' },
      { question: 'How many qualified meetings can we expect per month?', answer: 'Depending on your industry and average deal size, campaigns typically deliver 10 to 30 highly qualified decision-maker meetings per month.' },
      { question: 'What qualifies a B2B lead as "sales-ready"?', answer: 'A verified decision-maker from your approved ICP list who has confirmed a business need, budget viability, and scheduled a consultation.' },
      { question: 'Do you handle NDA requirements for enterprise clients?', answer: 'Yes, all client data and prospect lists are secured under strict non-disclosure agreements with 100% client ownership.' },
    ],
  },

  'b2c-lead-generation': {
    primaryKeyword: 'B2C Lead Generation Agency',
    secondaryKeywords: ['consumer lead generation', 'high volume lead generation', 'mobile lead generation', 'WhatsApp lead campaigns', 'consumer customer acquisition'],
    visualType: 'marketing',
    whatIs: 'B2C Lead Generation focuses on capturing high volumes of consumer inquiries, consultation requests, and retail quote applications at an optimal cost-per-lead (CPL).',
    problem: 'Consumer campaigns often generate high volumes of junk inquiries, wrong phone numbers, and uncontactable tire-kickers that waste staff time.',
    solution: 'We deploy mobile-optimized instant lead forms with OTP phone verification, click-to-WhatsApp direct chats, and automated instant call triggers.',
    capabilities: [
      { title: 'Instant Mobile Forms with OTP Verification', description: 'Validating consumer mobile numbers with instant SMS OTPs to eliminate fake submissions.' },
      { title: 'Click-to-WhatsApp Funnels', description: 'Routing consumers directly into live WhatsApp chat conversations where response rates exceed 80%.' },
      { title: 'Localized Geo-Targeting & Creative Hooks', description: 'Deploying regional language creatives and geo-specific hooks tailored to city neighborhoods.' },
      { title: 'Real-Time Lead Distribution Algorithms', description: 'Instantly routing leads round-robin to available branch sales reps within 30 seconds.' },
    ],
    benefits: [
      { title: 'High Contact & Conversion Rates', description: 'OTP-verified numbers and WhatsApp links ensure your team connects with real, interested buyers.' },
      { title: 'Aggressive Scale & Volume Control', description: 'Scale daily consumer lead volumes up or down to match your operational capacity and call center staffing.' },
      { title: 'Lowest Blended Cost-Per-Acquisition', description: 'Optimized creative testing and fast response rates lower customer acquisition costs significantly.' },
    ],
    faqs: [
      { question: 'What industries benefit most from your B2C lead generation?', answer: 'Real estate, healthcare, education, home services, financial products, automotive, and interior design firms achieve exceptional results.' },
      { question: 'How do you prevent duplicate or fake leads?', answer: 'We implement OTP phone validation, device fingerprinting, reCAPTCHA, and CRM deduplication algorithms.' },
      { question: 'Can leads be routed directly to individual city branches?', answer: 'Yes, we configure geographic routing rules based on the user’s selected pincode or city.' },
      { question: 'What response speed is necessary for B2C leads?', answer: 'B2C leads decay rapidly; calling within 5 minutes increases conversion rates by up to 391% compared to waiting an hour.' },
    ],
  },

  'website-lead-generation': {
    primaryKeyword: 'Website Lead Generation Optimization',
    secondaryKeywords: ['website conversion optimization', 'lead capture web design', 'sticky lead widgets', 'exit intent lead generation', 'inbound lead capture'],
    visualType: 'analytics',
    whatIs: 'Website Lead Generation is the architectural optimization of your existing web traffic to turn passive website visitors into active contact submissions and quote requests.',
    problem: '98% of your website visitors browse your pages and leave forever without submitting their details because there are no compelling, low-friction inquiry touchpoints.',
    solution: 'We integrate high-converting interactive elements—exit-intent popups, floating quick-quote widgets, WhatsApp floating pills, and free cost calculators.',
    capabilities: [
      { title: 'Sticky Thumb-Friendly Mobile CTAs', description: 'Persistent bottom mobile action bars allowing visitors to call or message with one tap from any page.' },
      { title: 'Smart Exit-Intent Capture Overlays', description: 'Detecting when a visitor is about to close the browser tab and presenting a compelling last-chance offer.' },
      { title: 'Interactive Cost & ROI Calculators', description: 'Engaging visitors with dynamic estimation tools that require an email or phone number to see full results.' },
      { title: 'Contextual Multi-Step Quote Modals', description: 'Replacing intimidating 10-field forms with step-by-step interactive questions that triple completion rates.' },
    ],
    benefits: [
      { title: 'Capture 3x to 5x More Inquiries from Existing Traffic', description: 'Generate dozens of extra commercial leads without spending an additional rupee on advertising.' },
      { title: 'Zero Disruptive Clutter', description: 'Modern, tasteful micro-interactions that enhance user experience rather than annoying visitors with ugly popups.' },
      { title: 'Instant Lead Qualification Data', description: 'Collect valuable project scope information before your sales team ever dials the prospect.' },
    ],
    faqs: [
      { question: 'Will exit-intent popups annoy our corporate visitors?', answer: 'No, we configure smart delay timers, frequency caps (e.g. max once per 7 days per visitor), and clean, respectful dismiss buttons.' },
      { question: 'Can these widgets be installed on our custom website?', answer: 'Yes, our lightweight JavaScript widgets integrate cleanly into React, WordPress, Webflow, Shopify, or plain HTML sites.' },
      { question: 'Do interactive calculators slow down page speed?', answer: 'No, our tools are written in lightweight, dependency-free vanilla TypeScript loaded asynchronously without impacting Core Web Vitals.' },
      { question: 'How quickly will we see an increase in inquiries?', answer: 'Clients routinely experience an immediate 40%–120% jump in daily lead volume within 48 hours of installing optimized capture widgets.' },
    ],
  },

  'landing-page-campaigns': {
    primaryKeyword: 'Landing Page Campaign Management',
    secondaryKeywords: ['PPC landing page development', 'high converting landing pages', 'ad campaign landing page', 'dedicated sales landing page', 'landing page agency Bangalore'],
    visualType: 'design',
    whatIs: 'Landing Page Campaigns are dedicated, standalone conversion hubs custom-built to match paid ad campaigns with zero distracting menu links and laser-focused messaging.',
    problem: 'Sending expensive Google or Meta ad clicks to a general homepage drops conversion rates to 1% because visitors get distracted by irrelevant navigation.',
    solution: 'We design and engineer bespoke, lightning-fast landing pages with 1:1 message matching, persuasive social proof, and seamless mobile inquiry forms.',
    capabilities: [
      { title: 'Distraction-Free 1:1 Message Matching', description: 'Stripping out main navigation bars so every visual element reinforces the exact offer advertised in the ad.' },
      { title: 'Sub-Second Page Load Optimization', description: 'Engineered with clean React and Tailwind CSS to score 95+ on Google PageSpeed Insights.' },
      { title: 'Strategic Social Proof Architecture', description: 'Embedding verified customer reviews, Google rating badges, and client logos directly adjacent to the form.' },
      { title: 'A/B Headline & Offer Testing', description: 'Simultaneously testing two variations to continuously beat the benchmark conversion rate.' },
    ],
    benefits: [
      { title: 'Double or Triple Ad ROAS', description: 'Lifting your landing page conversion rate from 2% to 6% cuts your effective cost-per-lead by two-thirds.' },
      { title: 'Higher Google Ads Quality Score', description: 'Exceptional landing page relevance directly lowers your cost-per-click on Google search auctions.' },
      { title: 'Rapid Campaign Launch Agility', description: 'Launch new seasonal offers and regional tests within 48 to 72 hours without touching your core website code.' },
    ],
    faqs: [
      { question: 'Why can’t I just send paid traffic to my homepage?', answer: 'A homepage is designed for general exploration with dozens of links; landing pages are focused on one single commercial goal, yielding 3x–5x higher conversion rates.' },
      { question: 'Do you host the landing page or do we?', answer: 'We can deploy the landing page onto your existing domain sub-folder (e.g. yoursite.com/offer) or subdomain (e.g. promo.yoursite.com).' },
      { question: 'Who creates the copy and visuals for the landing page?', answer: 'Review Growth Partners handles complete copywriting, UI/UX design, custom asset creation, coding, and analytics integration.' },
      { question: 'How do we track conversions on the landing page?', answer: 'We configure server-side GA4 events, Google Ads conversion tags, and Meta CAPI webhooks.' },
    ],
  },

  'lead-management': {
    primaryKeyword: 'Lead Management System & Workflows',
    secondaryKeywords: ['sales lead tracking', 'lead distribution system', 'lead qualification workflows', 'inbound lead management Bangalore', 'lead response time optimization'],
    visualType: 'crm',
    whatIs: 'Lead Management encompasses the capture, scoring, automated routing, SLA monitoring, and sales follow-up governance required to convert marketing leads into paying revenue.',
    problem: 'Leads from Google Ads, Meta, and website forms sit unassigned in email inboxes for hours or days, causing 60%+ of warm prospects to sign with competitors.',
    solution: 'We configure end-to-end lead management infrastructure that instantly alerts reps via WhatsApp, assigns owners round-robin, and tracks response times.',
    capabilities: [
      { title: 'Instant WhatsApp & SMS Sales Dispatch', description: 'Transmitting full prospect details to assigned sales reps within 30 seconds of form submission.' },
      { title: 'Automated Round-Robin Routing', description: 'Fairly distributing inquiries across team members based on territory, language proficiency, or product line.' },
      { title: 'Response SLA Time Tracking', description: 'Tracking minutes-to-first-call and alerting managers if an inquiry remains uncontacted past 15 minutes.' },
      { title: 'Pipeline Stage Governance & Hygiene', description: 'Enforcing required update fields so deals do not languish indefinitely in open status without next steps.' },
    ],
    benefits: [
      { title: 'Close Deals While Competitors Sleep', description: 'Responding within 5 minutes makes you 21x more likely to enter the sales cycle than responding after 30 minutes.' },
      { title: 'Full Sales Team Accountability', description: 'Real-time dashboards show exactly which representatives follow up promptly and which drop deals.' },
      { title: 'Zero Wasted Ad Spend', description: 'Ensure that every single lead purchased with marketing dollars is actively worked and tracked to resolution.' },
    ],
    faqs: [
      { question: 'What is the ideal response time for an inbound digital lead?', answer: 'Industry data demonstrates that contacting a prospect within 5 minutes yields an 8x higher conversion rate than waiting 30 minutes.' },
      { question: 'Can this lead management system notify our team on WhatsApp?', answer: 'Yes! We configure instant WhatsApp template messages with clickable phone numbers so reps can dial with one tap.' },
      { question: 'What happens if a salesperson is on leave?', answer: 'Our routing rules allow automatic skip-logic, reassigning leads to active team members during absences.' },
      { question: 'Do you provide manager dashboards to track conversion rates?', answer: 'Yes, managers receive weekly summaries detailing total leads, contact percentage, average response latency, and closed revenue.' },
    ],
  },
};
