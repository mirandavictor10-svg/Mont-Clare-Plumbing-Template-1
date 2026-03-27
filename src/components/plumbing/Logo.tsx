const PipeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 8h8v4H6V8z" fill="currentColor" opacity="0.9"/>
    <path d="M12 8h4v16h-4V8z" fill="currentColor"/>
    <path d="M12 20h14v4H12v-4z" fill="currentColor" opacity="0.9"/>
    <path d="M24 14h4v4h-4v-4z" fill="hsl(var(--orange))"/>
    <path d="M22 12h2v8h-2v-8z" fill="hsl(var(--orange))"/>
    <circle cx="7" cy="10" r="1.5" fill="hsl(var(--orange))"/>
  </svg>
);

export const Logo = ({ light = false, className = "" }: { light?: boolean; className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={light ? "/logo_light.png" : "/logo.png"}
        alt="Zuniga's Plumbing, Inc."
        className="h-12 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
