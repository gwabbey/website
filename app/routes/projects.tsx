import Title from "~/routes/components/Title";
import { Flex, Grid, Text } from "@mantine/core";
import Project from "~/routes/components/Project";

const items = [
  {
    title: "Gestione Move",
    description:
      "An ERP system for Move Automation Srl, a company that provides automation solutions for industrial plants.",
    image: "/images/move-automation.webp",
    url: "gestione.moveautomation.it",
  },
  {
    title: "Stivor ETS",
    description:
      "A website for a non-profit organization of Italians in Bosnia.",
    image: "/images/stivor.webp",
    url: "stivor.net",
  },
  {
    title: "gab's website 🎀",
    description: "My personal website, built with Remix and Mantine.",
    image: "/images/pink.webp",
    url: "g3b.dev",
  },
  {
    title: "Private or school projects",
    description:
      "Most of my projects are private or school projects. You can find some of them on my GitHub profile.",
    image: "/images/github.webp",
    url: "github.com/gwabbey",
  },
];

export default function Projects() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Flex gap="md" justify="center" align="center" direction="column">
        <Title title={"projects"} />
        <Text size={"xl"}>some of my projects</Text>
        <Grid justify="center" align="stretch" gutter="lg">
          {items.map((item, id) => (
            <Grid.Col
              key={id}
              style={{ maxWidth: 500, textAlign: "center" }}
              span={{ base: 12, sm: 6 }}
            >
              <Project item={item} />
            </Grid.Col>
          ))}
        </Grid>
      </Flex>
    </div>
  );
}
