export default [
  { UserAgent: "*" },
  { Disallow: "" },
  { BlankLine: true },
  { Sitemap: (req) => (process.env.SITE_URL || `https://${req.headers.host}`) + "/sitemap.xml" },
];
