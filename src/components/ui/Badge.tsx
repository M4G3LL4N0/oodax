import { cn } from "@/lib/utils";

type BadgeProps = {
  label: string;
  tone?: "default" | "warning" | "danger" | "success";
};

const tones = {
  default: "border-cyan-300/30 text-cyan-100 bg-cyan-500/10",
  warning: "border-amber-300/35 text-amber-100 bg-amber-500/10",
  danger: "border-rose-300/35 text-rose-100 bg-rose-500/10",
  success: "border-emerald-300/35 text-emerald-100 bg-emerald-500/10",
};

export default function Badge({ label, tone = "default" }: BadgeProps) {
  return (
    <span className={cn("rounded-full border px-3 py-1 text-xs font-medium", tones[tone])}>
      {label}
    </span>
  );
}
