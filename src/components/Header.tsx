"use client";
import {Box, Burger, Drawer, Group, Stack} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
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
    const [drawerOpened, {toggle: toggleDrawer, close: closeDrawer}] = useDisclosure(false);

    return (
        <Box>
            <header className={classes.header}>
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
                        hiddenFrom="sm"
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