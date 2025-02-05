"use client"
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

export default function textAnimation() {
    const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This ensures the code is only run in the browser, avoiding SSR errors
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Do not render the component on the server
  }
  return (
    <div>
        <motion.p
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: [0.9, 1.05, 1] }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="xl:relative xl:z-10 font-integral font-bold leading-[34px] text-[30px] ml-4 mt-6 hidden xl:block xl:text-[64px] xl:ml-[100px] xl:mt-20 xl:leading-[64px]"
            >
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              >
                FIND CLOTHES{" "}
              </motion.span>
              <motion.span
                className="xl:block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
              >
                THAT MATCHES{" "}
              </motion.span>
              <motion.span
                className="xl:block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
              >
                YOUR STYLE
              </motion.span>
            </motion.p>
        
        
    </div>
  )
}
