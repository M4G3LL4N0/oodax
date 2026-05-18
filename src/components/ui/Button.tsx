import Link from "next/link";
import { cn } from "@/lib/utils";

type BaseProps = {
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
};

type LinkButtonProps = BaseProps & {
  href: string;
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 lift";

const variants = {
  primary:
    "bg-cyan-400/90 text-slate-950 shadow-[0_10px_35px_rgba(34,211,238,0.35)] hover:bg-cyan-300",
  secondary:
    "border border-cyan-300/30 bg-slate-900/40 text-slate-100 hover:border-cyan-200/50 hover:bg-slate-800/60",
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  className,
  children,
}: LinkButtonProps) {
  return (
    <Link href={href} onClick={onClick} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
