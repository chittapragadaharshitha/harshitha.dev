import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Harshitha Chittapragada - AI Product Engineer",
    short_name: "Harshitha",
    description:
      "Reliable AI automation products across finance, hiring, and content operations.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: [
      { src: "/favicon.ico", sizes: "32x32", type: "image/png" },
      { src: "/favicon.png", sizes: "192x192", type: "image/png" },
      { src: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
