export default [
  { UserAgent: "*" },
  { Disallow: "" },
  { BlankLine: true },
  { Sitemap: (req: Request) => (process.env.SITE_URL || `https://${req.headers.get('host')}`) + "/sitemap.xml" },
];
