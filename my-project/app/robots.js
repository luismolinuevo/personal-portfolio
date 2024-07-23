export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/project"],
      disallow: "/private/",
    },
    sitemap: "https://luismolinuevo.com/sitemap.xml",
  };
}
