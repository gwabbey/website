import { Box, Burger, Drawer, Group, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, useNavigation } from "@remix-run/react";
import { useEffect } from "react";
import classes from "./Header.module.css";
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

  const transition = useNavigation();

  useEffect(() => {
    if (transition.state === "idle") {
      console.log("idle");
      closeDrawer();
    }
  }, [transition.state, closeDrawer]);

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
        <Group h="100%" justify={"space-between"} hiddenFrom={"sm"}>
          <Box component="div">
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
                  unstable_viewTransition
                  className={classes.link}
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
