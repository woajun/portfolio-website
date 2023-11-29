import { ReactNode } from "react";

export const B = ({ children }: { children: ReactNode }) => (
  <span className="font-bold">{children}</span>
);

export const I = ({ children }: { children: ReactNode }) => (
  <span className="italic">{children}</span>
);

export const U = ({ children }: { children: ReactNode }) => (
  <span className="underline">{children}</span>
);

