"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

const AvatarSection = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <MotionDiv
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative mx-auto flex aspect-square w-[min(86vw,400px)] items-center justify-center md:w-[min(44vw,480px)]"
        >
            <div className="absolute inset-[8%] -z-10 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.28),rgba(14,165,233,0.12),transparent_72%)] blur-2xl" />

            <MotionDiv
                animate={{ scale: hovered ? 1.03 : 1 }}
                transition={{ duration: 0.35 }}
                className="relative aspect-square w-[84%] overflow-hidden rounded-full border border-white/20 shadow-[0_18px_45px_rgba(0,0,0,0.45)]"
            >
                <img src="/images/avatar-section.png" alt="Avatar" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </MotionDiv>
        </MotionDiv>
    );
};

export default AvatarSection;
