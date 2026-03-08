const AnnouncementBar = () => {
  return (
    <div className="bg-bg-surface border-b border-[#1F1F1F] h-10 flex items-center justify-center px-6 relative z-50">
      <div className="flex items-center justify-between w-full max-w-[1200px]">
        <div className="flex items-center gap-2 mx-auto md:mx-0">
          <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse-dot inline-block" />
          <span className="font-inter text-xs text-text-muted">
            Taking new clients this week — North Mississippi
          </span>
        </div>
        <a
          href="#contact"
          className="hidden md:block font-inter text-xs text-accent-blue hover:underline whitespace-nowrap"
        >
          Check availability →
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBar;
