const Footer = () => {
  return (
    <footer className="border-t border-border-custom py-8 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center">
        <span className="font-body text-[13px] text-text-dim">© 2026 Kalob Adair. All rights reserved.</span>
        <span className="font-body text-[13px] text-text-dim">New Albany · Pontotoc · Tupelo · North Mississippi</span>
        <a href="tel:6625078886" className="font-body text-[13px] text-text-muted hover:text-text-primary transition-colors">
          (662) 507-8886
        </a>
      </div>
    </footer>
  );
};

export default Footer;
