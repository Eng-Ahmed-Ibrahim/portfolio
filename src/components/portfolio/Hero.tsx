import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import avatar from "@/assets/image.jpeg";
import { Starfield } from "./Starfield";
import { FaWhatsapp } from "react-icons/fa";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <Starfield density={140} />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pb-24 pt-24 text-center md:pb-32 md:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Available for backend engineering work
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
          Ahmed Ebrahim
        </h1>

        <p className="mt-4 text-lg text-primary md:text-xl">
          Backend Engineer · Laravel & React.js
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          I design and build scalable Laravel systems — REST APIs, real-time
          platforms, and clean architectures — with 3+ years shipping production
          software across Real Estate, ERP, and E-commerce.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
          >
            View work
          </a>
          <a
            href="/Backend_engineer.pdf"
            target="_blank"
            rel="noreferrer"
            download
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
          >
            Download CV
          </a>

        </div>

        <div className="mt-10">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-primary/30 blur-xl" />
            <img
              src={avatar}
              alt="Ahmed Ebrahim, Backend Engineer"
              width={1024}
              height={1024}
              className="relative h-32 w-32 rounded-full border-2 border-border object-cover shadow-2xl md:h-40 md:w-40"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2">
          <SocialIcon href="mailto:eng.ahmed0302@gmail.com" label="Email">
            <Mail className="h-4 w-4" />
          </SocialIcon>
              <SocialIcon href="https://github.com/Eng-Ahmed-Ibrahim" label="GitHub">
                <Github className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/in/ahmed-ebrahim-851b6b226/" label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href="https://wa.me/201123451493" label="WhatsApp">
                <FaWhatsapp className="h-4 w-4" />
              </SocialIcon>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground backdrop-blur transition-colors hover:bg-secondary hover:text-foreground"
    >
      {children}
    </a>
  );
}
