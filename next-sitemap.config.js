module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.proevisuals.com",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 1.0,
  sitemapSize: 5000,
  exclude: [],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" }, // Allow all crawlers
    ],
  },
};
