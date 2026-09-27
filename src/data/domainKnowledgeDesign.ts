// Domain knowledge dictionary for DESIGN services
import type { ServiceContentOverride } from './serviceTypes.ts';

export const DESIGN_DOMAIN_KNOWLEDGE: Record<string, Partial<ServiceContentOverride>> = {
  // === BRAND IDENTITY ===
  'logo-design': {
    primaryKeyword: 'Professional Logo Design Services Bangalore',
    secondaryKeywords: ['custom logo design', 'brand mark design', 'vector corporate logo', 'minimalist logo design', 'trademark ready logo design'],
    visualType: 'brand',
    whatIs: 'Logo Design is the foundational art and strategic engineering of crafting a memorable, scalable, and legally protectable visual emblem that embodies your company’s core purpose.',
    problem: 'Generic stock clip-art and amateur Fiverr logos degrade customer trust, fail to scale sharply on billboards or mobile app icons, and cannot be trademarked.',
    solution: 'We create bespoke vector logo marks rooted in deep brand discovery, golden ratio geometry, color harmony, and versatile multi-format scalability.',
    capabilities: [
      { title: 'Concept Ideation & Creative Directions', description: 'Delivering 3 to 5 distinctly different conceptual metaphors and typographic directions.' },
      { title: 'Mathematical Vector Geometry', description: 'Precision vector construction (AI, EPS, SVG) ensuring zero pixelation at any resolution from favicon to billboard.' },
      { title: 'Color, Monochrome & Dark Mode Suites', description: 'Engineered versions for dark mode, pure black/white print, reverse backdrops, and metallic foil stamping.' },
      { title: 'Complete Source File & Ownership Transfer', description: 'Organized packages including AI, EPS, SVG, PDF, transparent PNG, and complete copyright ownership transfer.' },
    ],
    benefits: [
      { title: 'Instant Professional Recognition', description: 'Establish immediate authority and memorability with investors, prospective clients, and industry peers.' },
      { title: '100% Trademark & IP Ownership', description: 'You own 100% legal rights to register your custom mark with the Trademark Registry.' },
      { title: 'Flawless Multi-Platform Consistency', description: 'Crisp visual presentation across websites, mobile app icons, vehicle wraps, and corporate stationery.' },
    ],
    faqs: [
      { question: 'How many logo concepts will you present?', answer: 'We typically present 3 to 5 completely distinct creative directions, each exploring different metaphors, typographies, and visual styles.' },
      { question: 'Do I own the full intellectual property rights to the logo?', answer: 'Yes, upon project completion and final milestone clearance, 100% full commercial copyright transfers to your company.' },
      { question: 'What file formats will I receive?', answer: 'You will receive vector master files (Adobe Illustrator .AI, .EPS, .SVG) and raster exports (.PNG transparent, .PDF, high-res .JPEG, and .ICO favicons).' },
      { question: 'Can you refresh or modernize our existing old logo?', answer: 'Yes, our brand modernization service refines outdated logos—cleaning up geometry, font weights, and color contrast while preserving recognizable brand heritage.' },
    ],
  },

  'brand-identity': {
    primaryKeyword: 'Complete Corporate Brand Identity Design',
    secondaryKeywords: ['visual identity system', 'corporate branding agency Bangalore', 'brand identity package', 'brand style system', 'corporate visual language'],
    visualType: 'brand',
    whatIs: 'Brand Identity is the holistic visual, typographic, and stylistic ecosystem—including color palettes, typography rules, image treatments, and graphic motifs—that defines how the world perceives your business.',
    problem: 'Inconsistent fonts, conflicting color shades, and mismatched visual styles across departments create a disjointed, amateur perception that erodes buyer confidence.',
    solution: 'We construct unified, enterprise-grade visual identity systems that guarantee absolute aesthetic consistency across digital products, marketing, packaging, and physical spaces.',
    capabilities: [
      { title: 'Core Visual Identity Architecture', description: 'Primary & secondary brand marks, wordmarks, sub-brand lockups, and official badge variations.' },
      { title: 'Color Palette Engineering (HEX, CMYK, Pantone)', description: 'Scientifically balanced color systems specified for web screens (sRGB), commercial print (CMYK), and Pantone matching.' },
      { title: 'Corporate Typography Hierarchy', description: 'Selected primary, secondary, and accent typefaces with precise line-height, kerning, and weight guidelines.' },
      { title: 'Graphic Motifs & Visual Elements', description: 'Custom geometric patterns, iconography styles, photographic filters, and container shapes.' },
    ],
    benefits: [
      { title: 'Premium Commercial Valuation', description: 'A polished, cohesive brand identity enables you to command higher pricing and win enterprise clients.' },
      { title: 'Seamless Cross-Team Consistency', description: 'Equip internal teams, agencies, and regional offices with a definitive blueprint for all visual communications.' },
      { title: 'Durable Brand Equity', description: 'Build enduring consumer recognition and trust that compounds in enterprise valuation year over year.' },
    ],
    faqs: [
      { question: 'What is included in a complete Brand Identity package?', answer: 'A complete package includes the primary and secondary logo marks, comprehensive color systems (Pantone/CMYK/HEX), typographic hierarchy, stationery designs, social media templates, and a brand style manual.' },
      { question: 'How long does a brand identity project take?', answer: 'A comprehensive brand identity engagement typically spans 3 to 5 weeks from initial discovery to final brand book delivery.' },
      { question: 'How do you determine our brand’s visual direction?', answer: 'We conduct a structured brand positioning workshop to uncover your archetype, competitive landscape, target audience psychographics, and commercial positioning.' },
      { question: 'Can this identity be applied to our website and mobile app?', answer: 'Yes, we provide Figma design tokens and CSS variables ready for instant integration by your frontend engineering team.' },
    ],
  },

  'brand-guidelines': {
    primaryKeyword: 'Brand Guidelines and Style Guide Book',
    secondaryKeywords: ['brand identity manual', 'corporate style guide PDF', 'brand standards document', 'brand book design Bangalore', 'visual identity guidelines'],
    visualType: 'brand',
    whatIs: 'Brand Guidelines (or Brand Book) is the definitive master rulebook documenting the correct visual, verbal, and technical rules for applying your brand across all mediums.',
    problem: 'Without documented standards, external vendors, printers, and employees alter logo colors, stretch proportions, and use random fonts, diluting your brand.',
    solution: 'We engineer a comprehensive, beautifully designed Brand Standards Manual (30–60 page PDF) that serves as the immutable law for all future marketing and product creation.',
    capabilities: [
      { title: 'Logo Clearspace & Minimum Size Specifications', description: 'Defining mandatory breathing room, exclusion zones, and minimum print/digital sizes to protect legibility.' },
      { title: 'Incorrect Usage & Violation Examples', description: 'Explicitly illustrating forbidden modifications: rotation, drop shadows, color shifting, stretching, and busy backgrounds.' },
      { title: 'Print & Digital Color Conversions', description: 'Exact formulas for digital web (HEX, RGB), four-color offset printing (CMYK), and spot inks (Pantone PMS).' },
      { title: 'Voice & Tone Editorial Principles', description: 'Documenting headline styles, grammar conventions, key taglines, and messaging vocabulary.' },
    ],
    benefits: [
      { title: 'Zero Brand Dilution', description: 'Ensure every agency, printer, partner, and new hire reproduces your brand with 100% fidelity every time.' },
      { title: 'Faster Onboarding & Vendor Turnaround', description: 'Hand the PDF to any external designer, printer, or developer and eliminate hours of back-and-forth guidance.' },
      { title: 'Enterprise Legal Protection', description: 'Provides clear legal documentation of official brand assets for trademark protection and franchise agreements.' },
    ],
    faqs: [
      { question: 'How many pages is a typical Brand Guidelines book?', answer: 'Our comprehensive brand books typically range from 25 to 50 pages, organized into clear chapters: Brand Story, Logo Standards, Typography, Color Systems, Collateral Applications, and Digital UI.' },
      { question: 'In what format is the Brand Book delivered?', answer: 'We deliver an interactive vector PDF with clickable bookmarks, print-ready high-resolution spreads, and an editable Figma/InDesign source file.' },
      { question: 'Does it cover tone of voice and writing style?', answer: 'Yes, we include verbal guidelines covering brand personality, dos and don’ts of copywriting, and tagline usage.' },
      { question: 'Can we share this document with external printing presses?', answer: 'Yes, it includes explicit pre-press specifications, bleed parameters, and Pantone spot color formulas for print technicians.' },
    ],
  },

  'business-card-design': {
    primaryKeyword: 'Business Card Design Services Bangalore',
    secondaryKeywords: ['luxury business card design', 'corporate visiting card', 'minimalist business card', 'embossed business cards', 'QR code business cards'],
    visualType: 'design',
    whatIs: 'Business Card Design is the precision tactile and visual crafting of your executive calling card, engineered to leave a tangible, memorable impression during in-person meetings.',
    problem: 'Cheap, cluttered templates printed on flimsy paper convey an amateur impression to prospective enterprise clients and high-net-worth investors.',
    solution: 'We craft sophisticated, modern business cards with balanced white space, legible micro-typography, QR code digital vCard integration, and luxury finish specifications.',
    capabilities: [
      { title: 'Bespoke Double-Sided Layouts', description: 'Balancing minimalist aesthetics with essential contact details, executive titles, and brand marks.' },
      { title: 'Luxury Print Finish Specifications', description: 'Preparing production-ready vector spot UV files, metallic foil stamping, letterpress debossing, and edge gilding.' },
      { title: 'Smart QR Code & Digital vCard Linking', description: 'Embedding dynamic QR codes that allow recipients to save complete phone contacts directly to their smartphones.' },
      { title: 'Pre-Press Production Files', description: 'Exporting 300+ DPI vector PDF files with proper 3mm bleed margins, crop marks, and CMYK color profiles.' },
    ],
    benefits: [
      { title: 'Memorable Executive Handshake', description: 'A weighty, tactile card with exquisite typography sets a tone of uncompromising quality.' },
      { title: 'Frictionless Contact Saving', description: 'Dynamic QR codes eliminate typing errors, allowing clients to tap and save your details in seconds.' },
      { title: 'Turnkey Printing Readiness', description: 'Deliver files directly to any luxury printing house with zero pre-press technical complications.' },
    ],
    faqs: [
      { question: 'What paper stocks do you recommend for luxury business cards?', answer: 'We recommend heavy premium stocks: 350–600 GSM duplex or triplex cotton boards, matte velvet soft-touch laminate, or textured linen finishes.' },
      { question: 'Can you generate individual cards for multiple team members?', answer: 'Yes, we create master template design systems and generate individual print files for each executive or sales representative.' },
      { question: 'What is the standard business card size in India?', answer: 'Standard business card dimensions are 89mm x 51mm (or 85mm x 55mm international standard) plus a 3mm cutting bleed margin.' },
      { question: 'Do you also handle the physical printing and delivery?', answer: 'Yes, we offer end-to-end service including premium printing, foil stamping, edge painting, and doorstep delivery across India.' },
    ],
  },

  'letterhead-design': {
    primaryKeyword: 'Corporate Letterhead Design Services',
    secondaryKeywords: ['official company letterhead', 'invoice template design', 'Word letterhead template', 'PDF corporate stationery', 'letterhead design Bangalore'],
    visualType: 'design',
    whatIs: 'Letterhead Design is the official formatting of your corporate stationery for legal contracts, formal proposals, executive correspondence, and corporate billing.',
    problem: 'Pixelated headers pasted into Word documents create an unpolished impression on official quotes, legal agreements, and corporate invoices.',
    solution: 'We design refined, print-perfect vector letterhead templates accompanied by editable Microsoft Word (.docx) and Google Docs digital templates.',
    capabilities: [
      { title: 'Vector Header & Footer Framing', description: 'Subtle, elegant header branding with registered office address, CIN, GSTIN, and contact details.' },
      { title: 'Editable Microsoft Word (.docx) Master', description: 'Pre-configured header/footer margins, default typography styles, and line spacing for daily team use.' },
      { title: 'Official Digital PDF Invoicing Layout', description: 'Compatible with standard digital billing software and electronic document signing.' },
      { title: 'Commercial Print Bleed Files', description: 'High-resolution CMYK vector layouts ready for offset printing on premium 100–120 GSM bond stationery.' },
    ],
    benefits: [
      { title: 'Unimpeachable Legal & Commercial Legitimacy', description: 'Official proposals and legal agreements look authoritative and compliant with corporate registry standards.' },
      { title: 'Effortless Team Adoption', description: 'Pre-locked Word templates ensure employees cannot accidentally distort the logo or misalign footer data.' },
      { title: 'Brand Uniformity Across Formal Documents', description: 'Unify NDAs, employment offer letters, invoices, and executive memos under one refined look.' },
    ],
    faqs: [
      { question: 'Will the letterhead work in Microsoft Word and Google Docs?', answer: 'Yes! We deliver locked-header `.docx` templates and Google Docs templates where text typing stays perfectly aligned.' },
      { question: 'What legal details must be included on an Indian corporate letterhead?', answer: 'Registered Company Name, CIN (Corporate Identity Number), Registered Office Address, Email, Phone, and optional GSTIN.' },
      { question: 'What paper weight is best for letterhead printing?', answer: 'We recommend 100 GSM or 120 GSM premium executive bond paper for smooth desktop laser printing and luxury feel.' },
      { question: 'Can you also design matching corporate envelopes?', answer: 'Yes, we design matching DL, C5, and C4 corporate envelopes featuring the same brand styling.' },
    ],
  },

  'corporate-branding': {
    primaryKeyword: 'Corporate Branding and Rebranding Agency',
    secondaryKeywords: ['enterprise branding agency Bangalore', 'corporate rebranding services', 'brand repositioning', 'B2B brand architecture', 'corporate visual governance'],
    visualType: 'brand',
    whatIs: 'Corporate Branding is the comprehensive strategic and creative positioning of enterprise organizations across sub-brands, business units, office environments, and investor relations.',
    problem: 'Conglomerates and growing firms often suffer from brand fragmentation following mergers or rapid product launches, resulting in confused stakeholders and diluted equity.',
    solution: 'We develop clear brand architecture models (Branded House vs House of Brands), monolithic identity systems, and unified corporate governance frameworks.',
    capabilities: [
      { title: 'Brand Architecture Strategy', description: 'Structuring parent-company and subsidiary relationships for clear commercial clarity and synergy.' },
      { title: 'Corporate Environmental Branding', description: 'Designing office reception signage, architectural wall graphics, directional wayfinding, and conference room themes.' },
      { title: 'Investor Relations & Annual Report Styling', description: 'Elevating corporate annual reports, sustainability disclosures, and board presentations.' },
      { title: 'Corporate Rebranding Transition Roadmaps', description: 'Guiding enterprise transition timelines, press releases, digital asset swaps, and internal rollout campaigns.' },
    ],
    benefits: [
      { title: 'Maximized Enterprise Shareholder Value', description: 'A coherent corporate brand commands higher valuation multiples during acquisitions and investor rounds.' },
      { title: 'Synergistic Cross-Selling Power', description: 'Clear brand hierarchy makes it effortless to cross-sell new business lines to existing enterprise accounts.' },
      { title: 'Strong Corporate Culture & Pride', description: 'Inspire employee dedication and pride with a corporate visual identity reflecting world-class ambition.' },
    ],
    faqs: [
      { question: 'When should a corporation undergo a rebrand?', answer: 'When expanding into new international markets, completing a major merger/acquisition, pivoting business models, or modernizing outdated perception.' },
      { question: 'How do you prevent customer confusion during a corporate rebrand?', answer: 'We formulate phased transition roadmaps, bridge branding strategies, and clear public stakeholder communications.' },
      { question: 'Do you design physical office signage and environmental graphics?', answer: 'Yes, our architectural branding team specifies materials, lighting, 3D acrylic/metal signage, and reception installations.' },
      { question: 'How do you handle multi-country corporate branding?', answer: 'We ensure visual language and naming conventions are culturally resonant and legally clearance-checked across target jurisdictions.' },
    ],
  },

  // === GRAPHIC DESIGN ===
  'poster-design': {
    primaryKeyword: 'Poster Design Services Bangalore',
    secondaryKeywords: ['event poster design', 'corporate poster design', 'promotional poster design', 'typography poster design', 'print and digital posters'],
    visualType: 'design',
    whatIs: 'Poster Design is the creation of large-format, high-impact visual artwork engineered to stop viewers in their tracks and communicate key event, product, or cultural information instantly.',
    problem: 'Cluttered posters with poor hierarchy, illegible fonts from 5 feet away, and pixelated imagery fail to attract attention in bustling public or corporate spaces.',
    solution: 'We employ bold typographic scale, powerful focal imagery, negative space, and disciplined visual hierarchy that commands attention from across a room.',
    capabilities: [
      { title: 'High-Impact Visual Focal Points', description: 'Crafting dominant headline treatments and arresting visual metaphors that hook viewer curiosity.' },
      { title: '3-Second Information Hierarchy', description: 'Structuring information so viewers instantly digest: What, When, Where, and How to participate.' },
      { title: 'Large-Format Vector & 300 DPI Rendering', description: 'Engineered at precise physical print dimensions (A3, A2, A1, A0) with zero loss of sharpness.' },
      { title: 'Multi-Format Digital Adaptations', description: 'Adapting poster artwork for Instagram stories, digital lobby screens, and email invites.' },
    ],
    benefits: [
      { title: 'Command Physical Footfall', description: 'Draw immediate crowds to corporate conferences, product launches, retail events, and university summits.' },
      { title: 'Viral Social Media Sharing', description: 'Visually captivating posters double as viral digital artwork shared enthusiastically across social channels.' },
      { title: 'Enduring Memorability', description: 'Distinctive artistic poster designs often become collector items and iconic brand artifacts.' },
    ],
    faqs: [
      { question: 'What print sizes do you design posters for?', answer: 'We design for all standard international paper sizes: A4, A3, A2, A1, and A0, as well as custom cinema and exhibition dimensions.' },
      { question: 'Can the poster be used both digitally and in print?', answer: 'Yes, we provide 300 DPI CMYK print files with bleed margins and optimized RGB versions for digital screens and social media.' },
      { question: 'How long does a custom poster design take?', answer: 'Standard poster design typically takes 3 to 5 business days from brief approval to final print-ready files.' },
      { question: 'Do you create original illustrations for posters?', answer: 'Yes, our graphic artists create bespoke digital illustrations, photo composites, and 3D typography.' },
    ],
  },

  'advertisement-design': {
    primaryKeyword: 'Advertisement Design Services',
    secondaryKeywords: ['print ad design', 'magazine advertisement design', 'digital display ads', 'billboard design Bangalore', 'commercial creative design'],
    visualType: 'design',
    whatIs: 'Advertisement Design is the commercial engineering of high-converting visual ads across print magazines, outdoor billboards, transit displays, and digital banners.',
    problem: 'Ads that blend into the editorial background or lack clear commercial hooks fail to generate inquiries, wasting expensive media placement budgets.',
    solution: 'We construct direct-response advertising layouts combining stopping-power visuals, compelling headlines, risk-reversal offers, and unmistakable call-to-actions.',
    capabilities: [
      { title: 'Print Magazine & Newspaper Formats', description: 'Precision full-page, half-page, and double-page spread layouts adhering to strict publication specs.' },
      { title: 'Outdoor Billboard & OOH Formats', description: 'Large-scale horizontal and vertical billboards designed for rapid comprehension at highway speeds.' },
      { title: 'Digital Display Ad Suites', description: 'Google Display Network responsive suites (300x250, 728x90, 160x600, 300x600) optimized for clicks.' },
      { title: 'Commercial Proof & Offer Badging', description: 'Strategic integration of review ratings, awards, and limited-time offer badges.' },
    ],
    benefits: [
      { title: 'Maximize Expensive Ad Space Investment', description: 'Ensure premium media placements on hoardings or magazines yield maximum brand awareness and phone inquiries.' },
      { title: 'High-Impact Visual Recall', description: 'Memorable advertising angles ensure prospective buyers remember your name when purchasing decisions arise.' },
      { title: 'Zero Publication Rejections', description: 'Adherence to exact color profiles (FOGRA/GRACol), bleed margins, and safe text zones guarantees smooth printing.' },
    ],
    faqs: [
      { question: 'What details do you need before designing a print advertisement?', answer: 'We need the publication’s technical spec sheet (bleed, trim, live area), your target audience, core offer, and high-resolution logo files.' },
      { question: 'Can you design large outdoor highway hoardings?', answer: 'Yes, our billboard designs emphasize bold, high-contrast typography and simple 6-word messaging optimized for high-speed viewing.' },
      { question: 'Do you provide copy for the advertisements?', answer: 'Yes, our direct-response copywriters craft the headline hooks, supporting body copy, and urgent calls to action.' },
      { question: 'How do you handle color accuracy in magazine printing?', answer: 'We calibrate all files using industry standard CMYK color profiles, maintaining rich blacks and verifying total ink coverage limits.' },
    ],
  },

  'social-media-creatives': {
    primaryKeyword: 'Social Media Creative Design Agency Bangalore',
    secondaryKeywords: ['Instagram post design', 'LinkedIn banner creatives', 'social media graphic design', 'carousel slide design', 'promotional social media banners'],
    visualType: 'design',
    whatIs: 'Social Media Creatives are eye-catching, brand-consistent visual assets custom-designed to dominate mobile feeds, stop user scrolling, and boost algorithmic engagement.',
    problem: 'Generic Canva templates make your brand look identical to hundreds of competitors, degrading authority and producing negligible engagement.',
    solution: 'We craft bespoke social media graphics—educational carousels, quotation cards, infographic breakdowns, and promotional banners—custom-tailored to your visual identity.',
    capabilities: [
      { title: 'Multi-Slide Educational Carousels', description: 'Designing frictionless 10-slide swipeable decks with visual continuity across slide boundaries.' },
      { title: 'Infographics & Data Visualizations', description: 'Translating complex industry statistics into clear, shareable, bite-sized visual charts.' },
      { title: 'Customer Proof & Review Showcases', description: 'Transforming client testimonials and 5-star ratings into beautifully styled visual proof cards.' },
      { title: 'Batch Monthly Asset Production', description: 'Delivering 15 to 30 custom graphics per month formatted for Instagram (1:1, 4:5), LinkedIn, and Facebook.' },
    ],
    benefits: [
      { title: 'Distinctive Feed Presence', description: 'Stand out instantly in busy feeds with custom color palettes, professional typography, and sleek layouts.' },
      { title: 'Skyrocketing Saves and Shares', description: 'Informative, beautifully designed carousels and infographics generate 5x higher saves and shares.' },
      { title: 'Pre-Approved Asset Banks', description: 'Arm your social media team with a ready repository of approved, on-brand graphics ready for posting.' },
    ],
    faqs: [
      { question: 'What dimensions do you design for social media?', answer: 'We primarily design in 1080x1350px (Instagram portrait, maximizing feed screen real estate), 1080x1080px (square), and 1200x628px (LinkedIn/Facebook landscape).' },
      { question: 'Do you deliver editable source files?', answer: 'Yes, we provide editable Figma source files or Adobe Photoshop/Illustrator files alongside high-resolution web exports.' },
      { question: 'How quickly can you turn around a batch of creatives?', answer: 'A monthly batch of 15 to 20 custom creatives is delivered within 5 to 7 business days following brief approval.' },
      { question: 'Can you match our existing brand guidelines?', answer: 'Yes, we import your exact color codes, font files, and logo assets to ensure 100% adherence to your brand book.' },
    ],
  },

  'promotional-designs': {
    primaryKeyword: 'Promotional Graphic Design Services',
    secondaryKeywords: ['sale banner design', 'festival offer graphic design', 'discount flyer design', 'promotional marketing collateral', 'digital promo creative Bangalore'],
    visualType: 'design',
    whatIs: 'Promotional Design is the high-energy visual packaging of sales events, festive promotions, discount blitzes, and limited-time commercial offers.',
    problem: 'Disorganized promotional graphics with clashing colors and illegible coupon codes look untrustworthy, depressing conversion rates during peak retail seasons.',
    solution: 'We design vibrant, urgency-inducing promotional suites that highlight commercial savings, bundle offers, and countdown deadlines with pristine brand polish.',
    capabilities: [
      { title: 'Festive & Seasonal Campaign Suites', description: 'Thematic Diwali, New Year, Independence Day, and seasonal retail visual campaigns.' },
      { title: 'Discount Badging & Price Comparison Layouts', description: 'Clear visual contrast highlighting original price vs promotional savings.' },
      { title: 'Roll-Up Standees & Point-of-Sale Displays', description: 'Vertical floor banners and counter standees for retail stores, showrooms, and exhibition booths.' },
      { title: 'Multi-Channel Digital Promo Kits', description: 'Coordinated website hero banners, email promo headers, WhatsApp status cards, and social posts.' },
    ],
    benefits: [
      { title: 'Accelerated Seasonal Revenue', description: 'Drive massive commercial purchase spikes during holiday shopping windows with irresistible visual presentation.' },
      { title: 'Multi-Touchpoint Brand Cohesion', description: 'Ensure the customer experiences the exact same promotional excitement from your website to in-store standees.' },
      { title: 'Clear Consumer Price Understanding', description: 'Eliminate customer confusion with crystal-clear offer terms, bundle breakdowns, and savings calculations.' },
    ],
    faqs: [
      { question: 'How far in advance should we design festive campaign collateral?', answer: 'We recommend initiating design 3 to 4 weeks prior to festival dates to allow sufficient time for printing and digital ad approvals.' },
      { question: 'Can you design physical standees and digital banners together?', answer: 'Yes, our promotional kits include both large-format print files (standees, tent cards) and digital screen formats.' },
      { question: 'Do you include promotional copywriting in the design?', answer: 'Yes, our team drafts punchy promotional slogans, offer terms, and urgent calls to action.' },
      { question: 'Can the offer codes and dates be easily edited later?', answer: 'Yes, we provide cleanly labeled Figma or vector master files where dates and promo codes can be updated in seconds.' },
    ],
  },

  'marketing-materials': {
    primaryKeyword: 'Corporate Marketing Materials Design',
    secondaryKeywords: ['print marketing collateral', 'sales one pager design', 'tri fold brochure design', 'product catalog design Bangalore', 'corporate presentation folders'],
    visualType: 'design',
    whatIs: 'Marketing Materials Design is the comprehensive development of tangible sales collateral—brochures, one-pagers, product sheets, presentation folders, and case study leaves.',
    problem: 'Sales reps attending high-stakes client meetings with poorly formatted printouts or dated collateral look unorganized, hurting deal closure rates.',
    solution: 'We engineer executive-grade print collateral with premium grid structures, tactile paper finish specifications, and compelling visual storytelling.',
    capabilities: [
      { title: 'Tri-Fold & Bi-Fold Corporate Brochures', description: 'Multi-panel storytelling guiding enterprise prospects logically through capabilities, proof points, and solutions.' },
      { title: 'Sales One-Pagers & Solution Sheets', description: 'Concise, high-impact single-page overviews designed for rapid digestion by busy C-level executives.' },
      { title: 'Comprehensive Product Catalogs', description: 'Multi-page structured catalogs featuring product photography, technical specifications, and ordering tables.' },
      { title: 'Branded Presentation Folders & Inserts', description: 'Custom die-cut corporate folders holding proposals, business cards, and project estimates.' },
    ],
    benefits: [
      { title: 'Arm Sales Teams for In-Person Victory', description: 'Provide sales executives with physical collateral they are proud to leave behind with decision-makers.' },
      { title: 'Tactile Credibility Beyond Screens', description: 'High-quality print collateral provides a permanent, tangible presence on corporate boardroom tables.' },
      { title: 'Long Shelf Life Inside Enterprise Accounts', description: 'A beautifully produced capabilities brochure is passed between internal executives for months.' },
    ],
    faqs: [
      { question: 'What is the standard turnaround time for a corporate brochure?', answer: 'A standard 8 to 16-page corporate brochure takes 7 to 12 business days including layout design, copy integration, and print pre-press.' },
      { question: 'Do you handle the paper stock and printing specifications?', answer: 'Yes, we provide exact printer instructions: paper weights (GSM), matte/gloss lamination, binding type (saddle stitch vs perfect bound), and die-cut lines.' },
      { question: 'Can you also provide interactive digital PDF versions?', answer: 'Yes, every print deliverable includes an optimized interactive digital PDF with clickable links and bookmarks for email sharing.' },
      { question: 'Can we update pricing in the catalog periodically?', answer: 'Yes, we structure modular catalog templates so pricing tables and SKU lists can be updated quickly.' },
    ],
  },

  'digital-creatives': {
    primaryKeyword: 'Digital Creative Design Services',
    secondaryKeywords: ['web graphics design', 'digital marketing assets', 'interactive banners', 'email header graphics', 'digital brand assets Bangalore'],
    visualType: 'design',
    whatIs: 'Digital Creatives encompass the complete ecosystem of digital visual assets—web banners, hero graphics, email newsletter headers, app store screenshots, and digital signage.',
    problem: 'Mismatched aspect ratios, slow-loading oversized image files, and low-resolution graphics degrade website user experience and drive up bounce rates.',
    solution: 'We produce ultra-crisp, lightweight, retina-ready digital visual suites optimized for instant loading and responsive presentation across modern screens.',
    capabilities: [
      { title: 'Website Hero Banners & Section Art', description: 'Custom-designed graphics, 3D composition mockups, and illustrative headers for web landing pages.' },
      { title: 'Email Newsletter Graphical Headers', description: 'Lightweight, high-contrast visual banners that render reliably across mobile and desktop email clients.' },
      { title: 'App Store & Play Store Screenshots', description: 'Framed device mockups highlighting core features with bold captions that increase app install rates.' },
      { title: 'Digital Signage & LED Wall Graphics', description: 'Custom aspect ratio visuals for corporate lobby displays, conference screens, and retail video walls.' },
    ],
    benefits: [
      { title: 'Sub-Second Image Loading', description: 'Optimized WebP and compressed SVG formats deliver crisp visuals with zero impact on page load speed.' },
      { title: 'Flawless 4K & Retina Screen Clarity', description: 'Exported at 2x resolution to ensure sharp, pixel-perfect rendering on Apple Retina and 4K monitors.' },
      { title: 'Unified Digital Brand Experience', description: 'Ensure cohesive visual polish across your website, customer emails, mobile app, and digital ads.' },
    ],
    faqs: [
      { question: 'What file formats do you deliver for digital web use?', answer: 'We export modern WebP, SVG, transparent PNG, and optimized JPEG formats alongside master Figma source files.' },
      { question: 'How do you ensure graphics look sharp on Retina displays?', answer: 'We design all digital graphics at 2x pixel density, ensuring razor-sharp reproduction on high-DPI smartphone and laptop screens.' },
      { question: 'Can you create custom 3D device mockups showing our software?', answer: 'Yes, we render your web or mobile application interfaces inside realistic 3D MacBook, iPhone, and iPad frames.' },
      { question: 'How do you keep image file sizes lightweight for fast web loading?', answer: 'We utilize lossless compression algorithms, ensuring web hero banners stay under 150KB while retaining photographic clarity.' },
    ],
  },

  // === UI/UX DESIGN ===
  'website-ui-design': {
    primaryKeyword: 'Website UI Design Services Bangalore',
    secondaryKeywords: ['Figma website design', 'user interface design agency', 'responsive web UI', 'modern corporate UI design', 'landing page UI design'],
    visualType: 'design',
    whatIs: 'Website UI Design is the meticulous crafting of the visual interface—layout grids, typography hierarchy, button states, color systems, and responsive screen flows in Figma.',
    problem: 'Cluttered visual layouts, poor contrast, inconsistent spacing, and dated aesthetics confuse visitors, making modern companies look obsolete.',
    solution: 'We design modern, world-class website user interfaces in Figma featuring strict 8pt grid systems, auto-layout components, and pixel-perfect responsive layouts.',
    capabilities: [
      { title: 'Figma Auto-Layout & Design Systems', description: 'Reusable typography tokens, colors, buttons, form elements, and auto-layout components.' },
      { title: 'Responsive Multi-Breakpoint Layouts', description: 'Dedicated screen mockups for Mobile (390px), Tablet (768px), Laptop (1280px), and Desktop (1440px+).' },
      { title: 'Micro-Interaction & Hover State Design', description: 'Specifying button hover states, dropdown animations, scroll indicators, and modal transitions.' },
      { title: 'Developer Handoff Specifications', description: 'Clean layer naming, CSS properties, auto-layout spacing tokens, and exported SVG icons ready for coding.' },
    ],
    benefits: [
      { title: 'World-Class Brand Aesthetic', description: 'Position your business alongside top global tech companies with sleek typography and generous whitespace.' },
      { title: 'Halved Frontend Development Time', description: 'Standardized design systems eliminate guesswork for developers, allowing rapid bug-free implementation.' },
      { title: 'Higher User Engagement & Dwell Time', description: 'Intuitive visual hierarchy guides prospective clients effortlessly down the page toward conversion.' },
    ],
    faqs: [
      { question: 'Do you design in Figma?', answer: 'Yes, 100% of our UI/UX work is conducted in Figma with full component libraries, auto-layout, and interactive prototypes.' },
      { question: 'Do you deliver both desktop and mobile versions?', answer: 'Yes, every single page is designed with dedicated mobile phone layouts alongside full desktop viewports.' },
      { question: 'Can our internal engineering team inspect the Figma files?', answer: 'Yes, we provide full Figma project access with developer inspect mode, CSS attributes, and exported asset folders.' },
      { question: 'How many design revisions are included?', answer: 'We work iteratively, providing wireframe approval, visual style sign-off, and up to 2 rounds of polish per page.' },
    ],
  },

  'mobile-app-ui-design': {
    primaryKeyword: 'Mobile App UI Design Services',
    secondaryKeywords: ['iOS app UI design', 'Android app UI design', 'Figma mobile app designer Bangalore', 'mobile user interface design', 'mobile app design system'],
    visualType: 'mobile',
    whatIs: 'Mobile App UI Design is the creation of intuitive, touch-friendly, and visually engaging smartphone interfaces conforming to Apple Human Interface Guidelines and Google Material Design 3.',
    problem: 'Apps with tiny touch targets, awkward bottom-sheet navigation, and cluttered screens frustrate users, causing immediate app uninstalls.',
    solution: 'We engineer thumb-zone optimized mobile screens with smooth onboarding carousels, native navigation patterns, dark mode compatibility, and haptic feedback cues.',
    capabilities: [
      { title: 'Apple iOS & Google Material 3 Conformance', description: 'Adhering to native system conventions (navigation bars, modal sheets, tab bars) for intuitive familiarity.' },
      { title: 'Thumb-Zone Touch Optimization', description: 'Placing critical navigation and action buttons within comfortable reach of the user’s thumb.' },
      { title: 'Native Dark Mode & Light Mode Schemes', description: 'Designing complete alternative color tokens ensuring high readability in low-light environments.' },
      { title: 'Empty States, Error Handling & Loaders', description: 'Designing thoughtful skeleton loaders, zero-data empty states, and friendly error dialogues.' },
    ],
    benefits: [
      { title: 'Higher App Store Ratings', description: 'Intuitive, beautiful interfaces earn enthusiastic 5-star reviews on the App Store and Google Play.' },
      { title: 'Reduced User Churn & Drop-Off', description: 'Frictionless onboarding flows guide new users to their first "aha moment" within 60 seconds.' },
      { title: 'Smooth Developer Implementation', description: 'Complete component systems with iOS Auto Layout and Android dp/sp measurement specifications.' },
    ],
    faqs: [
      { question: 'Do you design for both iOS (iPhone) and Android?', answer: 'Yes, we design cross-platform UI systems that look native on both Apple iOS (Human Interface Guidelines) and Android (Material Design).' },
      { question: 'Can we test the app design on our actual phones?', answer: 'Yes! Using the Figma Mirror app, you can test interactive prototypes on your physical smartphone with real gestures.' },
      { question: 'How many screens are typically included in an app design project?', answer: 'A standard mobile app MVP typically encompasses 25 to 50 unique screens including edge cases, modals, and error states.' },
      { question: 'Do you also provide the app icon design?', answer: 'Yes, we design custom vector app icons formatted for all required iOS and Android launcher dimensions.' },
    ],
  },

  'dashboard-design': {
    primaryKeyword: 'SaaS Dashboard UI/UX Design Services Bangalore',
    secondaryKeywords: ['web app dashboard design', 'data visualization UI', 'analytics dashboard design', 'admin panel UI design', 'enterprise SaaS UI UX'],
    visualType: 'analytics',
    whatIs: 'Dashboard Design is the structural and visual organization of complex enterprise data, analytics metrics, and operational workflows into intuitive, scannable control panels.',
    problem: 'Dense tables, confusing chart types, poor search filters, and information overload paralyze business users trying to make data-driven decisions.',
    solution: 'We construct high-clarity dashboard interfaces featuring modular widget cards, customizable KPI summaries, interactive data tables, and clean data visualizations.',
    capabilities: [
      { title: 'Information Hierarchy & KPI Card Design', description: 'Highlighting critical metrics (MRR, churn, conversion, pipeline) with glanceable trend indicators.' },
      { title: 'Complex Data Table Architecture', description: 'Designing sortable columns, multi-parameter filters, inline editing, batch actions, and pagination.' },
      { title: 'Custom Data Visualizations & Chart Systems', description: 'Specifying color-coded area charts, bar graphs, cohort heatmaps, and funnel diagrams.' },
      { title: 'Role-Based Navigation Layouts', description: 'Collapsible sidebars, global search bars (Cmd+K), notification hubs, and profile dropdowns.' },
    ],
    benefits: [
      { title: 'Instant User Comprehension', description: 'Enable business users to understand operational performance and take action within 5 seconds.' },
      { title: 'Higher SaaS User Adoption & Retention', description: 'Intuitive enterprise software drastically reduces user churn and cuts customer onboarding support tickets.' },
      { title: 'Scalable Modular Grid Architecture', description: 'Easily add new widgets, analytics reports, and settings pages as your software product grows.' },
    ],
    faqs: [
      { question: 'How do you choose the right charts for different metrics?', answer: 'We match data types to cognitive best practices: area charts for time trends, bar charts for categorical comparisons, and tables for dense granular lookups.' },
      { question: 'Do you design for both dark mode and light mode?', answer: 'Yes, data-heavy dashboards frequently benefit from dark mode to reduce eye strain during extended work hours; we design both modes.' },
      { question: 'Can the dashboard designs accommodate varying screen sizes?', answer: 'Yes, our layouts feature responsive fluid grids that adapt gracefully from laptop screens (1366px) up to ultra-wide 4K monitors.' },
      { question: 'Do you provide UI kits for frontend libraries like Tailwind or MUI?', answer: 'Yes, we align our Figma color tokens, typography scales, and spacing systems with modern component libraries (Tailwind CSS, Radix, Shadcn UI).' },
    ],
  },

  'landing-page-design': {
    primaryKeyword: 'Conversion-Focused Landing Page Design',
    secondaryKeywords: ['PPC landing page UI design', 'high converting landing page designer', 'Figma landing page agency', 'lead capture page design Bangalore', 'sales page UX design'],
    visualType: 'design',
    whatIs: 'Landing Page Design is the conversion-centered visual engineering of standalone web pages built to maximize paid ad conversions through visual hierarchy, eye-tracking paths, and trust signals.',
    problem: 'Visually cluttered pages with confusing navigation, buried forms, and lack of visual proof cause paid visitors to bounce, burning marketing ad spend.',
    solution: 'We design high-converting, distraction-free landing pages with compelling hero sections, sticky forms, visual testimonials, and clear benefit breakdowns.',
    capabilities: [
      { title: 'Conversion-Centered Layout Wireframes', description: 'Guiding viewer eye-tracking down the page using Z-pattern and F-pattern cognitive reading flows.' },
      { title: 'Visual Trust & Credibility Stacks', description: 'Strategic placement of verified client reviews, star ratings, security badges, and corporate logos.' },
      { title: 'Frictionless Multi-Step Form UI', description: 'Designing bite-sized form steps with progress bars that reduce psychological resistance.' },
      { title: 'Mobile-First Thumb-Zone Checkout', description: 'Ensuring sticky CTA buttons and quick-action WhatsApp pills remain accessible at all times.' },
    ],
    benefits: [
      { title: '2x to 4x Higher Ad Conversion Rates', description: 'Turn more clicks into qualified inquiries, directly lowering your customer acquisition cost (CAC).' },
      { title: 'Higher Quality Scores on Google Ads', description: 'Visual relevance between ad keywords and landing page layout reduces cost-per-click.' },
      { title: 'Rapid Turnaround for Marketing Blitzes', description: 'Figma landing page prototypes delivered within 3 to 5 business days ready for development.' },
    ],
    faqs: [
      { question: 'What makes a landing page design convert better than a homepage?', answer: 'Landing pages remove all distracting menu navigation, focusing 100% of user attention onto a single commercial offer and clear action form.' },
      { question: 'Do you design both desktop and mobile versions?', answer: 'Yes, over 75% of paid traffic arrives on mobile phones; mobile responsiveness is our primary design priority.' },
      { question: 'Can you also develop the landing page in code?', answer: 'Yes, our engineering team can convert the approved Figma design into blazing-fast React/Tailwind code ready to launch.' },
      { question: 'Do you help with A/B testing variations?', answer: 'Yes, we design alternative headline treatments, hero graphics, and form placements for split-testing.' },
    ],
  },

  'user-experience-design': {
    primaryKeyword: 'User Experience (UX) Design Agency Bangalore',
    secondaryKeywords: ['UX research and design', 'user journey mapping', 'information architecture consulting', 'usability testing services', 'enterprise UX audit'],
    visualType: 'design',
    whatIs: 'User Experience (UX) Design is the behavioral science of researching user psychology, mapping user workflows, and architecting intuitive digital paths that make complex systems effortless to use.',
    problem: 'Clunky navigation, hidden features, confusing terminology, and excessive clicks frustrate customers, resulting in high churn and abandoned user carts.',
    solution: 'We conduct user research, audit existing drop-off points, map friction-free user journeys, and validate workflows through interactive prototypes.',
    capabilities: [
      { title: 'User Research & Persona Validation', description: 'Conducting user interviews, heuristic evaluations, and session recordings to diagnose pain points.' },
      { title: 'Information Architecture & Site Mapping', description: 'Structuring logical taxonomic hierarchies that allow users to find what they need in fewer than 3 clicks.' },
      { title: 'User Journey & Task Flow Mapping', description: 'Diagramming end-to-end user workflows from signup through checkout and repeat engagement.' },
      { title: 'Usability Testing & Friction Elimination', description: 'Testing prototypes with real users to identify hesitation points before expensive engineering starts.' },
    ],
    benefits: [
      { title: 'Dramatically Reduced Customer Churn', description: 'Frictionless, enjoyable product experiences turn first-time users into loyal, recurring advocates.' },
      { title: 'Eliminate Wasted Engineering Cycles', description: 'Solving user confusion in Figma wireframes costs 10x less than refactoring complex production code.' },
      { title: 'Accessibility (WCAG 2.1) Compliance', description: 'Ensure your digital platform is accessible to all users, including those with visual and motor impairments.' },
    ],
    faqs: [
      { question: 'What is the difference between UI and UX design?', answer: 'UX (User Experience) is the underlying architecture, logic, and workflow journey; UI (User Interface) is the visual skin, typography, colors, and polish applied on top.' },
      { question: 'How do you conduct user research for B2B products?', answer: 'We interview actual corporate stakeholders, observe screen recordings, analyze support tickets, and perform competitor benchmark audits.' },
      { question: 'What deliverables are included in a UX project?', answer: 'You receive user persona sheets, journey flow diagrams, information architecture maps, low-fidelity wireframes, and usability test reports.' },
      { question: 'Can you perform a UX audit on our existing live platform?', answer: 'Yes, we provide forensic UX audits detailing exact usability flaws, cognitive friction points, and prioritized recommendations.' },
    ],
  },

  'wireframes-and-prototypes': {
    primaryKeyword: 'Wireframing and Clickable Prototyping Services',
    secondaryKeywords: ['Figma clickable prototype', 'interactive wireframes Bangalore', 'rapid product prototyping', 'low fidelity wireframes', 'MVP interactive prototype'],
    visualType: 'design',
    whatIs: 'Wireframes and Prototypes are low-fidelity blueprints and clickable interactive simulations that allow stakeholders and investors to test real software workflows before writing a single line of code.',
    problem: 'Jumping straight into full coding without prototyping leads to scope creep, expensive architectural rewrites, and misaligned stakeholder expectations.',
    solution: 'We build rapid grayscale wireframes and fully interactive, clickable Figma prototypes that simulate live app behavior, user gestures, and transitions.',
    capabilities: [
      { title: 'Low-Fidelity Grayscale Wireframes', description: 'Focusing strictly on content layout, hierarchy, and functional requirements without visual distractions.' },
      { title: 'Clickable Figma Interactive Prototypes', description: 'Linking screens with realistic transitions, modal overlays, dropdown menus, and scroll physics.' },
      { title: 'Investor Pitch & Stakeholder Demos', description: 'High-fidelity clickable simulations that demonstrate product viability to venture capitalists and partners.' },
      { title: 'Rapid Iterative Feedback Cycles', description: 'Testing alternative navigation structures and refining core user flows in days rather than months.' },
    ],
    benefits: [
      { title: 'Save 40%+ on Total Development Costs', description: 'Validate product concepts and iron out operational flaws before committing engineering capital.' },
      { title: 'Win Investor Funding with Live Demos', description: 'Showcase a tangible, clickable product demonstration that excites investors far more than a static pitch deck.' },
      { title: 'Crystal Clear Engineering Roadmap', description: 'Developers receive an exact clickable reference showing how every button, modal, and screen transitions.' },
    ],
    faqs: [
      { question: 'Can an interactive prototype be shared with investors?', answer: 'Yes, Figma prototypes generate a shareable web link that opens and behaves like a live app on any desktop or mobile browser.' },
      { question: 'How detailed are your interactive prototypes?', answer: 'We can prototype realistic micro-interactions: typing in inputs, toggling switches, opening bottom sheets, and multi-step modal checkouts.' },
      { question: 'How long does it take to create a wireframe prototype?', answer: 'A complete product wireframe prototype typically takes 1 to 2 weeks depending on the number of screens and complexity of user flows.' },
      { question: 'Can we conduct user testing directly on the prototype?', answer: 'Yes, platforms like Maze or UserTesting connect directly to Figma prototypes to record real user interaction heatmaps and task completion rates.' },
    ],
  },

  // === SOCIAL MEDIA DESIGN ===
  'instagram-post-design': {
    primaryKeyword: 'Instagram Post Design Agency Bangalore',
    secondaryKeywords: ['custom Instagram graphics', 'Instagram carousel design', 'aesthetic Instagram feed design', 'social media graphic designer', 'Instagram grid design'],
    visualType: 'design',
    whatIs: 'Instagram Post Design is the creation of visually captivating 1080x1350 portrait graphics and multi-slide carousels custom-engineered to command attention in crowded mobile feeds.',
    problem: 'Low-quality stock images, poorly formatted text, and inconsistent brand colors cause users to scroll past your posts without engaging or following.',
    solution: 'We craft high-retention 1080x1350 graphics featuring striking typography, custom brand palettes, continuous carousel slides, and compelling engagement hooks.',
    capabilities: [
      { title: 'Portrait 1080x1350 Aspect Ratio Optimization', description: 'Maximizing vertical screen estate on smartphones to occupy the user’s full view.' },
      { title: 'Continuous Seamless Carousel Decks', description: 'Designing split images and visual cues that span across slide borders, enticing users to swipe through all slides.' },
      { title: 'Cohesive Visual Feed Aesthetics', description: 'Maintaining consistent typographic rules, border treatments, and brand colors across every published tile.' },
      { title: 'Quote Cards & Proof Graphics', description: 'Transforming thought leadership snippets, client reviews, and industry insights into sharable visual cards.' },
    ],
    benefits: [
      { title: 'Stop the Infinite Mobile Scroll', description: 'Bold color contrast and polished typographic design capture attention within the critical first second.' },
      { title: '3x More Carousel Saves and Shares', description: 'Instagram’s algorithm heavily favors posts that users save and share, driving exponential organic reach.' },
      { title: 'Instantly Recognizable Brand Grid', description: 'Turn your profile into a prestigious visual showroom that converts casual profile visitors into loyal followers.' },
    ],
    faqs: [
      { question: 'Why do you design in 1080x1350 instead of 1080x1080 square?', answer: '1080x1350 (4:5 portrait ratio) occupies 25% more screen area on mobile feeds than a standard square, dramatically increasing visibility.' },
      { question: 'Do you create the copywriting for the post graphics?', answer: 'Yes, our copywriting team writes the headline hooks, slide body copy, and caption text including relevant hashtags.' },
      { question: 'Can you provide editable templates so our team can make quick edits?', answer: 'Yes, we provide organized master Figma templates with component text fields for effortless team updates.' },
      { question: 'How many post designs are typically delivered per month?', answer: 'We offer packages ranging from 12 to 24 custom post designs per month delivered in organized weekly batches.' },
    ],
  },

  'instagram-story-design': {
    primaryKeyword: 'Instagram Story Design Services',
    secondaryKeywords: ['interactive Instagram stories', 'Story highlight cover design', 'vertical 9:16 story graphics', 'animated Instagram stories', 'Instagram sales story sequences'],
    visualType: 'design',
    whatIs: 'Instagram Story Design is the crafting of immersive 9:16 vertical full-screen graphics engineered for daily audience connection, interactive polls, product reveals, and direct response sales.',
    problem: 'Boring, static text stories get tapped past within 0.5 seconds, failing to engage your most loyal followers or drive direct message inquiries.',
    solution: 'We construct high-engagement 9:16 Story sequences with interactive sticker zones, branded countdowns, animated transitions, and compelling swipe-up links.',
    capabilities: [
      { title: 'Full-Screen 1080x1920 Vertical Canvas', description: 'Immersive full-bleed graphics designed with safe zones protecting text from UI overlay headers and footers.' },
      { title: 'Interactive Poll & Question Templates', description: 'Visual frames custom-designed to host native Instagram interactive stickers for maximum participation.' },
      { title: 'Story Sales & Lead Funnel Sequences', description: 'Multi-slide narrative sequences that hook curiosity, present proof, and trigger direct message replies.' },
      { title: 'Custom Brand Highlight Icon Covers', description: 'Designing cohesive highlight emblems that organize your profile’s best stories into permanent categories.' },
    ],
    benefits: [
      { title: 'Deepest Daily Engagement with Warm Followers', description: 'Stories are watched by your most dedicated audience—making them the highest-converting sales format on Instagram.' },
      { title: 'Drive Direct Inquiries via DMs', description: 'Clear conversational prompts turn passive story viewers into active one-on-one direct message sales chats.' },
      { title: 'Polished Permanent Profile Highlights', description: 'Organize your reviews, services, FAQs, and behind-the-scenes content into an organized mini-website on your bio.' },
    ],
    faqs: [
      { question: 'What are safe zones in Instagram Story design?', answer: 'The top 250px and bottom 250px of a 1080x1920 story are covered by username headers and reply bars; we ensure all text sits safely in the center.' },
      { question: 'Can Story graphics include animations?', answer: 'Yes, we export both high-resolution static PNGs and 15-second animated MP4 motion stories with sound.' },
      { question: 'How many highlight icons do you design for a profile?', answer: 'We typically create 5 to 8 custom highlight covers: Services, Reviews, About Us, Case Studies, FAQs, and Media.' },
      { question: 'How frequently should a brand post Stories?', answer: 'We recommend posting 2 to 5 daily Story slides to keep your profile circle active at the top of followers’ feeds.' },
    ],
  },

  'youtube-thumbnail-design': {
    primaryKeyword: 'YouTube Thumbnail Design Services Bangalore',
    secondaryKeywords: ['high CTR YouTube thumbnails', 'custom YouTube thumbnail designer', 'clickable YouTube thumbnails', 'viral video thumbnail design', 'YouTube graphics agency'],
    visualType: 'video',
    whatIs: 'YouTube Thumbnail Design is the specialized direct-response art of creating high-contrast, curiosity-inducing 1280x720 visual billboards that maximize video click-through rates (CTR).',
    problem: 'Great videos fail to get views because boring, low-contrast, text-heavy thumbnails get ignored on crowded YouTube search and home feeds.',
    solution: 'We design high-impact thumbnails featuring expressive human faces, bold contrasting typography, glowing accents, color grading, and intriguing visual hooks.',
    capabilities: [
      { title: 'High-Contrast Psychology & Color Theory', description: 'Using complementary high-visibility colors (yellows, bright cyans, vivid reds) that pop against dark and light YouTube UI.' },
      { title: 'Facial Emotion & Expression Cutouts', description: 'Precision cutout isolation, skin retouching, eye pop, and rim lighting that convey raw human emotion.' },
      { title: 'Minimalist 3-to-4 Word Text Hooks', description: 'Displaying punchy, large-scale words that complement the video title rather than repeating it.' },
      { title: 'Mobile Feed Legibility Testing', description: 'Thoroughly verifying thumbnail legibility at tiny scale on smartphone screens where 70%+ of YouTube views occur.' },
    ],
    benefits: [
      { title: 'Double or Triple Video Click-Through Rate (CTR)', description: 'Increasing your CTR from 4% to 10% can multiply your overall video views by 5x–10x via the YouTube algorithm.' },
      { title: 'Stand Out on Crowded Search Results', description: 'Ensure your video is the first one users click when searching competitive industry keywords.' },
      { title: 'Professional Channel Aesthetic', description: 'Establish a cohesive, premium channel brand that attracts high-value corporate subscribers and sponsors.' },
    ],
    faqs: [
      { question: 'What is a good YouTube thumbnail click-through rate (CTR)?', answer: 'While channel averages hover around 3%–5%, our custom-designed high-contrast thumbnails routinely achieve 8%–14% CTR.' },
      { question: 'Do you design thumbnails for YouTube A/B testing?', answer: 'Yes, YouTube now offers native A/B thumbnail testing; we provide 2 to 3 distinct variations per video for split-testing.' },
      { question: 'What assets do you need from us to design a thumbnail?', answer: 'A high-resolution photo of the speaker/subject, the video title or topic, and any specific props or software screenshots featured in the video.' },
      { question: 'How quickly can you deliver thumbnail designs?', answer: 'We offer rapid 24 to 48-hour turnarounds for time-sensitive video releases and news commentary.' },
    ],
  },

  'reel-covers': {
    primaryKeyword: 'Instagram Reel Cover Design',
    secondaryKeywords: ['custom Reel thumbnails', 'aesthetic Reel covers Bangalore', 'video cover design', 'Instagram grid cover templates', 'Reels branding'],
    visualType: 'video',
    whatIs: 'Reel Cover Design is the specialized crafting of 9:16 video thumbnail covers engineered to look engaging in Reels feeds while cropping perfectly to a 1:1 square on your profile grid.',
    problem: 'Auto-selected video frames catch awkward facial expressions and cut off essential text on profile grids, making your brand look unorganized.',
    solution: 'We design bespoke Reel covers with disciplined 1:1 center-grid safe zone alignment, bold typography, and cinematic branding that elevates your entire feed.',
    capabilities: [
      { title: 'Perfect 1:1 Center-Grid Alignment', description: 'Ensuring critical title text and subject faces are centered perfectly for both the full 9:16 view and the profile square.' },
      { title: 'Cinematic Visual Hook Framing', description: 'Integrating expressive portrait photography, color grade overlays, and high-contrast titles.' },
      { title: 'Categorized Brand Series Badges', description: 'Color-coding and categorizing recurring series (e.g. Tips, Case Studies, Behind the Scenes) for easy browsing.' },
      { title: 'Ready-to-Upload 1080x1920 Exports', description: 'Delivered in high-resolution JPEG formats ready to attach directly to your Reels during upload.' },
    ],
    benefits: [
      { title: 'Flawless Profile Grid Presentation', description: 'Ensure visitors browsing your profile grid see clean, professional, readable video covers rather than blurry frames.' },
      { title: 'Higher Long-Term Reel Views', description: 'Clear, compelling titles entice visitors to click and watch past archive videos weeks after initial posting.' },
      { title: 'Consistent Visual Series Identity', description: 'Establish recognizable episodic content formats that followers actively search for.' },
    ],
    faqs: [
      { question: 'Why is the center square safe zone so important for Reel covers?', answer: 'Instagram displays Reel covers as 9:16 vertical in the Reels tab, but crops them to a 1:1 square on your main profile feed. All text must sit inside that center square.' },
      { question: 'Can Reel covers be added after a video is already published?', answer: 'Yes! Instagram allows you to edit a Reel and update its cover image at any time without losing views or comments.' },
      { question: 'Can you provide editable Canva or Figma templates for Reel covers?', answer: 'Yes, we create master brand templates with locked safe zones so your team can rapidly export covers for daily video uploads.' },
      { question: 'Do you also design matching TikTok and YouTube Shorts covers?', answer: 'Yes, we optimize covers across Instagram Reels, YouTube Shorts, and TikTok.' },
    ],
  },

  'linkedin-creatives': {
    primaryKeyword: 'LinkedIn Creative Design Services Bangalore',
    secondaryKeywords: ['LinkedIn document carousel design', 'B2B LinkedIn banners', 'professional LinkedIn infographics', 'corporate slide deck design', 'LinkedIn visual branding'],
    visualType: 'marketing',
    whatIs: 'LinkedIn Creative Design focuses on crafting executive-grade visual assets—specifically multi-page PDF document carousels, company banners, and infographics tailored to B2B professionals.',
    problem: 'Casual, cartoonish social graphics look out of place on LinkedIn, while text-only posts fail to stop busy corporate executives from scrolling past.',
    solution: 'We engineer authoritative, magazine-quality PDF document slide carousels and sleek corporate graphics that command respect and generate enterprise leads.',
    capabilities: [
      { title: 'Multi-Page PDF Document Carousels', description: 'Designing 5 to 10 slide interactive PDF decks optimized for full-width horizontal presentation in LinkedIn feeds.' },
      { title: 'Executive Company & Personal Cover Banners', description: 'Designing authoritative 1584x396px profile banners clearly articulating your commercial value proposition.' },
      { title: 'Data Infographics & Industry Frameworks', description: 'Visualizing proprietary B2B methodologies, market maps, and statistical comparisons.' },
      { title: 'Corporate Milestone & Client Win Cards', description: 'Showcasing major partnership announcements, team promotions, and project deliveries with enterprise polish.' },
    ],
    benefits: [
      { title: 'Algorithmic Dwell Time Explosion', description: 'LinkedIn algorithms reward document carousels because users spend 60–120 seconds flipping through your slides.' },
      { title: 'Establish Uncontested Industry Authority', description: 'Position your executives alongside McKinsey and Gartner with world-class editorial typography and layout.' },
      { title: 'High-Ticket Inquiries from Decision-Makers', description: 'Polished B2B visual assets build immediate trust with CXOs and Procurement Directors.' },
    ],
    faqs: [
      { question: 'Why are PDF document carousels so effective on LinkedIn?', answer: 'LinkedIn allows users to click through PDF slides directly in their feed. High dwell time signals to the algorithm that the content is valuable, triggering massive viral reach.' },
      { question: 'What dimensions do you design for LinkedIn carousels?', answer: 'We design in 1080x1350 (portrait) or 1080x1080 (square) and export as high-resolution multi-page PDF documents.' },
      { question: 'Do you write the thought leadership copy for the slides?', answer: 'Yes, our B2B copywriters distill complex corporate topics into concise, punchy slide summaries with clear takeaways.' },
      { question: 'Can you design a matching LinkedIn banner for our founder’s personal profile?', answer: 'Yes, we design unified banner packages covering both the official company page and executive leadership profiles.' },
    ],
  },

  'campaign-creatives': {
    primaryKeyword: 'Integrated Campaign Creative Design',
    secondaryKeywords: ['360 advertising campaign design', 'omnichannel creative suite', 'digital campaign branding Bangalore', 'multi platform ad creatives', 'unified brand campaign'],
    visualType: 'design',
    whatIs: 'Campaign Creative Design is the conceptualization and production of unified visual suites across all marketing channels—ensuring a singular, powerful theme across print, web, social, and ads.',
    problem: 'Running campaigns where the billboard looks different from the social media ad, which looks different from the landing page, creates brand confusion and wastes budget.',
    solution: 'We develop cohesive 360-degree campaign master concepts and adapt them across 20+ digital and physical formats for maximum omni-channel impact.',
    capabilities: [
      { title: 'Central Creative Master Concept', description: 'Developing the foundational visual motif, color palette, tagline typography, and campaign mascot/imagery.' },
      { title: 'Omnichannel Asset Production Matrix', description: 'Adapting the master concept across social media, digital display ads, landing pages, email headers, and print posters.' },
      { title: 'Multiple Aspect Ratio Scaling', description: 'Flawlessly scaling designs across vertical (9:16), square (1:1), landscape (16:9), and super-wide banner dimensions.' },
      { title: 'Campaign Design Toolkit & Brand Guidelines', description: 'Packaging design tokens, fonts, and assets into an organized toolkit for regional distribution.' },
    ],
    benefits: [
      { title: 'Unshakable Brand Cohesion', description: 'Present a synchronized, omnipresent campaign presence wherever your target customer encounters your brand.' },
      { title: 'Compounding Commercial Impact', description: 'Repeated visual touchpoints reinforce memory retention, accelerating buyer conversion.' },
      { title: 'Streamlined Production Efficiency', description: 'Save weeks of production time by generating all marketing formats from a unified creative master blueprint.' },
    ],
    faqs: [
      { question: 'What assets are typically included in an integrated campaign creative suite?', answer: 'A standard suite includes social media post sets, story sequences, Google Display banner ads (all standard sizes), landing page hero graphics, email headers, and print collateral.' },
      { question: 'How long does it take to develop a 360 campaign design package?', answer: 'Concept development takes 1 to 2 weeks, followed by asset production across all required dimensions in 5 to 7 days.' },
      { question: 'Can you adapt the campaign for regional languages?', answer: 'Yes, our typography team adapts headlines and body copy into regional Indian languages while preserving visual balance.' },
      { question: 'Do you collaborate with media buying and ad placement teams?', answer: 'Yes, we supply ad tech specifications, click-through URL tags, and file size constraints directly to your media agency.' },
    ],
  },

  // === PRESENTATION & BUSINESS DESIGN ===
  'pitch-deck-design': {
    primaryKeyword: 'Investor Pitch Deck Design Agency Bangalore',
    secondaryKeywords: ['startup fundraising pitch deck', 'PowerPoint presentation designer', 'Figma pitch deck', 'venture capital presentation design', 'series A pitch deck'],
    visualType: 'design',
    whatIs: 'Pitch Deck Design is the strategic, high-stakes visual storytelling of your business model, traction metrics, market opportunity, and financial projections for venture capital investors.',
    problem: 'Cluttered bullet points, generic PowerPoint templates, and confusing financial charts bore angel investors and venture capitalists, killing fundraising momentum.',
    solution: 'We transform complex commercial narratives into sleek, persuasive investor decks featuring crystal-clear market graphs, unit economics callouts, and institutional design.',
    capabilities: [
      { title: 'Storyline Architecture & Narrative Arc', description: 'Structuring the classic 12-slide VC framework: Problem, Solution, Market Size, Traction, Business Model, Team, Ask.' },
      { title: 'Data Visualization & Unit Economics', description: 'Designing beautiful, scannable charts for CAC, LTV, MRR growth, cohort retention, and market share.' },
      { title: 'Editable Master Templates (Figma, PowerPoint, Keynote)', description: 'Delivering editable vector slides so founders can update financial figures right before investor meetings.' },
      { title: 'Interactive PDF & Leave-Behind Decks', description: 'Designing both a high-impact presentation deck for speaking and a detailed leave-behind reading document.' },
    ],
    benefits: [
      { title: 'Command Investor Confidence', description: 'An institutional-grade pitch deck instantly signals that your founding team is serious, organized, and fundable.' },
      { title: 'Unpack Complex Business Models in Seconds', description: 'Clear diagrams help VCs understand complex SaaS, fintech, or manufacturing workflows effortlessly.' },
      { title: 'Accelerated Fundraising Cycles', description: 'Compelling visual narratives secure second partner meetings and shorten funding diligence timelines.' },
    ],
    faqs: [
      { question: 'What formats do you deliver the pitch deck in?', answer: 'We deliver editable Microsoft PowerPoint (.pptx), Apple Keynote, Figma master files, and print-ready vector PDF documents.' },
      { question: 'Do you help write the pitch deck copy and storyline?', answer: 'Yes, our strategic narrative specialists refine your story arc, value proposition, and market opportunity descriptions.' },
      { question: 'How long should an investor pitch deck be?', answer: 'A standard investor presentation deck is 12 to 18 slides, optimized for a 10-minute presentation and rapid visual digestion.' },
      { question: 'Can you work under strict Non-Disclosure Agreements (NDAs)?', answer: 'Yes, we routinely sign NDAs to protect proprietary intellectual property, patent details, and confidential financial metrics.' },
    ],
  },

  'company-profile': {
    primaryKeyword: 'Corporate Company Profile Design Services',
    secondaryKeywords: ['corporate capabilities brochure', 'business profile design Bangalore', 'company credentials document', 'corporate profile PDF design', 'B2B credentials deck'],
    visualType: 'design',
    whatIs: 'Company Profile Design is the comprehensive development of your corporate capability document—detailing history, leadership, technical infrastructure, service catalog, and verified client proof.',
    problem: 'Outdated, text-heavy PDFs with low-resolution logos fail to impress procurement teams during formal RFP evaluations and vendor registrations.',
    solution: 'We design prestigious, magazine-style corporate capability profiles formatted for digital email delivery and luxury print presentation.',
    capabilities: [
      { title: 'Comprehensive Capability Architecture', description: 'Organizing company heritage, vision/mission, leadership profiles, core services, case studies, and compliance certifications.' },
      { title: 'Client Proof & Portfolio Showcase', description: 'Showcasing verified client testimonials, milestone metrics, partner badges, and project photography.' },
      { title: 'Executive Leadership Spreads', description: 'Polished portrait photo treatments and professional bios highlighting management credentials.' },
      { title: 'Interactive Digital PDF with Bookmarks', description: 'Clickable navigation tabs allowing enterprise procurement heads to jump directly to specific service chapters.' },
    ],
    benefits: [
      { title: 'Pass Enterprise Vendor Empanelment', description: 'Satisfy rigorous procurement and compliance standards when bidding for high-value corporate tenders.' },
      { title: 'Permanent Commercial Asset', description: 'An authoritative 12 to 24-page credentials profile that serves your sales team across all business development calls.' },
      { title: 'Institutional Credibility', description: 'Position your business as a well-governed, financially stable market leader with decades of expertise.' },
    ],
    faqs: [
      { question: 'How many pages is a typical corporate company profile?', answer: 'Standard company profiles range from 12 to 24 pages depending on the breadth of service lines and portfolio case studies.' },
      { question: 'What content should be included in a company profile?', answer: 'Executive summary, founding story, core values, leadership bios, detailed service capabilities, client case studies, certifications (ISO, etc.), and contact locations.' },
      { question: 'Do you provide copywriting for the company profile?', answer: 'Yes, our corporate writers craft the entire narrative, executive message from the CEO, and service descriptions.' },
      { question: 'Can this document be printed as well as emailed?', answer: 'Yes, we provide both a lightweight interactive PDF for email attachments and a 300 DPI high-resolution CMYK file for luxury print finishing.' },
    ],
  },

  'brochure-design': {
    primaryKeyword: 'Corporate Brochure Design Services Bangalore',
    secondaryKeywords: ['bifold brochure design', 'trifold brochure design', 'multi page corporate brochure', 'sales brochure agency', 'print ready brochure design'],
    visualType: 'design',
    whatIs: 'Brochure Design is the classic, tactile marketing art of crafting multi-panel and booklet-style print collateral that presents your commercial services in an engaging, scannable format.',
    problem: 'Boring corporate brochures with walls of uninterrupted text end up discarded in office trash cans within minutes of being handed out.',
    solution: 'We construct beautiful, tactile brochures featuring dynamic grid layouts, compelling infographics, paper finish specifications, and clear calls to action.',
    capabilities: [
      { title: 'Diverse Folding & Binding Formats', description: 'Designing bi-fold, tri-fold, Z-fold, gatefold, and saddle-stitched multi-page booklets.' },
      { title: 'Visual Hierarchy & Negative Space', description: 'Balancing breathing room, punchy section headers, and scannable bullet points for effortless reading.' },
      { title: 'Custom Infographics & Technical Diagrams', description: 'Translating complex service steps and pricing models into clean, easily understood diagrams.' },
      { title: 'Pre-Press Finishing Callouts', description: 'Specifying spot UV gloss, matte lamination, foil stamping, and embossed cover elements.' },
    ],
    benefits: [
      { title: 'Unmatched In-Person Sales Impact', description: 'Leave behind an elegant physical brochure that decision-makers keep on their desks during internal review.' },
      { title: 'High Retention & Recall', description: 'Tactile marketing materials engage multiple senses, resulting in 70% higher brand recall than digital ads alone.' },
      { title: 'Turnkey Printing Readiness', description: 'Deliver files directly to commercial printing presses with zero pre-press technical hurdles or color errors.' },
    ],
    faqs: [
      { question: 'What is the most popular corporate brochure format?', answer: 'Tri-fold brochures are ideal for quick introductory overviews, while 8 to 16-page saddle-stitched booklets are best for comprehensive corporate capabilities.' },
      { question: 'Do you assist with printing and paper selection?', answer: 'Yes, we advise on optimal paper weights (typically 170–300 GSM art card), lamination finishes, and commercial printer coordination.' },
      { question: 'Can you design a digital version for online viewing?', answer: 'Yes, we create digital interactive flipbook PDFs with clickable links, active emails, and phone dialing buttons.' },
      { question: 'How long does a brochure design project take?', answer: 'A tri-fold brochure takes 3 to 5 business days; multi-page booklets typically take 7 to 10 business days.' },
    ],
  },

  'proposal-design': {
    primaryKeyword: 'Business Proposal Design Services',
    secondaryKeywords: ['RFP proposal design', 'statement of work SOW design', 'winning B2B proposal template', 'commercial bid design Bangalore', 'pitch proposal formatting'],
    visualType: 'design',
    whatIs: 'Proposal Design is the high-converting visual and typographic structuring of formal B2B sales proposals, commercial bids, and Statements of Work (SOW).',
    problem: 'Ugly, unformatted Word documents look amateurish and make prospective clients scrutinize price instead of appreciating your premium value.',
    solution: 'We build persuasive, magazine-grade proposal master templates featuring clear scope tables, milestone timelines, pricing breakdown cards, and electronic signature blocks.',
    capabilities: [
      { title: 'Editable Master Proposal Templates', description: 'Configured in Microsoft Word, Google Docs, or Figma for rapid customization by your sales representatives.' },
      { title: 'Transparent Pricing & Scope Tables', description: 'Designing clean, visually organized deliverables matrices and milestone payment schedules.' },
      { title: 'Gantt Charts & Implementation Timelines', description: 'Visualizing project phases, sprint milestones, and delivery checkpoints with professional clarity.' },
      { title: 'Terms, Conditions & Legal Signature Blocks', description: 'Cleanly formatting contractual terms, confidentiality clauses, and digital signature boxes.' },
    ],
    benefits: [
      { title: 'Higher Proposal Win Rates', description: 'A visually stunning proposal sets your firm apart from competing bids, justifying premium commercial pricing.' },
      { title: 'Faster Deal Signatures', description: 'Transparent pricing tiers and clear milestone timelines dismantle buyer hesitation and accelerate approvals.' },
      { title: 'Consistent Sales Team Output', description: 'Standardized templates ensure every sales rep delivers proposals adhering strictly to corporate brand guidelines.' },
    ],
    faqs: [
      { question: 'Can our sales team easily edit the proposal template for new clients?', answer: 'Yes! We deliver fully editable Microsoft Word (`.docx`) or Google Docs templates where text, pricing, and client names can be edited in minutes.' },
      { question: 'What sections are typically included in a winning proposal?', answer: 'Executive summary, problem statement, proposed solution scope, methodology, timeline Gantt chart, pricing investment options, case study proof, and signature agreement.' },
      { question: 'Can the proposal integrate with e-signature software?', answer: 'Yes, our templates are designed with designated signature zones fully compatible with DocuSign, PandaDoc, and Adobe Sign.' },
      { question: 'How does professional proposal design affect pricing perception?', answer: 'Clients perceive well-designed proposals as higher-value and lower-risk, significantly reducing price bargaining pressure.' },
    ],
  },

  'certificate-design': {
    primaryKeyword: 'Certificate Design Services Bangalore',
    secondaryKeywords: ['award certificate design', 'course completion certificate', 'corporate recognition certificate', 'security guilloche certificate', 'accreditation certificate design'],
    visualType: 'design',
    whatIs: 'Certificate Design is the authoritative visual engineering of course completion credentials, corporate achievement awards, partner accreditations, and legal warranties.',
    problem: 'Cheap, generic certificate templates look counterfeit and fail to inspire pride in recipients or represent educational and corporate prestige.',
    solution: 'We design elegant, authentic certificates featuring intricate security borders (guilloche patterns), official seals, metallic foil callouts, and recipient personalization fields.',
    capabilities: [
      { title: 'Intricate Security Guilloche Borders', description: 'Precision mathematical vector border patterns that prevent easy reproduction and convey formal authority.' },
      { title: 'Official Seal & Badge Elements', description: 'Designing embossed gold seals, crests, and holographic badge overlays for formal accreditation.' },
      { title: 'Recipient Dynamic Personalization Setup', description: 'Setting up automated mail-merge fields for recipient names, completion dates, and unique credential IDs.' },
      { title: 'Luxury Print & Parchment Specifications', description: 'Exporting 300+ DPI vector PDF files optimized for heavy textured parchment or gold foil stamping.' },
    ],
    benefits: [
      { title: 'Inspire Recipient Pride & Sharing', description: 'Recipients enthusiastically photograph and share beautiful certificates on LinkedIn and social media, creating free viral brand awareness.' },
      { title: 'Institutional Credibility & Trust', description: 'Formal, sophisticated certificate styling validates the prestige of your training program, academy, or corporate awards.' },
      { title: 'Counterfeit Deterrence', description: 'Intricate guilloche linework and serialized verification codes protect the integrity of your accreditations.' },
    ],
    faqs: [
      { question: 'Can certificates be personalized automatically for hundreds of students/attendees?', answer: 'Yes, we structure templates compatible with automated certificate generation software and Canva/InDesign data merge.' },
      { question: 'What paper stock is recommended for certificate printing?', answer: 'We recommend 250–300 GSM textured linen cardstock, ivory parchment paper, or heavy cotton board with metallic foil borders.' },
      { question: 'Can you include space for signatures and official stamps?', answer: 'Yes, we provide dedicated lines for authorized executive signatures, digital signatures, and embossed physical seals.' },
      { question: 'Can you create digital credential badges for LinkedIn profiles?', answer: 'Yes, we design companion square digital verification badges that recipients can add to their LinkedIn Licenses & Certifications section.' },
    ],
  },

  'business-documents': {
    primaryKeyword: 'Corporate Business Document Design Services',
    secondaryKeywords: ['business contract formatting', 'executive report design', 'employee handbook design Bangalore', 'NDA document design', 'corporate policy formatting'],
    visualType: 'design',
    whatIs: 'Business Documents Design is the clean typographic structuring of essential corporate governance files—employee handbooks, NDAs, Master Service Agreements (MSAs), and internal SOPs.',
    problem: 'Ugly, unreadable Word documents with inconsistent font sizes, broken page breaks, and dense legal text cause confusion and look amateurish.',
    solution: 'We format formal business documents with executive typography, clean table layouts, clear section dividers, and branded cover spreads.',
    capabilities: [
      { title: 'Executive Document Formatting', description: 'Structuring multi-page contracts, compliance policies, and handbooks with strict typographic hierarchy.' },
      { title: 'Branded Front Cover & Section Divider Pages', description: 'Designing formal cover spreads and colored tab dividers for complex corporate binders.' },
      { title: 'Interactive Tables of Contents & Footnotes', description: 'Setting up hyperlinked tables of contents that allow instant digital navigation across 50+ page files.' },
      { title: 'Editable Corporate Microsoft Word Masters', description: 'Providing pre-styled heading styles (Heading 1, 2, 3, Body, Quote) inside Microsoft Word for ongoing team use.' },
    ],
    benefits: [
      { title: 'Streamlined Compliance & Readability', description: 'Clean layouts ensure employees, legal counsel, and partners actually read and understand critical governance policies.' },
      { title: 'Enterprise Professionalism', description: 'Every single piece of documentation leaving your office reinforces your status as an organized enterprise.' },
      { title: 'Time Saved on Internal Document Creation', description: 'Pre-styled templates allow administrative staff to produce beautifully formatted documents in minutes.' },
    ],
    faqs: [
      { question: 'What types of business documents do you format?', answer: 'Employee handbooks, Non-Disclosure Agreements (NDAs), Master Service Agreements (MSAs), standard operating procedures (SOPs), and executive boardroom memos.' },
      { question: 'Can our internal team easily edit the documents later?', answer: 'Yes! We configure complete Microsoft Word Styles so anyone on your team can type new content while preserving formatting.' },
      { question: 'Do you handle the legal text writing?', answer: 'We format and stylize your provided legal text; we advise consulting legal counsel for binding contractual clauses.' },
      { question: 'Can you format 50+ page employee manuals?', answer: 'Yes, we have extensive experience formatting extensive multi-chapter employee handbooks and compliance manuals.' },
    ],
  },
};
