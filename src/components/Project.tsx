"use client";
import { Box, Button, Card, Text } from "@mantine/core";
import { useHover, useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

interface ItemProps {
    title: string;
    description: string;
    image: string;
    url: string;
}

const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.25,
            duration: 0.5,
        },
    }),
};

export default function Project({ item, index }: { item: ItemProps; index: number }) {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const { hovered, ref } = useHover();

    return (
        <motion.div
            variants={projectVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            style={{ display: "inline-block", width: "100%" }}
            whileHover={{ scale: 1.05 }}
            transition={{ ease: "easeInOut" }}
        >
            <Card
                shadow="sm"
                padding="lg"
                radius="md"
                h={{ base: "auto", sm: 300 }}
                withBorder
            >
                <Card.Section>
                    <Image
                        priority
                        src={item.image}
                        alt={item.title}
                        height={100}
                        width={200}
                        style={{ width: "100%", objectFit: "cover" }}
                    />
                </Card.Section>
                <Card.Section p={16}>
                    <Text fw={500} size={"xl"}>
                        {item.title}
                    </Text>
                    <Text size="md" m={8} c="dimmed">
                        {item.description}
                    </Text>
                </Card.Section>
                <Box p={16}>
                    <div ref={ref} style={{
                        pointerEvents: item.url ? "all" : "none",
                    }}>
                        <motion.div
                            style={{
                                position: "absolute",
                                left: "50%",
                                bottom: 16,
                                transform: "translateX(-50%)",
                                width: isMobile ? "90%" : "50%",
                            }}
                            initial={false}
                            animate={{
                                height: hovered ? 80 : 40,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                            }}
                        >
                            <motion.div
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    overflow: "hidden",
                                    borderRadius: 40,
                                    backgroundColor: "#FFF0F5",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-end"
                                }}
                                initial={{ height: 40 }}
                                animate={{ height: hovered ? 80 : 40 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30,
                                }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 20 }}
                                    transition={{ duration: 0.2 }}
                                    style={{
                                        textAlign: "center",
                                        marginBottom: 4
                                    }}
                                >
                                    <Text style={{ color: "#FF69B4" }}>
                                        {item.url}
                                    </Text>
                                </motion.div>
                                <div>
                                    <Button
                                        fullWidth={isMobile}
                                        style={{
                                            width: "100%",
                                            transition: "all 0.5s ease",
                                            opacity: item.url ? 1 : 0.5,
                                            pointerEvents: item.url ? "all" : "none",
                                            borderTopLeftRadius: hovered ? 0 : 40,
                                            borderTopRightRadius: hovered ? 0 : 40,
                                        }}
                                        component={"a"}
                                        href={`https://${item.url}`}
                                        target="_blank"
                                        size="md"
                                        radius="xl"
                                    >
                                        {item.url ? "visit" : "coming soon"}
                                    </Button>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </Box>
            </Card>
        </motion.div>
    );
}