"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050713]">
      <div className="relative flex flex-col items-center gap-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
          className="relative h-20 w-20"
        >
          <div className="absolute inset-0 rounded-full border border-fuchsia-400/25" />
          <div className="absolute inset-2 rounded-full border border-cyan-300/25" />
          <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-fuchsia-400 shadow-[0_0_28px_rgba(217,70,239,0.8)]" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0.35 }}
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="text-sm uppercase tracking-[0.45em] text-slate-300"
        >
          Loading Portfolio
        </motion.p>
      </div>
    </div>
  );
}
