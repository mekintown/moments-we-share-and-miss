"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-primary row-span-4 text-center text-subheader z-10"
      >
        ชีวิตของเรา <br /> เต็มไปด้วยความทรงจำมากมาย…
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={"/illustrations/web-intro-2.webp"}
          alt={"mountains"}
          layout="fill"
          objectFit="cover"
        ></Image>
      </motion.div>
    </>
  );
};
export default Page;
