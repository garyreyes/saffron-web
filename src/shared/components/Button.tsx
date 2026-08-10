import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3 text-sm tracking-wide font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-saffron text-charcoal-deep hover:bg-saffron-bright",
  outline: "border border-cream/40 text-cream hover:border-saffron-bright hover:text-saffron-bright",
};

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant };

export function LinkButton({ variant = "primary", className = "", ...props }: LinkButtonProps) {
  return <a className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant };

export function SubmitButton({ variant = "primary", className = "", ...props }: SubmitButtonProps) {
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
