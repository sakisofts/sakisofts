import React from 'react';
import { Cpu } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className, iconOnly }) => {
  return (
    <div className={cn("flex items-center gap-3 group cursor-pointer", className)}>
      <div className="relative">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-all duration-300">
          <Cpu className="w-6 h-6 text-white" />
        </div>
      </div>
      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <span className="font-display font-extrabold text-2xl lg:text-3xl tracking-tighter text-foreground">
            SAKI<span className="text-primary">SOFTS</span>
          </span>
          <span className="text-[9px] font-bold tracking-[0.3em] text-primary uppercase mt-1">
            TECH HUB LIMITED
          </span>
        </div>
      )}
    </div>
  );
};
