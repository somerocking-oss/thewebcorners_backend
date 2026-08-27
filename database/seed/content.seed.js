const connectDB = require("../../config/db");

const Service = require("../models/Service");
const PortfolioItem = require("../models/PortfolioItem");
const CaseStudy = require("../models/CaseStudy");
const Testimonial = require("../models/Testimonial");
const TrustedLogo = require("../models/TrustedLogo");
const Stat = require("../models/Stat");
const Industry = require("../models/Industry");
const WhyChooseUsItem = require("../models/WhyChooseUsItem");
const AiFeature = require("../models/AiFeature");
const ProcessStep = require("../models/ProcessStep");
const TechStackItem = require("../models/TechStackItem");
const Faq = require("../models/Faq");
const SiteSetting = require("../models/SiteSetting");
const BlogPost = require("../models/BlogPost");
const FeaturedSolution = require("../models/FeaturedSolution");

const services = [
  {
    slug: "software-development",
    name: "Custom Software Development",
    order: 1,
    seoTitle: "Custom Software Development Company | The Webcorners",
    metaDescription:
      "The Webcorners is a custom software development company building scalable, secure applications for startups, SMEs, and enterprises. Get a free consultation today.",
    h1: "Custom Software Development Company",
    intro:
      "We design and engineer bespoke software that fits your exact workflows — not the other way around. From internal tools to customer-facing platforms, our team builds systems engineered for scale, security, and long-term maintainability.",
    sections: [
      {
        heading: "Why Choose The Webcorners for Custom Software",
        body: "Off-the-shelf tools force your business to adapt to their limitations. We build software around your actual processes, integrating with your existing systems and scaling as your business grows.",
      },
      {
        heading: "Our Custom Software Development Process",
        body: "Every engagement starts with a discovery sprint to map requirements, followed by iterative design and development sprints with weekly demos, automated testing, and a clear path to production.",
      },
      {
        heading: "Industries We Build For",
        body: "We've delivered custom software for manufacturing operations, healthcare providers, educational institutions, and exhibition organizers — each with its own compliance and workflow requirements.",
      },
    ],
    features: [
      "Requirement discovery & technical architecture",
      "Full-stack web and backend engineering",
      "Legacy system modernization",
      "Third-party API and system integrations",
      "Automated testing & CI/CD pipelines",
      "Post-launch support and SLA-backed maintenance",
    ],
    faqs: [
      {
        question: "How is custom software different from off-the-shelf tools?",
        answer:
          "Custom software is built around your specific workflows and data model, eliminating the workarounds and licensing limitations that come with generic SaaS tools.",
      },
      {
        question: "How long does a custom software project take?",
        answer:
          "Most projects range from 8-16 weeks depending on scope, with an MVP typically deliverable in 6-10 weeks.",
      },
      {
        question: "Do you provide source code ownership?",
        answer: "Yes. You retain full ownership of the source code and intellectual property for everything we build.",
      },
    ],
    ctaTitle: "Have a Custom Software Idea?",
    ctaDescription: "Talk to our engineering team and get a free technical scoping session.",
  },
  {
    slug: "website-development",
    name: "Website Development",
    order: 2,
    seoTitle: "Website Development Company | The Webcorners",
    metaDescription:
      "Premium website development services — fast, SEO-optimized, conversion-focused websites built on Next.js. Get a free consultation from The Webcorners.",
    h1: "Website Development Company",
    intro:
      "We build high-performance, SEO-ready websites that convert visitors into leads. From corporate sites to complex web applications, every build is optimized for Core Web Vitals and search visibility from day one.",
    sections: [
      {
        heading: "Built for Speed and SEO",
        body: "Using Next.js Server Components and static generation, we deliver websites that load instantly and rank well — because performance is a ranking factor, not an afterthought.",
      },
      {
        heading: "Conversion-First Design",
        body: "Every page is designed with a clear conversion goal, backed by UX research and tested CTAs that turn traffic into qualified leads.",
      },
      {
        heading: "Ongoing Website Care",
        body: "Post-launch, we monitor uptime, Core Web Vitals, and security — so your website keeps performing long after go-live.",
      },
    ],
    features: [
      "Custom UI/UX design",
      "Next.js & headless CMS development",
      "Technical SEO implementation",
      "Mobile-first responsive builds",
      "Performance optimization (90+ Lighthouse)",
      "Analytics & conversion tracking setup",
    ],
    faqs: [
      {
        question: "What technology do you use to build websites?",
        answer: "We primarily build on Next.js with TypeScript and Tailwind CSS for performance, SEO, and maintainability.",
      },
      {
        question: "Will my website be SEO-ready?",
        answer:
          "Yes — every site ships with structured metadata, sitemap, schema markup, and Core Web Vitals optimization built in.",
      },
      {
        question: "Can you redesign my existing website?",
        answer: "Absolutely. We regularly migrate and redesign legacy websites onto modern, faster stacks without losing SEO equity.",
      },
    ],
    ctaTitle: "Ready for a Website That Converts?",
    ctaDescription: "Get a free website audit and consultation from our team.",
  },
  {
    slug: "ecommerce-development",
    name: "E-Commerce Development",
    order: 3,
    seoTitle: "E-Commerce Development Company | The Webcorners",
    metaDescription:
      "Custom e-commerce development with headless commerce, multi-warehouse inventory, and AI-powered search. Partner with The Webcorners to scale your online store.",
    h1: "E-Commerce Development Company",
    intro:
      "We build e-commerce platforms that handle real-world complexity — multi-warehouse inventory, subscription billing, and high-traffic checkout flows — without sacrificing speed or conversion rate.",
    sections: [
      {
        heading: "Headless Commerce, Built to Scale",
        body: "Decoupling your storefront from your commerce engine gives you the flexibility to launch new experiences fast while keeping checkout and inventory rock solid.",
      },
      {
        heading: "AI-Powered Product Discovery",
        body: "We integrate intelligent search and recommendation engines that increase average order value and reduce bounce rates on product pages.",
      },
      {
        heading: "Built for Peak Traffic",
        body: "Our commerce builds are load-tested and optimized to handle flash sales and seasonal traffic spikes without downtime.",
      },
    ],
    features: [
      "Headless commerce architecture",
      "Custom checkout & payment gateway integration",
      "Multi-warehouse inventory management",
      "Subscription & recurring billing",
      "AI-powered search and recommendations",
      "Marketplace & multi-vendor support",
    ],
    faqs: [
      {
        question: "Can you integrate with my existing payment gateway?",
        answer: "Yes, we integrate with Razorpay, Stripe, PayPal, and most major regional payment gateways.",
      },
      {
        question: "Do you support multi-vendor marketplaces?",
        answer: "Yes, we've built marketplace platforms supporting independent vendor onboarding, commission management, and payouts.",
      },
      {
        question: "Can you migrate my store from Shopify or WooCommerce?",
        answer: "Yes, we handle full data migration including products, orders, and customer history with zero downtime.",
      },
    ],
    ctaTitle: "Scale Your Online Store",
    ctaDescription: "Get a free e-commerce platform assessment from our team.",
  },
  {
    slug: "crm-development",
    name: "CRM Development",
    order: 4,
    seoTitle: "CRM Development Company | The Webcorners",
    metaDescription:
      "Custom CRM development with pipeline automation, lead scoring, and omnichannel communication. Built by The Webcorners for sales teams that need more than spreadsheets.",
    h1: "CRM Development Company",
    intro:
      "We build CRMs configured around your actual sales process — not a generic pipeline you have to adapt to. From lead capture to deal closure, every stage is automated and measurable.",
    sections: [
      {
        heading: "Pipelines That Match Your Sales Process",
        body: "We map your actual sales stages, approval flows, and handoffs into a CRM that mirrors how your team really sells — not a one-size-fits-all template.",
      },
      {
        heading: "Automated Lead Scoring & Nurturing",
        body: "Behavioral and demographic scoring routes high-intent leads to your reps faster, while automated nurture sequences keep cold leads warm.",
      },
      {
        heading: "Omnichannel Communication",
        body: "Email, WhatsApp, and call logs unified in a single timeline per contact, so reps never lose context switching between tools.",
      },
    ],
    features: [
      "Custom pipeline & deal stage configuration",
      "Lead scoring & automated routing",
      "Email, WhatsApp & call integration",
      "Sales forecasting dashboards",
      "Role-based access & approval workflows",
      "Integration with existing ERP/marketing tools",
    ],
    faqs: [
      {
        question: "Can you build on top of Salesforce or Zoho instead of from scratch?",
        answer:
          "Yes, we both customize existing platforms like Salesforce and Zoho and build fully custom CRMs depending on your needs and budget.",
      },
      {
        question: "How does lead scoring work?",
        answer:
          "We configure scoring rules based on your historical conversion data — behavior, source, and engagement signals all factor into the score.",
      },
      {
        question: "Can the CRM integrate with our ERP?",
        answer: "Yes, we build bi-directional integrations between CRM and ERP systems so sales and operations stay in sync.",
      },
    ],
    ctaTitle: "Outgrowing Spreadsheets and Generic CRMs?",
    ctaDescription: "Get a free CRM workflow assessment from our team.",
  },
  {
    slug: "erp-development",
    name: "ERP Development",
    order: 5,
    seoTitle: "ERP Development Company | The Webcorners",
    metaDescription:
      "Modular ERP development covering inventory, finance, HR, and procurement. The Webcorners builds ERP systems for manufacturing and enterprise operations.",
    h1: "ERP Development Company",
    intro:
      "We build modular ERP systems that unify inventory, finance, procurement, and HR into a single source of truth — replacing spreadsheets and disconnected tools with one operational system.",
    sections: [
      {
        heading: "Modular, Not Monolithic",
        body: "Start with the modules you need — inventory, finance, procurement, HR — and expand as your operations grow, without a costly re-platform.",
      },
      {
        heading: "Built for Manufacturing Operations",
        body: "We understand shop-floor realities: batch tracking, BOM management, and production scheduling are built into our ERP implementations, not bolted on.",
      },
      {
        heading: "Real-Time Operational Visibility",
        body: "Dashboards give leadership real-time visibility into inventory levels, cash flow, and procurement status across every department.",
      },
    ],
    features: [
      "Inventory & warehouse management",
      "Finance & accounting modules",
      "Procurement & vendor management",
      "HR & payroll automation",
      "Production planning & BOM tracking",
      "Custom reporting & analytics dashboards",
    ],
    faqs: [
      {
        question: "Is this a fully custom ERP or a configured existing system?",
        answer: "We offer both — a fully custom build for unique workflows, or configuration of proven platforms when the fit is right.",
      },
      {
        question: "How long does an ERP rollout take?",
        answer: "Typical rollouts run 3-6 months depending on module scope and number of departments involved.",
      },
      {
        question: "Can you migrate our existing data?",
        answer: "Yes, full data migration from spreadsheets or legacy systems is included as part of every ERP engagement.",
      },
    ],
    ctaTitle: "Ready to Replace Spreadsheet Chaos?",
    ctaDescription: "Get a free ERP readiness assessment for your operations.",
  },
  {
    slug: "saas-development",
    name: "SaaS Product Development",
    order: 6,
    seoTitle: "SaaS Development Company | The Webcorners",
    metaDescription:
      "End-to-end SaaS product development — architecture, multi-tenancy, billing, and scaling. The Webcorners helps founders ship and grow SaaS platforms.",
    h1: "SaaS Development Company",
    intro:
      "From idea to a scalable multi-tenant platform, we partner with founders and product teams to design, build, and grow SaaS products that are ready for real customers from day one.",
    sections: [
      {
        heading: "Architected for Multi-Tenancy",
        body: "We design data models and infrastructure with multi-tenancy, role-based access, and scalability baked in from the first sprint.",
      },
      {
        heading: "Billing & Subscription Management",
        body: "Stripe and Razorpay-based billing with plan tiers, usage metering, and dunning logic configured for your pricing model.",
      },
      {
        heading: "Built to Scale Post-Launch",
        body: "We design infrastructure that scales horizontally, with monitoring and alerting in place before your first hundred customers, not after.",
      },
    ],
    features: [
      "Multi-tenant architecture design",
      "Subscription billing & plan management",
      "Usage-based metering",
      "Admin & customer-facing dashboards",
      "Role-based access control",
      "Cloud infrastructure & auto-scaling setup",
    ],
    faqs: [
      {
        question: "Can you help validate my SaaS idea before building?",
        answer: "Yes, our discovery sprint includes market and technical feasibility review before committing to a full build.",
      },
      {
        question: "How fast can you ship an MVP?",
        answer: "Most SaaS MVPs ship in 8-12 weeks, scoped tightly around your core value proposition.",
      },
      {
        question: "Do you support ongoing feature development post-launch?",
        answer: "Yes, most SaaS clients move into a dedicated team model for continuous iteration after launch.",
      },
    ],
    ctaTitle: "Building a SaaS Product?",
    ctaDescription: "Get a free architecture review from our SaaS engineering team.",
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    order: 7,
    seoTitle: "Mobile App Development Company | The Webcorners",
    metaDescription:
      "Native and cross-platform mobile app development for iOS and Android. The Webcorners builds mobile apps for startups and enterprises that need to launch fast.",
    h1: "Mobile App Development Company",
    intro:
      "We build mobile apps that feel native, perform reliably, and ship on schedule — whether you need a cross-platform app for speed or a fully native build for performance-critical features.",
    sections: [
      {
        heading: "Cross-Platform or Native — Your Choice",
        body: "We recommend React Native or Flutter for most products to ship faster on both platforms, while reserving native Swift/Kotlin for performance-critical features.",
      },
      {
        heading: "Backend & API-Ready",
        body: "Every mobile app is backed by a scalable API layer, designed for real-time sync, push notifications, and offline support where needed.",
      },
      {
        heading: "App Store & Play Store Launch Support",
        body: "We handle store listing optimization, submission, and review compliance so your launch isn't held up by avoidable rejections.",
      },
    ],
    features: [
      "Cross-platform development (React Native/Flutter)",
      "Native iOS & Android development",
      "Push notifications & offline support",
      "Backend API & real-time sync",
      "App Store & Play Store submission",
      "Post-launch updates & crash monitoring",
    ],
    faqs: [
      {
        question: "Should I build native or cross-platform?",
        answer:
          "Cross-platform is right for most products — it's faster and more cost-effective. We recommend native only for performance-critical or hardware-heavy apps.",
      },
      {
        question: "Do you handle app store submission?",
        answer: "Yes, we manage the full submission and review process for both the Apple App Store and Google Play Store.",
      },
      {
        question: "Can you add a mobile app to my existing web platform?",
        answer: "Yes, we frequently build companion mobile apps that share a backend with an existing web product.",
      },
    ],
    ctaTitle: "Ready to Launch a Mobile App?",
    ctaDescription: "Get a free mobile strategy consultation from our team.",
  },
  {
    slug: "ai-solutions",
    name: "AI Solutions",
    order: 8,
    seoTitle: "AI Development Company | The Webcorners",
    metaDescription:
      "AI development services — predictive analytics, AI copilots, computer vision, and intelligent automation. The Webcorners builds AI into real business workflows.",
    h1: "AI Development Company",
    intro:
      "We embed AI into your product and operations as a core capability — predictive models, copilots, and automation that move real business metrics, not demo-ware.",
    sections: [
      {
        heading: "AI Embedded in Your Workflow",
        body: "We don't bolt a chatbot onto your homepage. We design AI features around the decisions your team actually makes — forecasting, triage, and approvals.",
      },
      {
        heading: "Retrieval-Augmented Copilots",
        body: "Our AI copilots are grounded in your own data using retrieval-augmented generation, so answers are accurate and specific to your business context.",
      },
      {
        heading: "From Prototype to Production",
        body: "We move fast from proof-of-concept to a production-grade AI feature with monitoring, fallback logic, and cost controls in place.",
      },
    ],
    features: [
      "Predictive analytics & forecasting models",
      "Conversational AI & copilots",
      "Retrieval-augmented generation (RAG) systems",
      "Computer vision & document processing",
      "Workflow automation with AI",
      "AI integration into existing CRM/ERP systems",
    ],
    faqs: [
      {
        question: "Do I need a lot of data to use AI in my business?",
        answer:
          "Not always. Many AI features, like copilots and document processing, work well even with moderate data volumes using pre-trained foundation models.",
      },
      {
        question: "Can you add AI to our existing CRM or ERP?",
        answer: "Yes, we regularly embed predictive scoring and copilots into existing CRM/ERP systems without requiring a full rebuild.",
      },
      {
        question: "Which AI models do you work with?",
        answer:
          "We work with OpenAI, Anthropic, and open-source models, choosing the right one based on cost, latency, and data sensitivity requirements.",
      },
    ],
    ctaTitle: "Ready to Embed AI Into Your Business?",
    ctaDescription: "Get a free AI opportunity assessment from our team.",
  },
  {
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    order: 9,
    seoTitle: "Cloud Solutions Company | The Webcorners",
    metaDescription:
      "Cloud architecture, migration, and DevOps services on AWS and Azure. The Webcorners helps businesses scale infrastructure reliably and cost-effectively.",
    h1: "Cloud Solutions Company",
    intro:
      "We design and manage cloud infrastructure that scales with your business — from initial migration to ongoing DevOps, monitoring, and cost optimization.",
    sections: [
      {
        heading: "Migration Without Downtime",
        body: "We plan and execute cloud migrations in phases, validating each step to ensure zero data loss and minimal downtime.",
      },
      {
        heading: "Infrastructure as Code",
        body: "Every environment we manage is defined in code, making deployments reproducible, auditable, and easy to scale.",
      },
      {
        heading: "Cost Optimization",
        body: "We continuously monitor cloud spend and right-size resources, often cutting infrastructure costs by 20-40% post-migration.",
      },
    ],
    features: [
      "AWS & Azure architecture design",
      "Cloud migration & modernization",
      "CI/CD pipeline setup",
      "Infrastructure as Code (Terraform)",
      "Monitoring, logging & alerting",
      "Cost optimization & rightsizing",
    ],
    faqs: [
      {
        question: "Which cloud provider do you recommend?",
        answer:
          "It depends on your existing stack and compliance needs — we work extensively with both AWS and Azure and will recommend based on your specific requirements.",
      },
      {
        question: "Can you manage our cloud infrastructure on an ongoing basis?",
        answer: "Yes, we offer managed DevOps retainers for ongoing monitoring, scaling, and incident response.",
      },
      {
        question: "How do you ensure security during migration?",
        answer:
          "We follow a phased migration plan with security audits at each stage, including IAM review and encryption at rest and in transit.",
      },
    ],
    ctaTitle: "Need to Scale or Migrate Your Infrastructure?",
    ctaDescription: "Get a free cloud architecture review from our team.",
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    order: 10,
    seoTitle: "Digital Marketing Services | The Webcorners",
    metaDescription:
      "Performance marketing and SEO services to fuel your lead pipeline. The Webcorners drives qualified traffic and conversions for software and SaaS companies.",
    h1: "Digital Marketing Services",
    intro:
      "We run performance marketing and SEO programs built specifically for software companies — focused on qualified pipeline, not vanity traffic.",
    sections: [
      {
        heading: "SEO Built on Technical Foundations",
        body: "Because we also build the websites, our SEO strategy starts with technical foundations — Core Web Vitals, structured data, and crawlability — before content and links.",
      },
      {
        heading: "Performance Marketing for B2B",
        body: "Paid campaigns are built around qualified lead generation, with conversion tracking tied directly to your CRM pipeline.",
      },
      {
        heading: "Content That Converts",
        body: "We produce content mapped to your buyer's journey, designed to rank and to move prospects toward a consultation request.",
      },
    ],
    features: [
      "Technical & on-page SEO",
      "Paid search & social campaigns",
      "Content strategy & production",
      "Conversion rate optimization",
      "Marketing analytics & attribution",
      "CRM-integrated lead tracking",
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer: "Typically 3-6 months for meaningful organic traffic growth, depending on competition and starting domain authority.",
      },
      {
        question: "Do you only work with software companies?",
        answer:
          "We specialize in B2B software and enterprise clients, but the same performance-marketing principles apply across industries we serve.",
      },
      {
        question: "Can you optimize an existing website instead of rebuilding it?",
        answer: "Yes, we offer SEO and CRO audits for existing websites without requiring a full rebuild.",
      },
    ],
    ctaTitle: "Need More Qualified Leads?",
    ctaDescription: "Get a free marketing audit from our team.",
  },
  {
    slug: "api-development",
    name: "API Development",
    order: 11,
    seoTitle: "API Development Company | The Webcorners",
    metaDescription:
      "Robust, documented API development connecting your software ecosystem. The Webcorners builds secure, scalable APIs for enterprise integrations.",
    h1: "API Development Company",
    intro:
      "We design and build APIs that connect your internal systems, partners, and customer-facing apps — documented, versioned, and secured for long-term reliability.",
    sections: [
      {
        heading: "API-First Architecture",
        body: "We design APIs as a product in their own right — consistent, versioned, and documented from day one, not as an afterthought to a single app.",
      },
      {
        heading: "Secure by Design",
        body: "OAuth2, rate limiting, and audit logging are standard on every API we build, protecting both your data and your integration partners.",
      },
      {
        heading: "Built for Integration",
        body: "Whether connecting your CRM to your ERP or exposing data to partner systems, we build APIs that make integration straightforward, not painful.",
      },
    ],
    features: [
      "RESTful & GraphQL API design",
      "API documentation (OpenAPI/Swagger)",
      "Authentication & authorization (OAuth2)",
      "Rate limiting & usage monitoring",
      "Webhook & event-driven integrations",
      "Legacy system API wrapping",
    ],
    faqs: [
      {
        question: "Do you build REST or GraphQL APIs?",
        answer: "We build both, recommending the right approach based on your client applications' data fetching needs.",
      },
      {
        question: "Can you connect our CRM and ERP systems?",
        answer: "Yes, building bi-directional integrations between business systems is one of our most common API engagements.",
      },
      {
        question: "Will the API come with documentation?",
        answer: "Yes, every API we build ships with OpenAPI/Swagger documentation for easy integration by your team or partners.",
      },
    ],
    ctaTitle: "Need to Connect Your Systems?",
    ctaDescription: "Get a free API architecture consultation from our team.",
  },
  {
    slug: "enterprise-solutions",
    name: "Enterprise Solutions",
    order: 12,
    seoTitle: "Enterprise Software Solutions | The Webcorners",
    metaDescription:
      "Large-scale, secure enterprise software built for compliance and scale. The Webcorners delivers enterprise solutions for regulated industries.",
    h1: "Enterprise Software Solutions",
    intro:
      "We build large-scale software for enterprises operating under real compliance, security, and scale constraints — engineered for the long haul, not a quick demo.",
    sections: [
      {
        heading: "Compliance-First Engineering",
        body: "From data residency to access controls, we design enterprise systems with your regulatory requirements as a first-class constraint, not a retrofit.",
      },
      {
        heading: "Built for Scale and Resilience",
        body: "High-availability architecture, load testing, and disaster recovery planning are standard parts of every enterprise engagement.",
      },
      {
        heading: "Integration With Existing Enterprise Systems",
        body: "We integrate with your existing SAP, Salesforce, or legacy systems rather than requiring a disruptive rip-and-replace.",
      },
    ],
    features: [
      "Enterprise architecture & system design",
      "Compliance-ready data handling (HIPAA, SOC2-aligned)",
      "High-availability infrastructure",
      "Legacy & enterprise system integration",
      "Role-based access & audit logging",
      "Dedicated long-term engineering teams",
    ],
    faqs: [
      {
        question: "Can you work within our existing compliance framework?",
        answer:
          "Yes, we design within your existing compliance requirements, including HIPAA-aligned and SOC2-aligned data handling practices.",
      },
      {
        question: "Do you provide dedicated teams for enterprise engagements?",
        answer: "Yes, most enterprise clients move to a dedicated, ring-fenced team model for continuity and institutional knowledge.",
      },
      {
        question: "Can you integrate with our existing SAP/Salesforce deployment?",
        answer: "Yes, integrating with existing enterprise systems is core to how we approach enterprise engagements.",
      },
    ],
    ctaTitle: "Need an Enterprise-Grade Build?",
    ctaDescription: "Talk to our enterprise solutions team about your requirements.",
  },
];

const portfolioItems = [
  { title: "MedConnect Patient Portal", industry: "Healthcare", tag: "Web App", order: 1 },
  { title: "Forgewell ERP Rollout", industry: "Manufacturing", tag: "ERP", order: 2 },
  { title: "EduSphere LMS Platform", industry: "Education", tag: "SaaS", order: 3 },
  { title: "Vertex Exhibitor Hub", industry: "Events", tag: "Web Platform", order: 4 },
  { title: "Brightline Marketplace", industry: "Retail", tag: "E-Commerce", order: 5 },
  { title: "Primewave Fleet AI", industry: "Logistics", tag: "AI Solutions", order: 6 },
];

const caseStudies = [
  {
    title: "Cutting Order-to-Cash Time by 62% for a Manufacturing Enterprise",
    client: "Forgewell Manufacturing",
    result: "62% faster order cycle",
    summary:
      "Replaced spreadsheet-driven operations with a unified ERP, automating procurement, inventory, and invoicing.",
    order: 1,
  },
  {
    title: "Scaling a Healthcare Platform to 250,000+ Patients",
    client: "NovaHealth",
    result: "250K+ active patients",
    summary: "Built a HIPAA-aligned patient portal and telehealth system with real-time scheduling and AI triage.",
    order: 2,
  },
  {
    title: "3x Lead Conversion with a Custom CRM for an Edtech SME",
    client: "Alta Learning",
    result: "3x lead conversion",
    summary: "Designed a CRM with automated lead scoring and nurture sequences tailored to admissions cycles.",
    order: 3,
  },
];

const testimonials = [
  {
    name: "Ananya Rao",
    role: "COO, NovaHealth",
    quote:
      "The Webcorners team rebuilt our patient platform from the ground up and delivered ahead of schedule. The AI triage feature alone cut our front-desk load in half.",
    order: 1,
  },
  {
    name: "Karan Mehta",
    role: "Director of Operations, Forgewell Manufacturing",
    quote:
      "Our ERP rollout was the smoothest enterprise software transition we've had. Their team understood manufacturing workflows better than vendors twice their size.",
    order: 2,
  },
  {
    name: "Priya Nair",
    role: "Founder, Alta Learning",
    quote:
      "From CRM to our admissions automation, every recommendation was grounded in data. Lead conversion tripled within a quarter of launch.",
    order: 3,
  },
];

const trustedLogos = [
  "NovaHealth",
  "Brightline Retail",
  "Forgewell Manufacturing",
  "Alta Learning",
  "Vertex Exhibitions",
  "Primewave Logistics",
].map((name, i) => ({ name, order: i + 1 }));

const stats = [
  { label: "Projects Delivered", value: 180, suffix: "+", order: 1 },
  { label: "Client Retention Rate", value: 95, suffix: "%", order: 2 },
  { label: "Industries Served", value: 12, suffix: "+", order: 3 },
  { label: "AI & Automation Builds", value: 40, suffix: "+", order: 4 },
];

const industries = [
  { name: "Startups", icon: "Rocket", description: "MVPs built fast, designed to scale.", order: 1 },
  { name: "SMEs", icon: "Building", description: "Practical systems that replace manual workflows.", order: 2 },
  { name: "Enterprises", icon: "Landmark", description: "Secure, compliant, large-scale platforms.", order: 3 },
  { name: "Manufacturing", icon: "Factory", description: "ERP and inventory systems built for the floor.", order: 4 },
  {
    name: "Healthcare",
    icon: "HeartPulse",
    description: "Patient platforms and telehealth, built for compliance.",
    order: 5,
  },
  { name: "Education", icon: "GraduationCap", description: "LMS and admissions automation for institutions.", order: 6 },
  {
    name: "Events & Exhibitions",
    icon: "CalendarRange",
    description: "Exhibitor portals and ticketing at scale.",
    order: 7,
  },
];

const featuredSolutions = [
  {
    title: "Webcorners CRM Suite",
    category: "CRM Development",
    description: "A configurable CRM with pipeline automation, lead scoring, and omnichannel communication.",
    order: 1,
  },
  {
    title: "Webcorners ERP Core",
    category: "ERP Development",
    description: "Modular ERP covering inventory, finance, HR, and procurement for mid-size manufacturers.",
    order: 2,
  },
  {
    title: "Webcorners Commerce Engine",
    category: "E-Commerce Development",
    description: "Headless commerce platform with subscription billing, multi-warehouse inventory, and AI search.",
    order: 3,
  },
  {
    title: "Webcorners AI Copilot",
    category: "AI Solutions",
    description: "Embeddable AI assistant for support, sales, and internal ops with retrieval-augmented workflows.",
    order: 4,
  },
];

const whyChooseUs = [
  {
    title: "Enterprise-Grade Engineering",
    description: "Architected for scale from day one — clean code, CI/CD, and observability baked into every build.",
    order: 1,
  },
  {
    title: "AI-First Approach",
    description: "We embed automation and intelligence into products, not bolt it on as an afterthought.",
    order: 2,
  },
  {
    title: "Dedicated Product Teams",
    description: "A consistent pod of engineers, designers, and a PM — not a rotating freelancer roster.",
    order: 3,
  },
  {
    title: "Transparent Delivery",
    description: "Sprint demos, shared roadmaps, and real-time dashboards so you always know where the project stands.",
    order: 4,
  },
  {
    title: "Post-Launch Partnership",
    description: "SLAs, monitoring, and continuous iteration after go-live — we don't disappear at launch.",
    order: 5,
  },
  {
    title: "Industry Expertise",
    description: "Domain playbooks for healthcare, manufacturing, education, and exhibitions — not generic templates.",
    order: 6,
  },
];

const aiFeatures = [
  {
    title: "Predictive Analytics",
    description: "Forecast demand, churn, and revenue with models trained on your operational data.",
    order: 1,
  },
  {
    title: "Intelligent Automation",
    description: "Automate approvals, document processing, and reporting with AI-driven workflows.",
    order: 2,
  },
  {
    title: "Conversational AI",
    description: "Deploy chat and voice assistants across web, WhatsApp, and internal tools.",
    order: 3,
  },
  {
    title: "Computer Vision",
    description: "Quality inspection, attendance, and inventory tracking powered by vision models.",
    order: 4,
  },
];

const processSteps = [
  { step: "01", title: "Discover", description: "We map your business goals, users, and technical constraints into a clear product brief.", order: 1 },
  { step: "02", title: "Design", description: "UX flows and UI systems are designed and validated with stakeholders before a line of code is written.", order: 2 },
  { step: "03", title: "Develop", description: "Agile sprints with weekly demos, automated testing, and continuous integration.", order: 3 },
  { step: "04", title: "Deploy", description: "Production-grade releases with monitoring, security hardening, and performance tuning.", order: 4 },
  { step: "05", title: "Support", description: "SLA-backed maintenance, iteration, and scaling support post-launch.", order: 5 },
];

const techStack = [
  "Next.js", "React", "TypeScript", "Node.js", "Python", "Django", "PostgreSQL", "MongoDB",
  "AWS", "Azure", "Docker", "Kubernetes", "GraphQL", "TensorFlow", "OpenAI", "Salesforce",
].map((name, i) => ({ name, order: i + 1 }));

const faqs = [
  {
    question: "What industries does The Webcorners specialize in?",
    answer:
      "We work extensively with startups, SMEs, and enterprises across healthcare, manufacturing, education, and the events & exhibition industry, alongside general SaaS and e-commerce builds.",
    group: "homepage",
    order: 1,
  },
  {
    question: "How long does a typical software project take?",
    answer: "Most MVPs ship in 6-10 weeks. Enterprise CRM/ERP implementations typically run 3-6 months depending on integration complexity.",
    group: "homepage",
    order: 2,
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. Every engagement includes an SLA-backed support and maintenance plan, with optional dedicated teams for continuous iteration.",
    group: "homepage",
    order: 3,
  },
  {
    question: "Can you integrate AI into an existing product?",
    answer:
      "Absolutely. We regularly embed AI copilots, predictive analytics, and automation into existing CRMs, ERPs, and web platforms without a full rebuild.",
    group: "homepage",
    order: 4,
  },
  {
    question: "What does the engagement process look like?",
    answer:
      "We start with a free consultation, move into a discovery sprint to scope requirements, then follow our Discover-Design-Develop-Deploy-Support process with weekly check-ins.",
    group: "homepage",
    order: 5,
  },
];

const blogPosts = [
  {
    title: "How AI Copilots Are Reshaping Enterprise CRM in 2026",
    slug: "ai-copilots-reshaping-enterprise-crm-2026",
    category: "AI Solutions",
    excerpt: "A look at how predictive lead scoring and conversational assistants are changing sales operations.",
    content: "",
    status: "published",
    publishedAt: new Date(),
  },
  {
    title: "ERP vs. Custom Software: What Manufacturing SMEs Should Choose",
    slug: "erp-vs-custom-software-manufacturing-smes",
    category: "ERP Development",
    excerpt: "Breaking down the tradeoffs between off-the-shelf ERP suites and custom-built operational systems.",
    content: "",
    status: "published",
    publishedAt: new Date(),
  },
  {
    title: "Building HIPAA-Aligned Patient Portals: A Practical Checklist",
    slug: "hipaa-aligned-patient-portals-checklist",
    category: "Healthcare",
    excerpt: "The architecture, compliance, and UX decisions behind a successful healthcare platform launch.",
    content: "",
    status: "published",
    publishedAt: new Date(),
  },
  {
    title: "SaaS vs. Custom Software: How Growing Teams Should Decide",
    slug: "saas-vs-custom-software-how-to-decide",
    category: "SaaS Development",
    excerpt:
      "A practical framework for choosing between off-the-shelf SaaS tools and a custom-built platform as your team scales.",
    content:
      "Most growing companies hit the same wall: the SaaS tools that got them to their first hundred customers start fighting their workflows instead of supporting them. The question isn't whether SaaS is 'bad' — it's whether your workflow is still generic enough for a generic tool to handle.\n\nStart with the cost of the workaround, not the cost of the software. If your team is exporting spreadsheets, running manual reconciliation, or duct-taping three tools together with Zapier just to get one process working, that operational overhead is the real cost — and it compounds every month you delay a decision.\n\nLook at three signals specifically: whether your core workflow is a genuine differentiator (not just 'slightly different' from the SaaS default), whether you're paying for seats or usage tiers that don't map to how your team actually works, and whether integration between your existing tools has become its own maintenance burden.\n\nCustom software wins when your process is the product — when how you do something is part of your competitive advantage. SaaS wins when the process is a solved problem and your advantage lies elsewhere. Most teams don't need an all-or-nothing choice either; a common middle path is keeping SaaS for commodity functions (email, payments, support) while building a custom core around the workflow that actually differentiates the business.\n\nThe teams that get this decision wrong usually do so by deciding too early (building custom before the workflow has stabilized) or too late (staying on generic tools long after the workarounds have become more expensive than a build). Revisit the decision at each major growth stage, not just once.",
    status: "published",
    publishedAt: new Date(),
  },
];

const siteSettingData = {
  tagline: "Building Digital Corners of Success",
  description:
    "Custom software, AI solutions, CRM, ERP, SaaS platforms and enterprise applications designed for growth.",
  email: "info@thewebcorners.com",
  phone: "+91-8057965238",
  whatsapp: "https://wa.me/918057965238",
  locations: [
    {
      label: "Head Office",
      street: "Govindpuram",
      locality: "Ghaziabad",
      region: "Uttar Pradesh",
      country: "India",
    },
    {
      label: "Branch Office",
      street: "",
      locality: "Bulandshahr",
      region: "Uttar Pradesh",
      country: "India",
    },
  ],
  socialLinks: { linkedin: "", twitter: "", instagram: "", facebook: "" },
};

async function upsertMany(Model, items, matchKey) {
  for (const item of items) {
    await Model.findOneAndUpdate({ [matchKey]: item[matchKey] }, item, {
      upsert: true,
      returnDocument: "after",
    });
  }
}

async function seed() {
  await connectDB();

  await upsertMany(Service, services, "slug");
  await upsertMany(PortfolioItem, portfolioItems, "title");
  await upsertMany(CaseStudy, caseStudies, "title");
  await upsertMany(Testimonial, testimonials, "name");
  await upsertMany(TrustedLogo, trustedLogos, "name");
  await upsertMany(Stat, stats, "label");
  await upsertMany(Industry, industries, "name");
  await upsertMany(FeaturedSolution, featuredSolutions, "title");
  await upsertMany(WhyChooseUsItem, whyChooseUs, "title");
  await upsertMany(AiFeature, aiFeatures, "title");
  await upsertMany(ProcessStep, processSteps, "step");
  await upsertMany(TechStackItem, techStack, "name");
  await upsertMany(Faq, faqs, "question");
  await upsertMany(BlogPost, blogPosts, "slug");

  let settings = await SiteSetting.findOne();
  if (settings) {
    Object.assign(settings, siteSettingData);
    await settings.save();
  } else {
    await SiteSetting.create(siteSettingData);
  }

  console.log("Content seeded successfully.");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
