"use client";
import {Box, Burger, Drawer, Flex, Group, rem, Stack} from "@mantine/core";
import {useDisclosure, useHover, useMediaQuery} from "@mantine/hooks";
import {motion} from "framer-motion";
import classes from "./Header.module.css";
import {Link} from 'next-view-transitions';
import {IconCode, IconHome, IconMail, IconMusic} from "@tabler/icons-react";
import {useState} from 'react';

const pages = [
    {title: "home", link: "/", icon: <IconHome size={32} />},
    {title: "music", link: "/music", icon: <IconMusic size={32} />},
    {title: "projects", link: "/projects", icon: <IconCode size={32} />},
    {title: "contact", link: "/contact", icon: <IconMail size={32} />},
];

export default function Header() {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [drawerOpened, {toggle: toggleDrawer, close: closeDrawer}] = useDisclosure(false);
    const {hovered, ref} = useHover();
    const [isNavigating, setIsNavigating] = useState(false);
    const isExpanded = hovered || isNavigating;

    const handleClick = () => {
        setIsNavigating(true);
        setTimeout(() => {
            setIsNavigating(false);
        }, 2000);
    };

    return (
        <Box style={{position: "sticky", top: 0, left: 0, right: 0, zIndex: 1000}}>
            <motion.header
                className={classes.header}
                style={{
                    backgroundColor: isMobile ? "transparent" : "#FFF5F9",
                    borderBottom: isMobile ? "none" : `${rem(1)} solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))`,
                }}
                animate={{
                    height: isExpanded ? 140 : 80,
                }}
                transition={{
                    type: "easeInOut",
                    duration: 0.5,
                    delay: isExpanded ? 0 : 0.1,
                }}
            >
                <Group h="100%" justify="center" gap="xl" visibleFrom="sm" ref={ref}>
                    {pages.map((page, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{
                                delay: isExpanded ? index * 0.1 : 0,
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                        >
                            <Link href={page.link} className={classes.link} onClick={handleClick}>
                                <Flex align="center" direction="column">
                                    {page.icon}
                                    <motion.div
                                        initial={{opacity: 0, y: 20, height: 0}}
                                        animate={{
                                            opacity: isExpanded ? 1 : 0,
                                            y: isExpanded ? 0 : 20,
                                            height: isExpanded ? "auto" : 0,
                                            pointerEvents: isExpanded ? "all" : "none"
                                        }}
                                        transition={{
                                            delay: isExpanded ? index * 0.1 : 0,
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 15
                                        }}
                                    >
                                        {page.title}
                                    </motion.div>
                                </Flex>
                            </Link>
                        </motion.div>
                    ))}
                </Group>
                <Group h="100%" justify="end" hiddenFrom="sm">
                    <Burger
                        opened={drawerOpened}
                        onClick={toggleDrawer}
                        size="md"
                        hiddenFrom="sm"
                        style={{
                            outline: "none",
                            border: "none",
                            position: "absolute",
                            top: "18px",
                            right: "15px",
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            backgroundColor: "pink",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 1000,
                        }}
                    />
                </Group>
            </motion.header>

            <Drawer.Root opened={drawerOpened} onClose={closeDrawer} withinPortal={false} size="100%" padding="xl"
                         hiddenFrom="sm" position="bottom">
                <Drawer.Overlay opacity={0} />
                <Drawer.Content>
                    <Stack align="center" justify="center" gap="xl" h="100vh" style={{backgroundColor: "#FFF5F9"}}>
                        {pages.map((page, index) => (
                            <motion.div
                                key={page.title}
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{
                                    delay: index * 0.25,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 15
                                }}
                            >
                                <Link href={page.link} className={classes.link} onClick={closeDrawer}>
                                    {page.title}
                                </Link>
                            </motion.div>
                        ))}
                    </Stack>
                </Drawer.Content>
            </Drawer.Root>
        </Box>
    );
}