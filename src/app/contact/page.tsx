import { ContactForm } from "@/components/ui/ContactForm";
import { FadeIn } from "@/components/motion/FadeIn";

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-24">
      <div className="flex w-full max-w-2xl flex-col gap-10">
        <FadeIn>
          <div className="flex flex-col gap-4">
            <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
              Contact
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s talk.
            </h1>
            <p className="text-lg text-muted-foreground">
              Reach out about a role, a project, or anything data-shaped.
              Sending this opens a prefilled email — direct links are in the
              footer too.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ContactForm />
        </FadeIn>
      </div>
    </main>
  );
}
