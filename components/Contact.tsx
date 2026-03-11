"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";

import { socialLinks } from "@/lib/site";

type ContactProps = {
  standalone?: boolean;
};

export function Contact({ standalone = false }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const company = String(formData.get("company") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\n\n${message}`
    );

    window.location.href = `${socialLinks.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section
      id={standalone ? undefined : "contact"}
      className={`container-shell ${standalone ? "py-16" : "py-10 sm:py-14"}`}
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="glass-panel rounded-[2rem] p-8 transition duration-300 hover:border-cyan-300/20"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-[2.7rem]">
            Ready to build a stronger gameplay experience?
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            I am open to Unity gameplay, tools, and mobile-focused roles. Reach out for freelance,
            contract, or full-time opportunities.
          </p>

          <div className="mt-8 rounded-[1.75rem] border border-white/8 bg-white/4 p-5">
            <p className="text-sm text-slate-400">Direct contact</p>
            <a
              href={socialLinks.email}
              className="mt-3 inline-flex items-center gap-2 text-lg font-medium text-white"
            >
              <Mail size={18} className="text-fuchsia-300" />
              chhumerkhalil565@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="glass-panel rounded-[2rem] p-8 transition duration-300 hover:border-fuchsia-300/20"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="input-base" type="text" name="name" placeholder="Your name" required />
            <input className="input-base" type="email" name="email" placeholder="Your email" required />
          </div>
          <input className="input-base mt-4" type="text" name="company" placeholder="Company / team" />
          <textarea
            className="input-base mt-4 min-h-40 resize-y"
            name="message"
            placeholder="Tell me about the role, project, or what you need built."
            required
          />
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-sky-400 px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              <Send size={18} />
              Send Message
            </button>
            {submitted ? (
              <p className="text-sm text-emerald-200">Your mail app should open with the drafted message.</p>
            ) : (
              <p className="text-sm text-slate-400">Form submits through your default email client.</p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
