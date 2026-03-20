export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: "https://jan-eggenberger.com/sitemap.xml",
    host: "https://jan-eggenberger.com",
  };
}
