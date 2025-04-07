"use client";

import { AnimatePresence, motion } from "motion/react";
import InteractiveBackground from "@/components/InteractiveBackground";
import { PropsWithChildren, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const AnimatedLayout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    console.log("set path");
    setCurrentPath(pathname);
  }, [pathname]);

  console.log("Current route in AnimatedLayout:", pathname);
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPath}
          className={`relative z-10 font-th grid grid-rows-4 p-10 w-full h-lvh place-items-center `}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 1.2 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default AnimatedLayout;
