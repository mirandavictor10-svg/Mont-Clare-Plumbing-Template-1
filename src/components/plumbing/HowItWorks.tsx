import { company } from "@/config/company.config";

const HowItWorks = () => (
  <section className="py-16 md:py-24 bg-card border-y border-border">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-sm font-heading font-bold uppercase tracking-[0.2em] text-orange mb-3">
          How It Works
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
          Fast Help Without the Runaround
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Simple, local service built for urgent plumbing calls and larger planned projects alike.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {company.howItWorks.map((step, index) => (
          <article
            key={step.title}
            className="rounded-2xl border border-border bg-background p-7 shadow-sm"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange text-accent-foreground font-heading font-bold text-lg">
              {index + 1}
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">
              {step.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
