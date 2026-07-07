const links = [
  { href: "https://github.com/kutluberke", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/kutlu-berke-y%C4%B1ld%C4%B1r%C4%B1m-00880731a/",
    label: "LinkedIn",
  },
  { href: "mailto:kberkeyldrm@gmail.com", label: "Email" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p className="font-mono">
          &copy; {new Date().getFullYear()} Kutlu Berke
        </p>
        <ul className="flex items-center gap-5 font-mono">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
