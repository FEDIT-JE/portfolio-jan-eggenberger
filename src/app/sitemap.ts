export default async function sitemap() {
  const base = "https://jan-eggenberger.com";

  const staticRoutes = [
    { url: base, lastModified: new Date().toISOString().split("T")[0], changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/resume`, lastModified: new Date().toISOString().split("T")[0], changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/work/ha-meira`, lastModified: "2024-01-01", changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/work/cvolution`, lastModified: "2024-01-01", changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/work/helvetibill`, lastModified: "2024-01-01", changeFrequency: "yearly", priority: 0.7 },
  ];

  return staticRoutes;
}
