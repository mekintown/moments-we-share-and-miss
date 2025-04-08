import { ChangeEvent } from "react";

import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";

export const TextAreaWithCounter = ({
  onChange,
  value,
  maxCount,
  className,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  maxCount?: number;
  className?: string;
}) => {
  return (
    <div className={cn(className, "relative")}>
      <Textarea
        className="border-2 rounded-xl h-full resize-none text-body py-2 px-4 caret-main-cream"
        onChange={(e) => {
          if (!maxCount || e.target.value.length <= maxCount) {
            onChange(e);
          }
        }}
        value={value}
      />
      {maxCount ? (
        <div className="absolute bottom-1 right-3 text-[#8E8E93] text-lg font-light">
          {value.length}/{maxCount}
        </div>
      ) : null}
    </div>
  );
};
