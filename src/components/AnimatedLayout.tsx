"use client";

import { motion } from "framer-motion";
import InteractiveBackground from "@/components/InteractiveBackground";
import { PropsWithChildren } from "react";

interface AnimatedLayoutProps extends PropsWithChildren {
  fontClass: string;
}

const AnimatedLayout = ({ fontClass, children }: AnimatedLayoutProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <InteractiveBackground />
      </motion.div>

      <motion.div
        className={`${fontClass} relative z-10`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default AnimatedLayout;
