import { Box, Burger, Drawer, Group, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { Link } from "@remix-run/react";

const pages = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "music",
    link: "/music",
  },
  {
    title: "projects",
    link: "/projects",
  },
  {
    title: "contact",
    link: "/contact",
  },
];

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box>
      <header className={classes.header}>
        <Group h="100%" justify={"center"} gap={25} visibleFrom="sm">
          {pages.map((page) => (
            <div key={page.title}>
              <Link to={page.link} className={classes.link}>
                {page.title}
              </Link>
            </div>
          ))}
        </Group>
        <Group h="100%" justify={"end"}>
          <Burger
            style={{ zIndex: 20 }}
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        withCloseButton={false}
        size="100%"
        padding="xl"
        hiddenFrom="sm"
        position="bottom"
        overlayProps={{ backgroundOpacity: 0 }}
        zIndex={10}
      >
        <Stack align="center" justify="center" gap="xl" h="calc(100vh - 120px)">
          {pages.map((page) => (
            <div key={page.title}>
              <Link
                to={page.link}
                className={classes.link}
                onClick={closeDrawer}
              >
                {page.title}
              </Link>
            </div>
          ))}
        </Stack>
      </Drawer>
    </Box>
  );
}
