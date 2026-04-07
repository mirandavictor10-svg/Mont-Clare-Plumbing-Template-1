import { company } from "@/config/company.config";

const FAQSection = () => (
  <section id="faq" className="py-16 md:py-24 bg-background">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-sm font-heading font-bold uppercase tracking-[0.2em] text-orange mb-3">
          FAQ
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
          Questions Chicago Homeowners Ask Before They Call
        </h2>
      </div>

      <div className="space-y-4">
        {company.faq.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-border bg-card px-6 py-4"
          >
            <summary className="cursor-pointer list-none font-heading font-bold text-lg text-foreground flex items-center justify-between gap-4">
              <span>{item.q}</span>
              <span className="text-orange transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection;
