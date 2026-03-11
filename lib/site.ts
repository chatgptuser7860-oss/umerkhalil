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
  linkedin: "https://linkedin.com/in/umer-khalil-194b5020a",
  email: "mailto:chhumerkhalil565@gmail.com"
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
];

export const experiences = [
  {
    company: "Triminds Studio",
    period: "Aug 2021 - Nov 2023",
    title: "2D Unity Developer",
    summary:
      "Worked on 2D Unity game development with a focus on gameplay features, UI systems, and production-ready mobile implementation."
  },
  {
    company: "Game Tech Studios",
    period: "Dec 2023 - Sep 2024",
    title: "2D Unity Developer",
    summary:
      "Built and maintained 2D Unity projects, collaborating on gameplay logic, polish, and feature delivery across mobile game pipelines."
  },
  {
    company: "Hawks Studio",
    period: "Sep 2024 - Jun 2025",
    title: "2D/3D Unity Developer",
    summary:
      "Contributed to both 2D and 3D Unity game development, delivering gameplay systems, scene logic, and player-facing features."
  },
  {
    company: "Freelance",
    period: "Jul 2025 - Oct 2025",
    title: "Freelance Unity Developer",
    summary:
      "Delivered freelance Unity work for game features, mobile-focused implementation, and practical gameplay iteration across client projects."
  },
  {
    company: "Survival Tech Valley Pvt Ltd",
    period: "Nov 2025 - Present",
    title: "2D/3D Unity Developer",
    summary:
      "Working on 2D and 3D Unity development with emphasis on production delivery, gameplay implementation, and maintainable C# workflows."
  }
];
