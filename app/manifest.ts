import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Umer Khalil Portfolio",
    short_name: "Umer Khalil",
    description:
      "Portfolio of Umer Khalil, Unity Game Developer specializing in gameplay systems, mobile games, and C# engineering.",
    start_url: "/",
    display: "standalone",
    background_color: "#070816",
    theme_color: "#070816",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      },
      {
        src: "/apple-icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
