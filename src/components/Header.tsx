"use client";
import {Box, Burger, Drawer, Group, rem, Stack} from "@mantine/core";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";
import {motion} from "framer-motion";
import classes from "./Header.module.css";
import {Link} from 'next-view-transitions'

const pages = [{
    title: "home", link: "/",
}, {
    title: "music", link: "/music",
}, {
    title: "projects", link: "/projects",
}, {
    title: "contact", link: "/contact",
}];

export default function Header() {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [drawerOpened, {toggle: toggleDrawer, close: closeDrawer}] = useDisclosure(false);

    return (
        <Box style={{
            position: "sticky",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
        }}>
            <header className={classes.header} style={{
                backgroundColor: isMobile ? "transparent" : "#FFF5F9",
                borderBottom: isMobile ? "none" : `${rem(1)} solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))`,
                position: isMobile ? "fixed" : "sticky",
            }}>
                <Group h="100%" justify="center" gap={25} visibleFrom="sm">
                    {pages.map((page, index) => (<div key={index}>
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{
                                delay: index * 0.1, type: "spring", stiffness: 100, damping: 15,
                            }}
                        >
                            <Link href={page.link} className={classes.link}>
                                {page.title}
                            </Link>
                        </motion.div>
                    </div>))}
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
                        }}
                    />
                </Group>
            </header>

            <Drawer.Root
                opened={drawerOpened}
                onClose={closeDrawer}
                withinPortal={false}
                size="100%"
                padding="xl"
                hiddenFrom="sm"
                position="bottom"
            >
                <Drawer.Overlay opacity={0} />
                <Drawer.Content>
                    <Stack
                        align="center"
                        justify="center"
                        gap="xl"
                        h="100vh"
                        style={{backgroundColor: "#FFF5F9"}}
                    >
                        {pages.map((page, index) => (<motion.div
                            key={page.title}
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{
                                delay: index * 0.25, type: "spring", stiffness: 100, damping: 15,
                            }}
                        >
                            <Link
                                href={page.link}
                                className={classes.link}
                                onClick={closeDrawer}
                            >
                                {page.title}
                            </Link>
                        </motion.div>))}
                    </Stack>
                </Drawer.Content>
            </Drawer.Root>
        </Box>
    );
}