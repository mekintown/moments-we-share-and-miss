"use client";

import { AnimatePresence, motion } from "framer-motion";
import InteractiveBackground from "@/components/InteractiveBackground";
import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";

const AnimatedLayout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <InteractiveBackground />
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          className={`relative z-10 font-th`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 1.5 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default AnimatedLayout;
