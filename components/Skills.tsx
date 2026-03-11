"use client";

import { motion } from "framer-motion";
import {
  Code2,
  FileCode2,
  Gamepad2,
  Gauge,
  GitBranch,
  MonitorSmartphone,
  Rocket,
  Smartphone,
  SquareCode,
  Wrench,
  Cpu,
  AppWindow
} from "lucide-react";

export function Skills() {
  const skillGroups = [
    {
      title: "Game Development",
      accent: "text-fuchsia-200",
      icon: Gamepad2,
      skills: [
        { name: "Unity", level: 95, icon: Rocket },
        { name: "C#", level: 92, icon: Code2 },
        { name: "Gameplay Programming", level: 90, icon: Cpu },
        { name: "Game Physics", level: 84, icon: Gauge },
        { name: "Mobile Game Optimization", level: 88, icon: Smartphone }
      ]
    },
    {
      title: "Web Technologies",
      accent: "text-cyan-200",
      icon: AppWindow,
      skills: [
        { name: "HTML", level: 86, icon: FileCode2 },
        { name: "CSS", level: 84, icon: SquareCode },
        { name: "Next.js", level: 78, icon: MonitorSmartphone },
        { name: "JavaScript", level: 82, icon: Code2 }
      ]
    },
    {
      title: "Tools",
      accent: "text-emerald-200",
      icon: Wrench,
      skills: [
        { name: "Git", level: 88, icon: GitBranch },
        { name: "Visual Studio", level: 91, icon: Code2 },
        { name: "Xcode", level: 74, icon: MonitorSmartphone }
      ]
    }
  ];

  const sectionMotion = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        staggerChildren: 0.08
      }
    }
  };

  return (
    <motion.section
      id="skills"
      className="container-shell py-10 sm:py-14"
      variants={sectionMotion}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.div variants={sectionMotion} className="mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-300">Skills</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl lg:text-[2.7rem]">
            Technical skills across Unity development, web technologies, and daily tools.
          </h2>
        </div>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-3">
        {skillGroups.map((group, index) => {
          const GroupIcon = group.icon;

          return (
            <motion.article
              key={group.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { delay: index * 0.05, duration: 0.45 } }
              }}
              className="glass-panel rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white">
                  <GroupIcon size={20} />
                </div>
                <p className={`text-sm uppercase tracking-[0.22em] ${group.accent}`}>{group.title}</p>
              </div>

              <div className="mt-6 space-y-4">
                {group.skills.map((skill, skillIndex) => {
                  const SkillIcon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.35, delay: skillIndex * 0.05 }}
                      className="rounded-[1.25rem] border border-white/8 bg-white/4 p-4 transition duration-300 hover:border-fuchsia-300/20 hover:bg-white/6"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="rounded-xl border border-fuchsia-400/16 bg-fuchsia-400/10 p-2 text-fuchsia-200">
                            <SkillIcon size={16} />
                          </div>
                          <span className="text-sm font-medium text-white">{skill.name}</span>
                        </div>
                        <span className="text-xs text-slate-400">{skill.level}%</span>
                      </div>

                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/8">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 0.7, delay: 0.15 + skillIndex * 0.06 }}
                          className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 via-sky-400 to-cyan-300"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
