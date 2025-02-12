"use client";
import { motion } from "framer-motion";

export default function TextAnimationMobile() {
  return (
    <div className="ml-8 block xl:hidden">
      {/* Heading Animation */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, scale: [0.9, 1.05, 1] }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="font-integral font-bold leading-[34px] text-[30px] sm:text-[35px] mt-6"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          FIND CLOTHES{" "}
        </motion.span>
        <motion.span
          className="block sm:inline"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          THAT MATCHES{" "}
        </motion.span>
        <motion.span
          className="block"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          YOUR STYLE
        </motion.span>
      </motion.p>

      {/* Description Animation */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-4  xl:relative xl:z-10 text-[14px] xl:hidden sm:text-[16px] md:text-[20px] h-[50px] smMax:w-[280px] w-[358px] sm:w-[458px]"
        style={{ color: "#00000099" }}
      >
        Browse through our diverse range of meticulously crafted garments, designed{" "}
        <motion.span
          className="xl:block"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          to bring out your individuality and cater to your sense of style.
        </motion.span>
      </motion.p>
    </div>
  );
}
