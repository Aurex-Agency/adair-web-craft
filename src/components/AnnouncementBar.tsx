const AnnouncementBar = () => {
  return (
    <div className="border-b border-border-custom/20 h-10 flex items-center justify-center px-6 relative z-50" style={{ background: 'hsla(228, 25%, 6%, 0.4)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
      <div className="flex items-center justify-between w-full max-w-[1200px]">
        <div className="flex items-center gap-2 mx-auto md:mx-0">
          <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse-dot inline-block" />
          <span className="font-body text-xs text-text-muted">
            Taking new clients this week — North Mississippi
          </span>
        </div>
        <a
          href="#contact"
          className="hidden md:block font-body text-xs text-accent-blue hover:underline whitespace-nowrap"
        >
          Check availability →
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBar;
