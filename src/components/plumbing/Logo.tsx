import { company } from '@/config/company.config';

export const Logo = ({ light = false, className = "" }: { light?: boolean; className?: string }) => {
  return (
    <div
      className={`inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-sm ring-1 ring-black/10 ${
        light ? 'shadow-black/20' : ''
      } ${className}`}
    >
      <img
        src={light ? "/logo_light.png" : "/logo.png"}
        alt={`${company.name} logo`}
        className="h-11 md:h-12 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
