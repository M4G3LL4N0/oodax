import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div className={cn("glass rounded-2xl border border-slate-700/50 p-6", className)}>
      {children}
    </div>
  );
}
