import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { games, getGameBySlug } from "@/data/games";
import { siteUrl } from "@/lib/site";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug
  }));
}

export async function generateMetadata({
  params
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: game.title,
    description: game.shortDescription,
    alternates: {
      canonical: `/projects/${game.slug}`
    },
    openGraph: {
      title: `${game.title} | Umer Khalil`,
      description: game.shortDescription,
      url: `${siteUrl}/projects/${game.slug}`,
      images: [
        {
          url: game.headerImage,
          alt: game.title
        }
      ]
    }
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  return (
    <div className="pt-8">
      <section className="container-shell py-10">
        <div className="glass-panel overflow-hidden rounded-[2rem]">
          <div className="relative h-72 sm:h-96">
            <Image
              src={game.headerImage}
              alt={`${game.title} header`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070816] via-[#070816]/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <Link
                href="/projects"
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-[#070816]/60 px-4 py-2 text-sm text-white backdrop-blur transition hover:border-cyan-300/30"
              >
                <ArrowLeft size={16} />
                Back to Projects
              </Link>
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-3xl border border-white/12 bg-[#070816]/70 backdrop-blur">
                    <Image src={game.icon} alt={`${game.title} icon`} fill sizes="80px" className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Google Play Game</p>
                    <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">{game.title}</h1>
                  </div>
                </div>
                <a
                  href={game.playstore}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full px-6 py-3 text-sm sm:w-auto"
                >
                  View on Play Store
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell pb-10 sm:pb-14">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="glass-panel rounded-[2rem] p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-300">Overview</p>
            <p className="mt-5 text-lg leading-8 text-slate-300">{game.description}</p>
          </div>

          <div className="glass-panel rounded-[2rem] p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Technologies</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {game.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/8 bg-white/4 px-4 py-2 text-sm text-slate-200"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell pb-16">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Screenshots</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Responsive gallery for the published game experience.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {game.screenshots.map((screenshot, index) => (
            <div
              key={screenshot}
              className={`glass-panel overflow-hidden rounded-[1.75rem] ${
                index === 0 ? "sm:col-span-2 xl:col-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 ? "h-72 sm:h-96" : "h-72"}`}>
                <Image
                  src={screenshot}
                  alt={`${game.title} screenshot ${index + 1}`}
                  fill
                  sizes={index === 0 ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"}
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
