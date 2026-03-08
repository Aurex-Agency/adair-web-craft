import { Clock } from "lucide-react";
import AnimateIn from "./AnimateIn";
import CountUp from "./CountUp";

const cards = [
  {
    type: "count" as const,
    target: 70,
    suffix: "%",
    title: "No Website = No Trust",
    body: "70% of consumers won't trust a business that doesn't have a website. If they Google you and find nothing, they go straight to your competitor.",
  },
  {
    type: "count" as const,
    target: 0,
    suffix: "%",
    title: "Facebook Isn't Enough",
    body: "You don't own your Facebook page. One algorithm change and your reach drops to zero. A website is your digital real estate — it's yours forever.",
  },
  {
    type: "icon" as const,
    title: "You're Losing Customers Right Now",
    body: "Every single day without a website is a day potential customers can't find your hours, can't see your menu, can't book your service.",
  },
];

const PainPointsSection = () => {
  return (
    <section className="py-[72px] md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <AnimateIn>
          <p className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-accent-blue text-center mb-6">
            — THE REALITY —
          </p>
        </AnimateIn>
        <AnimateIn>
          <h2
            className="text-center leading-[1.1] tracking-[-0.02em] mb-4"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
          >
            If you're not online,{" "}
            <br className="hidden sm:block" />
            you're <span className="italic text-accent-blue">invisible.</span>
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <p className="font-body text-lg text-text-muted text-center max-w-[600px] mx-auto mb-16">
            Your competitors already have websites. Every day without one is a day they win.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="bg-bg-surface border border-border-custom rounded-2xl p-9 transition-all duration-300 hover:border-accent-blue hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] h-full">
                <div className="mb-5">
                  {card.type === "count" ? (
                    <CountUp target={card.target} suffix={card.suffix} />
                  ) : (
                    <Clock size={52} className="text-accent-blue" strokeWidth={1.5} />
                  )}
                </div>
                <h3 className="font-heading font-semibold text-lg text-text-primary mb-3">{card.title}</h3>
                <p className="font-body text-[15px] text-text-muted leading-[1.8]">{card.body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
