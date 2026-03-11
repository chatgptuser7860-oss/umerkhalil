import type { Metadata } from "next";

export const siteUrl = "https://umerkhalil.vercel.app";
export const ogImage = "/images/og-cover.svg";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Umer Khalil | Unity Game Developer",
    template: "%s | Umer Khalil"
  },
  applicationName: "Umer Khalil Portfolio",
  description:
    "Portfolio of Umer Khalil, a Unity Game Developer with 4+ years of experience building performant gameplay systems, polished mobile experiences, and production-ready C# code.",
  alternates: {
    canonical: "/"
  },
  keywords: [
    "Umer Khalil",
    "Unity Game Developer",
    "Unity portfolio",
    "C# developer",
    "Gameplay programmer",
    "Game development"
  ],
  category: "technology",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"]
  },
  openGraph: {
    title: "Umer Khalil | Unity Game Developer",
    description:
      "Modern portfolio showcasing Unity projects, C# engineering experience, and recruiter-ready contact details.",
    url: siteUrl,
    siteName: "Umer Khalil Portfolio",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Umer Khalil portfolio cover"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Umer Khalil | Unity Game Developer",
    description:
      "Unity game developer portfolio featuring projects, technical skills, and contact details.",
    images: [ogImage]
  },
  robots: {
    index: true,
    follow: true
  }
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/umer-khalil",
  email: "mailto:umer.khalil.dev@gmail.com"
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
];

export const experiences = [
  {
    company: "Freelance / Contract",
    period: "2023 - Present",
    title: "Senior Unity Developer",
    summary:
      "Delivering gameplay systems, UI flows, and optimization work for mobile and PC projects with a focus on maintainable C# architecture."
  },
  {
    company: "Independent Game Studio",
    period: "2021 - 2023",
    title: "Unity Game Developer",
    summary:
      "Built production features, integrated SDKs, and collaborated with designers and artists to ship polished gameplay content."
  },
  {
    company: "Early Career Projects",
    period: "2020 - 2021",
    title: "Junior Unity Developer",
    summary:
      "Focused on gameplay prototyping, bug fixing, and learning reliable engineering practices for live game development."
  }
];
