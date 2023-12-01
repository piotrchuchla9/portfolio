import Link from "next/link";
import { ReactNode } from "react";

interface ButtonNavInterface {
  to: string;
  children: ReactNode;
  className?: string;
  target?: string;
}

export function ButtonNav({
  to,
  children,
  className,
  target,
}: ButtonNavInterface) {
  return (
    <a className={className} href={to} target={target}>
      {children}
    </a>
  );
}
