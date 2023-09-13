// @ts-nocheck
import React from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

export default ({ children, sideNavOpen }) => {
  const { user, isLoading: user_loading, ...rest } = useUser();

  return (
    <div>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 1260,
          damping: 120,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
