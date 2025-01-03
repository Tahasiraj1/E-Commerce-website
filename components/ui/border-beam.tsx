import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export const BorderBeam = ({
  className,
  size = 200,
  duration = 15,
  borderWidth = 1.5,
  colorFrom = "#73ffedff",
  colorTo = "#9c40ff",
  delay = 0,
}: BorderBeamProps) => {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",

        // mask styles
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",

        // pseudo styles
        "after:absolute after:inset-[-1px] after:rounded-[inherit] after:animate-border-beam after:[animation-delay:var(--delay)]",
        "after:[background:linear-gradient(90deg,transparent_0%,var(--color-from)_20%,var(--color-to)_80%,transparent_100%)_padding-box,linear-gradient(90deg,transparent_0%,var(--color-from)_20%,var(--color-to)_80%,transparent_100%)_border-box]",
        "after:[background-size:200%_100%]",
        "after:[background-position:-100%_0]",
        className
      )}
    />
  );
};

