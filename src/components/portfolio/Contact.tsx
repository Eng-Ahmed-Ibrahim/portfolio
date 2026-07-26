import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
export function Contact() {
  return (
    <section id="contact" className="relative border-t border-border">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          Let's build something solid.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Open to backend engineering roles and freelance projects. If you're
          building something that needs a reliable Laravel backend, I'd love to
          hear about it.
        </p>

        <a
          href="mailto:eng.ahmed0302@gmail.com"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Mail className="h-4 w-4" />
          eng.ahmed0302@gmail.com
          <ArrowRight className="h-4 w-4" />
        </a>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4" /> +20 112 345 1493
          </span>
          <span>Cairo, Egypt</span>
        </div>

        <div className="mt-8 flex justify-center gap-2">
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
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
    >
      {children}
    </a>
  );
}
