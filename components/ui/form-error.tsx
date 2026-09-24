import * as React from "react";
import { AlertCircle } from "lucide-react";

import { cn } from "@/lib/utils";

export interface FormErrorProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  message?: string;
  children?: React.ReactNode;
}

export function FormError({
  message,
  children,
  className,
  ...props
}: FormErrorProps) {
  const content = message || children;
  if (!content) return null;

  return (
    <p
      role="alert"
      className={cn(
        "flex items-center gap-1.5 text-xs font-semibold text-rose-500 animate-in fade-in slide-in-from-top-1 duration-200",
        className,
      )}
      {...props}
    >
      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
      <span>{content}</span>
    </p>
  );
}
