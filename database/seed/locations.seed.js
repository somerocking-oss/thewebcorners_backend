const connectDB = require("../../config/db");
const Location = require("../models/Location");

const locations = [
  {
    slug: "govindpuram",
    area: "Govindpuram",
    order: 1,
    seoTitle: "Software Development Company in Govindpuram, Ghaziabad | The Webcorners",
    metaDescription:
      "The Webcorners is headquartered in Govindpuram, Ghaziabad — offering custom software, AI, CRM/ERP, and website development to local businesses. Book a free consultation.",
    h1: "Software & AI Development Company in Govindpuram, Ghaziabad",
    intro:
      "The Webcorners is headquartered right here in Govindpuram, Ghaziabad. Being based locally means faster response times, in-person meetings on request, and a team that understands the businesses operating along GT Road and the wider Ghaziabad market.",
    sections: [
      {
        heading: "Home-Ground Advantage for Govindpuram Businesses",
        body: "As our head office locality, Govindpuram clients get the shortest path to our engineering team — same-day meetings, faster turnaround on change requests, and direct access to project leads without layers of account management.",
      },
      {
        heading: "Built for Govindpuram's Retail, Services & SME Ecosystem",
        body: "Govindpuram is home to a dense mix of retail outlets, service businesses, and growing SMEs. We build the websites, CRMs, and internal tools these businesses need to move off spreadsheets and manual processes without disrupting daily operations.",
      },
    ],
    landmarks: ["GT Road", "Ghaziabad Railway Station", "Nehru Nagar", "Shastri Nagar"],
    faqs: [
      {
        question: "Is The Webcorners actually based in Govindpuram?",
        answer:
          "Yes — Govindpuram is our head office locality, so in-person meetings and site visits for local clients are easy to arrange.",
      },
      {
        question: "What kind of businesses in Govindpuram do you work with?",
        answer:
          "Retail chains, local service providers, and SMEs looking to digitize operations with a website, CRM, or custom internal tool.",
      },
    ],
    ctaTitle: "Meet Our Team in Govindpuram",
    ctaDescription: "Since we're local, an in-person consultation is easy to arrange. Get in touch to schedule one.",
  },
  {
    slug: "shastri-nagar",
    area: "Shastri Nagar",
    order: 2,
    seoTitle: "Software Development Company in Shastri Nagar, Ghaziabad | The Webcorners",
    metaDescription:
      "Custom software, websites, and CRM/ERP development for businesses in Shastri Nagar, Ghaziabad. Local team, fast turnaround. Get a free consultation from The Webcorners.",
    h1: "Software & Website Development Services in Shastri Nagar, Ghaziabad",
    intro:
      "Shastri Nagar sits at the commercial heart of old Ghaziabad, close to the railway station and district administrative offices. We help the traders, professional service firms, and growing businesses here replace manual processes with software built around how they actually work.",
    sections: [
      {
        heading: "Serving Shastri Nagar's Trading & Professional Services Hub",
        body: "From wholesale traders to accounting and legal practices, Shastri Nagar's business community relies on paperwork-heavy processes that software can simplify. We build lightweight CRMs, billing tools, and business websites that fit existing workflows instead of forcing a rebuild.",
      },
      {
        heading: "Local Support, Enterprise-Grade Engineering",
        body: "Being minutes from Shastri Nagar via GT Road, our team can meet on-site when needed while still delivering the same engineering discipline — code ownership, testing, and post-launch support — we use for enterprise clients.",
      },
    ],
    landmarks: ["Ghaziabad Railway Station", "GT Road", "Ghaziabad District Court", "Govindpuram"],
    faqs: [
      {
        question: "Do you work with trading and wholesale businesses in Shastri Nagar?",
        answer:
          "Yes, we've built billing, inventory, and CRM tools for trading businesses that need to move off manual ledgers.",
      },
      {
        question: "Can I get a website built for my Shastri Nagar business?",
        answer:
          "Absolutely — from a simple business website to a full e-commerce or booking platform, we scope it to your budget and timeline.",
      },
    ],
    ctaTitle: "Digitize Your Shastri Nagar Business",
    ctaDescription: "Talk to our team about replacing manual processes with software built for how you work.",
  },
  {
    slug: "kavi-nagar",
    area: "Kavi Nagar",
    order: 3,
    seoTitle: "Software Development Company in Kavi Nagar, Ghaziabad | The Webcorners",
    metaDescription:
      "The Webcorners builds ERP, inventory, and custom software for manufacturers and industrial units in Kavi Nagar, Ghaziabad. Free consultation available.",
    h1: "Industrial Software & ERP Development in Kavi Nagar, Ghaziabad",
    intro:
      "Kavi Nagar's industrial area is one of Ghaziabad's established manufacturing belts. We work with the factories, workshops, and industrial suppliers here to build ERP, inventory, and production-tracking systems that hold up to real shop-floor conditions.",
    sections: [
      {
        heading: "ERP & Inventory Systems for Kavi Nagar Manufacturers",
        body: "Manufacturing units in Kavi Nagar Industrial Area often outgrow spreadsheets fast — raw material tracking, production scheduling, and vendor management all need a system that talks to each other. We build ERP and inventory software tailored to your specific production line, not a generic template.",
      },
      {
        heading: "From Shop Floor to Back Office",
        body: "We connect the operational side (inventory, production, dispatch) with the business side (billing, vendor payments, reporting) so owners get one accurate view of the business instead of reconciling three different registers.",
      },
    ],
    landmarks: ["Kavi Nagar Industrial Area", "GT Road", "Ghaziabad Railway Station", "Raj Nagar"],
    faqs: [
      {
        question: "Do you build ERP software specifically for manufacturers?",
        answer:
          "Yes, ERP and inventory management for manufacturing units is one of our core service areas — including production tracking and vendor management.",
      },
      {
        question: "Can you integrate with our existing billing or accounting software?",
        answer: "In most cases yes — we scope integration requirements during discovery before development starts.",
      },
    ],
    ctaTitle: "Streamline Your Kavi Nagar Manufacturing Unit",
    ctaDescription: "Get a free consultation on ERP, inventory, or production-tracking software built for your factory floor.",
  },
  {
    slug: "raj-nagar",
    area: "Raj Nagar",
    order: 4,
    seoTitle: "Software Development Company in Raj Nagar, Ghaziabad | The Webcorners",
    metaDescription:
      "Custom software, CRM, and website development for corporates, retailers, and professionals in Raj Nagar, Ghaziabad. Talk to The Webcorners for a free consultation.",
    h1: "Software Development Services for Raj Nagar, Ghaziabad Businesses",
    intro:
      "Raj Nagar, anchored by its District Centre commercial hub, is home to corporate offices, retail brands, and professional firms. We build the CRMs, websites, and business applications that help these teams run leaner and sell more effectively.",
    sections: [
      {
        heading: "Software for Raj Nagar's Corporate & Retail Businesses",
        body: "Whether you're a retail brand managing multiple outlets or a professional services firm managing client relationships, we build CRM and business management software that centralizes what's currently scattered across spreadsheets and WhatsApp.",
      },
      {
        heading: "Premium Websites for Raj Nagar Brands",
        body: "Raj Nagar District Centre businesses compete on brand perception as much as product. We design and build fast, SEO-optimized websites that match the professional standard your customers expect.",
      },
    ],
    landmarks: ["Raj Nagar District Centre", "Kavi Nagar", "Raj Nagar Extension", "GT Road"],
    faqs: [
      {
        question: "Do you build websites for retail brands in Raj Nagar District Centre?",
        answer: "Yes, from brand websites to full e-commerce platforms, tailored to retail and corporate businesses in the area.",
      },
      {
        question: "Can you build a CRM to manage our client relationships?",
        answer: "Yes — CRM development is one of our core services, customized to your sales and client-management process.",
      },
    ],
    ctaTitle: "Grow Your Raj Nagar Business Online",
    ctaDescription: "Get a free consultation on a website, CRM, or custom software project.",
  },
  {
    slug: "raj-nagar-extension",
    area: "Raj Nagar Extension",
    order: 5,
    seoTitle: "Software Development Company in Raj Nagar Extension, Ghaziabad | The Webcorners",
    metaDescription:
      "The Webcorners helps new and growing businesses in Raj Nagar Extension, Ghaziabad build websites, CRMs, and custom software. Free consultation available.",
    h1: "Software & Website Development in Raj Nagar Extension, Ghaziabad",
    intro:
      "Raj Nagar Extension is one of Ghaziabad's fastest-growing residential and commercial belts, with new societies, retail outlets, and startups launching every year. We help these businesses build a strong digital foundation from day one.",
    sections: [
      {
        heading: "Built for a Fast-Growing Locality",
        body: "New businesses in Raj Nagar Extension often need to move quickly — a professional website, a booking or ordering system, or a lightweight CRM to manage early customers. We scope MVP-first builds that get you live fast without locking you into a rigid platform.",
      },
      {
        heading: "Scaling With Raj Nagar Extension's Growth",
        body: "As the area's residential societies and commercial footfall keep expanding, we help local businesses scale their systems alongside — from a single-location setup to multi-outlet inventory and CRM as the business grows.",
      },
    ],
    landmarks: ["Raj Nagar", "NH-9", "Meerut Road", "Mohan Nagar"],
    faqs: [
      {
        question: "We're a new business in Raj Nagar Extension — can you help us launch fast?",
        answer: "Yes, we scope MVP-first builds so you can get a website or core system live in weeks, then iterate as you grow.",
      },
      {
        question: "Do you support businesses as they scale to multiple locations?",
        answer: "Yes, we design systems with multi-location and multi-outlet growth in mind from the start.",
      },
    ],
    ctaTitle: "Launch Your Raj Nagar Extension Business Online",
    ctaDescription: "Get a free consultation on a website, booking system, or CRM built for a fast start.",
  },
  {
    slug: "sanjay-nagar",
    area: "Sanjay Nagar",
    order: 6,
    seoTitle: "Software Development Company in Sanjay Nagar, Ghaziabad | The Webcorners",
    metaDescription:
      "Websites, CRM, and custom software development for businesses and institutions in Sanjay Nagar, Ghaziabad. Free consultation with The Webcorners.",
    h1: "Software Development Services in Sanjay Nagar, Ghaziabad",
    intro:
      "Sanjay Nagar's central location near the district court and administrative offices makes it home to law firms, consultancies, and local businesses that need reliable, professional digital tools. We build software that matches that professional standard.",
    sections: [
      {
        heading: "Professional Software for Sanjay Nagar Firms",
        body: "Law firms, consultancies, and service businesses in Sanjay Nagar need case management, client tracking, and documentation systems that are secure and easy to use — not bloated enterprise software. We build exactly that scope, nothing more.",
      },
      {
        heading: "Websites That Build Local Credibility",
        body: "For many Sanjay Nagar businesses, a website is the first impression a prospective client gets. We build fast, professional websites optimized to rank locally and convert visitors into enquiries.",
      },
    ],
    landmarks: ["Ghaziabad District Court", "Raj Nagar", "GT Road", "Patel Nagar"],
    faqs: [
      {
        question: "Do you build client/case management systems for professional firms?",
        answer: "Yes, we build custom client and case tracking tools scoped to how your firm actually operates.",
      },
      {
        question: "Can you help my business rank locally in Ghaziabad search results?",
        answer: "Yes, all our websites are built with technical and local SEO best practices from the ground up.",
      },
    ],
    ctaTitle: "Upgrade Your Sanjay Nagar Business's Digital Presence",
    ctaDescription: "Get a free consultation on a website or custom software project.",
  },
  {
    slug: "patel-nagar",
    area: "Patel Nagar",
    order: 7,
    seoTitle: "Software Development Company in Patel Nagar, Ghaziabad | The Webcorners",
    metaDescription:
      "The Webcorners builds websites, CRM, and custom software for local businesses in Patel Nagar, Ghaziabad. Get a free consultation today.",
    h1: "Software & Website Development in Patel Nagar, Ghaziabad",
    intro:
      "Patel Nagar's mix of local retail, small manufacturing units, and service businesses needs practical, affordable software — not oversized enterprise systems. We scope every project to fit the business, not the other way around.",
    sections: [
      {
        heading: "Right-Sized Software for Patel Nagar Businesses",
        body: "Many businesses in Patel Nagar are still running on registers, spreadsheets, and WhatsApp for order-taking. We build lightweight, affordable tools — billing, inventory, or simple CRM — that solve the actual bottleneck without a six-figure enterprise price tag.",
      },
      {
        heading: "A Website That Actually Brings In Customers",
        body: "We build business websites optimized to show up when someone nearby searches for your service — not just a digital brochure that sits unseen.",
      },
    ],
    landmarks: ["Shastri Nagar", "Govindpuram", "GT Road", "Ghaziabad Railway Station"],
    faqs: [
      {
        question: "Is custom software affordable for a small business in Patel Nagar?",
        answer: "Yes — we scope projects to the actual problem you're solving, which keeps small-business builds practical and affordable.",
      },
      {
        question: "Can you build a simple ordering or billing system for my shop?",
        answer: "Yes, this is exactly the kind of right-sized project we regularly build for local retail and service businesses.",
      },
    ],
    ctaTitle: "Simplify Your Patel Nagar Business Operations",
    ctaDescription: "Get a free consultation on a website, billing tool, or simple CRM.",
  },
  {
    slug: "pandav-nagar",
    area: "Pandav Nagar",
    order: 8,
    seoTitle: "Software Development Company in Pandav Nagar, Ghaziabad | The Webcorners",
    metaDescription:
      "Custom software, websites, and CRM development for local businesses in Pandav Nagar, Ghaziabad. Book a free consultation with The Webcorners.",
    h1: "Software Development Services in Pandav Nagar, Ghaziabad",
    intro:
      "Pandav Nagar is a growing residential and small-business locality in Ghaziabad. We help local shop owners, service providers, and small enterprises here get online with websites and simple digital tools that fit their budget.",
    sections: [
      {
        heading: "Getting Pandav Nagar Businesses Online",
        body: "A large share of Pandav Nagar's local businesses still don't have a website or any way for customers to find them online. We build fast, affordable business websites so local searches actually lead to your business.",
      },
      {
        heading: "Simple Tools for Everyday Operations",
        body: "From appointment booking to basic customer records, we build lightweight software that solves one clear problem well — instead of an oversized system nobody on your team ends up using.",
      },
    ],
    landmarks: ["Vijay Nagar", "Raj Nagar Extension", "Meerut Road", "Mohan Nagar"],
    faqs: [
      {
        question: "Do you build websites for small shops and local businesses?",
        answer: "Yes — this is one of the most common projects we take on, scoped to be fast and affordable.",
      },
      {
        question: "How long does it take to get a basic business website live?",
        answer: "A straightforward business website typically launches within a few weeks of kickoff.",
      },
    ],
    ctaTitle: "Get Your Pandav Nagar Business Online",
    ctaDescription: "Talk to us about a website or simple digital tool for your business.",
  },
  {
    slug: "muradnagar",
    area: "Muradnagar",
    order: 9,
    seoTitle: "Software Development Company in Muradnagar, Ghaziabad | The Webcorners",
    metaDescription:
      "The Webcorners builds ERP, inventory, and custom software for industrial and trading units in Muradnagar, Ghaziabad. Free consultation available.",
    h1: "Software & ERP Development for Muradnagar, Ghaziabad Businesses",
    intro:
      "Muradnagar, along the Delhi-Meerut industrial corridor, is home to manufacturing units, warehouses, and trading businesses. We build ERP, inventory, and logistics-friendly software suited to how goods actually move through these operations.",
    sections: [
      {
        heading: "ERP & Inventory for Muradnagar's Industrial Units",
        body: "Manufacturing and trading businesses along the Delhi-Meerut corridor deal with raw material sourcing, production, and dispatch logistics that spreadsheets struggle to track accurately. We build ERP systems scoped to your specific production and dispatch flow.",
      },
      {
        heading: "Supporting Muradnagar's Growing Trade Base",
        body: "Whether it's a small trading firm or an established manufacturing unit, we build billing, vendor management, and reporting tools that give owners one accurate picture of the business instead of three disconnected registers.",
      },
    ],
    landmarks: ["Delhi-Meerut Road (NH-58)", "Muradnagar Cantonment", "Duhai", "Modinagar"],
    faqs: [
      {
        question: "Do you work with manufacturing and trading units in Muradnagar?",
        answer: "Yes, ERP and inventory software for manufacturing and trading businesses is one of our core service areas.",
      },
      {
        question: "Can your team travel to Muradnagar for meetings?",
        answer: "Yes, since we're based nearby in Ghaziabad, on-site visits can be arranged as needed.",
      },
    ],
    ctaTitle: "Modernize Your Muradnagar Business Operations",
    ctaDescription: "Get a free consultation on ERP, inventory, or custom software for your unit.",
  },
  {
    slug: "duhai",
    area: "Duhai",
    order: 10,
    seoTitle: "Software Development Company in Duhai, Ghaziabad | The Webcorners",
    metaDescription:
      "The Webcorners builds websites, CRM, and custom software for businesses in the fast-developing Duhai, Ghaziabad corridor. Free consultation available.",
    h1: "Software Development Services in Duhai, Ghaziabad",
    intro:
      "Duhai is developing quickly on the back of the RRTS (Namo Bharat) corridor and its depot, bringing new commercial and residential activity to the area. We help businesses here build a digital presence ready for that growth.",
    sections: [
      {
        heading: "Positioned for Duhai's Infrastructure-Led Growth",
        body: "With the RRTS corridor driving new footfall and development around Duhai, businesses that establish a strong online presence now are better placed to capture the demand that follows improved connectivity. We build websites and systems designed to scale with that growth.",
      },
      {
        heading: "Practical Software for a Developing Business Hub",
        body: "From a professional business website to a simple CRM for managing early customers, we scope builds that match where a Duhai business is today while leaving room to add capability as the area develops further.",
      },
    ],
    landmarks: ["Duhai RRTS Depot", "NH-58", "Muradnagar", "Modinagar"],
    faqs: [
      {
        question: "Is it worth investing in a website for a business in a developing area like Duhai?",
        answer: "Yes — establishing your online presence early means you're already visible in local search as footfall and demand increase with the area's growth.",
      },
      {
        question: "Can you build a website that's ready to scale as our business grows?",
        answer: "Yes, we architect every build with room to add features and traffic capacity as the business scales.",
      },
    ],
    ctaTitle: "Get Ahead of Duhai's Growth",
    ctaDescription: "Talk to us about a website or CRM built for a developing business hub.",
  },
  {
    slug: "dasna",
    area: "Dasna",
    order: 11,
    seoTitle: "Software Development Company in Dasna, Ghaziabad | The Webcorners",
    metaDescription:
      "The Webcorners builds ERP, logistics, and custom software for businesses in Dasna, Ghaziabad — a key NH-9 and NH-24 interchange hub. Free consultation.",
    h1: "Software & ERP Development for Dasna, Ghaziabad Businesses",
    intro:
      "Dasna sits at a key highway interchange connecting Ghaziabad to Hapur and beyond, making it a natural hub for logistics, warehousing, and trading businesses. We build software that keeps pace with goods and orders moving through the area.",
    sections: [
      {
        heading: "Software for Dasna's Logistics & Trading Businesses",
        body: "Businesses operating near the Dasna interchange often manage dispatch schedules, vendor orders, and inventory across multiple routes. We build tracking, inventory, and ERP systems that give owners real-time visibility instead of relying on phone calls and paper registers.",
      },
      {
        heading: "Reliable Systems for a High-Throughput Hub",
        body: "Where operations depend on goods moving on schedule, downtime isn't an option. We build dependable, well-tested software backed by ongoing support — so the systems your business depends on stay online.",
      },
    ],
    landmarks: ["Dasna Interchange (NH-9/NH-24)", "Hapur Road", "Muradnagar", "Vijay Nagar"],
    faqs: [
      {
        question: "Do you build logistics or dispatch tracking software?",
        answer: "Yes, we build inventory, dispatch, and order-tracking systems tailored to how your goods actually move.",
      },
      {
        question: "What support do you offer after launch for a business in Dasna?",
        answer: "We offer SLA-backed post-launch support and maintenance so your systems stay reliable.",
      },
    ],
    ctaTitle: "Streamline Your Dasna Logistics Operations",
    ctaDescription: "Get a free consultation on ERP, inventory, or tracking software for your business.",
  },
];

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
  await upsertMany(Location, locations, "slug");
  console.log(`Seeded ${locations.length} locations.`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
