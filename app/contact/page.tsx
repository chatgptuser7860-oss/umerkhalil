import type { Metadata } from "next";

import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Umer Khalil for Unity game development opportunities."
};

export default function ContactPage() {
  return (
    <div className="pt-8">
      <section className="container-shell py-10">
        <div className="glass-panel rounded-[2rem] p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-300">Get in Touch</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-white sm:text-5xl">
            Recruiter-ready contact details with a simple form that drafts an email instantly.
          </h1>
          <p className="mt-4 max-w-2xl leading-8 text-slate-300">
            For Unity roles, freelance work, or project collaborations, use the form below or email
            me directly.
          </p>
        </div>
      </section>
      <Contact standalone />
    </div>
  );
}
