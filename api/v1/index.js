const express = require("express");

const { createPublicRouter, createAdminRouter } = require("../../core/factory/crudFactory");

const authRoutes = require("../../modules/auth/auth.routes");
const servicesRoutes = require("../../modules/services/services.routes");
const locationsRoutes = require("../../modules/locations/locations.routes");
const blogRoutes = require("../../modules/blog/blog.routes");
const leadsRoutes = require("../../modules/leads/leads.routes");
const siteSettingsRoutes = require("../../modules/siteSettings/siteSettings.routes");
const uploadRoutes = require("../../modules/upload/upload.routes");

const PortfolioItem = require("../../database/models/PortfolioItem");
const CaseStudy = require("../../database/models/CaseStudy");
const Testimonial = require("../../database/models/Testimonial");
const TrustedLogo = require("../../database/models/TrustedLogo");
const Stat = require("../../database/models/Stat");
const Industry = require("../../database/models/Industry");
const WhyChooseUsItem = require("../../database/models/WhyChooseUsItem");
const AiFeature = require("../../database/models/AiFeature");
const ProcessStep = require("../../database/models/ProcessStep");
const TechStackItem = require("../../database/models/TechStackItem");
const Faq = require("../../database/models/Faq");
const FeaturedSolution = require("../../database/models/FeaturedSolution");
const PageContent = require("../../database/models/PageContent");

const router = express.Router();

router.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Webcorners API is running",
    data: { time: new Date().toISOString() },
  });
});

router.use("/auth", authRoutes);

router.use("/services", servicesRoutes.publicRouter);
router.use("/admin/services", servicesRoutes.adminRouter);

router.use("/locations", locationsRoutes.publicRouter);
router.use("/admin/locations", locationsRoutes.adminRouter);

router.use("/blog", blogRoutes.publicRouter);
router.use("/admin/blog", blogRoutes.adminRouter);

router.use("/leads", leadsRoutes.publicRouter);
router.use("/admin/leads", leadsRoutes.adminRouter);

router.use("/site-settings", siteSettingsRoutes.publicRouter);
router.use("/admin/site-settings", siteSettingsRoutes.adminRouter);

router.use("/admin/upload", uploadRoutes);

const simpleResources = [
  ["portfolio", PortfolioItem],
  ["case-studies", CaseStudy],
  ["testimonials", Testimonial],
  ["trusted-logos", TrustedLogo],
  ["stats", Stat],
  ["industries", Industry],
  ["why-choose-us", WhyChooseUsItem],
  ["ai-features", AiFeature],
  ["process-steps", ProcessStep],
  ["tech-stack", TechStackItem],
  ["faqs", Faq],
  ["featured-solutions", FeaturedSolution],
  ["page-content", PageContent],
];

for (const [path, Model] of simpleResources) {
  router.use(`/${path}`, createPublicRouter(Model));
  router.use(`/admin/${path}`, createAdminRouter(Model));
}

module.exports = router;
