export default [
  { UserAgent: "*" },
  { Disallow: "" },
  { BlankLine: true },
  { Sitemap: (req: any) => `https://${req.headers.host}/sitemap.xml` }
];
