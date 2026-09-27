// Domain knowledge dictionary for CONTENT services
import type { ServiceContentOverride } from './serviceTypes.ts';

export const CONTENT_DOMAIN_KNOWLEDGE: Record<string, Partial<ServiceContentOverride>> = {
  // === CONTENT CREATION ===
  'social-media-content': {
    primaryKeyword: 'Social Media Content Creation Agency Bangalore',
    secondaryKeywords: ['social media post writing', 'social media creative writing', 'viral social media copy', 'engaging content creation', 'multi platform social content'],
    visualType: 'marketing',
    whatIs: 'Social Media Content Creation is the cross-channel authoring of high-retention copy, visual storytelling, and platform-native formats designed to build brand resonance and audience loyalty.',
    problem: 'Sporadic, uninspired social posts fail to capture viewer attention in crowded feeds, resulting in low engagement and missed commercial opportunities.',
    solution: 'We craft comprehensive monthly social content batches—blending educational carousels, entertaining video scripts, community discussion prompts, and conversion hooks.',
    capabilities: [
      { title: 'Platform-Native Content Strategy', description: 'Tailoring messaging nuances for Instagram’s visual aesthetics, LinkedIn’s corporate professionalism, and YouTube’s depth.' },
      { title: 'High-Retention Carousel Storyboarding', description: 'Writing 10-slide educational narratives with seamless visual transitions that maximize saves and shares.' },
      { title: 'Brand Voice & Lexicon Consistency', description: 'Ensuring every single post reflects your authentic brand tone, core values, and industry authority.' },
      { title: 'Direct-Response Community Prompts', description: 'Embedding question triggers and call-to-actions that drive qualified leads directly into your direct messages.' },
    ],
    benefits: [
      { title: 'Continuous High-Impact Visibility', description: 'Maintain an active, respected presence in your prospective clients’ daily social feeds without daily writing stress.' },
      { title: 'Compounding Algorithmic Reach', description: 'High-value educational content is actively recommended by platform algorithms to thousands of non-followers.' },
      { title: 'Streamlined Inbound Lead Funnel', description: 'Turn passive social scrollers into active commercial leads with integrated call-to-action hooks.' },
    ],
    faqs: [
      { question: 'How many pieces of social media content do you create per month?', answer: 'We deliver structured packages ranging from 12 to 24 complete multi-platform pieces of content per month, including visual directions, copy, and hashtags.' },
      { question: 'Do you write for both B2B and consumer brands?', answer: 'Yes, our copywriting team adapts to technical B2B SaaS frameworks or engaging B2C lifestyle narratives based on your brief.' },
      { question: 'Can we review and approve all content before it goes live?', answer: 'Yes, all content is delivered in a collaborative editorial calendar for your team to review and sign off 10 days in advance.' },
      { question: 'Do you also handle the graphic design and video editing?', answer: 'Yes, our full-service creative team pairs every piece of copy with custom graphics, video cuts, and carousel artwork.' },
    ],
  },
  'business-content': {
    primaryKeyword: 'Corporate Business Content Writing Services',
    secondaryKeywords: ['B2B case study writing', 'whitepaper writing services', 'annual report content', 'executive thought leadership Bangalore', 'corporate communications writing'],
    visualType: 'marketing',
    whatIs: 'Business Content Writing is the authoritative composition of executive-level collateral—whitepapers, in-depth B2B case studies, corporate annual reports, and industry point-of-view essays.',
    problem: 'Superficial articles fail to engage sophisticated B2B buyers who demand analytical rigor, statistical backing, and concrete industry evidence.',
    solution: 'Our senior corporate writers conduct deep industry research, analyze proprietary client data, and author compelling business content that influences C-suite buying decisions.',
    capabilities: [
      { title: 'In-Depth Customer Case Studies', description: 'Structuring compelling Problem-Solution-Result narratives featuring verified ROI statistics and executive quotes.' },
      { title: 'Authoritative Industry Whitepapers', description: 'Authoring 8 to 20-page comprehensive technical and market research reports that generate high-value sales leads.' },
      { title: 'Annual Reports & ESG Disclosures', description: 'Translating complex financial achievements and sustainability milestones into engaging corporate stories.' },
      { title: 'Executive Op-Eds & Bylines', description: 'Ghostwriting sophisticated opinion pieces published in prominent industry publications and LinkedIn.' },
    ],
    benefits: [
      { title: 'Influence High-Stakes Enterprise Decisions', description: 'Arm procurement committees with the analytical data and peer proof needed to approve 7-figure contracts.' },
      { title: 'High-Ticket Lead Generation Engine', description: 'Gated whitepapers and industry research papers generate verified enterprise contact inquiries.' },
      { title: 'Unassailable Market Authority', description: 'Position your executive leadership alongside premier consulting firms like McKinsey and Bain.' },
    ],
    faqs: [
      { question: 'How do you conduct research for B2B case studies?', answer: 'We interview your internal account leads and, with permission, conduct brief interviews with your clients to capture authentic quotes and metrics.' },
      { question: 'What is the typical length of a corporate whitepaper?', answer: 'Most commercial B2B whitepapers range from 6 to 15 pages (2,500 to 5,000 words), complete with executive summaries, charts, and methodology.' },
      { question: 'Do you also handle the visual layout of whitepapers and case studies?', answer: 'Yes, our design team formats the written copy into polished, downloadable PDF publications with branded infographics.' },
      { question: 'How long does a case study writing project take?', answer: 'Standard turnaround is 5 to 7 business days following client interview completion.' },
    ],
  },

  'brand-content': {
    primaryKeyword: 'Brand Storytelling and Brand Content Agency',
    secondaryKeywords: ['brand narrative development', 'brand voice and tone', 'founding story copywriting', 'brand manifesto writing Bangalore', 'corporate brand messaging'],
    visualType: 'brand',
    whatIs: 'Brand Content is the emotional and conceptual narrative architecture—founding origin stories, brand manifestos, purpose statements, and core value declarations—that defines your soul.',
    problem: 'Companies that talk only about features and specs become commoditized, leaving customers with zero emotional connection or brand loyalty.',
    solution: 'We uncover your company’s authentic founding heritage, core beliefs, and transformative vision, articulating a captivating brand narrative that inspires employees and customers.',
    capabilities: [
      { title: 'Origin Story & Founder Narrative', description: 'Capturing the authentic struggles, breakthroughs, and vision that led to your company’s inception.' },
      { title: 'Brand Manifesto & Mission Architecture', description: 'Writing stirring, inspiring manifestos that rally internal teams and resonate with passionate buyers.' },
      { title: 'Brand Voice, Tone & Lexicon Manual', description: 'Documenting the precise words, personality traits, and linguistic style that define your brand communication.' },
      { title: 'Core Values & Cultural Principles', description: 'Articulating actionable corporate values that guide daily employee decisions and recruitment.' },
    ],
    benefits: [
      { title: 'Break Out of Price Wars', description: 'A powerful emotional brand narrative makes your company irreplaceable, insulating you from commoditized price cutting.' },
      { title: 'Fierce Customer Loyalty', description: 'Customers do not buy what you do; they buy why you do it. Brand storytelling builds multi-year retention.' },
      { title: 'Magnetic Talent Attraction', description: 'Inspire top industry professionals to join your mission by articulating an ambitious, meaningful corporate vision.' },
    ],
    faqs: [
      { question: 'What is the difference between brand content and direct-response copywriting?', answer: 'Direct-response copy drives immediate transactional purchases; brand content builds enduring emotional resonance, trust, and premium brand valuation.' },
      { question: 'How do you uncover our authentic brand story?', answer: 'We conduct in-depth discovery interviews with founders, leadership, and long-time clients to discover recurring themes and emotional turning points.' },
      { question: 'Where is brand content typically published?', answer: 'On your website About page, company profile, recruitment portals, corporate video scripts, and investor decks.' },
      { question: 'How long does a brand narrative development project take?', answer: 'Typically 2 to 3 weeks including collaborative stakeholder workshops and narrative refinement.' },
    ],
  },

  // === COPYWRITING ===
  'website-copywriting': {
    primaryKeyword: 'Conversion Website Copywriting Services',
    secondaryKeywords: ['web copywriter Bangalore', 'homepage copywriting', 'sales page copywriting', 'SaaS website copy', 'SEO website copywriter'],
    visualType: 'marketing',
    whatIs: 'Website Copywriting is the strategic craft of authoring clear, scannable, and conversion-focused copy across your homepage, solutions pages, and landing pages.',
    problem: 'Dense paragraphs, corporate jargon, and self-centered text cause visitors to leave your site within 5 seconds without understanding what you do.',
    solution: 'We craft customer-centric, benefit-driven website copy with clear value propositions, scannable subheadings, social proof integration, and compelling CTAs.',
    capabilities: [
      { title: 'Hero Value Proposition Formulation', description: 'Articulating your primary offer and target audience in fewer than 10 crystal-clear words.' },
      { title: 'Scannable Section Hierarchy', description: 'Structuring pages with punchy H2/H3 headers, bulleted benefits, and visual callout blocks.' },
      { title: 'Objection-Handling Copy Blocks', description: 'Anticipating and neutralizing hesitations regarding pricing, onboarding time, and vendor reliability.' },
      { title: 'High-Converting Microcopy', description: 'Refining button labels, form placeholders, and security reassurances that eliminate friction.' },
    ],
    benefits: [
      { title: 'Instant Clarity for Every Visitor', description: 'Prospective clients understand your offerings and value within 3 seconds of landing on your site.' },
      { title: 'Higher Inbound Quote Requests', description: 'Persuasive narrative flow naturally guides readers down the page directly into your inquiry form.' },
      { title: 'Enhanced Search Engine Context', description: 'Semantic keyword integration satisfies search engines while maintaining engaging human readability.' },
    ],
    faqs: [
      { question: 'Do you deliver copy in a format ready for web designers?', answer: 'Yes, our copy is delivered structured section-by-section (Header, Subhead, Body, Bullet Points, Button) matching standard wireframes.' },
      { question: 'How many revisions are included in website copywriting?', answer: 'We include up to 2 rounds of collaborative revisions to ensure the tone and messaging align 100% with your vision.' },
      { question: 'Can you interview our past clients to get real quotes?', answer: 'Yes, we can conduct brief voice-of-customer interviews to weave authentic client phrases into the copy.' },
      { question: 'How long does copywriting for a complete 10-page website take?', answer: 'Typically 10 to 14 business days from kickoff interview to final approved master copy.' },
    ],
  },

  'ad-copywriting': {
    primaryKeyword: 'High-CTR Ad Copywriting Services',
    secondaryKeywords: ['Google ad copywriting', 'Meta ad hooks', 'direct response ad copy', 'Facebook ad copywriter Bangalore', 'PPC headline copywriting'],
    visualType: 'marketing',
    whatIs: 'Ad Copywriting is the direct-response discipline of crafting concise, punchy, and irresistible headlines and hooks that stop social scrolling and generate high ad click-through rates.',
    problem: 'Boring, generic ad copy blends into the background, leading to sub-1% click-through rates and sky-high cost-per-click across Google and Meta.',
    solution: 'We craft psychological hook variations, curiosity angles, emotional triggers, and urgency-driven calls to action that consistently double ad CTRs.',
    capabilities: [
      { title: 'Character-Optimized Google Search Headlines', description: 'Crafting 30-character headlines and 90-character descriptions that maximize Google Quality Score.' },
      { title: 'Short & Long-Form Meta Ad Copy', description: 'Testing short 1-line curiosity hooks against long-form story ads to identify top converting formats.' },
      { title: 'Direct-Response Emotional Hooks', description: 'Leveraging pain points, secret insights, contrasting paradigms, and compelling social proof.' },
      { title: 'Dynamic Multi-Variant A/B Test Batches', description: 'Delivering 10 to 20 headline/primary text variations per campaign for rapid multivariate testing.' },
    ],
    benefits: [
      { title: 'Halved Cost-Per-Click (CPC)', description: 'High click-through rates signal ad quality to Google and Meta algorithms, driving down your cost-per-click.' },
      { title: 'Fatigue-Resistant Creative Banks', description: 'Swap in fresh headline angles weekly to keep ad performance high and prevent creative burnout.' },
      { title: 'Consistent Qualified Leads', description: 'Pre-qualify buyers directly in the ad copy so only genuinely interested prospects click through.' },
    ],
    faqs: [
      { question: 'How many ad copy variations do you provide per project?', answer: 'We typically provide 10 to 15 headline variations, 5 distinct primary text angles, and 5 call-to-action options per campaign.' },
      { question: 'Do you write ad copy for both Google Ads and Facebook/Instagram?', answer: 'Yes, we write concise character-limited copy for Google Search/Display and persuasive narrative copy for Meta ads.' },
      { question: 'How do you prevent ad account rejections?', answer: 'We strictly adhere to Google and Meta advertising policies, avoiding banned trigger phrases, unrealistic guarantees, and aggressive claims.' },
      { question: 'Can you help identify which ad angles convert best?', answer: 'Yes, we review live campaign analytics weekly to double down on winning hooks and prune underperforming copy.' },
    ],
  },

  'social-media-copy': {
    primaryKeyword: 'Social Media Caption and Copywriting Services',
    secondaryKeywords: ['Instagram caption writing', 'LinkedIn post copywriter', 'engaging social media copy', 'viral tweet copywriting', 'social media copywriter Bangalore'],
    visualType: 'marketing',
    whatIs: 'Social Media Copywriting is the art of writing compelling caption hooks, carousel slide text, and conversational prompts that maximize user dwell time, comments, and shares.',
    problem: 'Dry, robotic captions with generic quotes fail to spark conversations, resulting in dead comment sections and plummeting algorithmic reach.',
    solution: 'We craft platform-native copy—punchy 1-line hooks, formatted white space for easy phone reading, relatable storytelling, and thought-provoking questions.',
    capabilities: [
      { title: 'First-Line Hook Architecture', description: 'Mastering the first 125 characters before the "See More" button to compel users to expand and read.' },
      { title: 'Mobile-Friendly Spacing & Formatting', description: 'Using strategic line breaks, bullet points, and clean emojis that make reading effortless on small phone screens.' },
      { title: 'Conversational Call-to-Actions (CTAs)', description: 'Writing natural question prompts that inspire followers to leave thoughtful comments.' },
      { title: 'Hashtag & Keyword SEO Integration', description: 'Integrating relevant niche hashtags and natural search keywords for discoverability.' },
    ],
    benefits: [
      { title: '5x More Comments and Shares', description: 'Conversational, relatable copy turns passive scrollers into active community participants.' },
      { title: 'Increased Feed Dwell Time', description: 'Compelling long-form captions keep users reading on your post longer, boosting algorithmic distribution.' },
      { title: 'Humanized Corporate Voice', description: 'Transform sterile corporate announcements into warm, approachable brand conversations.' },
    ],
    faqs: [
      { question: 'How long should an Instagram or LinkedIn caption be?', answer: 'We vary lengths strategically: snappy 2-line punchy captions for entertaining visuals, and detailed 150–300 word value-packed breakdowns for educational carousels.' },
      { question: 'Do you write captions tailored to our specific industry voice?', answer: 'Yes, we match your exact vocabulary, technical depth, and tone—whether serious B2B consulting or playful consumer lifestyle.' },
      { question: 'Can you deliver monthly caption batches in advance?', answer: 'Yes, we deliver 30 days of organized captions with dates, hook lines, body text, and hashtags in an organized spreadsheet.' },
      { question: 'Do you include call-to-actions for direct messages (DMs)?', answer: 'Yes, we strategically use "Comment WORD to get the guide in your DMs" triggers to drive automated lead generation.' },
    ],
  },

  'email-copywriting': {
    primaryKeyword: 'Email Copywriting Services Bangalore',
    secondaryKeywords: ['sales email copywriting', 'cold email copywriter', 'newsletter copywriting', 'email drip sequence copy', 'high open rate email copy'],
    visualType: 'marketing',
    whatIs: 'Email Copywriting is the high-converting art of crafting personalized, one-to-one messages that get opened, read in full, and clicked through to purchase.',
    problem: 'Sales emails with boring subject lines get deleted unread, while robotic corporate newsletters get unsubscribed from within seconds.',
    solution: 'We write conversational, curiosity-driven subject lines and engaging body copy that reads like an email from a trusted colleague, driving consistent 40%+ open rates.',
    capabilities: [
      { title: 'Curiosity & Urgency Subject Lines', description: 'Writing 4 to 7-word subject lines that trigger immediate dopamine and click curiosity in crowded inboxes.' },
      { title: 'Conversational One-to-One Tone', description: 'Bypassing corporate stiffness to write engaging, human copy that builds genuine reader connection.' },
      { title: 'Single-Focus Call-to-Action (CTA)', description: 'Guiding the reader toward one clear, frictionless action without overwhelming them with multiple links.' },
      { title: 'Automated Drip & Onboarding Sequences', description: 'Writing cohesive multi-email arcs that educate, overcome objections, and pitch commercial offers.' },
    ],
    benefits: [
      { title: 'Highest Direct Revenue per Recipient', description: 'Compelling email copy consistently generates higher direct transaction volume than any social channel.' },
      { title: 'Industry-Leading Open & Click Rates', description: 'Achieve 30%–45% open rates and 4%–8% click-through rates with tailored, interest-aligned messaging.' },
      { title: 'Long-Term Subscriber Relationship', description: 'Valuable, entertaining emails ensure subscribers look forward to hearing from your company week after week.' },
    ],
    faqs: [
      { question: 'What makes a great email subject line?', answer: 'Brevity, curiosity, lowercase casual formatting, personalization tags, and clear relevance to the reader’s immediate challenge.' },
      { question: 'How many emails should be in a welcome drip sequence?', answer: 'A standard welcome sequence comprises 4 to 6 emails delivered over 10 to 14 days, introducing your story, sharing your best resources, and presenting an introductory offer.' },
      { question: 'Can you write cold outreach emails for B2B prospecting?', answer: 'Yes, our cold email copy is short (under 120 words), personalized, and value-first, designed to start genuine conversations rather than pitch aggressively.' },
      { question: 'How do you handle spam filter avoidance in copy?', answer: 'We avoid all-caps words, excessive exclamation marks, spam-trigger words ("free money", "guaranteed cash"), and oversized attachments.' },
    ],
  },

  'product-descriptions': {
    primaryKeyword: 'E-Commerce Product Description Writing',
    secondaryKeywords: ['product copywriter Bangalore', 'Shopify product descriptions', 'Amazon listing copywriting', 'catalog copywriting', 'conversion product descriptions'],
    visualType: 'marketing',
    whatIs: 'Product Description Copywriting is the commercial craft of writing vivid, benefit-driven product overviews that resolve buyer skepticism and motivate immediate checkout additions.',
    problem: 'Dry manufacturer spec sheets and 2-sentence descriptions fail to evoke desire, leaving online shoppers hesitant and leading to abandoned carts.',
    solution: 'We transform technical product features into emotional, life-enhancing benefits, answering sizing and material questions while weaving in high-intent SEO keywords.',
    capabilities: [
      { title: 'Feature-to-Benefit Translation', description: 'Explaining not just what the product is made of, but exactly how it improves the customer’s daily life.' },
      { title: 'Sensory & Experiential Language', description: 'Using vivid, evocative adjectives that help the customer imagine holding, using, or wearing the product.' },
      { title: 'Technical Specification Formatting', description: 'Structuring dimensions, materials, care instructions, and compatibility in clean, scannable bullet points.' },
      { title: 'E-Commerce SEO Keyword Mapping', description: 'Integrating high-volume product search queries into title tags and descriptions for organic search ranking.' },
    ],
    benefits: [
      { title: 'Higher Add-to-Cart Conversion Rates', description: 'Persuasive descriptions resolve purchase hesitations right on the product page, reducing cart bounce.' },
      { title: 'Reduced Customer Returns', description: 'Accurate specifications and realistic descriptions ensure buyers know exactly what to expect when opening their package.' },
      { title: 'Organic Search Traffic for Product Pages', description: 'Keyword-rich descriptions allow individual product pages to rank on Google search for specific product queries.' },
    ],
    faqs: [
      { question: 'How many words should an e-commerce product description be?', answer: 'Typically 120 to 250 words—a compelling 2-sentence sensory hook, followed by 4–6 bulleted benefits, and a concise technical specification breakdown.' },
      { question: 'Can you write bulk descriptions for catalogs with hundreds of SKUs?', answer: 'Yes, we handle large catalog deployments (50 to 500+ products) using standardized, scalable copy templates.' },
      { question: 'Do you write Amazon-compliant listings (bullet points & backend keywords)?', answer: 'Yes, we optimize Amazon listings according to A9 algorithm standards: keyword-rich titles, 5 benefit bullet points, and backend search terms.' },
      { question: 'How do you handle unique tone of voice across product categories?', answer: 'We adapt voice from luxury elegance for jewelry and fashion, to authoritative technical precision for electronics and tools.' },
    ],
  },

  'marketing-copy': {
    primaryKeyword: 'Full-Service Marketing Copywriting Agency',
    secondaryKeywords: ['commercial copywriting services', 'sales collateral copywriter', 'advertising copywriter Bangalore', 'direct marketing copy', 'brand marketing copy'],
    visualType: 'marketing',
    whatIs: 'Marketing Copy encompasses the entire suite of commercial persuasive writing across billboards, brochures, sales funnels, video scripts, and presentation collateral.',
    problem: 'Fragmented messaging produced by different internal writers produces a disjointed customer experience and dilutes your core value proposition.',
    solution: 'Review Growth Partners serves as your unified copywriting powerhouse, delivering consistent, persuasive, high-converting copy across all customer touchpoints.',
    capabilities: [
      { title: 'Full-Funnel Narrative Continuity', description: 'Ensuring your ad hook, landing page headline, email nurture, and sales proposal share the same core messaging.' },
      { title: 'Brochure & Sales Collateral Copy', description: 'Composing persuasive text for corporate capabilities brochures, print one-pagers, and trade show collateral.' },
      { title: 'Video Sales Letter (VSL) Scripts', description: 'Writing structured direct-response video scripts that hold viewer attention and guide them to a purchase.' },
      { title: 'Rapid Turnaround Editorial Sprints', description: 'Delivering polished, error-free marketing copy for fast-moving product launches and seasonal blitzes.' },
    ],
    benefits: [
      { title: 'Unified Corporate Brand Voice', description: 'Ensure every piece of marketing material published by your company sounds authoritative and consistent.' },
      { title: 'Dramatically Higher Conversion Yield', description: 'Direct-response sales principles applied across every asset maximize ROI from your existing traffic.' },
      { title: 'Save Weeks of Internal Writing Time', description: 'Free your leadership and sales executives from writing marketing materials so they can focus on closing deals.' },
    ],
    faqs: [
      { question: 'What formats and assets does your marketing copy service cover?', answer: 'We write for landing pages, sales emails, digital ad suites, brochures, pitch decks, video scripts, and corporate capability profiles.' },
      { question: 'Do your writers have industry-specific experience?', answer: 'Yes, our team brings domain experience in B2B SaaS, real estate, healthcare, finance, legal, e-commerce, and education.' },
      { question: 'What is your review and revision process?', answer: 'We deliver drafts via Google Docs with comment tracking, providing up to 2 rounds of collaborative revisions to polish every sentence.' },
      { question: 'How do we get started with a copywriting project?', answer: 'Share your project brief or schedule a consultation; we deliver a detailed scope, timeline, and milestone quote within 24 hours.' },
    ],
  },

  // === SOCIAL MEDIA CONTENT HUB ===
  'instagram-content': {
    primaryKeyword: 'Instagram Content Creation Services Bangalore',
    secondaryKeywords: ['Instagram feed content', 'Instagram content creator', 'viral Instagram posts', 'Instagram business content agency', 'aesthetic Instagram content'],
    visualType: 'marketing',
    whatIs: 'Instagram Content encompasses the end-to-end ideation, photography curation, graphic design, and caption authoring required to run a vibrant, authoritative Instagram brand presence.',
    problem: 'Posting sporadic, low-quality photos without a coherent visual theme results in low engagement, stagnant follower growth, and zero sales inquiries.',
    solution: 'We curate a high-aesthetic, multi-format Instagram content mix—educational carousels, entertaining Reels, founder soundbites, and community proof—delivered in pre-approved monthly batches.',
    capabilities: [
      { title: 'Multi-Format Content Strategy', description: 'Balancing carousel decks (for saves), Reels (for viral reach), and single graphics (for aesthetic feed identity).' },
      { title: 'Pre-Approved Monthly Content Batches', description: 'Delivering 15 to 25 complete, ready-to-publish posts with visuals, copy, and hashtags in advance.' },
      { title: 'Voice-of-Brand Caption Storytelling', description: 'Writing engaging captions that spark discussions and guide viewers toward your link-in-bio offer.' },
      { title: 'Strategic Engagement Prompts', description: 'Embedding "Save this for later", "Tag a friend", and "DM us for pricing" triggers that drive algorithmic reach.' },
    ],
    benefits: [
      { title: 'Effortless Publishing Consistency', description: 'Never scramble for "what to post today" again; maintain a prestigious, active feed with zero daily stress.' },
      { title: 'Viral Discovery via Algorithmic Reach', description: 'High-value carousels and Reels are pushed by Instagram to non-followers across your geographic region.' },
      { title: 'Turn Followers into Paying Customers', description: 'Strategic content funnels guide casual scrollers from entertaining posts to direct consultation bookings.' },
    ],
    faqs: [
      { question: 'How far in advance do you prepare our Instagram content?', answer: 'We deliver complete monthly content plans for your review and sign-off 7 to 10 days before the upcoming month starts.' },
      { question: 'Do we need to supply photos or do you create everything?', answer: 'We can utilize your company photography, or create 100% custom graphic designs, curated b-roll video, and custom typography.' },
      { question: 'How often should a business post on Instagram?', answer: 'We recommend 3 to 5 feed posts per week (mixing carousels and Reels) plus daily interactive Stories for optimal growth.' },
      { question: 'Can you also handle the scheduling and posting?', answer: 'Yes, our social media management service handles automated scheduling, first-comment hashtags, and link updates.' },
    ],
  },

  'linkedin-content': {
    primaryKeyword: 'LinkedIn B2B Content Creation Agency',
    secondaryKeywords: ['LinkedIn thought leadership writing', 'corporate LinkedIn content', 'B2B LinkedIn post writer', 'LinkedIn CEO ghostwriting Bangalore', 'LinkedIn carousel writing'],
    visualType: 'marketing',
    whatIs: 'LinkedIn Content is the strategic authoring of executive thought leadership essays, company milestones, PDF slide carousels, and industry perspectives tailored for business decision-makers.',
    problem: 'Sterile corporate press releases and sporadic personal updates fail to capture attention in the competitive LinkedIn feed or generate enterprise contract leads.',
    solution: 'We craft compelling founder thought-leadership narratives, multi-slide document carousels (PDFs), case study breakdowns, and proactive networking campaigns.',
    capabilities: [
      { title: 'Executive Ghostwriting for Founders & CXOs', description: 'Translating leadership expertise into high-engagement articles, opinion essays, and industry commentary.' },
      { title: 'Multi-Slide Document (PDF) Carousels', description: 'Designing professional slide decks that viewers can flip through directly in the feed, driving massive dwell time.' },
      { title: 'Company Page Authority Building', description: 'Showcasing workplace culture, milestone achievements, client wins, and open career opportunities.' },
      { title: 'B2B Case Study Breakdowns', description: 'Deconstructing real client transformations into actionable, transparent lessons that establish commercial credibility.' },
    ],
    benefits: [
      { title: 'Direct Access to Corporate Decision-Makers', description: 'Engage enterprise buyers, investors, and B2B leaders without dealing with traditional gatekeepers.' },
      { title: 'High-Ticket Enterprise Contract Inquiries', description: 'LinkedIn leads possess significantly higher average contract values (ACV) than any consumer channel.' },
      { title: 'Employer Brand & Talent Attraction', description: 'Attract top-tier industry talent by highlighting corporate innovation, culture, and achievements.' },
    ],
    faqs: [
      { question: 'How does ghostwriting work for busy executives?', answer: 'We conduct a 30-minute monthly voice memo or video interview with your executive, and our writers extract 8 to 12 authentic, high-impact posts.' },
      { question: 'Should we prioritize the CEO’s personal profile or the company page?', answer: 'We recommend a combined approach; personal executive profiles typically generate 5x–10x higher organic reach, which drives traffic to the official company page.' },
      { question: 'What topics perform best on LinkedIn in 2026?', answer: 'Transparent case studies, contrarian industry lessons, breakdown of failures overcome, and practical step-by-step frameworks.' },
      { question: 'How do you measure LinkedIn content success?', answer: 'We evaluate impression velocity, profile views, comment engagement from ICP job titles, and inbound direct message inquiries.' },
    ],
  },

  'facebook-content': {
    primaryKeyword: 'Facebook Content Creation Services',
    secondaryKeywords: ['Facebook business post creation', 'Facebook community content', 'Facebook video content', 'Facebook engagement strategy Bangalore', 'Meta content agency'],
    visualType: 'marketing',
    whatIs: 'Facebook Content is the creation of conversational community posts, long-form video updates, event announcements, and local customer proof tailored to Facebook’s broad audience.',
    problem: 'Sharing simple link previews yields near-zero organic reach on Facebook, while generic promotional graphics fail to generate community conversation.',
    solution: 'We create native video formats, discussion-starting questions, behind-the-scenes albums, and local event highlights designed to trigger comments and algorithmic feed priority.',
    capabilities: [
      { title: 'Discussion-Driven Community Prompts', description: 'Crafting thoughtful questions and community polls that prompt followers to share opinions in the comments.' },
      { title: 'Native Facebook Video & Reels', description: 'Uploading native vertical and horizontal video content favored by Facebook Watch recommendations.' },
      { title: 'Behind-the-Scenes Photo Albums', description: 'Showcasing company events, project deliveries, and team milestones in warm, authentic photo galleries.' },
      { title: 'Local Event & Offer Highlights', description: 'Promoting local seminars, showroom visits, webinars, and seasonal promotions.' },
    ],
    benefits: [
      { title: 'Engage Established Decision-Makers', description: 'Reach business owners, homeowners, and experienced professionals who remain active daily Facebook users.' },
      { title: 'Built-In Local Word-of-Mouth', description: 'Comments and shares on Facebook are broadcast directly into the feeds of the user’s local friends.' },
      { title: 'High In-App Video Watch Time', description: 'Native video content keeps viewers immersed on your page without bouncing to external sites.' },
    ],
    faqs: [
      { question: 'Is organic content still worth creating for Facebook Pages?', answer: 'Yes, when formatted as native video, Reels, or community discussion prompts, Facebook organic posts still generate thousands of local impressions.' },
      { question: 'Do you create Facebook-specific post dimensions?', answer: 'Yes, we optimize graphics for square (1:1), portrait (4:5), and widescreen link preview cards.' },
      { question: 'Can Facebook content be cross-posted from Instagram?', answer: 'While some content overlaps, we customize captions and formatting specifically for Facebook’s older, more conversational demographic.' },
      { question: 'How do you handle customer inquiries on Facebook posts?', answer: 'Our team monitors post comments and directs prospective buyers to your sales WhatsApp or booking link.' },
    ],
  },

  'youtube-content': {
    primaryKeyword: 'YouTube Video Content Strategy and Scripting',
    secondaryKeywords: ['YouTube video scriptwriter', 'corporate YouTube video content', 'YouTube channel strategy Bangalore', 'long form YouTube content', 'YouTube shorts scripting'],
    visualType: 'video',
    whatIs: 'YouTube Content encompasses the ideation, scriptwriting, title optimization, and narrative pacing required to build an authoritative, high-watch-time business YouTube channel.',
    problem: 'Rambling, unscripted videos with slow introductions cause 70% of viewers to click away in the first 30 seconds, killing channel growth.',
    solution: 'We construct structured video scripts with compelling 5-second hooks, tight narrative pacing, retention reset visual cues, and strategic mid-video conversion calls.',
    capabilities: [
      { title: '5-Second Hook & Problem Framing', description: 'Capturing viewer attention instantly by stating the payoff of the video within the first 10 words.' },
      { title: 'Structured Explainer & Tutorial Scripts', description: 'Organizing complex topics into clean step-by-step chapters that keep audience retention high.' },
      { title: 'B-Roll & Visual Cue Directions', description: 'Specifying exact screen recordings, animations, and graphics to cut to for maximum visual dynamism.' },
      { title: 'Search-Engine Optimized Video Packaging', description: 'Drafting high-CTR titles, curiosity-inducing descriptions, timestamp markers, and search tags.' },
    ],
    benefits: [
      { title: 'High Viewer Watch Time & Retention', description: 'Professional scripting keeps viewers watching past 50% duration, triggering the YouTube recommendation algorithm.' },
      { title: 'Effortless On-Camera Delivery', description: 'Provide your executives with teleprompter-ready scripts so filming takes 30 minutes instead of all day.' },
      { title: 'Perpetual Video Lead Funnel', description: 'Turn viewers into paying clients by weaving organic consultation offers into the natural flow of the video.' },
    ],
    faqs: [
      { question: 'How detailed are your YouTube video scripts?', answer: 'We provide complete word-for-word scripts or detailed bulleted teleprompter outlines, complete with audio/visual cues (A/V script format).' },
      { question: 'What video length performs best for business channels?', answer: '8 to 15 minutes is ideal for long-form authoritative tutorials, while 30 to 60 seconds is optimal for YouTube Shorts.' },
      { question: 'Do you help identify trending video topics in our industry?', answer: 'Yes, we conduct YouTube search volume analysis, competitor view-velocity audits, and Google Trends research to identify high-demand topics.' },
      { question: 'Can you also edit the videos and create thumbnails?', answer: 'Yes, our complete video production and thumbnail team provides turnkey end-to-end production.' },
    ],
  },

  'reels-content': {
    primaryKeyword: 'Instagram Reels and Shorts Content Creation',
    secondaryKeywords: ['viral Reels content strategy', 'short form video ideas', 'Reels scriptwriter Bangalore', 'TikTok and Reels content creator', 'vertical video concepts'],
    visualType: 'video',
    whatIs: 'Reels Content is the conceptualization, scriptwriting, and production of punchy 15-to-60-second vertical videos engineered to capture algorithmic distribution and drive viral awareness.',
    problem: 'Businesses struggle to keep up with daily vertical video demands, producing boring, low-energy videos that get zero traction on the algorithm.',
    solution: 'We script high-energy, hook-story-offer vertical video concepts—featuring trending audio cues, on-screen text directions, and fast-paced visual hooks.',
    capabilities: [
      { title: '3-Second Hook Ideation', description: 'Crafting opening visual and auditory surprises that stop the thumb from scrolling.' },
      { title: 'Punchy 30-Second Scriptwriting', description: 'Distilling valuable business tips, industry myths, and case studies into rapid, engaging soundbites.' },
      { title: 'Text Overlay & B-Roll Instructions', description: 'Specifying dynamic captions, sound effects (SFX), and cutaways to hold viewer attention.' },
      { title: 'Batch Filming Prompts for Founders', description: 'Structuring filming sessions so you can record 10 to 15 vertical videos in a single 2-hour sitting.' },
    ],
    benefits: [
      { title: 'Unrivaled Organic Reach Velocity', description: 'Reels are the #1 way to reach brand-new prospective clients who do not yet follow your business.' },
      { title: 'Rapid Brand Humanization', description: 'Short-form videos showcase founder personality, corporate culture, and behind-the-scenes authenticity.' },
      { title: 'Multi-Platform Repurposing', description: 'Every single Reel created can be published across Instagram, YouTube Shorts, Facebook Reels, and LinkedIn.' },
    ],
    faqs: [
      { question: 'How many Reels should a business post per week?', answer: 'We recommend 3 to 5 Reels per week for aggressive account growth, or 2 to 3 per week for consistent brand maintenance.' },
      { question: 'What if our executives don’t want to dance or point at text bubbles?', answer: 'We never do goofy trends; our business Reels focus on authoritative speaking, desk walkthroughs, screen recordings, and professional b-roll overlays.' },
      { question: 'Can you edit the raw video footage we record?', answer: 'Yes, our video team adds dynamic captions, zoom cuts, sound effects, color grading, and export ready-to-post 9:16 video files.' },
      { question: 'How do Reels generate direct commercial sales?', answer: 'By prompting viewers to comment a specific keyword (e.g., "GUIDE") to automatically receive a link or quote in their DMs.' },
    ],
  },

  'content-calendars': {
    primaryKeyword: 'Editorial Content Calendar Planning Services',
    secondaryKeywords: ['monthly social content schedule', 'B2B content calendar', 'editorial planning agency Bangalore', 'multi channel content scheduling', 'content workflow management'],
    visualType: 'marketing',
    whatIs: 'Content Calendars are organized, pre-scheduled 30-to-90-day operational roadmaps detailing posting dates, content pillars, creative formats, copy hooks, and strategic business goals.',
    problem: 'Sporadic, last-minute posting leads to creative burnout, missed seasonal opportunities, and disjointed messaging across marketing channels.',
    solution: 'We build structured, pre-approved monthly editorial calendars that give your leadership complete visibility into upcoming content 10 days before publication.',
    capabilities: [
      { title: 'Four-Pillar Content Matrix', description: 'Balancing content across Education, Inspiration, Social Proof, and Direct Commercial Promotion.' },
      { title: 'Date-Specific Publishing Timelines', description: 'Aligning posts with national holidays, industry conferences, retail festivals, and product launches.' },
      { title: 'Multi-Platform Asset Mapping', description: 'Organizing which creative formats (video, carousel, single image, text) go live on which network on each date.' },
      { title: 'Collaborative Review & Approval Workflow', description: 'Centralized cloud dashboard (Notion/Airtable/Google Sheets) where your team can review and suggest edits with one click.' },
    ],
    benefits: [
      { title: 'Complete Strategic Visibility', description: 'Review and approve an entire month of marketing in one 30-minute meeting rather than dealing with daily interruptions.' },
      { title: 'Never Miss a Commercial Milestone', description: 'Plan festive promotions, product releases, and seasonal sales weeks in advance for maximum execution polish.' },
      { title: 'Disciplined Brand Governance', description: 'Ensure all departments, regional offices, and external agencies communicate with unified, brand-approved messaging.' },
    ],
    faqs: [
      { question: 'What tools do you use to host the content calendar?', answer: 'We deliver calendars via interactive Notion workspaces, Airtable dashboards, or collaborative Google Sheets—whichever fits your internal workflow best.' },
      { question: 'How far in advance is the calendar delivered?', answer: 'We deliver the complete calendar for the upcoming month 7 to 10 days in advance, allowing ample time for review and revisions.' },
      { question: 'Can we request adjustments to scheduled topics?', answer: 'Yes, you can leave comments directly on any card in the calendar, and our team updates the visual or copy accordingly.' },
      { question: 'Does the calendar include visual mockups as well as text?', answer: 'Yes, each calendar card includes the final attached visual graphic or video preview alongside the copy and hashtags.' },
    ],
  },

  // === VIDEO CONTENT ===
  'short-form-content': {
    primaryKeyword: 'Short-Form Video Production Services Bangalore',
    secondaryKeywords: ['vertical video production', 'Shorts and Reels agency', 'short form video marketing', 'TikTok video production', 'snappy video editing'],
    visualType: 'video',
    whatIs: 'Short-Form Content is the specialized production of high-tempo 15-to-60-second vertical videos engineered for mobile feeds with rapid pacing, sound design, and text callouts.',
    problem: 'Long, slow-paced horizontal videos fail completely when posted to vertical mobile feeds, receiving single-digit view completion rates.',
    solution: 'We film, edit, and sound-design high-energy short-form videos tailored specifically to mobile scrolling behavior and vertical feed algorithms.',
    capabilities: [
      { title: 'Vertical 9:16 Mobile Native Framing', description: 'Shooting and cropping footage specifically for vertical full-screen mobile immersion.' },
      { title: 'Dynamic Animated Word-by-Word Captions', description: 'Adding colorful, high-retention subtitles that keep users reading even with sound muted.' },
      { title: 'Rapid-Fire Zoom Cuts & Sound Effects (SFX)', description: 'Resetting viewer attention every 3 to 4 seconds with subtle zooms, swooshes, and pop sound effects.' },
      { title: 'Turnkey Multi-Platform Distribution', description: 'Exporting master video files formatted for seamless simultaneous posting to Reels, Shorts, and TikTok.' },
    ],
    benefits: [
      { title: 'Dominate Mobile Attention', description: 'Engage Gen Z and millennial buyers on the exact visual format they consume for 2+ hours daily.' },
      { title: '80%+ Video Completion Rates', description: 'Dynamic editing keeps viewers hooked to the final second, signaling quality to platform algorithms.' },
      { title: 'High ROI Creative Asset Repurposing', description: 'Chop one 30-minute podcast or webinar into 10 high-performing short-form video clips.' },
    ],
    faqs: [
      { question: 'Why are captions so important for short-form video?', answer: 'Over 70% of social media users browse videos with sound off; bold animated captions ensure your message is understood regardless of audio settings.' },
      { question: 'Can you repurpose our existing long webinars into short-form clips?', answer: 'Yes, our media editors scrub long recordings to identify the most profound 30-second soundbites, adding dynamic captions and vertical framing.' },
      { question: 'What equipment do we need to record footage?', answer: 'A modern iPhone or Android smartphone with a simple lapel microphone is more than sufficient; our editing elevates it to broadcast quality.' },
      { question: 'How quickly can you edit a batch of short-form videos?', answer: 'A batch of 10 to 15 short-form clips is typically edited, subtitled, and delivered within 4 to 6 business days.' },
    ],
  },

  'reels': {
    primaryKeyword: 'Instagram Reels Production and Strategy',
    secondaryKeywords: ['custom Reels editing', 'Instagram video marketing', 'Reels production agency Bangalore', 'viral Reels creation', 'business Instagram Reels'],
    visualType: 'video',
    whatIs: 'Reels Production is the end-to-end creation of captivating Instagram Reels—combining trending audio tracks, motion graphics, and direct-response hooks that expand your brand reach.',
    problem: 'Amateur smartphone videos with muffled audio, bad lighting, and weak intros get skipped immediately, harming brand perception.',
    solution: 'We plan, edit, and optimize broadcast-quality Reels featuring clean audio mastering, color grading, animated captions, and clear calls to action.',
    capabilities: [
      { title: 'Trending Audio & Algorithm Integration', description: 'Matching video concepts to rising commercial-licensed audio tracks favored by Instagram recommendation algorithms.' },
      { title: 'Color Grading & Visual Polish', description: 'Balancing skin tones, vibrance, and contrast for a premium, cinematic look on OLED smartphone screens.' },
      { title: 'Direct-Response Hook Editing', description: 'Ensuring the core visual surprise occurs within the first 1.5 seconds to minimize swipe-away rates.' },
      { title: 'Custom 1:1 Matching Cover Cards', description: 'Designing cohesive thumbnail covers that align neatly on your profile grid without awkward crop issues.' },
    ],
    benefits: [
      { title: 'Explosive Non-Follower Reach', description: 'Reels are served predominantly to users who don’t yet follow you, making them the ultimate organic client acquisition tool.' },
      { title: 'Establish Visual Industry Dominance', description: 'Present a polished, high-production visual image that elevates you above competitors using amateur clips.' },
      { title: 'High Community DM Engagement', description: 'Reels with strategic keyword call-to-actions generate dozens of inbound customer inquiries.' },
    ],
    faqs: [
      { question: 'What is the ideal length for an Instagram Reel?', answer: 'For algorithmic discovery, 15 to 30 seconds delivers the highest completion rates; for in-depth educational tutorials, 45 to 60 seconds works best.' },
      { question: 'Do you help with topic ideas for Reels?', answer: 'Yes, we provide complete monthly Reels storyboards with hook lines, audio recommendations, and visual notes.' },
      { question: 'Can you use licensed commercial music?', answer: 'Yes, we source 100% royalty-free, commercial-cleared audio tracks that prevent copyright muting on business accounts.' },
      { question: 'How do you transfer large video files to us?', answer: 'We deliver organized cloud folders (Google Drive/Dropbox) with high-bitrate MP4 files ready to upload.' },
    ],
  },

  'youtube-videos': {
    primaryKeyword: 'Long-Form YouTube Video Production',
    secondaryKeywords: ['corporate YouTube video agency', 'YouTube video editing services Bangalore', 'YouTube documentary production', 'video podcast production', 'YouTube SEO video editing'],
    visualType: 'video',
    whatIs: 'YouTube Video Production is the full-scale editing and packaging of authoritative long-form horizontal (16:9) video content—including tutorials, customer interviews, and brand documentaries.',
    problem: 'Monotonous talking-head videos with poor audio, flat lighting, and zero b-roll bore viewers, causing steep audience retention drops within 2 minutes.',
    solution: 'We transform raw footage into dynamic, television-grade YouTube episodes featuring multi-cam switching, lower-third graphics, licensed cinematic soundtracks, and sound design.',
    capabilities: [
      { title: 'Multi-Camera Timeline Editing', description: 'Seamlessly switching between wide, close-up, and screen-recording camera angles to keep the visual rhythm engaging.' },
      { title: 'Audio Mastering & Noise Removal', description: 'Eliminating room echo, background hums, and leveling vocal frequencies for broadcast-quality podcast audio.' },
      { title: 'B-Roll & Motion Graphic Inserts', description: 'Weaving in contextual stock footage, animated charts, screen mockups, and illustrative lower thirds.' },
      { title: 'End-Screen & Chapter Integration', description: 'Structuring YouTube chapter timestamps and interactive end-screen cards to maximize channel watch time.' },
    ],
    benefits: [
      { title: 'Highest Audience Trust & Retention', description: 'Long-form YouTube videos build deeper commercial trust than any 15-second social clip, turning viewers into passionate advocates.' },
      { title: 'Compounding Search Engine Traffic', description: 'A well-produced YouTube video ranks on both Google and YouTube search results for years.' },
      { title: 'Premium Sponsorship & Client Valuation', description: 'Broadcast-quality production attracts high-ticket enterprise clients and lucrative corporate partnerships.' },
    ],
    faqs: [
      { question: 'What video resolution do you edit in?', answer: 'We edit and export in full 4K UHD (3840x2160) or 1080p Full HD at 60fps depending on your source footage.' },
      { question: 'Can you edit remote Zoom or Riverside podcast recordings?', answer: 'Yes, we specialize in elevating remote video interviews—cleaning audio tracks, adding split-screen layouts, and inserting branded backgrounds.' },
      { question: 'How long does it take to edit a 15-minute YouTube video?', answer: 'Standard turnaround is 4 to 6 business days for initial cut review, with revisions completed in 24 to 48 hours.' },
      { question: 'Do you also provide the thumbnail and title packaging?', answer: 'Yes, every long-form video package includes high-CTR custom thumbnail variations and SEO-optimized title recommendations.' },
    ],
  },

  'promotional-videos': {
    primaryKeyword: 'Commercial Promotional Video Production',
    secondaryKeywords: ['product promo video', 'brand commercial video Bangalore', 'marketing promo video production', 'explainer video production', 'corporate commercial agency'],
    visualType: 'video',
    whatIs: 'Promotional Video Production is the high-energy creation of commercial video spots, product feature reveals, event teasers, and limited-time offer announcements.',
    problem: 'Boring corporate slideshows disguised as videos fail to generate emotional excitement or motivate viewers to buy products.',
    solution: 'We produce cinematic promotional videos with dynamic sound design, kinetic typography, 3D product renders, and urgent call-to-actions that drive conversions.',
    capabilities: [
      { title: 'Kinetic Typography & Fast Pacing', description: 'Dynamic animated text synced tightly to hard-hitting beats that emphasize core product value points.' },
      { title: '3D Product Rendering & Mockup Animation', description: 'Showcasing physical products or digital app screens with fluid 3D rotations, reflections, and exploded views.' },
      { title: 'Cinematic Sound Design & Voiceover', description: 'Layering professional voice actors, risers, impacts, and commercial music to build emotional crescendo.' },
      { title: 'Multi-Channel Format Delivery', description: 'Exporting 16:9 for YouTube/Web, 9:16 for Stories/Reels, and 1:1 for social feed ads.' },
    ],
    benefits: [
      { title: 'Massive Product Launch Hype', description: 'Generate immediate commercial demand and pre-orders when launching new service lines or physical products.' },
      { title: 'Higher Ad Conversion Rates', description: 'Video ads consistently outperform static graphics in paid advertising auctions, lowering your acquisition costs.' },
      { title: 'Versatile Marketing Asset', description: 'Use promotional videos across website landing pages, trade show booths, email blasts, and paid ad funnels.' },
    ],
    faqs: [
      { question: 'How long should a promotional commercial video be?', answer: '30 to 60 seconds is the sweet spot for commercial promotional videos—delivering the hook, value proposition, and call to action without losing viewer attention.' },
      { question: 'Can you provide professional voiceovers in multiple languages?', answer: 'Yes, we collaborate with professional native voiceover artists across English (US, UK, Indian accents), Hindi, Tamil, Kannada, and international languages.' },
      { question: 'Do we need to film live actors or can you create animated promo videos?', answer: 'We produce both live-action cinematic footage and 100% digital motion graphic / 3D animated promos.' },
      { question: 'What is the typical production timeline for a promotional video?', answer: 'Turnaround typically ranges from 2 to 3 weeks including script approval, storyboard review, animation, and audio mastering.' },
    ],
  },

  'business-videos': {
    primaryKeyword: 'Corporate Business Video Production Bangalore',
    secondaryKeywords: ['company profile video', 'executive interview video', 'client testimonial video production', 'corporate culture video', 'B2B video agency'],
    visualType: 'video',
    whatIs: 'Business Video Production encompasses professional corporate overview films, executive thought leadership interviews, client video testimonials, and recruitment culture videos.',
    problem: 'Stiff, awkward corporate videos with poor lighting and monotone speaking make companies look lifeless and unapproachable to prospective clients and top talent.',
    solution: 'We produce authentic, documentary-style corporate films that showcase passionate leadership, state-of-the-art office facilities, and enthusiastic customer case studies.',
    capabilities: [
      { title: 'Executive Interview & Leadership Storytelling', description: 'Guiding founders and executives through conversational interviews that bring out authentic vision and passion.' },
      { title: 'Client Video Testimonial Production', description: 'Capturing genuine client success stories and verified ROI metrics in high-credibility documentary formats.' },
      { title: 'Office Culture & Recruitment Showcases', description: 'Highlighting everyday team collaboration, modern facilities, and workplace energy to attract tier-one talent.' },
      { title: 'Corporate Event & Conference Highlights', description: 'Filming annual summits, client galas, and exhibitions with multi-camera cinematic coverage.' },
    ],
    benefits: [
      { title: 'Unassailable B2B Trust & Credibility', description: 'Prospective clients see real executives, real offices, and real customer testimonials, eliminating perceived risk.' },
      { title: 'Shorten Consultative Sales Cycles', description: 'Send a 3-minute corporate overview film before sales calls to pre-establish institutional credibility.' },
      { title: 'Attract Elite Industry Talent', description: 'Inspire prospective candidates by showing them an exciting, vibrant corporate workplace they want to join.' },
    ],
    faqs: [
      { question: 'Do you provide on-site filming crews in Bangalore and PAN-India?', answer: 'Yes, our cinematography teams travel on-site with full 4K cinema cameras, wireless audio, professional lighting rigs, and gimbals.' },
      { question: 'How do you make executives who are nervous on camera look natural?', answer: 'Our directors use conversational interview techniques and teleprompters, conducting relaxed discussions rather than cold formal interrogations.' },
      { question: 'How long should a corporate overview video be?', answer: 'We recommend 2 to 3 minutes for an overarching company profile, and 60 to 90 seconds for individual client testimonial case studies.' },
      { question: 'Can you film client testimonials remotely if they are in other cities?', answer: 'Yes, we can deploy local partner crews or facilitate remote 4K studio recording sessions.' },
    ],
  },

  'educational-videos': {
    primaryKeyword: 'Educational and Explainer Video Production',
    secondaryKeywords: ['animated explainer videos', 'software walkthrough videos', 'customer onboarding video production', 'training video production Bangalore', 'how-to business video'],
    visualType: 'video',
    whatIs: 'Educational Video Production is the creation of clear, engaging tutorials, animated explainer videos, customer onboarding walkthroughs, and technical software guides.',
    problem: 'Complex software workflows and dry PDF manuals confuse customers, overwhelming customer support desks and causing product churn.',
    solution: 'We produce crystal-clear step-by-step explainer videos featuring crisp screen recordings, 2D vector animations, friendly voiceovers, and highlighted UI callouts.',
    capabilities: [
      { title: '2D Animated Vector Explainers', description: 'Simplifying complex abstract concepts, software architectures, or financial products into engaging animated stories.' },
      { title: 'SaaS Software Walkthroughs & Demos', description: 'Recording clean, fluid software demos with cursor zoom-ins, spotlight highlights, and keyboard shortcut graphics.' },
      { title: 'Customer Onboarding Video Suites', description: 'Guiding new users through initial setup and account configuration to accelerate time-to-value.' },
      { title: 'Internal Employee Training Modules', description: 'Standardizing corporate SOPs and compliance training into digestible micro-learning video modules.' },
    ],
    benefits: [
      { title: 'Cut Customer Support Tickets by 40%+', description: 'Answer common setup and troubleshooting questions with clear video guides customers can watch anytime.' },
      { title: 'Accelerate New User Activation', description: 'Guide trial users to their first successful software milestone in minutes, boosting paid conversion.' },
      { title: 'Consistent Training at Zero Marginal Cost', description: 'Train thousands of new employees or clients simultaneously without repeating live presentations.' },
    ],
    faqs: [
      { question: 'What styles of educational videos do you produce?', answer: 'We produce animated explainer videos, screencast software demos, live-action presenter tutorials, and hybrid whiteboard presentations.' },
      { question: 'Do you write the tutorial scripts and voiceover?', answer: 'Yes, our instructional writers simplify complex technical jargon into clear, friendly, everyday conversational steps.' },
      { question: 'Can the videos be divided into short chapter modules for an LMS?', answer: 'Yes, we can deliver both a single master video and modular 1 to 2-minute bite-sized lessons formatted for your knowledge base or LMS.' },
      { question: 'How do you handle software UI updates?', answer: 'We archive all project source files, making it easy to swap in new screen recordings whenever your software interface updates.' },
    ],
  },

  // === SEO CONTENT ===
  'seo-blog-writing': {
    primaryKeyword: 'SEO Blog Writing Services Bangalore',
    secondaryKeywords: ['search engine optimized blog writing', 'long form SEO article writers', 'B2B SEO blog agency', 'organic keyword blog writing', 'high ranking blog writing'],
    visualType: 'marketing',
    whatIs: 'SEO Blog Writing is the strategic creation of comprehensive, well-researched, and keyword-mapped articles engineered to rank on page one of Google for high-volume commercial queries.',
    problem: 'Thin 500-word articles written without keyword mapping get buried on page 5 of Google, generating zero organic traffic or commercial inquiries.',
    solution: 'We craft comprehensive 1,500 to 3,000-word articles backed by intent research, semantic LSI keywords, schema formatting, and original industry analysis.',
    capabilities: [
      { title: 'Search-Intent Header Structuring (H1-H4)', description: 'Organizing content with logical heading tags answering exact search intent and People Also Ask questions.' },
      { title: 'Semantic LSI & NLP Keyword Integration', description: 'Enriching articles with related conceptual terms that Google’s natural language algorithms expect to see.' },
      { title: 'Original Insight & Data Tables', description: 'Integrating proprietary comparisons, summary tables, and expert quotes to fulfill Google Helpful Content criteria.' },
      { title: 'Internal SILO Link Architecture', description: 'Interlinking blog posts with high-value commercial service pages to pass authority and drive leads.' },
    ],
    benefits: [
      { title: 'Dominant Page 1 Google Rankings', description: 'Rank for dozens of high-intent long-tail search queries that prospective buyers search every day.' },
      { title: 'Perpetual Inbound Organic Traffic', description: 'A single well-ranked article can attract hundreds of qualified potential clients every month for years.' },
      { title: 'Educate & Convert Skeptical Buyers', description: 'Provide thorough, unbiased answers to customer questions, establishing your firm as the trusted authority.' },
    ],
    faqs: [
      { question: 'How long are your SEO blog posts?', answer: 'Our standard SEO blog articles range from 1,200 to 2,500 words, tailored to match the topical depth required to outrank current page-one competitors.' },
      { question: 'How do you ensure articles don’t get penalized by Google helpful content updates?', answer: 'We avoid thin, automated fluff; all articles provide unique angles, original tables, practical takeaways, and verified factual citations.' },
      { question: 'Do you upload the articles directly to our CMS?', answer: 'Yes, we can format, upload, and schedule articles directly inside WordPress, Webflow, Shopify, or headless CMS platforms with meta tags and featured images.' },
      { question: 'How long does it take for a new blog post to rank on Google?', answer: 'New articles typically get indexed within 3 to 7 days, with commercial keyword rankings maturing over 60 to 90 days as authority builds.' },
    ],
  },

  'keyword-based-content': {
    primaryKeyword: 'Keyword-Based Content Strategy and Writing',
    secondaryKeywords: ['keyword targeted copywriting', 'search intent content writing', 'commercial keyword articles', 'SEO copywriting Bangalore', 'target keyword landing page content'],
    visualType: 'analytics',
    whatIs: 'Keyword-Based Content is the deliberate writing of website pages and articles to satisfy the exact commercial, informational, or transactional intent of specific target search phrases.',
    problem: 'Writing content without keyword intent analysis causes websites to rank for useless trivia queries that never convert into paying business customers.',
    solution: 'We map high-intent commercial keywords to dedicated landing pages, satisfying searcher intent thoroughly and guiding them toward commercial conversion.',
    capabilities: [
      { title: 'Search Intent Alignment (Commercial vs Informational)', description: 'Ensuring page layout and copy match whether the searcher wants to buy, compare, or learn.' },
      { title: 'Primary & Secondary Keyword Weaving', description: 'Naturally embedding primary keywords into title tags, H1s, intro paragraphs, and image alt text.' },
      { title: 'Competitor Keyword Gap Closure', description: 'Identifying keywords your top competitors rank for and creating superior, more thorough content to outrank them.' },
      { title: 'Zero Keyword Stuffing Guarantee', description: 'Maintaining smooth, authoritative human readability with natural linguistic density.' },
    ],
    benefits: [
      { title: 'Attract Buyers, Not Just Browsers', description: 'Focus organic ranking efforts strictly on keywords with commercial intent modifier words.' },
      { title: 'Prevent Keyword Cannibalization', description: 'Ensure each page targets a unique cluster of keywords so your own pages never compete with each other.' },
      { title: 'Higher Search Click-Through Rates', description: 'Aligning title tags directly with search query phrasing ensures users click your link first.' },
    ],
    faqs: [
      { question: 'What is keyword density and does it still matter?', answer: 'Modern Google algorithms prioritize topical relevance and natural language entities over strict percentage keyword density; we write naturally for humans first.' },
      { question: 'How do you choose which keywords to target?', answer: 'We evaluate search volume, keyword difficulty, commercial intent, and business relevance to prioritize terms that will yield actual customer inquiries.' },
      { question: 'Can you rewrite existing pages that aren’t ranking?', answer: 'Yes, optimizing existing pages with targeted keyword mapping is one of the fastest ways to jump into Google top 5 rankings.' },
      { question: 'How do you track keyword ranking progress?', answer: 'We monitor keyword positions weekly using Google Search Console and professional rank tracking tools, providing transparent monthly reports.' },
    ],
  },

  'website-seo-content': {
    primaryKeyword: 'Website SEO Content Optimization Services',
    secondaryKeywords: ['service page SEO copywriting', 'SEO landing page content Bangalore', 'on page SEO content writing', 'corporate website SEO text', 'commercial service SEO copy'],
    visualType: 'marketing',
    whatIs: 'Website SEO Content is the technical and creative authoring of core commercial service pages—combining conversion-focused copy with structured schema, FAQ modules, and internal links.',
    problem: 'Service pages with only 200 words of generic text cannot rank on Google against competitors who provide thorough, structured service information.',
    solution: 'We enrich service pages into comprehensive, authoritative commercial hubs (1,000–1,800 words) featuring clear definitions, problem-solution breakdowns, and schema FAQ modules.',
    capabilities: [
      { title: 'Comprehensive Service Scope Architecture', description: 'Thoroughly detailing deliverables, capabilities, methodologies, and commercial expectations.' },
      { title: 'Structured FAQPage Schema Modules', description: 'Embedding accordion FAQs with Schema.org JSON-LD markup to capture rich question snippets on Google search.' },
      { title: 'Direct-Answer Definitions (AEO)', description: 'Writing concise, authoritative 40-word definition paragraphs optimized for Google AI Overviews and featured snippets.' },
      { title: 'Hierarchical Internal Breadcrumb SILO Links', description: 'Connecting service pages to related sub-services to build powerful domain topical authority.' },
    ],
    benefits: [
      { title: 'Rank Directly for High-Value Service Queries', description: 'Capture prospects searching "hire [service] agency Bangalore" directly onto your money pages.' },
      { title: 'Rich Snippets on Google Search', description: 'Structured FAQ schema expands your visual footprint on Google search results, boosting CTR by 30%+.' },
      { title: 'Seamless Transition to Quote Inquiry', description: 'Clear deliverables and pricing transparency give prospective clients the confidence to submit a quote.' },
    ],
    faqs: [
      { question: 'Why do commercial service pages need 1,000+ words of content?', answer: 'Google’s Helpful Content system rewards pages that provide comprehensive answers to all user questions, while short 200-word pages are classified as thin content.' },
      { question: 'Will longer content overwhelm visitors looking for a quick quote?', answer: 'No, because our UX layout places summary bullet points, sticky quote buttons, and hero CTAs at the very top for fast-scanners, while detailed text satisfies both deep readers and search crawlers.' },
      { question: 'Do you write the FAQ schema code as well?', answer: 'Yes, every service page includes valid Schema.org JSON-LD code ready for instant implementation.' },
      { question: 'Can this be implemented on our existing website without redesigning?', answer: 'Yes, we can optimize the copy and structure within your existing website design templates.' },
    ],
  },

  'local-seo-content': {
    primaryKeyword: 'Local SEO Content Writing Services',
    secondaryKeywords: ['city landing page SEO content', 'geo targeted landing page copy', 'local service page writing Bangalore', 'Google Maps SEO content', 'multi location SEO content'],
    visualType: 'marketing',
    whatIs: 'Local SEO Content is the tailored creation of geo-specific landing pages and localized content designed to capture searches with local intent (e.g. "service in Bangalore", "near me").',
    problem: 'Businesses serving multiple neighborhoods or cities fail to rank in local map packs because their website has zero location-specific content or local landmarks.',
    solution: 'We create distinct, high-quality geo-targeted service pages that mention regional business hubs, local case studies, and accurate NAP (Name, Address, Phone) citations.',
    capabilities: [
      { title: 'Hyper-Local Service Corridor Landing Pages', description: 'Crafting dedicated pages for key business corridors (e.g. Bangalore, Indiranagar, Whitefield, Koramangala).' },
      { title: 'Local Schema & Geo-Tag Markup Integration', description: 'Embedding PostalAddress and LocalBusiness JSON-LD schema with precise geo-coordinates.' },
      { title: 'Regional Client Proof & Case References', description: 'Highlighting projects completed for local businesses and regional customer testimonials.' },
      { title: 'Google Business Profile Alignment', description: 'Ensuring website service descriptions align perfectly with the categories and services listed on your Google Map profile.' },
    ],
    benefits: [
      { title: 'Dominance in Local Search & Map 3-Packs', description: 'Appear at the top of Google search results when local decision-makers search for nearby service providers.' },
      { title: 'High-Intent Phone & WhatsApp Calls', description: 'Local searchers have urgent intent—converting directly into phone consultations and office visits.' },
      { title: 'Multi-City Expansion at Zero Real Estate Cost', description: 'Establish commercial search presence across multiple target cities without opening physical branch offices.' },
    ],
    faqs: [
      { question: 'How do you avoid duplicate content across multiple city pages?', answer: 'We write unique introductory narratives, highlight regional client case studies, specify localized service corridors, and customize local FAQs for each location.' },
      { question: 'What details should be included on a local service page?', answer: 'Local landmarks, serviced neighborhoods, local office address/phone, embedded Google Map, local customer reviews, and localized pricing.' },
      { question: 'Does local SEO content help with Google Business Profile ranking?', answer: 'Yes! Google local algorithms look at the organic authority and geographic relevance of the website linked to your Google Business Profile.' },
      { question: 'How many location pages should we create initially?', answer: 'We advise starting with 3 to 5 primary commercial corridors where your business has existing clients and strong operational capacity.' },
    ],
  },

  'content-optimization': {
    primaryKeyword: 'Content Optimization and Refresh Services',
    secondaryKeywords: ['content refresh SEO', 'historical content optimization', 'updating outdated blog posts', 'SEO content rewrite agency Bangalore', 'improving existing search rankings'],
    visualType: 'analytics',
    whatIs: 'Content Optimization is the systematic auditing, updating, and enriching of existing website content and outdated blog posts to recover lost rankings and boost organic traffic.',
    problem: 'Valuable articles that ranked on page one 2 years ago decay in traffic as competitors publish fresher data and Google algorithms reward recent updates.',
    solution: 'We diagnose decaying URLs in Google Search Console, update outdated statistics, add missing subheadings, optimize featured snippets, and re-index the content.',
    capabilities: [
      { title: 'Traffic Decay & Ranking Loss Audit', description: 'Identifying URLs that have lost search impressions and rankings over the past 12 months.' },
      { title: 'Information Refresh & Stat Verification', description: 'Replacing outdated dates, broken external links, and obsolete statistics with current verified data.' },
      { title: 'Semantic Keyword Expansion', description: 'Adding newly emerging related search queries that Google Search Console reveals the page is almost ranking for.' },
      { title: 'Featured Snippet Formatting Refinements', description: 'Reformatting lists and tables to seize Position Zero snippets from competitors.' },
    ],
    benefits: [
      { title: '3x Faster Results than Writing New Posts', description: 'Refreshing existing URLs with established backlink authority yields dramatic ranking jumps in days rather than months.' },
      { title: 'Maximize Past Marketing Investment', description: 'Breathe new commercial life into content you already paid to produce years ago.' },
      { title: 'Protect Against Algorithm Penalties', description: 'Removing thin and outdated information protects your domain during Google Helpful Content algorithm updates.' },
    ],
    faqs: [
      { question: 'How often should existing blog content be refreshed?', answer: 'We recommend reviewing top-traffic articles every 9 to 12 months to verify facts, update screenshots, and maintain search freshness.' },
      { question: 'Will changing the content on an existing page risk losing current rankings?', answer: 'We preserve core URL structures, primary headings, and high-performing keywords, focusing purely on enriching thin sections and expanding topical depth.' },
      { question: 'How quickly do rankings recover after a content refresh?', answer: 'Because Google already crawls established URLs regularly, refreshed pages often see ranking jumps within 7 to 21 days of re-indexation.' },
      { question: 'Do you also update the publication date?', answer: 'Yes, updating the "Last Modified" schema date signals to Google and users that the information has been freshly verified.' },
    ],
  },

  'ai-search-content': {
    primaryKeyword: 'AI Search & Answer Engine Optimization (AEO)',
    secondaryKeywords: ['Google SGE optimization', 'Perplexity AI SEO', 'ChatGPT answer optimization', 'Answer Engine Optimization AEO Bangalore', 'generative engine optimization GEO'],
    visualType: 'analytics',
    whatIs: 'AI Search Optimization (AEO / GEO) is the cutting-edge formatting of website content to ensure your brand is cited, quoted, and recommended by AI engines like Google AI Overviews (SGE), Perplexity, and ChatGPT.',
    problem: 'Traditional SEO practices that rely solely on keyword density fail to get cited inside conversational AI answers, rendering your brand invisible in modern AI search results.',
    solution: 'We structure clear direct-answer summaries, proprietary authoritative data tables, verifiable author credentials, and clean schema markup that AI models ingest and cite.',
    capabilities: [
      { title: 'Direct-Answer Summary Blocks (First 100 Words)', description: 'Crafting concise, objective, unambiguous answers to specific commercial questions that AI engines extract as direct answers.' },
      { title: 'Structured Comparative Data Tables', description: 'Formatting pricing, feature matrices, and pros/cons tables that LLMs parse effortlessly for synthesis.' },
      { title: 'Entity-Based Authority & Source Verification', description: 'Embedding verifiable citations, corporate credentials, and Schema.org Author/Organization entities.' },
      { title: 'Conversational Long-Tail Query Targeting', description: 'Answering complex multi-part questions that users type or speak into conversational AI assistants.' },
    ],
    benefits: [
      { title: 'Dominance in Google AI Overviews (SGE)', description: 'Secure coveted citation links inside the prominent AI answer box at the very top of Google search results.' },
      { title: 'Future-Proof Your Organic Visibility', description: 'Stay ahead of the monumental consumer shift from traditional blue links to conversational AI search engines.' },
      { title: 'Highest Quality Qualified Referral Leads', description: 'Users who click citations in AI answers have already researched deeply and possess immediate purchase intent.' },
    ],
    faqs: [
      { question: 'What is Answer Engine Optimization (AEO)?', answer: 'AEO is the practice of optimizing content specifically for AI answer engines (Google SGE, Perplexity, Claude, ChatGPT) rather than traditional blue link search results.' },
      { question: 'How does an AI engine decide which website to cite?', answer: 'AI engines prioritize sources with clear, direct factual statements, structured comparative data, high domain authority, and verifiable expertise (E-E-A-T).' },
      { question: 'Does optimizing for AI search hurt traditional SEO rankings?', answer: 'No! Clear, structured, authoritative content that AI models love is exactly what traditional Google ranking algorithms reward as well.' },
      { question: 'Can Review Growth Partners audit our site for AI search readiness?', answer: 'Yes, we provide specialized AEO audits evaluating how conversational AI models currently describe your company and identifying citation gaps.' },
    ],
  },
};
