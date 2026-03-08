import AnimateIn from "./AnimateIn";

const cards = [
  {
    num: "01",
    title: "I Run a Digital Marketing Team",
    body: "This isn't a freelance side gig. I lead a digital marketing team and work with local businesses every single day. I know exactly what it takes to get customers through your door.",
  },
  {
    num: "02",
    title: "30+ Websites Built in 2026 Alone",
    body: "I've already done this — a lot. I know how to build fast without cutting corners, and I know what local business owners actually need.",
  },
  {
    num: "03",
    title: "Zero Hidden Fees. Ever.",
    body: "Simple, transparent pricing. No long-term contracts. No surprise invoices. You can cancel hosting anytime — no questions asked.",
  },
  {
    num: "04",
    title: "48-Hour Turnaround.",
    body: "Most agencies take weeks. I'll have your custom site ready to review in 24–48 hours. You'll be live and getting found on Google faster than you think.",
  },
];

const WhyTrustSection = () => {
  return (
    <section className="bg-bg-primary py-[72px] md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <AnimateIn>
          <p className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-accent-blue text-center mb-6">
            — WHY ME —
          </p>
        </AnimateIn>
        <AnimateIn>
          <h2
            className="text-center leading-[1.1] tracking-[-0.02em] mb-16"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
          >
            This isn't a side hustle.
            <br className="hidden sm:block" /> This is what I do.
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="relative bg-bg-surface border border-border-custom rounded-2xl p-9 overflow-hidden transition-all duration-300 hover:border-accent-blue hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] h-full">
                <span className="absolute top-4 right-6 font-heading font-bold text-[80px] leading-none text-text-dim/30 select-none pointer-events-none">
                  {card.num}
                </span>
                <div className="relative z-10">
                  <h3 className="font-heading font-semibold text-xl text-text-primary mb-3">{card.title}</h3>
                  <p className="font-body text-[15px] text-text-muted leading-[1.8]">{card.body}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrustSection;
