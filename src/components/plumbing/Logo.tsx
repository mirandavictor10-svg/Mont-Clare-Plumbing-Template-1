import { company } from '@/config/company.config';

export const Logo = ({ light = false, className = "" }: { light?: boolean; className?: string }) => {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src={light ? "/logo_light.png" : "/logo.png"}
        alt={`${company.name} logo`}
        className="h-16 md:h-20 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
