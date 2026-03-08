import { useState, FormEvent } from "react";
import { CheckCircle, Zap, Phone } from "lucide-react";
import AnimateIn from "./AnimateIn";

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby1Q7O6lRN-fuM373VwHzjSJ496hQFv0xHJ3VKJPRrWyORqbFwgLV9aM3ToQXmnMsg81g/exec';

const ContactSection = () => {
  const [hasWebsite, setHasWebsite] = useState<"yes" | "no" | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [typeOfBusiness, setTypeOfBusiness] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('Full Name', fullName);
    formData.append('Business Name', businessName);
    formData.append('Phone Number', phoneNumber);
    formData.append('Email Address', emailAddress);
    formData.append('Type of Business', typeOfBusiness);
    formData.append('Has Website', hasWebsite === 'yes' ? 'Yes' : 'No');
    formData.append('Message', message);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      if (result.result === 'success') {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again or call/text (662) 507-8886.');
      }
    } catch (err) {
      alert('Could not submit the form. Please try again or call/text (662) 507-8886.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-bg-surface-2 border border-border-custom rounded-[10px] px-4 py-3.5 text-text-primary font-body text-[15px] outline-none transition-all duration-200 focus:border-accent-blue focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] placeholder:text-text-dim";
  const labelClass = "font-body text-xs font-medium text-text-muted uppercase tracking-[0.1em] mb-1.5 block";

  return (
    <section id="contact" className="py-[72px] md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[42%_1fr] gap-12 lg:gap-16">
        {/* Left */}
        <AnimateIn>
          <div>
            <p className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-accent-blue mb-6">
              — LET'S WORK TOGETHER —
            </p>
            <h2
              className="leading-[1.1] tracking-[-0.02em] mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            >
              Ready to get found?
            </h2>
            <p className="font-body text-[17px] text-text-muted leading-[1.8] mb-10">
              Fill this out and I'll personally reach out within a few hours. No pressure, no sales pitch — just a real conversation about your business.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: CheckCircle, text: "No contracts, cancel anytime" },
                { icon: Zap, text: "Site live within 48–72 hours" },
                { icon: Phone, text: "Call or text: (662) 507-8886" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <item.icon size={20} className="text-accent-blue shrink-0" />
                  <span className="font-body text-[15px] text-text-primary">{item.text}</span>
                </div>
              ))}
            </div>

            <div>
              <p className="font-heading font-bold text-lg text-text-primary">Kalob Adair</p>
              <p className="font-body text-sm text-text-muted">Digital Marketing Team Lead</p>
              <p className="font-body text-[13px] text-text-muted mt-1">
                Serving New Albany, Pontotoc, Tupelo & North Mississippi
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* Right */}
        <AnimateIn delay={0.15}>
          <div className="bg-bg-surface border border-border-custom rounded-[20px] p-8 sm:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle size={48} className="text-accent-green mx-auto mb-4" />
                <h3 className="font-heading font-bold text-2xl text-text-primary mb-2">You're in!</h3>
                <p className="font-body text-text-muted">I'll reach out within a few hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className={labelClass}>Full Name</label>
                  <input type="text" placeholder="John Smith" required className={inputClass} value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Business Name</label>
                  <input type="text" placeholder="Smith's Hardware" required className={inputClass} value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input type="tel" placeholder="(662) 555-0000" required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Email Address <span className="normal-case tracking-normal">(optional)</span></label>
                  <input type="email" placeholder="john@example.com" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Type of Business</label>
                  <select required className={inputClass + " appearance-none"} defaultValue="">
                    <option value="" disabled>Select your industry</option>
                    <option>Restaurant / Food</option>
                    <option>Retail / Boutique</option>
                    <option>Service Business</option>
                    <option>Contractor / Trades</option>
                    <option>Health & Beauty</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Do you have a website?</label>
                  <div className="flex gap-3">
                    {(["yes", "no"] as const).map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setHasWebsite(opt)}
                        className={`flex-1 py-3 rounded-[10px] font-body text-sm font-medium transition-all duration-200 border ${
                          hasWebsite === opt
                            ? "bg-[#1E3A5F] border-accent-blue text-text-primary"
                            : "bg-bg-surface-2 border-border-custom text-text-muted"
                        }`}
                      >
                        {opt === "yes" ? "Yes" : "No"}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Anything else?</label>
                  <textarea
                    placeholder="Tell me a little about your business..."
                    className={inputClass + " h-[100px] resize-none"}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-shimmer w-full bg-accent-green text-bg-primary font-body font-bold text-base py-4 rounded-[10px] transition-all"
                >
                  Claim My Spot →
                </button>
                <p className="font-body text-xs text-text-muted text-center">
                  I'll personally reach out within a few hours.
                </p>
              </form>
            )}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default ContactSection;
