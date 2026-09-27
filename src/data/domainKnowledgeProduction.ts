// Domain knowledge dictionary for PRODUCTION services
import type { ServiceContentOverride } from './serviceTypes.ts';

export const PRODUCTION_DOMAIN_KNOWLEDGE: Record<string, Partial<ServiceContentOverride>> = {
  // === VIDEO PRODUCTION ===
  'video-editing': {
    primaryKeyword: 'Professional Video Editing Services Bangalore',
    secondaryKeywords: ['commercial video editor', 'YouTube video editing agency', 'corporate video post production', 'Premiere Pro DaVinci video editor', 'color grading services'],
    visualType: 'video',
    whatIs: 'Video Editing is the post-production art of assembling raw video footage into a cohesive, high-retention cinematic narrative—incorporating rhythm, sound design, and color grading.',
    problem: 'Poor pacing, awkward pauses, flat audio, and amateur transitions make videos look cheap, causing viewers to click away within seconds.',
    solution: 'Our senior editors use Adobe Premiere Pro and DaVinci Resolve to craft broadcast-quality cuts with tight narrative flow, pristine sound leveling, and cinematic color grades.',
    capabilities: [
      { title: 'Timeline Pacing & Story Assembly', description: 'Trimming dead air, selecting best takes, and structuring a compelling narrative that holds viewer interest.' },
      { title: 'Audio Mastering & Noise Clean-Up', description: 'Removing background hiss, balancing dialog levels, and mixing stereo sound effects with licensed music.' },
      { title: 'DaVinci Resolve Color Grading', description: 'Correcting exposure, matching camera color science, and applying stylized cinematic look-up tables (LUTs).' },
      { title: 'Motion Titles & Graphic Callouts', description: 'Adding sleek animated lower thirds, chapter titles, logo reveals, and on-screen graphical pointers.' },
    ],
    benefits: [
      { title: 'Broadcast-Grade Visual Polish', description: 'Present a prestigious visual image that commands viewer respect and builds immediate company credibility.' },
      { title: 'High Viewer Watch Time & Retention', description: 'Rhythmic, intentional editing prevents viewer boredom and maximizes video platform algorithm reach.' },
      { title: 'Turnkey Multi-Format Delivery', description: 'Exporting master files in 16:9 widescreen, 9:16 vertical, and 1:1 square for omni-channel deployment.' },
    ],
    faqs: [
      { question: 'What video editing software do your editors use?', answer: 'We primarily edit in Adobe Premiere Pro, DaVinci Resolve Studio (for advanced color grading), and Adobe After Effects (for motion graphics).' },
      { question: 'How do we send raw video footage to your team?', answer: 'We provide secure high-speed cloud upload links (Google Drive, Dropbox, or Frame.io) for seamless footage transfer.' },
      { question: 'What is the typical turnaround time for a video edit?', answer: 'Standard turnaround is 3 to 5 business days for a first cut, with revision cycles turned around within 24 to 48 hours.' },
      { question: 'Do you provide the music and sound effects?', answer: 'Yes, we source 100% royalty-free, commercial-cleared soundtracks and professional sound effects with full commercial usage rights.' },
    ],
  },

  'reels-editing': {
    primaryKeyword: 'Instagram Reels and Shorts Video Editing',
    secondaryKeywords: ['vertical video editor Bangalore', 'TikTok video editing', 'dynamic caption video editing', 'viral Reels editing services', 'short form video editor'],
    visualType: 'video',
    whatIs: 'Reels Editing is the fast-paced, high-retention post-production of 9:16 vertical videos—featuring dynamic word-by-word subtitles, zoom cuts, sound effects, and motion overlays.',
    problem: 'Raw, unedited smartphone videos lack the visual tempo and auditory stimulation needed to hold modern mobile users past the 3-second mark.',
    solution: 'We transform raw vertical clips into captivating viral Reels with colorful animated captions, rapid zoom cuts, b-roll overlays, and punchy sound design.',
    capabilities: [
      { title: 'Dynamic Animated Word-by-Word Captions', description: 'Styling high-contrast karaoke-style captions with colored keyword highlights and subtle bounce animations.' },
      { title: 'Attention-Reset Zoom Cuts & Sound FX', description: 'Inserting subtle punch-ins, swooshes, bell dings, and pop effects every 3 to 4 seconds to maintain focus.' },
      { title: 'Contextual B-Roll & Screen Insets', description: 'Overlaying relevant stock footage, memes, tweets, and screenshots that illustrate the spoken words.' },
      { title: 'Platform Safe Zone Alignment', description: 'Ensuring all text, graphics, and faces sit safely away from native platform overlay icons and caption boxes.' },
    ],
    benefits: [
      { title: '85%+ Video Completion Rate', description: 'High-tempo editing prevents user drop-off, signaling strong retention to the Instagram and TikTok algorithms.' },
      { title: 'Effortless Comprehension on Mute', description: 'Clear animated captions ensure users understand 100% of your message even in silent public environments.' },
      { title: 'Batch Production Efficiency', description: 'Deliver 10 to 20 polished short-form videos per week ready to populate your social calendar.' },
    ],
    faqs: [
      { question: 'Can you edit in the popular "Alex Hormozi" caption style?', answer: 'Yes, we specialize in high-retention dynamic subtitles with custom fonts, emoji pops, and word-by-word highlight colors.' },
      { question: 'What source footage do we need to provide?', answer: 'Simply record yourself speaking to your smartphone camera in good lighting; our editors handle all cuts, zoom-ins, captions, and b-roll.' },
      { question: 'How quickly can you turn around a batch of Reels?', answer: 'A batch of 5 to 10 Reels is typically edited and delivered within 48 to 72 hours.' },
      { question: 'Do you format the videos for TikTok and YouTube Shorts as well?', answer: 'Yes, our 9:16 exports are universally optimized for Instagram Reels, YouTube Shorts, and TikTok.' },
    ],
  },

  'youtube-video-editing': {
    primaryKeyword: 'YouTube Video Editing Services Bangalore',
    secondaryKeywords: ['long form YouTube video editor', 'YouTube retention editing', 'podcast video editing', 'YouTube vlog editor', 'YouTube chapter markers editing'],
    visualType: 'video',
    whatIs: 'YouTube Video Editing is the specialized post-production of long-form (16:9) content engineered to maximize audience retention graphs, click-through rates, and channel subscriber growth.',
    problem: 'Monotonous camera angles, poor audio balance, and lack of visual variety cause viewers to leave YouTube videos before the first commercial break.',
    solution: 'We edit dynamic, television-grade YouTube videos with engaging intros, seamless b-roll integration, custom lower-third graphics, chapter cards, and audio mastering.',
    capabilities: [
      { title: 'Retention-Optimized Hook Editing', description: 'Crafting 30-second teaser intros that preview the most exciting moments of the video to hook viewers.' },
      { title: 'Multi-Camera & Screen Switch Editing', description: 'Switching dynamically between presenter, screen demo, and guest feeds to maintain visual energy.' },
      { title: 'Branded Lower Thirds & Callouts', description: 'Displaying animated speaker name cards, key concept summaries, and social media handle reminders.' },
      { title: 'Seamless B-Roll & Stock Asset Integration', description: 'Enriching explanations with licensed 4K stock footage, animated diagrams, and UI mockups.' },
    ],
    benefits: [
      { title: 'Higher Average View Duration (AVD)', description: 'Retain viewers past the 50% mark, triggering the YouTube recommendation engine to suggest your video.' },
      { title: 'Professional Broadcast Polish', description: 'Elevate your YouTube channel to the visual standards of the top 1% of content creators in your niche.' },
      { title: 'Save 20+ Hours per Episode', description: 'Free your creators from the tedious grind of video editing so they can focus on researching and filming.' },
    ],
    faqs: [
      { question: 'Do you edit multi-cam video podcasts?', answer: 'Yes, we specialize in multi-camera switching, audio leveling between multiple hosts, and generating short vertical clips from full episodes.' },
      { question: 'How do you handle revisions on long YouTube videos?', answer: 'We use Frame.io, allowing you to click directly on the video timeline and leave time-stamped revision notes.' },
      { question: 'Can you include custom animations showing our software or website?', answer: 'Yes, we animate cursor movements, screen zoom-ins, and UI highlights to make software walkthroughs crystal clear.' },
      { question: 'Do you also design matching thumbnails for the videos?', answer: 'Yes, our graphic team can provide high-contrast, high-CTR YouTube thumbnail options alongside the final video export.' },
    ],
  },

  'promotional-video-editing': {
    primaryKeyword: 'Commercial Promotional Video Editing',
    secondaryKeywords: ['product promo video editor', 'brand commercial video editing', 'social media video ad editing', 'promotional video post production Bangalore', 'kinetic text promo editor'],
    visualType: 'video',
    whatIs: 'Promotional Video Editing is the high-energy cutting of commercial advertisements, festival sales promos, and product launch trailers designed to spur immediate buying action.',
    problem: 'Videos that lack visual momentum, compelling audio risers, and urgent calls to action fail to excite viewers, resulting in poor commercial conversions.',
    solution: 'We construct high-tempo promotional edits with beat-synced cuts, hard-hitting sound design, kinetic typography, and dramatic product reveals.',
    capabilities: [
      { title: 'Beat-Synced Timeline Cutting', description: 'Aligning visual transitions, cuts, and text reveals precisely to the rhythmic beats of licensed soundtracks.' },
      { title: 'Kinetic Typography & Motion Titles', description: 'Animating bold promotional text, discounts, and offer terms that pop on mobile screens.' },
      { title: 'Commercial Audio Risers & Impact SFX', description: 'Layering cinematic whooshes, bass drops, and cymbal swells to build emotional anticipation.' },
      { title: 'Multi-Aspect Ad Deliverables', description: 'Exporting matching master files in 16:9 (YouTube), 9:16 (Stories/Reels), and 1:1 (Feed ads).' },
    ],
    benefits: [
      { title: 'Immediate Consumer Excitement', description: 'High-energy audio and visual pacing generates genuine excitement and impulse purchasing intent.' },
      { title: 'Higher Return on Ad Spend (ROAS)', description: 'Visually arresting video ads capture cheaper attention and drive higher click-through rates.' },
      { title: 'Turnkey Delivery across All Platforms', description: 'One single production provides optimized ad creatives ready for Google, Meta, and LinkedIn.' },
    ],
    faqs: [
      { question: 'What is the ideal length for a promotional video ad?', answer: '15 to 30 seconds for paid social media ads; 60 seconds for dedicated product landing pages and YouTube pre-roll.' },
      { question: 'Can you edit a promotional video using our existing static photos?', answer: 'Yes! Using 2.5D parallax motion, camera pan-and-zoom techniques, and 3D mockup framing, we bring static photos to life.' },
      { question: 'Do you provide professional voiceover matching the edit?', answer: 'Yes, we can cast and synchronize professional voiceover talent in multiple accents and regional languages.' },
      { question: 'How quickly can you deliver an urgent promotional video for a sale?', answer: 'We offer expedited 48-hour turnarounds for time-sensitive retail launches and flash sales.' },
    ],
  },

  'corporate-video-editing': {
    primaryKeyword: 'Corporate Video Editing Services Bangalore',
    secondaryKeywords: ['executive interview editing', 'company profile video editing', 'internal corporate video post production', 'B2B video editor', 'event highlight video editing'],
    visualType: 'video',
    whatIs: 'Corporate Video Editing is the sophisticated post-production of executive interviews, client video testimonials, town hall recaps, and corporate capability presentations.',
    problem: 'Corporate videos that feel sterile, boring, or disjointed fail to engage enterprise stakeholders, prospective clients, or executive recruits.',
    solution: 'We craft elegant, documentary-style corporate films featuring seamless dialogue pacing, b-roll overlays, branded color grading, and subtle orchestral scoring.',
    capabilities: [
      { title: 'Conversational Dialogue Smoothing', description: 'Carefully removing stumbles, verbal tics ("um", "ah"), and awkward pauses to make speakers sound articulate.' },
      { title: 'B-Roll & Facility Footage Weaving', description: 'Layering footage of office collaboration, manufacturing equipment, and customer interactions.' },
      { title: 'Corporate Identity Brand Compliance', description: 'Strictly applying approved corporate fonts, official logo placement, and branded lower-third styling.' },
      { title: 'Confidentiality & Secure Asset Handling', description: 'Handling sensitive internal corporate communications under strict NDAs and encrypted storage.' },
    ],
    benefits: [
      { title: 'Institutional Credibility & Gravitas', description: 'Present a distinguished corporate image that inspires confidence in investors, partners, and enterprise buyers.' },
      { title: 'Flawless Executive Articulation', description: 'Make company leadership and client advocates look polished, confident, and professional on screen.' },
      { title: 'Permanent Enterprise Asset', description: 'High-end corporate films serve your commercial team across sales proposals, exhibitions, and recruitment drives.' },
    ],
    faqs: [
      { question: 'Can you edit footage shot by our own internal team?', answer: 'Yes, we frequently take internal raw recordings, clean up audio, apply color grades, and add professional motion graphics.' },
      { question: 'How do you handle sensitive corporate information in videos?', answer: 'We can blur proprietary documents, computer screens, or employee badges upon request, adhering to strict corporate NDAs.' },
      { question: 'Can you add subtitles in multiple languages?', answer: 'Yes, we generate burned-in open captions or separate `.srt` subtitle files in English and regional Indian languages.' },
      { question: 'What is the typical delivery timeframe for a corporate film edit?', answer: 'Typically 5 to 7 business days for initial review, with dedicated revision cycles completed rapidly.' },
    ],
  },

  'short-form-video-editing': {
    primaryKeyword: 'Short-Form Video Post-Production Agency',
    secondaryKeywords: ['vertical video editing service', 'TikTok Reels Shorts editor Bangalore', 'snappy video post production', 'mobile video editor', 'social media clip editing'],
    visualType: 'video',
    whatIs: 'Short-Form Video Editing is the specialized mobile-first editing craft of turning long webinars, podcasts, or raw phone clips into snappy 30-to-60-second viral clips.',
    problem: 'Attempting to crop horizontal videos into vertical format without proper reframing results in cut-off faces, unreadable text, and low viewer retention.',
    solution: 'We reframe footage dynamically with face-tracking pans, split-screen layouts, animated karaoke captions, and engaging visual hooks.',
    capabilities: [
      { title: 'Dynamic Smart Reframing', description: 'Intelligently tracking speaker faces and gestures to keep them centered inside the vertical 9:16 window.' },
      { title: 'Split-Screen Podcast & Reaction Layouts', description: 'Stacking host and guest cameras vertically with branded dividing lines and subtitles.' },
      { title: 'Contextual Graphic & Meme Cutaways', description: 'Inserting topical visual memes, tweet cards, and screen captures that enhance comedic or educational timing.' },
      { title: 'Multi-Network Master Exports', description: 'Exporting clean, unbranded vertical master files ready for simultaneous posting across all major platforms.' },
    ],
    benefits: [
      { title: '10x Content Output from One Recording', description: 'Extract 10 to 15 high-performing viral video clips from a single 45-minute podcast or client interview.' },
      { title: 'Maximum Mobile Feed Immersion', description: 'Fill 100% of the smartphone screen with dynamic motion, subtitles, and engaging audio cues.' },
      { title: 'Predictable Social Growth Engine', description: 'Consistent daily short-form video publishing accelerates algorithmic discovery and follower growth.' },
    ],
    faqs: [
      { question: 'How do you choose which parts of a long video to clip?', answer: 'Our content editors review your long recording to identify the most profound, surprising, or controversial 30-to-60 second golden nuggets.' },
      { question: 'Can you add our company logo to every short-form clip?', answer: 'Yes, we can include a subtle branded watermark or closing screen with your logo and website URL.' },
      { question: 'What video resolution do you export short-form videos in?', answer: 'We export in crisp 1080x1920 Full HD at high bitrates optimized for mobile upload without compression artifacts.' },
      { question: 'How many clips can you extract from a 1-hour video?', answer: 'Typically 8 to 15 high-value, self-contained short clips that make complete sense without watching the full episode.' },
    ],
  },

  // === CREATIVE PRODUCTION ===
  'advertisement-creatives': {
    primaryKeyword: 'Advertisement Creative Design and Production',
    secondaryKeywords: ['digital ad creatives', 'performance advertising design', 'banner ad design Bangalore', 'social ad creatives', 'high converting ad assets'],
    visualType: 'design',
    whatIs: 'Advertisement Creatives are high-impact, direct-response visual units—incorporating psychological hooks, contrast colors, and commercial proof—engineered to maximize click-through rates across paid advertising networks.',
    problem: 'Tired, generic ad designs suffer from rapid creative fatigue, leading to rising cost-per-click and diminishing return on ad spend.',
    solution: 'We engineer multi-format ad creative suites with iterative weekly visual testing across static carousels, customer review overlays, and bold product feature reveals.',
    capabilities: [
      { title: 'Multi-Aspect Ratio Design (1:1, 9:16, 16:9)', description: 'Exporting pixel-perfect assets tailored specifically to each digital advertising placement.' },
      { title: 'Stopping-Power Visual Hooks', description: 'Deploying bold contrast typography, high-visibility badges, and emotional imagery that stops feed scrolling.' },
      { title: 'Social Proof & Trust Overlays', description: 'Integrating verified 5-star ratings, client review quotes, and trust badges directly into the creative.' },
      { title: 'Weekly Creative Iteration Sprints', description: 'Testing fresh color palettes, layout variations, and messaging angles to combat creative fatigue.' },
    ],
    benefits: [
      { title: 'Lower Cost-Per-Acquisition (CPA)', description: 'Engaging, high-CTR ad designs reduce your blended cost to acquire each paying customer.' },
      { title: 'Immunity to Ad Fatigue', description: 'Consistently deploy fresh creative variations to keep ad performance high and profitable.' },
      { title: 'Turnkey Delivery across All Networks', description: 'Receive matching creative sets ready to upload to Google, Meta, and LinkedIn Ads Managers.' },
    ],
    faqs: [
      { question: 'What sizes are included in an advertisement creative package?', answer: 'We deliver all primary dimensions: 1080x1080 (Square Feed), 1080x1350 (Portrait Feed), 1080x1920 (Vertical Story/Reel), and Google Display standard banners.' },
      { question: 'Do you design both static and animated ad creatives?', answer: 'Yes, our creative team produces both high-resolution static banners and animated MP4/GIF motion creatives.' },
      { question: 'Can you match our brand book guidelines?', answer: 'Yes, we adhere strictly to your corporate colors, official fonts, and brand standards while infusing direct-response persuasion.' },
      { question: 'How quickly can new ad variations be delivered?', answer: 'We typically deliver new ad creative testing batches within 3 to 5 business days.' },
    ],
  },

  'promotional-materials': {
    primaryKeyword: 'Promotional Materials Design and Production Bangalore',
    secondaryKeywords: ['event promotional collateral', 'trade show marketing materials', 'print promotional collateral', 'promotional merchandise design', 'custom marketing materials'],
    visualType: 'design',
    whatIs: 'Promotional Materials Design is the commercial creation of tangible event collateral—flyers, roll-up standees, exhibition backdrops, discount coupons, and branded merchandise.',
    problem: 'Flimsy, poorly designed print materials look cheap and end up discarded, failing to create lasting commercial impact at events and trade expos.',
    solution: 'We design prestigious, high-durability promotional collateral with bold typography, professional color matching, and print-ready vector pre-press specifications.',
    capabilities: [
      { title: 'Exhibition Backdrops & Roll-Up Standees', description: 'Large-scale vertical and horizontal event graphics designed for immediate readability from 20 feet away.' },
      { title: 'Commercial Flyers & Promotional Handouts', description: 'High-energy discount and service promotion leaflets with clear offers and QR code booking links.' },
      { title: 'Branded Corporate Merchandise Styling', description: 'Designing luxury branded apparel, executive notebooks, pens, and promotional gift hampers.' },
      { title: 'Commercial Print Pre-Press Calibration', description: 'Exporting 300+ DPI CMYK PDF vector files with exact bleed lines and color profile embeds.' },
    ],
    benefits: [
      { title: 'Command Attention at Exhibitions & Summits', description: 'Draw massive footfall to your conference booth with vibrant, professional backdrop graphics.' },
      { title: 'Tactile Brand Memorability', description: 'High-quality physical collateral leaves a permanent, tangible impression on prospective corporate partners.' },
      { title: 'Turnkey Commercial Print Readiness', description: 'Send files straight to any commercial printing house with zero pre-press technical complications.' },
    ],
    faqs: [
      { question: 'What dimensions do you design for roll-up standees?', answer: 'Standard exhibition standees are 80cm x 200cm or 85cm x 200cm, designed at 150–300 DPI with safe margin zones.' },
      { question: 'Do you help with physical printing and delivery?', answer: 'Yes, we collaborate with premium commercial printers to deliver finished standees, flyers, and merchandise across Bangalore and PAN-India.' },
      { question: 'Can you include QR codes linking to our website?', answer: 'Yes, we generate dynamic vector QR codes tracking event attendees who scan and visit your landing page.' },
      { question: 'How long does promotional material design take?', answer: 'Standard event collateral suites (standee, flyers, badges) are typically designed and approved within 3 to 5 business days.' },
    ],
  },

  'digital-campaign-assets': {
    primaryKeyword: 'Digital Campaign Creative Production',
    secondaryKeywords: ['multi platform campaign assets', 'digital ad suite production', 'Google display ad sets', 'social campaign asset production Bangalore', 'digital marketing creative package'],
    visualType: 'design',
    whatIs: 'Digital Campaign Assets encompasses the batch production, resizing, and technical formatting of complete visual creative suites across paid ads, email, web, and social feeds.',
    problem: 'Marketing campaigns stall when internal teams lack the bandwidth to resize and reformat master artwork across 20+ required digital ad and social dimensions.',
    solution: 'We engineer turnkey digital campaign asset packages—delivering master designs adapted flawlessly across all required aspect ratios and file specifications.',
    capabilities: [
      { title: 'Full Google Display Network (GDN) Suites', description: 'Producing all IAB standard dimensions (300x250, 728x90, 160x600, 300x600, 320x50, 970x250) under 150KB.' },
      { title: 'Meta & LinkedIn Paid Creative Sets', description: 'Delivering coordinated 1:1 square feeds, 9:16 vertical stories, and 1.91:1 horizontal landscape units.' },
      { title: 'Website Hero & Promotional Web Banners', description: 'Designing matching hero graphics, announcement modals, and promo headers for your digital storefront.' },
      { title: 'Email Newsletter Creative Kits', description: 'Lightweight, responsive promotional graphics tailored for automated email marketing sequences.' },
    ],
    benefits: [
      { title: 'Launch Multi-Channel Campaigns Faster', description: 'Deliver all required creative dimensions simultaneously, eliminating ad launch delays.' },
      { title: 'Consistent Visual Impact Everywhere', description: 'Ensure prospective clients see the exact same compelling visual theme across search, social, and email.' },
      { title: 'Strict Ad Network Technical Compliance', description: 'Zero ad rejections due to file size limits, text ratio guidelines, or incorrect color profiles.' },
    ],
    faqs: [
      { question: 'How many different sizes are typically included in a digital campaign asset package?', answer: 'A standard comprehensive campaign package includes 15 to 25 unique aspect ratios covering Google Display, Meta, LinkedIn, and website banners.' },
      { question: 'How do you keep Google Display ads under the 150KB file limit?', answer: 'We utilize advanced vector asset optimization, lossless image compression, and clean typography layouts.' },
      { question: 'Can you provide editable templates in Figma?', answer: 'Yes, we provide master Figma files with organized components and auto-layout frames for easy future asset generation.' },
      { question: 'How quickly can an ad suite be resized once the master concept is approved?', answer: 'Resizing and exporting across all 20+ dimensions typically takes 2 to 3 business days.' },
    ],
  },

  // === MOTION & VISUALS ===
  'motion-graphics': {
    primaryKeyword: '2D Motion Graphics Animation Services Bangalore',
    secondaryKeywords: ['After Effects motion designer', 'kinetic typography animation', 'animated infographic video', 'vector motion graphics', 'corporate motion design'],
    visualType: 'video',
    whatIs: 'Motion Graphics is the art of animating typography, vector illustrations, geometric shapes, and UI interfaces to communicate complex ideas with dynamic visual energy.',
    problem: 'Static diagrams and dry statistics fail to hold viewer interest, while expensive live-action video shoots can be cost-prohibitive for abstract software concepts.',
    solution: 'We craft fluid, broadcast-grade 2D motion graphics in Adobe After Effects—translating complex data, product mechanics, and brand stories into captivating animations.',
    capabilities: [
      { title: 'Kinetic Typography & Lyric Motion', description: 'Animating bold, expressive type that bends, scales, and transitions in sync with voiceovers or musical beats.' },
      { title: 'Vector Illustration & Icon Animation', description: 'Bringing flat illustrations, UI components, and character motifs to life with natural physics and easing.' },
      { title: 'Data Visualization & Chart Animations', description: 'Transforming boring pie charts and bar graphs into dynamic, self-drawing visual analytics animations.' },
      { title: 'UI Interaction & Product Flow Motion', description: 'Simulating app screens, cursor clicks, and dashboard transitions with fluid micro-interactions.' },
    ],
    benefits: [
      { title: 'Demystify Complex Business Concepts', description: 'Break down complex financial algorithms, SaaS architectures, or supply chains into simple visual metaphors.' },
      { title: 'Infinite Creative Freedom without Live Filming', description: 'No need for camera crews, actors, or studio rentals; anything you can imagine can be animated in motion.' },
      { title: 'Permanent Brand Visual Assets', description: 'High-end motion graphic elements can be repurposed across website backgrounds, video intros, and social ads.' },
    ],
    faqs: [
      { question: 'What software do you use for motion graphics?', answer: 'We primarily animate in Adobe After Effects, paired with Adobe Illustrator for vector artwork, Cinema 4D for 3D elements, and Premiere Pro for final mastering.' },
      { question: 'How long does a 60-second motion graphics video take to produce?', answer: 'Typically 2 to 3 weeks including concept storyboard, style frame approval, voiceover synchronization, animation, and sound design.' },
      { question: 'Can you provide transparent video files (ProRes 4444 / WebM)?', answer: 'Yes, we deliver transparent background video files ready to overlay onto websites or live-action video projects.' },
      { question: 'Do you create original custom illustrations for the animations?', answer: 'Yes, our illustration team creates bespoke vector artwork aligned perfectly with your corporate brand guidelines.' },
    ],
  },

  'animated-posts': {
    primaryKeyword: 'Animated Social Media Post Design',
    secondaryKeywords: ['looping social media GIFs', 'animated Instagram graphics', 'motion social media ads', 'animated banner design Bangalore', 'micro animation social posts'],
    visualType: 'video',
    whatIs: 'Animated Posts are short, looping 5-to-15 second motion graphics (MP4/GIF) that turn static social media graphics into dynamic, thumb-stopping visual experiences.',
    problem: 'Static graphics get overlooked on crowded social feeds, while full video shoots take too much time for daily social media publishing.',
    solution: 'We animate key graphic elements—glowing buttons, floating icons, pulsating discounts, and sliding text reveals—to create eye-catching animated social posts.',
    capabilities: [
      { title: 'Seamless Looping MP4 & GIF Animations', description: 'Designing fluid, seamless loops that repeat hypnotically without awkward jump cuts.' },
      { title: 'Pulsating Offer & Discount Badging', description: 'Adding kinetic micro-movements to sale percentages, countdown badges, and call-to-action buttons.' },
      { title: 'Text Reveal & Typographic Entrances', description: 'Sequencing headline reveals so users watch the full 5 seconds to read the complete thought.' },
      { title: 'Lightweight Mobile File Optimization', description: 'Exporting high-quality MP4 video files optimized for instant playback on mobile data connections.' },
    ],
    benefits: [
      { title: '3x Higher Click & Engagement Rates', description: 'Movement naturally triggers human peripheral vision, stopping users from scrolling past your post.' },
      { title: 'Feed Dominance at Fraction of Video Cost', description: 'Gain all the algorithmic benefits of video content without the high production costs of live video filming.' },
      { title: 'Perfect for Paid Social Ads', description: 'Animated social creatives routinely outperform static image ads in Meta and LinkedIn advertising auctions.' },
    ],
    faqs: [
      { question: 'What file format is best for animated social posts?', answer: 'We deliver MP4 video files (which autoplay with sound on Instagram, Facebook, and LinkedIn) and lightweight looping GIFs for email newsletters.' },
      { question: 'How long are animated posts typically?', answer: 'They typically range from 5 to 15 seconds, structured as seamless loops.' },
      { question: 'Can you animate our existing static social media graphics?', answer: 'Yes! Send us your static Photoshop or Figma files, and our motion designers will layer in professional animations.' },
      { question: 'Do animated posts include sound effects or music?', answer: 'Yes, we include optional subtle sound design and commercial-cleared background audio tracks.' },
    ],
  },

  'logo-animation': {
    primaryKeyword: 'Custom Logo Animation and Video Stings',
    secondaryKeywords: ['animated brand reveal', 'YouTube video intro logo animation', 'motion logo design Bangalore', 'transparent logo animation', 'corporate logo sting'],
    visualType: 'brand',
    whatIs: 'Logo Animation is the cinematic, dynamic reveal of your corporate emblem—incorporating fluid motion, 3D depth, particle effects, and custom sound design (audio logo).',
    problem: 'A static logo slapped onto the beginning or end of a video looks amateurish, missing a prime opportunity to cement your brand identity in the viewer’s mind.',
    solution: 'We craft bespoke 3-to-6 second logo reveals tailored to your brand personality—sleek minimalist line draws, dynamic kinetic bursts, or luxurious 3D reveals.',
    capabilities: [
      { title: 'Brand-Aligned Motion Metaphors', description: 'Designing movement that reflects your core values: technological precision, organic growth, or luxury elegance.' },
      { title: 'Bespoke Audio Branding (Audio Logo / Sonic Branding)', description: 'Pairing visual motion with memorable sound design—whooshes, chimes, and signature audio tones.' },
      { title: 'Transparent Alpha Channel Exports', description: 'Delivering ProRes 4444 and WebM files with transparent backgrounds to drop onto any video background seamlessly.' },
      { title: 'Intro & Outro Sting Packages', description: 'Providing both a dynamic opening reveal and a concluding call-to-action outro sting with website and socials.' },
    ],
    benefits: [
      { title: 'Instant Cinema-Grade Polish', description: 'Give every company video, presentation, and webinar a prestigious, cohesive television-network feel.' },
      { title: 'Unforgettable Sonic & Visual Brand Recall', description: 'Pairing movement with signature sound creates a memorable neural imprint in prospective buyers’ minds.' },
      { title: 'Permanent Brand Asset', description: 'A single custom logo animation serves your company across all future video productions for years to come.' },
    ],
    faqs: [
      { question: 'How long should a logo animation be?', answer: '3 to 5 seconds is optimal—long enough to build visual delight, yet short enough not to bore viewers waiting for the main video content.' },
      { question: 'What file formats will we receive?', answer: 'You receive 4K MP4 (with black/white backdrops), transparent MOV (ProRes 4444 with alpha channel), transparent WebM (for web code), and looping GIF.' },
      { question: 'Do we need to provide a vector logo file?', answer: 'Yes, we need your master vector logo file in Adobe Illustrator (.AI), .EPS, or .SVG format to animate individual geometric components.' },
      { question: 'Can the logo animation be used on our website?', answer: 'Yes, we can provide Lottie JSON or WebM animations that render lightweight, interactive vector motion directly on your website.' },
    ],
  },

  'promotional-animations': {
    primaryKeyword: 'Promotional Product Animation Services',
    secondaryKeywords: ['3D product animation', 'animated product launch video', 'promotional 2D animation Bangalore', 'feature reveal animation', 'commercial product motion graphics'],
    visualType: 'video',
    whatIs: 'Promotional Animation is the dynamic visual demonstration of physical product mechanics, SaaS software features, or service workflows using 2D and 3D animation.',
    problem: 'Filming physical product prototypes or complex digital workflows is difficult and often fails to capture the internal magic of how a solution works.',
    solution: 'We create photorealistic 3D product animations and dynamic 2D feature reveals that illustrate internal mechanics, exploded component views, and software workflows.',
    capabilities: [
      { title: '3D CAD & Component Animation', description: 'Importing CAD models to showcase physical product architecture, materials, and internal mechanical assembly.' },
      { title: 'SaaS Feature Walkthrough Animation', description: 'Animating abstract software benefits—cloud data flows, security shields, and real-time dashboard analytics.' },
      { title: 'Dynamic Lighting & Material Texturing', description: 'Rendering realistic metallic, matte, glass, and carbon-fiber textures with cinematic studio lighting.' },
      { title: 'Exploded View & X-Ray Renderings', description: 'Visually disassembling products in mid-air to showcase premium engineering and component quality.' },
    ],
    benefits: [
      { title: 'Showcase Products Before Manufacturing', description: 'Create photorealistic product promo videos from CAD files to secure pre-orders before physical tooling.' },
      { title: 'Visualize the Invisible', description: 'Demonstrate abstract concepts like encryption, speed, and cloud synchronization that camera lenses cannot capture.' },
      { title: 'Uncompromising Futuristic Polish', description: 'Position your product alongside Apple and Tesla with sleek, hyper-detailed 3D animation.' },
    ],
    faqs: [
      { question: 'Can you work directly from 3D CAD or STEP files?', answer: 'Yes, we import standard industrial design formats (STEP, IGES, OBJ, FBX) directly into our 3D animation pipeline.' },
      { question: 'What if we don’t have a 3D model of our product?', answer: 'Our 3D modeling artists can build a photorealistic 3D digital twin of your product using reference photos and dimensional drawings.' },
      { question: 'How long does a 3D promotional animation project take?', answer: 'Typically 3 to 4 weeks depending on the complexity of CAD detailing, texturing, animation choreography, and rendering.' },
      { question: 'Can the 3D renders be exported as static images for print packaging?', answer: 'Yes, we can export ultra-high-resolution 8K static renders for billboard printing, packaging, and website hero banners.' },
    ],
  },

  'video-effects': {
    primaryKeyword: 'Visual Effects (VFX) and Video Compositing',
    secondaryKeywords: ['VFX post production Bangalore', 'green screen keying services', 'screen replacement VFX', 'video cleanup and object removal', 'motion tracking VFX'],
    visualType: 'video',
    whatIs: 'Visual Effects (VFX) encompasses professional digital compositing—including green screen removal, computer screen replacements, object cleanup, and particle effects.',
    problem: 'Visible cables, reflections, glare on computer monitors, or unwanted background clutter ruin high-value video shoots and make commercial footage look amateurish.',
    solution: 'We execute pixel-perfect digital clean-up in After Effects—replacing dark screens with crisp UI interfaces, removing background blemishes, and seamlessly keying greenscreens.',
    capabilities: [
      { title: 'Monitor & Smartphone Screen Replacement', description: 'Planar tracking computer, laptop, and phone screens to insert crisp, glare-free digital app interfaces.' },
      { title: 'Chroma Key (Green Screen) Compositing', description: 'Precision edge extraction, hair detail preservation, and realistic light wrap for natural background integration.' },
      { title: 'Object Removal & Wire Clean-Up', description: 'Digitally painting out unwanted logos, microphone booms, wires, and background bystanders.' },
      { title: 'Particle Systems & Atmospheric Effects', description: 'Adding cinematic dust motes, light leaks, smoke, sparks, and atmospheric lens flares.' },
    ],
    benefits: [
      { title: 'Salvage Problematic Video Shoots', description: 'Fix technical lighting errors, reflections, or continuity mistakes in post-production without expensive reshoots.' },
      { title: 'Flawless Digital Product Demos', description: 'Display your software interface cleanly on physical laptop and phone screens without moiré camera artifacts.' },
      { title: 'Seamless Visual Illusion', description: 'Invisible visual effects enhance production value without distracting the viewer from your core message.' },
    ],
    faqs: [
      { question: 'What is screen replacement in video editing?', answer: 'When actors use laptops or phones on camera, screens often display glare or reflections. We track the screen corners in 3D and composite clean, high-res UI interfaces.' },
      { question: 'How do you handle green screen spill on actors’ hair and clothes?', answer: 'We use advanced despill algorithms and light-wrap compositing to blend subjects naturally into their new digital environments.' },
      { question: 'Can you remove an unwanted object or person from our footage?', answer: 'Yes, using digital rotoscoping and content-aware fill techniques, we can remove static or moving unwanted objects from video frames.' },
      { question: 'What video formats do you need for VFX work?', answer: 'We work with high-bitrate camera files: ProRes 422/4444, DNxHR, or 10-bit H.264/H.265 master footage.' },
    ],
  },

  // === THUMBNAIL & VISUAL EDITING ===
  'youtube-thumbnails': {
    primaryKeyword: 'YouTube Thumbnail Design and A/B Testing',
    secondaryKeywords: ['custom YouTube thumbnail agency', 'high CTR YouTube thumbnail Bangalore', 'clickable YouTube thumbnails', 'viral video thumbnail design', 'YouTube graphics production'],
    visualType: 'video',
    whatIs: 'YouTube Thumbnail Design is the specialized direct-response craft of creating high-contrast 1280x720 visual billboards engineered to maximize video click-through rates (CTR).',
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

  'social-media-covers': {
    primaryKeyword: 'Social Media Cover and Banner Design',
    secondaryKeywords: ['LinkedIn company banner design', 'Facebook cover photo design', 'YouTube channel banner Bangalore', 'Twitter X header design', 'corporate profile header graphics'],
    visualType: 'design',
    whatIs: 'Social Media Cover Design is the creation of high-impact header banners across LinkedIn, Facebook, YouTube, and Twitter/X that communicate your corporate value proposition in 3 seconds.',
    problem: 'Stretched photos, cut-off text on mobile screens, and outdated banners make companies look neglected and amateur to visiting prospective clients.',
    solution: 'We design responsive header banners engineered with strict mobile and desktop safe zones, clear value propositions, client proof badges, and direct calls to action.',
    capabilities: [
      { title: 'Multi-Device Responsive Safe Zones', description: 'Ensuring critical headlines and logos sit in the universal safe area visible on both mobile smartphones and desktop monitors.' },
      { title: 'Compelling Value Proposition Typography', description: 'Articulating what your company does and who you serve in a bold, readable headline.' },
      { title: 'Trust Proof & Client Credibility Badges', description: 'Displaying 5-star rating icons, ISO certification badges, and prominent client logos.' },
      { title: 'Channel-Specific Coordinate Layouts', description: 'Formatting exact dimensions for LinkedIn (1584x396), Facebook (820x312), YouTube (2560x1440), and Twitter (1500x500).' },
    ],
    benefits: [
      { title: 'Immediate Billboard Clarity', description: 'Turn your profile banner into a 24/7 digital billboard that converts profile visitors into leads.' },
      { title: 'Zero Awkward Mobile Crop Complications', description: 'Eliminate cut-off text and obscured logos when users browse from smartphones.' },
      { title: 'Unified Omnichannel Branding', description: 'Maintain consistent visual polish across all major corporate social networks.' },
    ],
    faqs: [
      { question: 'Why do Facebook and LinkedIn banners look different on mobile vs desktop?', answer: 'Both platforms crop the sides and change vertical heights depending on device screen sizes; our safe zone engineering ensures key text is never cut off.' },
      { question: 'Can the banner include a call-to-action button?', answer: 'Yes! We design visual button indicators pointing toward the platform’s native "Contact Us" or "Follow" buttons.' },
      { question: 'Can you design banners for our executive leadership team?', answer: 'Yes, we create unified corporate banner suites tailored for founders, sales directors, and leadership profiles.' },
      { question: 'How often should a company update its social media covers?', answer: 'We recommend updating covers quarterly or during major product releases, awards, or seasonal marketing campaigns.' },
    ],
  },

  'image-editing': {
    primaryKeyword: 'Professional Image Editing and Retouching Services',
    secondaryKeywords: ['commercial photo retouching Bangalore', 'background removal services', 'skin retouching Photoshop', 'color correction photo editor', 'corporate headshot retouching'],
    visualType: 'design',
    whatIs: 'Image Editing is the high-precision digital enhancement of photography—encompassing skin retouching, background removal, exposure correction, color grading, and compositing.',
    problem: 'Harsh shadows, distracting background clutter, skin blemishes, and dull colors make corporate headshots and marketing photos look unpolished.',
    solution: 'Our Photoshop specialists execute non-destructive retouching—smoothing skin tones naturally, removing unwanted objects, balancing exposure, and grading colors.',
    capabilities: [
      { title: 'High-End Natural Skin & Portrait Retouching', description: 'Frequency separation techniques that smooth skin tones while preserving natural skin pores and texture.' },
      { title: 'Precision Background Removal & Clipping Paths', description: 'Hand-drawn pen tool paths extracting subjects with flyaway hair detail intact.' },
      { title: 'Color Correction & Exposure Balancing', description: 'Correcting yellow indoor lighting casts, boosting dynamic range, and calibrating true-to-life tones.' },
      { title: 'Object Removal & Clean-Up', description: 'Digitally erasing distracting reflections, background tourists, exit signs, and wall scuffs.' },
    ],
    benefits: [
      { title: 'Prestigious Magazine-Quality Polish', description: 'Elevate your team headshots, office photography, and event pictures to luxury editorial standards.' },
      { title: 'Natural Results with Zero "Fake" Look', description: 'Expert retouching enhances natural beauty without plastic, over-smoothed artificial effects.' },
      { title: 'Fast High-Volume Turnarounds', description: 'Batch process hundreds of corporate event photos or catalog images with consistent quality.' },
    ],
    faqs: [
      { question: 'Can you retouch corporate headshots for our entire company team?', answer: 'Yes, we retouch executive headshots in batches, ensuring uniform lighting, background tone, and professional skin polish across all employees.' },
      { question: 'What file formats can you work with?', answer: 'We prefer camera RAW formats (CR3, NEF, ARW) for maximum dynamic range, but can work with high-resolution TIFF, PSD, and JPEG files.' },
      { question: 'Do you deliver transparent PNG cutouts of subjects?', answer: 'Yes, we provide clean transparent PNG cutouts ready to place onto any background or website layout.' },
      { question: 'What is your turnaround time for a batch of 20 photos?', answer: 'Typically 2 to 3 business days for professional retouching and color calibration.' },
    ],
  },

  'product-image-editing': {
    primaryKeyword: 'E-Commerce Product Image Editing Services',
    secondaryKeywords: ['Amazon product photo editing', 'white background product clipping Bangalore', 'ghost mannequin photo editing', 'drop shadow reflection product photos', 'Shopify product image retouching'],
    visualType: 'design',
    whatIs: 'Product Image Editing is the precision commercial retouching of merchandise photos—pure white background clipping, ghost mannequin apparel assembly, drop shadows, and reflection rendering.',
    problem: 'Dust specks, color discrepancies, wrinkled fabrics, and gray backgrounds violate Amazon/Shopify marketplace standards and cause high customer product returns.',
    solution: 'We transform raw product shots into flawless e-commerce catalog photos with pure #FFFFFF backgrounds, realistic soft drop shadows, and color-accurate finishes.',
    capabilities: [
      { title: 'Pure White (RGB 255,255,255) Background Clipping', description: 'Hand-drawn pen tool paths isolating products for 100% marketplace compliance.' },
      { title: 'Ghost Mannequin & Neck Joint Assembly', description: 'Seamlessly compositing front and back clothing shots to create realistic 3D hollow-body apparel photos.' },
      { title: 'Natural Drop Shadows & Mirror Reflections', description: 'Generating realistic grounded shadows that make products feel tangible and three-dimensional.' },
      { title: 'Fabric De-Wrinkling & Blemish Removal', description: 'Smoothing fabric creases, removing manufacturing dust, and polishing metal/glass reflections.' },
    ],
    benefits: [
      { title: 'Immediate Marketplace Compliance', description: 'Meet 100% of Amazon, Flipkart, Myntra, and Google Shopping pure-white background photo requirements.' },
      { title: 'Higher Online Purchase Conversion', description: 'Crisp, color-accurate product photos build shopper trust and dramatically reduce checkout abandonment.' },
      { title: 'Reduced Product Return Rates', description: 'Color-calibrated images ensure customers receive the exact shade and texture they saw on screen.' },
    ],
    faqs: [
      { question: 'Why does Amazon require pure white backgrounds?', answer: 'Amazon requires RGB 255,255,255 on primary listing images to ensure visual consistency and mobile browsing clarity across the platform.' },
      { question: 'What is ghost mannequin photo editing?', answer: 'Ghost mannequin (or invisible mannequin) editing combines photos taken of clothes on a plastic mannequin with separate interior collar photos to show depth without the plastic dummy visible.' },
      { question: 'Can you handle high-volume monthly catalogs with 500+ SKUs?', answer: 'Yes, our production studio processes hundreds of product images daily with strict quality assurance checkpoints.' },
      { question: 'Do you color-match multiple variants from one base photo?', answer: 'Yes, we can perform color recoloring, turning one base photo into 10 accurate color variations without photographing each item.' },
    ],
  },

  'promotional-visuals': {
    primaryKeyword: 'Promotional Visuals and Graphic Merchandising',
    secondaryKeywords: ['promotional marketing graphics', 'e-commerce sales banners', 'digital product merchandising Bangalore', 'hero promotional composites', 'discount sale artwork'],
    visualType: 'design',
    whatIs: 'Promotional Visuals is the composite design of high-converting product collages, lifestyle mockups, sales badges, and digital merchandising graphics for retail and e-commerce.',
    problem: 'Plain product cutouts without lifestyle context or clear offer messaging fail to inspire emotional desire during promotional shopping events.',
    solution: 'We construct beautiful composite visuals—placing products in realistic luxury environments, layering discount badges, and highlighting core value propositions.',
    capabilities: [
      { title: 'Realistic Lifestyle Background Compositing', description: 'Placing standalone product cutouts into beautiful, realistic architectural interiors or nature settings.' },
      { title: 'Promotional Offer Badging & Typography', description: 'Designing eye-catching "Buy 1 Get 1", "Festival Sale", and "Limited Edition" visual badges.' },
      { title: 'Multi-Product Bundle & Kit Showcases', description: 'Compositing multiple individual products into cohesive, visually balanced promotional gift sets.' },
      { title: 'Feature Callout & Annotation Graphics', description: 'Adding subtle pointer lines and floating benefit bubbles highlighting premium materials and specs.' },
    ],
    benefits: [
      { title: 'Premium Emotional Desire', description: 'Help shoppers visualize your products inside aspirational lifestyle spaces, justifying premium pricing.' },
      { title: 'Double Festive Campaign Sales', description: 'Vibrant, high-energy promotional composites generate urgency and excitement during shopping holidays.' },
      { title: 'No Costly Location Photo Shoots', description: 'Place your products in Paris, a luxury penthouse, or a tropical beach using advanced photo compositing.' },
    ],
    faqs: [
      { question: 'How do you make composite product photos look realistic?', answer: 'We meticulously match lighting angles, color temperatures, ground shadows, and perspective focal lengths between the product and the background.' },
      { question: 'Can you design promotional visuals for website carousel banners?', answer: 'Yes, we create multi-slide promotional hero carousels with matching typography and clear "Shop Now" buttons.' },
      { question: 'Do you provide the lifestyle stock backgrounds?', answer: 'Yes, we license premium commercial stock photography and generate custom 3D interior backdrops.' },
      { question: 'How quickly can you create promotional visuals for an upcoming sale?', answer: 'Standard delivery is 3 to 5 business days for a complete suite of promotional visuals.' },
    ],
  },

  // === MEDIA MANAGEMENT ===
  'content-production': {
    primaryKeyword: 'End-to-End Content Production Services Bangalore',
    secondaryKeywords: ['multimedia production agency', 'commercial content studio', 'creative asset production', 'batch content production', 'digital media production company'],
    visualType: 'video',
    whatIs: 'Content Production is the comprehensive orchestration of creative media—including shoot planning, creative direction, studio management, and multi-format asset creation.',
    problem: 'Fragmented production with different photographers, videographers, and copywriters leads to mismatched branding, missed deadlines, and runaway budgets.',
    solution: 'Review Growth Partners serves as your turnkey production powerhouse—managing scripting, talent casting, studio filming, and multi-platform digital delivery under one roof.',
    capabilities: [
      { title: 'Turnkey Creative Direction & Storyboards', description: 'Developing cohesive visual treatments, mood boards, script shot lists, and production schedules.' },
      { title: 'Studio & On-Location Film Production', description: 'Full cinema camera packages, lighting rigs, audio technicians, and art department coordination.' },
      { title: 'Batch Content Shoot Days', description: 'Filming 30 to 60 days of video, photo, and interview content in one focused, efficient studio day.' },
      { title: 'Integrated Post-Production Pipeline', description: 'Seamless handoff from filming crew to our in-house video editors, colorists, and motion graphic designers.' },
    ],
    benefits: [
      { title: '100% Brand Visual Cohesion', description: 'Ensure your photography, videos, and graphic design share a unified artistic vision and aesthetic standards.' },
      { title: 'Save Months of Fragmented Vendor Management', description: 'Work with one dedicated production director rather than coordinating 5 separate freelance vendors.' },
      { title: 'Cost-Effective Batch Production', description: 'Capture months of marketing collateral in single shoot days, dramatically reducing cost-per-asset.' },
    ],
    faqs: [
      { question: 'Where does filming take place?', answer: 'We film at our studio in Bangalore, on-location at your corporate offices or factories, or across rented commercial locations.' },
      { question: 'Do you provide on-camera actors and voiceover talent?', answer: 'Yes, we manage casting calls, audition reels, and talent contracts for professional on-camera actors and models.' },
      { question: 'What does a "batch content day" look like?', answer: 'A structured 6 to 8-hour shoot day where we film executive soundbites, b-roll, product clips, and team photos according to a detailed minute-by-minute shot list.' },
      { question: 'How far in advance should we book a production shoot?', answer: 'We recommend booking 2 to 3 weeks in advance to allow for script sign-off, location scouting, and equipment prep.' },
    ],
  },

  'content-scheduling': {
    primaryKeyword: 'Content Scheduling and Publishing Operations',
    secondaryKeywords: ['social media scheduling agency', 'automated post publishing', 'Buffer Hootsuite management Bangalore', 'cross platform scheduling', 'editorial timing optimization'],
    visualType: 'marketing',
    whatIs: 'Content Scheduling is the disciplined operational execution of uploading, tagging, and scheduling pre-approved marketing content across all digital channels at peak engagement hours.',
    problem: 'Manual daily posting leads to human errors, missed deadlines, broken links, and erratic timing that suppresses social media algorithmic reach.',
    solution: 'We configure centralized publishing software, schedule all assets 10 days in advance, verify link tracking, and optimize publishing times by audience time zones.',
    capabilities: [
      { title: 'Centralized Enterprise Scheduling Software', description: 'Managing multi-channel publishing via Buffer, Hootsuite, Sprout Social, or Meta Business Suite.' },
      { title: 'Audience Peak Activity Time Optimization', description: 'Analyzing follower activity heatmaps to publish at the exact minutes your audience is actively online.' },
      { title: 'First-Comment & Link Tracking Formatting', description: 'Posting clean captions with links in designated first comments and adding UTM campaign parameters.' },
      { title: 'Emergency Pause & Rescheduling Protocols', description: 'Instantly pausing scheduled posts during national news events or corporate PR milestones.' },
    ],
    benefits: [
      { title: 'Flawless 365-Day Publishing Reliability', description: 'Never miss a posting date again; maintain an active, reputable brand presence around the clock.' },
      { title: 'Zero Daily Distractions for Your Team', description: 'Free your internal marketing staff from remembering to post every day at 11 AM and 6 PM.' },
      { title: 'Accurate Campaign Link Tracking', description: 'Every single scheduled link features standardized UTM parameters for granular Google Analytics tracking.' },
    ],
    faqs: [
      { question: 'Which platforms do you schedule content for?', answer: 'We schedule across Instagram, LinkedIn (Company and Personal profiles), Facebook, YouTube, X (Twitter), and Pinterest.' },
      { question: 'How do you handle time-sensitive spontaneous posts?', answer: 'Our client slack/WhatsApp channels allow you to request rapid ad-hoc posts or schedule breaking announcements on demand.' },
      { question: 'Do we still have access to our accounts?', answer: 'Yes, you retain full master ownership of all social media credentials and can review upcoming scheduled posts anytime.' },
      { question: 'Can you schedule posts for multiple global time zones?', answer: 'Yes, we optimize publishing times for North America, Europe, Middle East, and Asia-Pacific audiences.' },
    ],
  },

  'social-media-publishing': {
    primaryKeyword: 'Social Media Publishing and Community Launch',
    secondaryKeywords: ['social media distribution services', 'omnichannel post publishing', 'live social media deployment Bangalore', 'community engagement launch', 'social content broadcasting'],
    visualType: 'marketing',
    whatIs: 'Social Media Publishing is the active, live deployment of creative assets across social networks—including real-time caption formatting, story sticker placement, and initial engagement sparking.',
    problem: 'Simply scheduling posts and walking away misses the critical 30-minute post-launch algorithmic window where early engagement determines viral reach.',
    solution: 'Our active publishing specialists oversee live post deployments—testing links, adding native platform stickers, and actively seeding initial discussion prompts.',
    capabilities: [
      { title: 'Native Platform Optimization at Launch', description: 'Adding native audio tags, location check-ins, collaborator tags, and interactive stickers in the app.' },
      { title: 'Initial Engagement Sparking', description: 'Posting discussion-starting comments and pinning key resources in the top comment within 2 minutes of going live.' },
      { title: 'Post-Launch Link & Display Verification', description: 'Verifying image resolution, text wrap, and bio links on live mobile devices immediately upon release.' },
      { title: 'Cross-Network Story Amplification', description: 'Immediately sharing new feed posts into Stories with teaser stickers to drive immediate traffic.' },
    ],
    benefits: [
      { title: 'Maximize the Critical 30-Minute Window', description: 'Triggering early engagement signals tells platform algorithms your post is popular, multiplying its distribution.' },
      { title: 'Zero Broken Link Embarrassment', description: 'Live human verification ensures every link in bio and button URL works flawlessly from minute one.' },
      { title: 'Interactive Platform Native Features', description: 'Leverage native polls, quizzes, and countdown stickers that scheduling APIs cannot trigger automatically.' },
    ],
    faqs: [
      { question: 'What is the difference between content scheduling and active publishing?', answer: 'Scheduling uses third-party automated tools; active publishing involves an actual specialist manually logging in to utilize native platform features like music tags, collaboration invites, and interactive stickers.' },
      { question: 'Do you publish posts on weekends and holidays?', answer: 'Yes, our media operations team operates 365 days a year to ensure continuous brand engagement.' },
      { question: 'Can you use the "Invite Collaborator" feature on Instagram?', answer: 'Yes, we send collaboration invites so the post co-publishes to partner profiles and founder personal accounts.' },
      { question: 'How do you handle confidential login credentials?', answer: 'We utilize enterprise credential vaults (LastPass/1Password) and native team access tools (Meta Business Suite, LinkedIn Page Roles) without sharing raw passwords.' },
    ],
  },

  'digital-asset-management': {
    primaryKeyword: 'Digital Asset Management (DAM) Services Bangalore',
    secondaryKeywords: ['corporate media library organization', 'cloud asset management', 'brand asset repository', 'creative file cataloging', 'digital asset taxonomy'],
    visualType: 'cloud',
    whatIs: 'Digital Asset Management (DAM) is the architectural organization, cloud indexing, and metadata tagging of your company’s logos, photography, video b-roll, and source design files.',
    problem: 'Teams waste hundreds of hours searching through messy Google Drives, lost Dropbox folders, and old hard drives trying to find high-resolution logos and master project files.',
    solution: 'We clean, organize, tag, and structure a centralized cloud DAM repository with standardized naming conventions, access permissions, and instant search tagging.',
    capabilities: [
      { title: 'Logical File Taxonomy & Naming Conventions', description: 'Establishing consistent folders (e.g. `YYYY-MM_Project_Format_v01`) so files are found in 5 seconds.' },
      { title: 'Metadata Tagging & Search Indexing', description: 'Tagging photos and videos by campaign, project name, year, resolution, and usage rights.' },
      { title: 'Brand Asset Portal Setup', description: 'Creating a clean, client-facing brand portal where partners and press can download approved logos and headshots.' },
      { title: 'Version Control & Archive Redundancy', description: 'Archiving master source files safely on cloud cold storage with automated daily backups.' },
    ],
    benefits: [
      { title: 'Save 10+ Hours per Employee Monthly', description: 'Eliminate internal frustration and endless Slack messages asking "where is the high-res logo file?"' },
      { title: 'Prevent Accidental Brand Misuse', description: 'Ensure external partners, printers, and employees only access current, approved brand assets.' },
      { title: 'Secure Enterprise Disaster Recovery', description: 'Cloud backups protect irreplaceable video footage, raw photos, and proprietary vector source files.' },
    ],
    faqs: [
      { question: 'What platforms do you set up for Digital Asset Management?', answer: 'We configure and organize Google Workspace Shared Drives, Dropbox Business, Brandfolder, Bynder, or custom AWS S3 cloud storage.' },
      { question: 'Can we control access permissions for different departments?', answer: 'Yes, we configure granular role-based permissions so sales reps only see final PDFs, while creative teams access master vector files.' },
      { question: 'Can you clean up our existing messy Google Drive?', answer: 'Yes, our data team audits, renames, deduplicates, and organizes your existing chaotic cloud folders into a pristine library.' },
      { question: 'How long does a digital asset management setup take?', answer: 'Standard DAM library organization takes 1 to 2 weeks depending on total gigabytes and historical file volume.' },
    ],
  },

  'campaign-asset-management': {
    primaryKeyword: 'Campaign Asset Management and Archiving',
    secondaryKeywords: ['marketing asset tracking', 'creative campaign governance', 'ad creative archiving Bangalore', 'campaign performance tagging', 'marketing collateral repository'],
    visualType: 'cloud',
    whatIs: 'Campaign Asset Management is the structured governance, versioning, performance tagging, and post-campaign archiving of all creatives generated for specific marketing blitzes.',
    problem: 'After major campaigns conclude, creative files get scattered, making it impossible to audit past performance, reuse winning creatives, or maintain historical records.',
    solution: 'We catalog every campaign creative with performance metadata (CTR, ROAS, spend), source files, and final renders in an organized, searchable retrospective library.',
    capabilities: [
      { title: 'Campaign Master File Archiving', description: 'Packaging all Figma source files, video timelines, audio stems, and high-res exports into permanent project folders.' },
      { title: 'Performance Metadata Annotation', description: 'Tagging creatives with winning metrics so future marketing teams know which visual hooks converted best.' },
      { title: 'Rights Clearance & Expiration Tracking', description: 'Logging model releases, actor contracts, and stock licensing expiration dates to avoid copyright disputes.' },
      { title: 'Rapid Re-Deployment Templates', description: 'Saving top-performing ad frameworks as modular templates ready for instant re-activation in future quarters.' },
    ],
    benefits: [
      { title: 'Institutional Marketing Memory', description: 'Never lose track of what creative angles worked best in past campaigns, preventing repeat mistakes.' },
      { title: 'Rapid Seasonal Re-Launches', description: 'Re-activate winning festival or quarterly campaigns in hours by pulling pre-packaged past master assets.' },
      { title: 'Total Legal & Copyright Compliance', description: 'Clear tracking of model contracts and stock licenses protects your business from intellectual property claims.' },
    ],
    faqs: [
      { question: 'Why is campaign asset management important for scaling businesses?', answer: 'As creative production scales to hundreds of ads per quarter, organized archiving allows you to duplicate winning ad structures and save tens of thousands in creative fees.' },
      { question: 'How do you link asset files to campaign performance?', answer: 'We tag files with campaign IDs, final ROAS, and conversion metrics in an accompanying Airtable or Notion database.' },
      { question: 'Do you package master editable source files?', answer: 'Yes, we bundle full Adobe After Effects, Premiere, Illustrator, and Figma source projects with fonts and linked assets.' },
      { question: 'Can this library be accessed by external advertising agencies?', answer: 'Yes, we provide secure, authenticated access links for external media buying and marketing partners.' },
    ],
  },
};
