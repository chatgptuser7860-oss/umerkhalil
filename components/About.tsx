"use client";

import { motion } from "framer-motion";
import { Code2, Gamepad2, Globe, Layers3, Smartphone, Users } from "lucide-react";

export function About() {
  const highlights = [
    { title: "4+ Years in Unity", icon: Gamepad2 },
    { title: "Strong C# Programming", icon: Code2 },
    { title: "Mobile Games", icon: Smartphone },
    { title: "Web Games", icon: Globe },
    { title: "Multiplayer Systems", icon: Users },
    { title: "Gameplay + UI Systems", icon: Layers3 }
  ];

  const container = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.08
      }
    }
  };

  const revealItem = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section
      id="about"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="container-shell py-10 sm:py-14"
    >
      <div className="glass-panel grid gap-10 rounded-[2rem] p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
        <motion.div variants={revealItem} className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300">About</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-[2.8rem]">
              Umer Khalil, Unity Game Developer focused on interactive gameplay.
            </h2>
          </div>

          <p className="text-base leading-8 text-slate-300">
            I am a Unity Game Developer with 4+ years of experience creating engaging game
            experiences with a strong foundation in C# programming. I enjoy building interactive
            gameplay that feels responsive, polished, and technically reliable across mobile, web,
            and multiplayer environments. My work spans gameplay mechanics, UI systems, and
            production-ready features, driven by a genuine passion for game development and a
            constant interest in emerging technology, including blockchain gaming and other new
            interactive platforms.
          </p>

          <div className="rounded-[1.5rem] border border-cyan-400/12 bg-cyan-400/6 p-5 text-sm leading-7 text-cyan-100">
            Profession: Unity Game Developer
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;

            return (
              <motion.div
                key={highlight.title}
                variants={revealItem}
                transition={{ delay: index * 0.04 }}
                className="rounded-[1.5rem] border border-white/8 bg-white/4 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/6"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-fuchsia-400/20 bg-fuchsia-400/10 p-3 text-fuchsia-200">
                    <Icon size={20} />
                  </div>
                  <p className="text-base font-medium text-white">{highlight.title}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
