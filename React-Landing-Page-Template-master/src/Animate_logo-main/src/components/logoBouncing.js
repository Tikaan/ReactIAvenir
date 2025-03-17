import React from "react";
import { motion } from "framer-motion";
import headImage from "../pictures/head.png"; // Assure-toi que l'image est bien placée dans le dossier public ou src


const BouncingLogo = () => {
  return (
    <motion.div
      animate={{ y: [0, -35, 0] }} // Effet de rebond global
      transition={{ repeat: Infinity, repeatType: "loop", duration: 1.4, ease: "easeInOut" }}
      style={{ display: "flex", justifyContent: "center", alignItems: "center",width: "100vw", height: "100vh" }}
    >
      <svg width="100" height="400" viewBox="0 0 150 400" preserveAspectRatio="xMidYMid meet">
        {/* Tête ajoutée sur le ressort */}
        <image href={headImage} x="-45" y="-30" width="230" height="210" />
        
        {/* Ressort dynamique rebondissant avec chaque vague animée individuellement */}
        <motion.path 
          fill="transparent" 
          stroke="#1f3a93" 
          strokeWidth="10" 
          strokeLinecap="round"
          animate={{
            d: [
  // Compression forte
  "M 75 110 C 130 115, 120 140, 75 155 C 30 170, 30 200, 75 215 C 120 230, 110 250, 75 265 C 40 280, 40 310",
  // Extension exagérée
  "M 75 110 C 140 130, 130 180, 75 200 C 10 220, 10 270, 75 290 C 140 310, 130 350, 75 370 C 10 390, 10 440",
  // Retour à l'état initial
  "M 75 110 C 130 115, 120 140, 75 155 C 30 170, 30 200, 75 215 C 120 230, 110 250, 75 265 C 40 280, 40 310" ,
            ]
          }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
};

export default BouncingLogo;
