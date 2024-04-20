import { Box, Burger, Container, Drawer, Group, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { Link } from "@remix-run/react";
import Title from "~/routes/components/Title";

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
        <Group h="100%" justify={"space-between"}>
          <Box component="div" hiddenFrom={"sm"}>
            <Title title={"gab"} />
          </Box>
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
            style={{ backgroundColor: "#FFF5F9" }}
          >
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
        </Drawer.Content>
      </Drawer.Root>
    </Box>
  );
}
