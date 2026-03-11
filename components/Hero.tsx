"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="section-grid overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="container-shell relative">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-1 mx-auto w-full max-w-md lg:order-none"
          >
            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 shadow-[0_30px_80px_rgba(3,7,18,0.45)] sm:p-6">
              <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-fuchsia-500/18 blur-3xl" />
              <div className="absolute -bottom-10 right-0 h-36 w-36 rounded-full bg-sky-400/16 blur-3xl" />
              <div className="relative rounded-[1.75rem] border border-white/10 bg-white/4 p-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10">
                  <Image
                    src="/images/profile.svg"
                    alt="Portrait illustration of Umer Khalil"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="order-2 space-y-8 lg:order-none"
          >
            <div className="space-y-5">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-sm uppercase tracking-[0.35em] text-cyan-300"
              >
                Umer Khalil
              </motion.p>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[5.2rem]">
                Unity <span className="text-gradient">Game Developer</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                I build immersive games using Unity, C#, and modern technologies.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/8"
              >
                View Projects
                <ArrowRight size={18} />
              </Link>
              <a
                href="/resume.pdf"
                download="Umer-Khalil-Resume.pdf"
                type="application/pdf"
                className="btn-primary glow-ring"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Stack", value: "Unity + C#" },
                { label: "Focus", value: "Immersive Gameplay" },
                { label: "Style", value: "Modern Production" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
                  className="rounded-[1.5rem] border border-white/8 bg-white/4 p-4 transition duration-300 hover:-translate-y-1 hover:border-white/14 hover:bg-white/6"
                >
                  <p className="text-sm text-slate-400">{item.label}</p>
                  <p className="mt-2 text-base font-medium text-white">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
