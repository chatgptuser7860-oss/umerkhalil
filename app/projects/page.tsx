import type { Metadata } from "next";

import { Projects } from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Published Google Play games by Umer Khalil."
};

export default function ProjectsPage() {
  return (
    <div className="pt-8">
      <section className="container-shell py-10">
        <div className="glass-panel rounded-[2rem] p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Portfolio</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-white sm:text-5xl">
            Published Google Play games with dedicated case-study pages and responsive galleries.
          </h1>
          <p className="mt-4 max-w-2xl leading-8 text-slate-300">
            Explore mobile titles spanning relaxation, arcade action, horror survival, battle
            gameplay, and farming simulation, each with its own project detail page.
          </p>
        </div>
      </section>
      <Projects standalone />
    </div>
  );
}
