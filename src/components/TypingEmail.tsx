"use client";
import {Anchor} from "@mantine/core";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";

export default function TypingEmail({text}: { text: string }) {
    const [displayedText, setDisplayedText] = useState("");
    const [i, setI] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const typingEffect = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prevState) => prevState + text.charAt(i));
                setI(i + 1);
            } else {
                clearInterval(typingEffect);
                setIsFinished(true);
            }
        }, 100);

        return () => {
            clearInterval(typingEffect);
        };
    }, [i]);

    return (
        <motion.div
            initial={{scale: 1}}
            animate={{scale: isFinished ? 1.5 : 1}}
            transition={{type: "spring", stiffness: 300, damping: 15}}
        >
            <Anchor href={`mailto:${text}`} size="xl" underline="hover" style={{
                pointerEvents: isFinished ? "all" : "none",
                transition: "all 0.5s ease",
            }}>
                {displayedText}
            </Anchor>
        </motion.div>
    );
}