export default [
  { UserAgent: "*" },
  { Allow: "/" },
  { BlankLine: true },
  { Sitemap: (req: any) => `https://${req.headers.host}/sitemap.xml` }
];
