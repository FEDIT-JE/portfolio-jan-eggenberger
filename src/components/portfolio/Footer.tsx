"use client";

import { useTranslation } from "@/lib/LanguageContext";
import { social, person } from "@/lib/data";
import { Container } from "./Container";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-white/[0.06]">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-white/60">{person.name}</p>
            <p className="text-xs text-white/25 mt-0.5">
              © {year} {t.footer.tagline}
            </p>
          </div>
          <nav className="flex items-center gap-6">
            {social.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-white/30 hover:text-white/70 tracking-wide uppercase transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
