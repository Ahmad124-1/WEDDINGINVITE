const FloralCorner = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
    <path d="M10 10C10 10 25 15 35 25C45 35 40 50 30 55C20 60 10 55 10 55" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5"/>
    <path d="M10 10C10 10 15 25 25 35C35 45 50 40 55 30C60 20 55 10 55 10" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5"/>
    <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.35"/>
    <circle cx="35" cy="35" r="1.5" fill="currentColor" opacity="0.3"/>
    <circle cx="28" cy="28" r="1" fill="currentColor" opacity="0.4"/>
    <path d="M12 12C12 12 20 18 28 26" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3"/>
  </svg>
);

const BotanicalBranch = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 200" fill="none" className={className} aria-hidden="true">
    <path d="M30 10C30 10 40 25 40 40C40 55 30 65 30 65C30 65 20 55 20 40C20 25 30 10 30 10Z" stroke="currentColor" strokeWidth="0.7" fill="none" opacity="0.4"/>
    <path d="M30 30C30 30 38 40 38 50C38 60 30 68 30 68C30 68 22 60 22 50C22 40 30 30 30 30Z" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.35"/>
    <circle cx="30" cy="15" r="1.2" fill="currentColor" opacity="0.4"/>
    <circle cx="30" cy="38" r="1" fill="currentColor" opacity="0.35"/>
    <path d="M30 5L30 2M30 198L30 195" stroke="currentColor" strokeWidth="0.5" opacity="0.25"/>
  </svg>
);

const OrnamentalDivider = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 20" fill="none" className={className} aria-hidden="true">
    <line x1="0" y1="10" x2="200" y2="10" stroke="currentColor" strokeWidth="0.5" opacity="0.35"/>
    <circle cx="100" cy="10" r="3" stroke="currentColor" strokeWidth="0.7" fill="none" opacity="0.5"/>
    <circle cx="100" cy="10" r="1.2" fill="currentColor" opacity="0.6"/>
    <line x1="70" y1="10" x2="130" y2="10" stroke="currentColor" strokeWidth="0.4" opacity="0.3"/>
    <circle cx="70" cy="10" r="1" fill="currentColor" opacity="0.3"/>
    <circle cx="130" cy="10" r="1" fill="currentColor" opacity="0.3"/>
  </svg>
);

const DecorativeFrame = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 300 300" fill="none" className={className} aria-hidden="true">
    <rect x="15" y="15" width="270" height="270" rx="2" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.4"/>
    <rect x="25" y="25" width="250" height="250" rx="1" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3"/>
    <path d="M15 15L25 25M285 15L275 25M15 285L25 275M285 285L275 275" stroke="currentColor" strokeWidth="0.6" opacity="0.35"/>
    <circle cx="150" cy="150" r="80" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.25"/>
    <circle cx="150" cy="150" r="110" stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.2"/>
  </svg>
);

const CircularSeal = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
    <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="0.9" fill="none" opacity="0.5"/>
    <circle cx="60" cy="60" r="48" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.4"/>
    <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.3"/>
    <circle cx="60" cy="60" r="3" fill="currentColor" opacity="0.6"/>
    <path d="M60 5L60 12M60 108L60 115M5 60L12 60M108 60L115 60" stroke="currentColor" strokeWidth="0.7" opacity="0.45"/>
  </svg>
);

const FineGeometric = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
    <path d="M50 10L55 20L65 15L60 25L70 25L60 30L65 40L55 35L50 45L45 35L35 40L40 30L30 25L40 25L35 15L45 20L50 10Z" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.4"/>
    <circle cx="50" cy="30" r="20" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.3"/>
  </svg>
);

const GoldFlourish = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 80 40" fill="none" className={className} aria-hidden="true">
    <path d="M10 20C10 20 20 10 30 20C40 30 50 10 60 20C70 30 80 20 80 20" stroke="currentColor" strokeWidth="0.7" fill="none" opacity="0.45"/>
    <circle cx="30" cy="20" r="1.5" fill="currentColor" opacity="0.5"/>
    <circle cx="60" cy="20" r="1.5" fill="currentColor" opacity="0.5"/>
  </svg>
);

export {
  FloralCorner,
  BotanicalBranch,
  OrnamentalDivider,
  DecorativeFrame,
  CircularSeal,
  FineGeometric,
  GoldFlourish,
};
