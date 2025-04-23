import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-body text-[18px] transition-[color,box-shadow] caret-main-cream outline-none disabled:cursor-not-allowed disabled:opacity-50 ",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
