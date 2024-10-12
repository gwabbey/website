"use client";
import {useHover, useMediaQuery} from "@mantine/hooks";
import {Button, Flex, Text} from "@mantine/core";
import {AnimatePresence, motion} from "framer-motion";

interface ButtonProps {
    label: string;
    icon: React.ReactNode;
    color: string;
    link: string;
    username?: string;
}

export default function Links({buttons}: { buttons: ButtonProps[] }) {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <Flex
            gap="xl"
            justify="center"
            align="center"
            py={16}
            direction={isMobile ? "column" : "row"}
        >
            {buttons.map(({label, icon, color, link, username}, id) => {
                const {hovered, ref} = useHover();

                return (
                    <motion.div
                        ref={ref}
                        key={id}
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{
                            delay: id * 0.1,
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                        }}
                        style={{
                            width: isMobile ? "100%" : "auto",
                            paddingInline: isMobile ? "24px" : "0px",
                            borderRadius: "9999px",
                        }}
                    >
                        <motion.div
                            initial={false}
                            animate={{
                                width: !isMobile && hovered ? "auto" : "auto",
                            }}
                            transition={{type: "spring", stiffness: 100, damping: 15}}
                        >
                            <Button
                                fullWidth={isMobile}
                                component="a"
                                href={link}
                                target="_blank"
                                size="xl"
                                justify="center"
                                leftSection={isMobile && icon}
                                variant={hovered ? "outline" : "default"}
                                color={color}
                                radius="xl"
                                style={{
                                    transition: "all 0.5s ease",
                                    backgroundImage: `linear-gradient(128deg, #FFF5F9 0%, #FFF5F9 100%)`,
                                    boxShadow: hovered
                                        ? `0 0 20px 10px var(--mantine-color-${color}-light)`
                                        : "none",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: isMobile ? undefined : "10px 20px",
                                }}
                            >
                                {isMobile ? (
                                    label
                                ) : (
                                    <Flex align="center">
                                        {icon}
                                        <AnimatePresence>
                                            {hovered && (
                                                <motion.div
                                                    initial={{opacity: 0, width: 0}}
                                                    animate={{opacity: 1, width: "auto"}}
                                                    exit={{opacity: 0, width: 0}}
                                                    transition={{duration: 0.3}}
                                                    style={{overflow: "hidden"}}
                                                >
                                                    <Text style={{marginLeft: "10px", whiteSpace: "nowrap"}}>
                                                        {username ?? ""}
                                                    </Text>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </Flex>
                                )}
                            </Button>
                        </motion.div>
                    </motion.div>
                );
            })}
        </Flex>
    );
}