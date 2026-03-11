"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";

type ProjectsProps = {
  standalone?: boolean;
};

export function Projects({ standalone = false }: ProjectsProps) {
  return (
    <section
      id={standalone ? undefined : "projects"}
      className={`container-shell ${standalone ? "py-16" : "py-10 sm:py-14"}`}
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Projects</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Published Google Play games presented as polished, clickable case studies.
          </h2>
        </div>
        {!standalone ? (
          <Link href="/projects" className="text-sm text-slate-300 transition hover:text-white">
            View all project details
          </Link>
        ) : null}
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {games.map((game, index) => (
          <motion.article
            key={game.slug}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.48, delay: index * 0.08 }}
            className="h-full"
          >
            <GameCard game={game} />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
