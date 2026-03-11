"use client";

import { motion } from "framer-motion";

import { experiences } from "@/lib/site";

export function Experience() {
  return (
    <motion.section
      className="container-shell py-10 sm:py-14"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Experience</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl lg:text-[2.7rem]">
          Four years of Unity development across shipping and contract work.
        </h2>
      </div>

      <div className="space-y-5">
        {experiences.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.period}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="glass-panel grid gap-6 rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 lg:grid-cols-[0.25fr_0.75fr]"
          >
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.22em] text-fuchsia-300">{item.period}</p>
              <h3 className="text-xl font-semibold text-white">{item.company}</h3>
            </div>
            <div>
              <p className="text-lg font-medium text-white">{item.title}</p>
              <p className="mt-3 leading-7 text-slate-300">{item.summary}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
