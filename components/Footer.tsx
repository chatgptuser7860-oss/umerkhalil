import { socialLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/6 py-8">
      <div className="container-shell flex flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; 2026 Umer Khalil</p>
        <div className="flex items-center gap-5">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>
          <a href={socialLinks.email} className="transition hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
