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
const PageContent = require("../models/PageContent");

const services = [
  {
    slug: "custom-software-development",
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
    slug: "website-designing",
    name: "Website Designing",
    order: 2,
    seoTitle: "Website Designing Company in Ghaziabad | The Webcorners",
    metaDescription:
      "The Webcorners is a website designing company in Ghaziabad crafting custom, mobile-friendly designs for business websites. Get a free design consultation.",
    h1: "Website Designing Company in Ghaziabad",
    intro:
      "We design websites that look sharp, load fast, and guide visitors toward a decision — built around your brand, not a recycled template. Every design is mapped to your business goals before a single screen is drawn.",
    sections: [
      {
        heading: "Custom Design, Not Templates",
        body: "We design every page from scratch around your brand identity, industry, and target audience — no drag-and-drop templates that make you look like everyone else.",
      },
      {
        heading: "Mobile-First, Every Time",
        body: "With most visitors browsing on mobile, we design for small screens first, then scale up — so your site looks and works great on any device.",
      },
      {
        heading: "Design That Guides Action",
        body: "Layouts, colors, and calls-to-action are placed with intent, so visitors know exactly what to do next — call, enquire, or buy.",
      },
    ],
    features: [
      "Custom UI/UX design",
      "Wireframes & interactive prototypes",
      "Brand-aligned visual design",
      "Mobile-first responsive layouts",
      "Unlimited design revisions",
      "Design handoff-ready for development",
    ],
    faqs: [
      {
        question: "How many design revisions do I get?",
        answer: "We iterate with you until the design is right — revisions are included through the design phase, not capped at a fixed number.",
      },
      {
        question: "Will I see the design before development starts?",
        answer: "Yes — you approve full page designs and prototypes before any development work begins, so there are no surprises later.",
      },
      {
        question: "How long does the design phase take?",
        answer: "Most business website designs are ready for approval in 1-2 weeks, depending on the number of pages and revision rounds.",
      },
    ],
    ctaTitle: "Ready for a Website That Looks the Part?",
    ctaDescription: "Get a free design consultation from our team.",
  },
  {
    slug: "web-development",
    name: "Web Development",
    order: 3,
    seoTitle: "Web Development Company in Ghaziabad | The Webcorners",
    metaDescription:
      "The Webcorners is a web development company in Ghaziabad building fast, SEO-optimized, conversion-focused websites on Next.js. Get a free consultation.",
    h1: "Web Development Company in Ghaziabad",
    intro:
      "We build high-performance, SEO-ready websites that convert visitors into leads. From corporate sites to complex web applications, every build is optimized for Core Web Vitals and search visibility from day one.",
    sections: [
      {
        heading: "Built for Speed and SEO",
        body: "Using Next.js Server Components and static generation, we deliver websites that load instantly and rank well — because performance is a ranking factor, not an afterthought.",
      },
      {
        heading: "Clean, Maintainable Code",
        body: "Every build follows a structured codebase with reusable components, so future updates and features can be added without a rebuild.",
      },
      {
        heading: "Ongoing Website Care",
        body: "Post-launch, we monitor uptime, Core Web Vitals, and security — so your website keeps performing long after go-live.",
      },
    ],
    features: [
      "Next.js & headless CMS development",
      "Technical SEO implementation",
      "Third-party & CRM integrations",
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
        question: "Can you redevelop my existing website?",
        answer: "Absolutely. We regularly migrate legacy websites onto modern, faster stacks without losing SEO equity.",
      },
    ],
    ctaTitle: "Ready for a Website That Converts?",
    ctaDescription: "Get a free website audit and consultation from our team.",
  },
  {
    slug: "ecommerce-development",
    name: "E-Commerce Development",
    order: 4,
    seoTitle: "E-Commerce Development Company | The Webcorners",
    metaDescription:
      "Custom e-commerce development with headless commerce, multi-warehouse inventory, and AI-powered search. Partner with The Webcorners to scale your online store.",
    h1: "E-Commerce Development Company",
    intro:
      "We build e-commerce platforms that handle real-world complexity — multi-warehouse inventory, subscription billing, and high-traffic checkout flows — without sacrificing speed or conversion rate. From a first storefront to a full replatforming project, every build is scoped around how your catalog, orders, and fulfillment actually work.",
    sections: [
      {
        heading: "Replacing the Platform You've Outgrown",
        body: "Many stores start on Shopify or WooCommerce and hit a wall — checkout customization limits, plugin conflicts, or a catalog too complex for the platform's data model. We scope a migration path that keeps your SEO rankings and order history intact while moving you onto infrastructure built for your actual scale.",
      },
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
      {
        heading: "Our E-Commerce Development Process",
        body: "We start with a discovery sprint to map your catalog structure, order flow, and integrations, then move through design, development, and a staged launch — migrating live traffic only once the new platform has been tested against your actual order volume.",
      },
    ],
    features: [
      "Headless commerce architecture",
      "Custom checkout & payment gateway integration",
      "Multi-warehouse inventory management",
      "Subscription & recurring billing",
      "AI-powered search and recommendations",
      "Marketplace & multi-vendor support",
      "SEO-optimized product & category pages",
      "Order management & fulfillment integrations",
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
      {
        question: "How long does an e-commerce build typically take?",
        answer: "A standard storefront usually launches in 8-12 weeks; complex multi-warehouse or marketplace builds run longer depending on integration scope.",
      },
      {
        question: "Do you provide support after the store goes live?",
        answer: "Yes, every e-commerce build includes SLA-backed post-launch support, with optional ongoing feature development as your catalog and traffic grow.",
      },
    ],
    ctaTitle: "Scale Your Online Store",
    ctaDescription: "Get a free e-commerce platform assessment from our team.",
  },
  {
    slug: "crm-development",
    name: "CRM Development",
    order: 5,
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
    order: 6,
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
    order: 7,
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
    order: 8,
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
    order: 9,
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
    order: 10,
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
    order: 11,
    seoTitle: "Digital Marketing Services | The Webcorners",
    metaDescription:
      "Performance marketing services to fuel your lead pipeline. The Webcorners drives qualified traffic and conversions for software and SaaS companies.",
    h1: "Digital Marketing Services",
    intro:
      "We run performance marketing programs built specifically for software companies — focused on qualified pipeline, not vanity traffic.",
    sections: [
      {
        heading: "Performance Marketing for B2B",
        body: "Paid campaigns are built around qualified lead generation, with conversion tracking tied directly to your CRM pipeline.",
      },
      {
        heading: "Content That Converts",
        body: "We produce content mapped to your buyer's journey, designed to rank and to move prospects toward a consultation request.",
      },
      {
        heading: "Social & Marketplace Presence",
        body: "We manage your brand's presence across social platforms and business listings, keeping messaging consistent with your website and campaigns.",
      },
    ],
    features: [
      "Paid search & social campaigns",
      "Content strategy & production",
      "Conversion rate optimization",
      "Social media management",
      "Marketing analytics & attribution",
      "CRM-integrated lead tracking",
    ],
    faqs: [
      {
        question: "Do you handle SEO as part of digital marketing?",
        answer:
          "SEO is a dedicated service of its own — see our SEO page for organic search strategy. Digital marketing here covers paid, content, and social channels.",
      },
      {
        question: "Do you only work with software companies?",
        answer:
          "We specialize in B2B software and enterprise clients, but the same performance-marketing principles apply across industries we serve.",
      },
      {
        question: "Can you optimize an existing website instead of rebuilding it?",
        answer: "Yes, we offer conversion rate and marketing audits for existing websites without requiring a full rebuild.",
      },
    ],
    ctaTitle: "Need More Qualified Leads?",
    ctaDescription: "Get a free marketing audit from our team.",
  },
  {
    slug: "seo",
    name: "SEO",
    order: 12,
    seoTitle: "SEO Company in Ghaziabad | The Webcorners",
    metaDescription:
      "The Webcorners is an SEO company in Ghaziabad helping businesses rank higher with technical SEO, local SEO, and content that converts. Get a free SEO audit.",
    h1: "SEO Company in Ghaziabad",
    intro:
      "We build organic search strategies on solid technical foundations — because we also build the websites, our SEO starts with Core Web Vitals, structured data, and crawlability, not just keywords.",
    sections: [
      {
        heading: "Technical SEO Foundations",
        body: "Site speed, structured data, indexability, and crawlability are audited and fixed first — the parts of SEO most agencies skip because they don't build websites themselves.",
      },
      {
        heading: "Local SEO for Ghaziabad & NCR",
        body: "Google Business Profile optimization, local citations, and location-targeted content help you rank for searches from customers near you.",
      },
      {
        heading: "Keyword Research & Content",
        body: "We map keywords to real search intent and produce content designed to rank and convert, not just fill a blog calendar.",
      },
    ],
    features: [
      "Technical SEO audit & fixes",
      "On-page & content optimization",
      "Local SEO & Google Business Profile",
      "Keyword research & mapping",
      "Link building & authority growth",
      "Monthly rank tracking & reporting",
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer: "Typically 3-6 months for meaningful organic traffic growth, depending on competition and starting domain authority.",
      },
      {
        question: "Do you guarantee first-page rankings?",
        answer:
          "No ethical SEO company can guarantee rankings — search algorithms change constantly. We focus on sustainable growth in traffic and qualified leads instead.",
      },
      {
        question: "Do you handle local SEO for Ghaziabad-area searches?",
        answer:
          "Yes, local SEO — Google Business Profile, local citations, and location pages — is a core part of every SEO engagement for local businesses.",
      },
    ],
    ctaTitle: "Ready to Rank Higher?",
    ctaDescription: "Get a free SEO audit from our team.",
  },
  {
    slug: "api-development",
    name: "API Development",
    order: 13,
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
    order: 14,
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
  { step: "02", title: "Plan", description: "Scope, timeline, and technical architecture are locked down into a roadmap before any build work starts.", order: 2 },
  { step: "03", title: "Design", description: "UX flows and UI systems are designed and validated with stakeholders before a line of code is written.", order: 3 },
  { step: "04", title: "Develop", description: "Agile sprints with weekly demos, automated testing, and continuous integration.", order: 4 },
  { step: "05", title: "Deploy", description: "Production-grade releases with monitoring, security hardening, and performance tuning.", order: 5 },
  { step: "06", title: "Support", description: "SLA-backed maintenance, iteration, and scaling support post-launch.", order: 6 },
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
    content:
      "Enterprise CRM has spent the last decade getting better at recording what happened — deals logged, calls tracked, pipelines visualized. What's changed recently is that CRMs are starting to tell reps what to do next, not just what already occurred. That shift is being driven by two capabilities maturing at the same time: predictive lead scoring that's finally accurate enough to trust, and conversational AI copilots grounded in a company's own CRM data instead of generic chat responses.\n\n## Predictive Lead Scoring Gets Real Signals\n\nPredictive lead scoring isn't new, but early versions relied on shallow signals — job title, company size, a form fill. The models running inside CRMs today weigh behavioral signals across the full customer journey: email engagement patterns, response latency, deal velocity compared to similar historical deals, and sentiment extracted from call transcripts. The result is a score that updates in near real time as a lead's behavior changes, instead of a static number assigned at intake. For sales teams juggling more leads than they can manually triage, that difference determines whether reps spend their morning on the five deals actually worth chasing or working a list in the order it happened to load.\n\n## The Copilot Layer: Grounded, Not Generic\n\nThe bigger shift is the copilot layer sitting on top of the CRM. Early sales chatbots answered generic questions with generic answers, which is exactly why most sales teams ignored them. What's different now is retrieval-augmented generation: the copilot is grounded in a company's actual deal history, product documentation, and past win-loss notes before it generates a response. Ask it to draft a follow-up email for a stalled enterprise deal, and it references the actual objections raised in that account's call notes rather than producing a template that could apply to anyone. Ask it to forecast next quarter's pipeline, and it reasons from your team's historical close rates by deal stage, not an industry benchmark.\n\nThis matters most for sales managers, who are the ones actually accountable for forecast accuracy. A copilot that can summarize every deal at risk of slipping, flag which reps are sandbagging their pipeline, and draft a coaching note based on call transcripts turns a task that used to take a manager half a day of pipeline review into a five-minute check-in. That's not replacing the manager's judgment — it's removing the manual aggregation work that stood between them and making the call.\n\n## Adoption Depends on Data Hygiene and Trust\n\nAdoption isn't automatic, though. The CRMs seeing real gains from copilots are the ones where the underlying data was clean enough to trust in the first place — duplicate contacts, stale deal stages, and inconsistent field usage all degrade a copilot's output the same way they've always degraded reporting. Teams that skip the data hygiene step and expect the AI layer to compensate usually end up with a copilot that sounds confident and is wrong, which is worse than no copilot at all.\n\nThere's also a trust curve most sales organizations are still climbing. Reps who've been burned by bad lead-scoring models in the past are understandably skeptical of a system telling them which deals to prioritize. The rollouts that stick are the ones where the copilot's reasoning is visible — showing why a lead scored high, or which past deals a forecast is based on — rather than presenting a black-box number and asking reps to just trust it.\n\n## Beyond Lead Scoring: Renewals and Support\n\nLead scoring and follow-up drafting get most of the attention, but the same grounded-copilot approach applies just as well to renewal and churn risk on the account management side. A copilot that's aware of usage trends, support ticket volume, and contract terms can flag an at-risk renewal weeks before a human notices the pattern — and draft the outreach that addresses the specific risk signal, not a generic check-in email. Support teams are seeing similar gains: a copilot grounded in past resolved tickets and product documentation can draft a first-pass response to a new ticket in seconds, which a human agent reviews and sends rather than writing from scratch.\n\n## How to Roll This Out Well\n\nRolling this out well starts narrower than most teams expect. Rather than switching on lead scoring, forecasting, and a conversational copilot simultaneously, the CRMs that see the fastest adoption pick one high-friction workflow — usually follow-up drafting or deal-risk flagging — prove it out with a subset of reps, and expand once the output is trusted. Trying to ship every AI feature in one release usually means reps get overwhelmed by a system that's changed all at once, and abandon the parts that would have actually helped them.\n\n## Measuring Impact and Data Governance\n\nMeasuring whether any of this is actually working means tracking outcomes, not usage. A high adoption rate for a copilot feature that reps use to save five minutes without changing what they'd have done anyway isn't the win it looks like on a dashboard. The metrics that matter are further downstream — win rate on flagged at-risk deals, response time on AI-drafted follow-ups, forecast accuracy compared to the pre-copilot baseline. Teams that only track feature usage tend to keep funding AI tooling that looks adopted but isn't moving the numbers it was meant to move.\n\nThere's also a data governance question worth addressing before rollout, not after. Grounding a copilot in CRM data means that data — including anything sensitive a rep has logged in call notes — is now part of what the model can reference and, depending on the provider, potentially retain. Enterprise deployments need clarity on data residency, retention, and whether prompts and outputs are used for further model training, the same diligence you'd apply to any vendor touching customer data.\n\n## Conclusion\n\nWhen we build CRM systems for clients, we treat the copilot layer as inseparable from the CRM's data model, not a bolt-on feature added after the fact. Lead scoring and conversational AI are only as good as the pipeline structure, deal stages, and activity logging feeding them — which is why the highest-leverage work usually happens before a single AI feature gets switched on.",
    status: "published",
    publishedAt: new Date(),
  },
  {
    title: "ERP vs. Custom Software: What Manufacturing SMEs Should Choose",
    slug: "erp-vs-custom-software-manufacturing-smes",
    category: "ERP Development",
    excerpt: "Breaking down the tradeoffs between off-the-shelf ERP suites and custom-built operational systems.",
    content:
      "Every manufacturing SME eventually hits the same wall: spreadsheets and disconnected point solutions can't keep up with production complexity, and it's time to invest in a real operational system. The question that follows — off-the-shelf ERP or custom-built software — gets debated with more ideology than the decision deserves. The right answer depends on how standard your operations actually are, not on a general preference for 'proven' versus 'flexible.'\n\n## When Off-the-Shelf ERP Works — and Where It Breaks Down\n\nOff-the-shelf ERP suites earn their reputation for a reason: inventory management, basic financial accounting, and standard procurement workflows are solved problems. Platforms built for manufacturing have encoded years of best practice into their default configuration, which means an SME adopting one inherits that experience instead of reinventing it. If your production process — batch manufacturing, standard BOMs, conventional purchase-to-pay cycles — looks like most other manufacturers in your category, a configured ERP gets you to a working system faster and cheaper than a custom build ever will.\n\nThe trouble starts when your actual shop floor doesn't match the software's assumptions. Manufacturing SMEs frequently run processes shaped by specific machinery, regulatory requirements, or customer contracts that don't map cleanly onto a generic ERP's data model. When that happens, the implementation turns into endless customization layered on top of a platform that was never designed to bend that far — and now you're paying licensing fees for a system fighting your workflow instead of supporting it, plus consulting fees to keep bending it.\n\n## When Custom Software Wins\n\nCustom software flips that tradeoff. You get a system built around your actual production sequence, your actual approval chains, your actual reporting needs — no workarounds required. The cost is that you're building rather than configuring, which means a longer initial timeline and the responsibility of getting the architecture right the first time, since you don't inherit another vendor's years of refinement.\n\nThe practical test we walk clients through isn't 'ERP or custom' in the abstract — it's module by module. Finance and basic procurement are rarely worth building custom; the workflows are standardized enough that a configured platform serves them well. Production scheduling, batch tracking, and quality control tied to specific machinery are where custom logic usually earns its cost, because that's where the process itself is the competitive differentiator, not an administrative overhead to minimize.\n\n## The Hybrid Approach\n\nA hybrid approach is often the right call for growing manufacturers: run finance and HR on a configured platform, and build a custom production and inventory layer that integrates with it through a well-defined API. This gets you the maturity of proven software where your process is standard, and the flexibility of custom logic where it isn't — without committing to a full custom build before you know exactly which parts of your operation actually need it.\n\n## Don't Underestimate Data Migration\n\nWhatever direction you choose, data migration deserves more planning than it usually gets. Manufacturing SMEs often carry years of inventory history, supplier records, and production data in spreadsheets and legacy systems that were never designed to be exported cleanly. Underestimating this step is one of the most common reasons ERP rollouts run over schedule — not the software selection itself.\n\n## Lock-In and Total Cost of Ownership\n\nVendor lock-in is worth weighing on both sides, not just the custom-software side where it's usually raised. A configured ERP platform often ties you to that vendor's release cycle, pricing changes, and module roadmap — features you need get built when the vendor decides to build them, not when your operation needs them. Custom software has its own lock-in risk if it's built by a single external team with no documentation and no handover plan; the difference is that lock-in is a choice you can architect around, not an inherent property of building custom.\n\nTotal cost of ownership rarely favors whichever option looks cheaper in year one. Off-the-shelf ERP licensing costs are predictable but compound with users, modules, and support tiers over a five-year horizon, and customization work billed at consulting rates can quietly exceed the cost of the original build. Custom software front-loads cost into the build phase but the ongoing cost is largely your own maintenance capacity, not a vendor's pricing model. Neither is automatically cheaper — the honest comparison has to run the full five-year number, not just the deployment quote. Include the cost of the workarounds you'd otherwise keep running on the modules you don't rebuild, since that overhead doesn't disappear just because it wasn't part of the ERP quote.\n\n## Why ERP Rollouts Really Fail\n\nMost ERP rollouts that stall don't fail on the technology — they fail on change management. A system that accurately reflects your production process is still a system operators have to actually use instead of the spreadsheet they've relied on for years, and rollouts that skip floor-level training in favor of a management-only sign-off tend to see shadow spreadsheets creep back within months. Budget training time and a transition period where both systems run in parallel, not a hard cutover date.\n\nA phased rollout beats a big-bang launch for manufacturing SMEs specifically, because production can't tolerate an extended outage while a system beds in. Start with a single facility or product line, validate that the system reflects reality under real operating conditions, then extend module by module or site by site. It takes longer to reach full deployment, but it means a configuration gap gets caught on one line instead of across the whole operation.\n\n## Conclusion\n\nThe decision that actually matters isn't which vendor logo ends up on the contract. It's an honest audit of which parts of your operation are genuinely standard, and which parts are where your business actually wins. Build custom where the process is your edge. Configure where it isn't.",
    status: "published",
    publishedAt: new Date(),
  },
  {
    title: "Building HIPAA-Aligned Patient Portals: A Practical Checklist",
    slug: "hipaa-aligned-patient-portals-checklist",
    category: "Healthcare",
    excerpt: "The architecture, compliance, and UX decisions behind a successful healthcare platform launch.",
    content:
      "Every healthcare platform eventually has to answer the same question from a compliance officer: can you prove this system protects patient data the way HIPAA requires, not just claim that it does? Building a patient portal that's genuinely HIPAA-aligned means treating compliance as an architectural constraint from day one, not a security review bolted on before launch. Here's the checklist we actually work through with healthcare clients.\n\n## Start With Data Classification\n\nStart with data classification. Not every field in a patient record carries the same risk, and treating all data as equally sensitive usually leads to over-engineering some parts of the system while under-protecting others. Protected health information — diagnoses, treatment notes, insurance details, anything that identifies a patient alongside health data — needs to be explicitly mapped before any database schema gets designed, so encryption, access controls, and audit logging can be applied where they actually matter.\n\n## Encryption at Rest and in Transit\n\nEncryption is table stakes, but it has to cover both states data actually exists in. Data at rest needs to be encrypted in the database and in backups, not just the primary production copy. Data in transit needs TLS enforced across every connection — the portal, any API integrations with lab systems or EHRs, and internal service-to-service calls. The gap we see most often in audits isn't the primary database; it's a forgotten backup, log file, or third-party integration that's quietly moving PHI unencrypted.\n\n## Role-Based Access Control\n\nAccess control has to be role-based and genuinely granular, not a binary 'staff versus patient' split. A front-desk coordinator scheduling appointments doesn't need visibility into clinical notes. A billing specialist doesn't need access to treatment history beyond what's required for claims. The principle of least privilege isn't just a security best practice here — it's what a HIPAA audit specifically tests for, and role scoping that's too broad is one of the most common findings.\n\n## Audit Logging Isn't Optional\n\nAudit logging is where a lot of otherwise well-built portals fall short. Every access to a patient record — who viewed it, when, and what they did — needs to be logged in a way that can't be altered after the fact. This isn't just about detecting breaches after they happen; it's a HIPAA requirement in its own right, and it's the first thing an auditor asks to see evidence of.\n\n## Business Associate Agreements\n\nBusiness Associate Agreements matter just as much as the technical build. Any third-party service touching PHI — cloud hosting, email delivery, analytics, even a customer support tool — needs a signed BAA before it goes anywhere near patient data. We've seen otherwise well-architected portals stumble in compliance reviews because a vendor integration was added without the paperwork behind it, not because of a technical gap.\n\n## Consent and Disclosure Workflows\n\nConsent and disclosure workflows need to be built into the UX, not treated as a legal afterthought. Patients need clear, explicit consent flows before data is shared with a new provider or system, and the portal needs to make it obvious what they're agreeing to — vague consent language buried in a terms page doesn't hold up under scrutiny.\n\n## Telehealth and Patient Authentication\n\nTelehealth features add a layer most generic compliance checklists miss. Video consultation platforms need to be covered under the same BAA framework as the rest of the stack, and session recordings — if you keep them — are PHI that needs the same encryption and retention policy as any other patient record, not a separate, looser standard because it's video rather than text.\n\nPatient-facing authentication deserves more scrutiny than it usually gets. A password-only login for a portal holding diagnoses and treatment history is a weak point auditors flag immediately. Multi-factor authentication should be standard for any account with access to PHI, and password reset and account recovery flows need the same rigor — a poorly designed 'forgot password' flow is a common way patient accounts get compromised, regardless of how strong the primary login is.\n\n## Integrating With EHR Systems\n\nIntegrating with existing EHR systems is usually where healthcare projects meet real complexity, because most exchange happens over HL7 or FHIR standards that carry their own data handling requirements. Getting this wrong doesn't just risk a broken integration — it risks PHI moving through a channel that was never audited for compliance in the first place. Every integration point needs to be mapped and reviewed with the same seriousness as the primary database, not treated as a lower-risk technical detail because it's 'just an API call.'\n\n## Ongoing Compliance: Training and Incident Response\n\nThe best-architected system still depends on the people using it every day. Staff training on PHI handling — what can be discussed over email, what needs to go through the portal's secure messaging, how to recognize a phishing attempt targeting patient data — closes a gap that no amount of encryption addresses. Auditors increasingly ask for evidence of ongoing staff training, not just a policy document from onboarding, because a compliance culture that isn't reinforced tends to erode within a year. A short refresher every quarter, tied to real incidents your team has seen (even near-misses), tends to stick far better than an annual training module nobody remembers past the sign-off.\n\nFinally, plan for the incident you hope never happens. HIPAA requires a documented incident response plan with defined notification timelines, and that plan needs to be tested, not just written and filed away. Portals we build include monitoring and alerting specifically designed to catch anomalous access patterns early, because catching an issue in hours instead of months is the difference between a contained incident and a reportable one.\n\n## Conclusion\n\nNone of this is a one-time checklist you complete before launch and forget. Compliance requirements evolve, integrations get added, and access patterns change as a platform scales — which is why we treat HIPAA alignment as an ongoing part of how a patient portal is maintained, not a box checked once during the build.",
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
      "Most growing companies hit the same wall: the SaaS tools that got them to their first hundred customers start fighting their workflows instead of supporting them. The question isn't whether SaaS is 'bad' — it's whether your workflow is still generic enough for a generic tool to handle.\n\n## Start With the Cost of the Workaround\n\nStart with the cost of the workaround, not the cost of the software. If your team is exporting spreadsheets, running manual reconciliation, or duct-taping three tools together with Zapier just to get one process working, that operational overhead is the real cost — and it compounds every month you delay a decision.\n\nThe clearest signal is rarely visible from the leadership level — it's visible on the team actually doing the work. Ask the people running the process day to day where they've built their own workarounds, and you'll get a more accurate list of gaps than any feature comparison spreadsheet. If three different people have independently built the same spreadsheet macro to patch the same hole, that's not a training problem — it's a sign the SaaS tool has genuinely reached its limit for that workflow.\n\n## Three Signals to Look For\n\nLook at three signals specifically: whether your core workflow is a genuine differentiator (not just 'slightly different' from the SaaS default), whether you're paying for seats or usage tiers that don't map to how your team actually works, and whether integration between your existing tools has become its own maintenance burden.\n\n## When Custom Software Wins\n\nCustom software wins when your process is the product — when how you do something is part of your competitive advantage. SaaS wins when the process is a solved problem and your advantage lies elsewhere. Most teams don't need an all-or-nothing choice either; a common middle path is keeping SaaS for commodity functions (email, payments, support) while building a custom core around the workflow that actually differentiates the business.\n\n## Factor In Switching Cost and Integration\n\nSwitching cost deserves its own line in the calculation, separate from the workaround cost. Migrating years of data and retraining a team away from a SaaS tool isn't free, even when the tool itself has become the bottleneck. That cost doesn't argue against building custom — it argues for scoping the first custom module narrowly around the highest-friction workflow, proving it out, and expanding from there, rather than attempting a full platform replacement in one move.\n\nBudget for integration, not just for the build itself. A custom module rarely lives in isolation — it needs to talk to whatever SaaS tools you're keeping, whether that's a payments processor, an email platform, or an existing support desk. Teams that scope the build but not the integration layer are usually the ones surprised by a second phase of work six months after 'launch.'\n\n## Involve Engineering Early\n\nInvolve engineering in the decision early, not after the business case is already written. A workflow that looks straightforward from the outside can turn out to be genuinely difficult to replicate outside the SaaS tool's data model, and a rough technical estimate up front prevents the business case from being built on a false assumption about how fast the custom version can ship.\n\n## Vendor Risk and Your Own Capacity to Own It\n\nSaaS carries a risk that's easy to underweight until it happens: the vendor's roadmap, pricing, or continued existence isn't fully in your control. A tool that's core to your operations can raise prices sharply at renewal, deprecate a feature you depend on, or get acquired and quietly sunset. None of that is a reason to avoid SaaS broadly, but it's a real cost that belongs in the calculation for any workflow you're treating as permanently outsourced rather than a stopgap.\n\nWhether you actually have the engineering capacity to own custom software matters as much as whether you should build it. A custom module isn't a one-time project — it needs someone accountable for security patches, dependency updates, and bug fixes for as long as the business runs on it. Teams that build custom without budgeting for that ongoing ownership end up with software that was well-built at launch and increasingly risky two years later, which is a worse outcome than staying on SaaS longer than ideal.\n\n## A Familiar Pattern\n\nConsider a team running customer onboarding through a generic project-management SaaS tool. Each new customer means a project template, a set of tasks assigned across three departments, and a manual status update sent to the customer at each milestone — a process the tool wasn't built to model, patched together with naming conventions and manual reminders. The workaround cost isn't the SaaS subscription; it's the hours spent keeping the workaround from silently breaking as volume grows. That's the pattern worth watching for, regardless of industry: not that a tool feels dated, but that the operational overhead of forcing your process through it keeps growing faster than your headcount.\n\n## A Quick Decision Checklist\n\nA short gut-check before committing either way: can you name the specific workaround costing the most time each week? Does the team doing that work agree it's the real bottleneck, not just the most visible one? Do you have — or are you hiring — the engineering capacity to own what you build for years, not just to ship it? And is the workflow itself stable enough that building around it today won't mean rebuilding in six months because the process is still evolving? A 'no' to any of these usually means the timing isn't right yet, even if the underlying case for custom software is sound.\n\n## Conclusion\n\nThe teams that get this decision wrong usually do so by deciding too early (building custom before the workflow has stabilized) or too late (staying on generic tools long after the workarounds have become more expensive than a build). Revisit the decision at each major growth stage, not just once.",
    status: "published",
    publishedAt: new Date(),
  },
];

const pageContents = [
  {
    pageKey: "home",
    name: "Home Page",
    order: 1,
    seoTitle: "Website Designing & Development Company in Ghaziabad",
    metaDescription:
      "The Webcorners is a website designing & development company serving Ghaziabad and Bulandshahr — websites, eCommerce, custom software, SEO and digital marketing.",
    h1: "Website Designing & Development Company in Ghaziabad",
    heroDescription: "",
    introText: "",
    sections: [],
  },
  {
    pageKey: "about",
    name: "About Page",
    order: 2,
    seoTitle: "About Us",
    metaDescription:
      "The Webcorners is a premium software development and AI solutions company transforming ideas into digital success for startups, SMEs, and enterprises.",
    h1: "Building Digital Corners of Success",
    heroDescription:
      "We're a team of engineers, designers, and strategists building software and AI products for startups, SMEs, and enterprises.",
    introText: "",
    sections: [],
  },
  {
    pageKey: "industries",
    name: "Industries Page",
    order: 3,
    seoTitle: "Industries We Serve",
    metaDescription:
      "The Webcorners builds software for startups, SMEs, enterprises, manufacturing, healthcare, education, and the events & exhibition industry.",
    h1: "Built for the Sectors That Drive Growth",
    heroDescription: "Domain-specific playbooks, not generic templates — for the industries that matter most.",
    introText: "",
    sections: [],
  },
  {
    pageKey: "portfolio",
    name: "Portfolio Page",
    order: 4,
    seoTitle: "Portfolio",
    metaDescription:
      "Explore software, AI, and platform projects delivered by The Webcorners across healthcare, manufacturing, education, retail, and logistics.",
    h1: "Real Products, Real Outcomes",
    heroDescription: "A glimpse of the platforms we've designed, built, and scaled across industries.",
    introText:
      "Every project below started the same way — a real operational problem that spreadsheets, generic SaaS tools, or a legacy system could no longer keep up with. From patient portals handling thousands of appointments to ERP rollouts replacing manual inventory tracking on a factory floor, each build was scoped around the specific workflow it needed to support, not a one-size-fits-all template.\n\nFilter by industry below to see the kind of work we've done in a sector similar to yours, or browse everything to get a feel for the range of problems we take on.",
    sections: [],
  },
  {
    pageKey: "case-studies",
    name: "Case Studies Page",
    order: 5,
    seoTitle: "Case Studies",
    metaDescription:
      "Detailed case studies showing how The Webcorners delivered measurable results for healthcare, manufacturing, and education clients.",
    h1: "Measurable Impact, Documented",
    heroDescription: "Dive into how we solved complex problems for clients across industries.",
    introText:
      "Case studies are where the numbers behind a project actually get tested. Anyone can claim a platform is fast, scalable, or built for growth — what matters is whether the client's order-to-cash time actually dropped, whether the patient portal actually scaled past a quarter-million users, or whether the CRM actually moved the conversion rate. Each case below documents a real engagement, the problem we walked into, and the outcome the client saw after launch.",
    sections: [],
  },
  {
    pageKey: "locations",
    name: "Locations Page",
    order: 6,
    seoTitle: "Areas We Serve in Ghaziabad & Bulandshahr",
    metaDescription:
      "The Webcorners delivers custom software, AI, and website development across Ghaziabad and Bulandshahr — including Govindpuram, Raj Nagar, Kavi Nagar, and more.",
    h1: "Software Development Company Serving Ghaziabad & Bulandshahr",
    heroDescription: "Local expertise, wide reach — find the page for your area.",
    introText:
      "The Webcorners is based in Govindpuram, Ghaziabad, with a branch office in Bulandshahr, and we work with businesses across the city's key commercial and residential areas — from established hubs like Raj Nagar and Kavi Nagar to growing neighborhoods further out. Being local means faster turnaround on site visits, in-person kickoff meetings when they matter, and a team that already understands the businesses operating in your area.\n\nPick your area below to see the specific software, website, and digital services we provide there, along with local landmarks and FAQs relevant to that part of the city. Each page is built around the businesses actually operating in that neighborhood, not a generic city-wide template repeated with a different name.",
    sections: [],
  },
  {
    pageKey: "contact",
    name: "Contact Page",
    order: 7,
    seoTitle: "Contact Us",
    metaDescription:
      "Get in touch with The Webcorners for a free consultation on your software, AI, or digital project. We respond within one business day.",
    h1: "Let's Build Something Great",
    heroDescription:
      "Tell us about your project and our team will respond within one business day with a scoped recommendation.",
    introText:
      "Whether you have a fully scoped project or just an idea you want to validate, we're happy to talk it through — no pressure, no obligation. Every request is reviewed by our team within one business day. If your project needs more than a quick email exchange, we'll schedule a short call to understand your goals, timeline, and budget before recommending an approach — you'll get a straight answer on whether we're the right fit, not a generic sales pitch.\n\nPrefer to skip the form? Call or WhatsApp us directly using the details below, or stop by our Govindpuram office if you're local to Ghaziabad. We also work with clients outside the city and across India — most of our engagement happens over calls and shared documents regardless of where your team is based.",
    sections: [],
  },
  {
    pageKey: "services",
    name: "Services Listing Page",
    order: 8,
    seoTitle: "Our Services",
    metaDescription:
      "Explore The Webcorners' full range of software, AI, and digital services — from custom software and CRM/ERP to AI solutions and enterprise applications.",
    h1: "End-to-End Software & AI Services",
    heroDescription: "One team, every capability — from a single MVP to a full enterprise rollout.",
    introText: "",
    sections: [],
  },
  {
    pageKey: "blog",
    name: "Blog Listing Page",
    order: 9,
    seoTitle: "Blog",
    metaDescription:
      "Insights on software development, AI, CRM, ERP, and digital strategy from The Webcorners team.",
    h1: "From the Webcorners Blog",
    heroDescription: "Perspectives on software, AI, and building for scale.",
    introText: "",
    sections: [],
  },
  {
    pageKey: "terms",
    name: "Terms of Service Page",
    order: 10,
    seoTitle: "Terms of Service",
    metaDescription: "Terms of Service for The Webcorners — the terms governing use of our website and services.",
    h1: "Terms of Service",
    heroDescription:
      "The terms and conditions governing your use of the Webcorners website and the services we provide. Last updated: January 2026.",
    introText: "",
    sections: [
      {
        title: "Acceptance of Terms",
        body: "By accessing or using the The Webcorners website, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website.",
      },
      {
        title: "Services",
        body: "Any software development, AI, or consulting services we provide are governed by a separate signed agreement or statement of work that takes precedence over these general website terms.",
      },
      {
        title: "Intellectual Property",
        body: "All content on this website, including text, graphics, logos, and the Webcorners brand, is the property of The Webcorners and may not be reproduced without written permission.",
      },
      {
        title: "Consultation & Contact Forms",
        body: "Submitting a consultation request or contact form does not create a contractual obligation. Project terms, pricing, and deliverables are confirmed only through a signed proposal or agreement.",
      },
      {
        title: "Limitation of Liability",
        body: "The Webcorners is not liable for any indirect, incidental, or consequential damages arising from the use of this website or reliance on its content.",
      },
      {
        title: "Governing Law",
        body: "These terms are governed by the laws of India, without regard to conflict of law principles.",
      },
      {
        title: "Changes to These Terms",
        body: "We may revise these Terms of Service from time to time. Continued use of the website after changes constitutes acceptance of the updated terms.",
      },
    ],
  },
  {
    pageKey: "privacy-policy",
    name: "Privacy Policy Page",
    order: 11,
    seoTitle: "Privacy Policy",
    metaDescription: "Privacy Policy for The Webcorners — how we collect, use, and protect your information.",
    h1: "Privacy Policy",
    heroDescription:
      "How the Webcorners collects, uses, and protects your information when you use our website and services. Last updated: January 2026.",
    introText: "",
    sections: [
      {
        title: "Information We Collect",
        body: "We collect information you provide directly to us, such as your name, email address, phone number, and project details when you submit a consultation request or contact form. We also collect standard analytics data, including pages visited and approximate location, to improve our website.",
      },
      {
        title: "How We Use Your Information",
        body: "We use the information you provide to respond to consultation requests, deliver the services you request, and communicate with you about your project. We do not sell your personal information to third parties.",
      },
      {
        title: "Cookies & Analytics",
        body: "Our website uses cookies and analytics tools to understand site usage and improve performance. You can disable cookies in your browser settings, though some site features may not function correctly.",
      },
      {
        title: "Data Security",
        body: "We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is completely secure.",
      },
      {
        title: "Third-Party Services",
        body: "We may use third-party services for hosting, analytics, and communication (such as email and WhatsApp). These providers have access to information only as needed to perform their functions.",
      },
      {
        title: "Your Rights",
        body: "You may request access to, correction of, or deletion of your personal data by contacting us at info@thewebcorners.com.",
      },
      {
        title: "Changes to This Policy",
        body: "We may update this Privacy Policy from time to time. Material changes will be reflected by an updated revision date on this page.",
      },
    ],
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

  // Old slugs replaced by custom-software-development / website-designing +
  // web-development — remove so they don't linger as orphaned duplicates.
  await Service.deleteMany({ slug: { $in: ["software-development", "website-development"] } });

  await upsertMany(Service, services, "slug");
  await upsertMany(PortfolioItem, portfolioItems, "title");
  await upsertMany(CaseStudy, caseStudies, "title");
  await upsertMany(Testimonial, testimonials, "name");
  await upsertMany(TrustedLogo, trustedLogos, "name");
  await upsertMany(Stat, stats, "label");
  await upsertMany(Industry, industries, "name");
  await upsertMany(FeaturedSolution, featuredSolutions, "title");
  await upsertMany(PageContent, pageContents, "pageKey");
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
