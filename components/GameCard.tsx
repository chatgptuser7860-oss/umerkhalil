import Image from "next/image";
import Link from "next/link";

import type { Game } from "@/data/games";

type GameCardProps = {
  game: Game;
};

export function GameCard({ game }: GameCardProps) {
  return (
    <Link
      href={`/projects/${game.slug}`}
      className="glass-panel group flex h-full flex-col overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-2 hover:border-cyan-300/20 hover:shadow-[0_28px_80px_rgba(8,11,29,0.5)]"
    >
      <div className="relative h-52 overflow-hidden border-b border-white/8">
        <Image
          src={game.headerImage}
          alt={`${game.title} cover`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070816] via-[#070816]/35 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.08)_50%,transparent_100%)] opacity-0 transition duration-500 group-hover:translate-x-3 group-hover:opacity-100" />
        <div className="absolute left-5 top-5 h-16 w-16 overflow-hidden rounded-2xl border border-white/12 bg-[#070816]/70 p-2 backdrop-blur">
          <Image src={game.icon} alt={`${game.title} icon`} fill sizes="64px" className="object-cover" />
        </div>
      </div>

      <div className="flex h-full flex-col space-y-5 p-6">
        <div>
          <h3 className="text-2xl font-semibold text-white">{game.title}</h3>
          <p className="mt-3 leading-7 text-slate-300">{game.shortDescription}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {game.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/8 bg-white/4 px-3 py-1 text-xs uppercase tracking-[0.14em] text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
