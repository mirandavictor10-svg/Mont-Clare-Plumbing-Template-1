import { company } from '@/config/company.config';

export const Logo = ({ light = false, className = "" }: { light?: boolean; className?: string }) => {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src={light ? "/logo_light.png" : "/logo.png"}
        alt={`${company.name} logo`}
        className="h-32 md:h-40 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
