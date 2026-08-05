import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost" };
export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return <button className={cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ebf400] disabled:opacity-50", variant === "primary" && "bg-[#ebf400] text-[#02021e] hover:bg-[#f4fa5a]", variant === "secondary" && "border border-[#30305c] bg-[#111139] text-white hover:border-[#55558a]", variant === "ghost" && "border border-[#29294d] bg-transparent text-[#aaaabd] hover:text-white", className)} {...props} />;
}
