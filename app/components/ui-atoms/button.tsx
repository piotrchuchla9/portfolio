import Link from "next/link";
import { ReactNode } from "react";

interface ButtonNavInterface {
  to: string;
  children: ReactNode;
  className?: string;
}

export function ButtonNav({ to, children, className }: ButtonNavInterface) {
  return (
    <Link className={className} href={to}>
      {children}
    </Link>
  );
}
