"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full h-lvh">
      <motion.div
        className="grid grid-rows-4 p-10 h-full place-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default BaseLayout;
