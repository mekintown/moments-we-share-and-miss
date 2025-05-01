"use client";

import { PropsWithChildren, ReactNode, useCallback } from "react";
import { useRouter } from "next/navigation";
import NextButton from "@/components/NextButton";
import { motion } from "framer-motion";

interface Props extends PropsWithChildren {
  children: ReactNode;
  nextUrl: string;
  enabled?: boolean;
  label?: string;
}

const PageWithTapToNext = ({
  children,
  nextUrl,
  enabled = true,
  label = "แตะเพื่อไปต่อ",
}: Props) => {
  const router = useRouter();
  const goNext = useCallback(
    () => enabled && router.push(nextUrl),
    [enabled, nextUrl, router]
  );

  return (
    <>
      {enabled && (
        <div className="absolute inset-0 z-0 cursor-pointer" onClick={goNext} />
      )}

      {children}

      {enabled && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="row-start-4 z-10 pointer-events-none"
        >
          <NextButton
            variant="ghost"
            label={label}
            url={enabled ? nextUrl : "#"}
            disabled={!enabled}
            className="text-remark text-main-cream opacity-60 hover:opacity-100 hover:text-main-cream hover:bg-transparent"
          />
        </motion.div>
      )}
    </>
  );
};

export default PageWithTapToNext;
