import AnimateIn from "./AnimateIn";

const steps = [
  {
    num: "01",
    title: "Claim Your Spot",
    body: "Fill out the short form below or send me a text. A small deposit locks your spot and I get to work the same day.",
  },
  {
    num: "02",
    title: "I Build Your Site",
    body: "You'll have a custom mockup to review within 24–48 hours. Request any changes — no limits, no extra charges, no attitude.",
  },
  {
    num: "03",
    title: "Go Live & Get Found",
    body: "Once you approve, your site goes live. Start showing up on Google and getting more customers the same week.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-bg-alt py-[72px] md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <AnimateIn>
          <p className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-accent-blue text-center mb-6">
            — THE PROCESS —
          </p>
        </AnimateIn>
        <AnimateIn>
          <h2
            className="text-center leading-[1.1] tracking-[-0.02em] mb-16"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
          >
            Getting started takes 5 minutes.
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {steps.map((step, i) => (
            <AnimateIn key={i} delay={i * 0.15}>
              <div className="relative">
                <span className="font-heading font-bold text-[80px] leading-none text-text-dim/30 select-none">
                  {step.num}
                </span>
                <h3 className="font-heading font-semibold text-[22px] text-text-primary mt-2 mb-3">{step.title}</h3>
                <p className="font-body text-[15px] text-text-muted leading-[1.8]">{step.body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.4}>
          <div className="text-center mt-16">
            <a
              href="#contact"
              className="inline-block bg-accent-green text-bg-primary font-body font-semibold text-[15px] px-7 py-3.5 rounded-[10px] hover:brightness-90 transition-all"
            >
              Start Now — Only 5 Spots →
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default HowItWorksSection;
