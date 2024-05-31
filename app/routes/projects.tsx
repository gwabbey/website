import Title from "~/routes/components/Title";
import { Box, Center, Flex, Group, Text } from "@mantine/core";
import Project from "~/routes/components/Project";

const items = [
  {
    title: "Gestione Move",
    description:
      "An ERP system for Move Automation Srl, a company that provides automation solutions for industries.",
    image: "/images/move-automation.webp",
    url: "gestione.moveautomation.it",
  },
  {
    title: "GraceJS",
    description:
      "A TypeScript framework that simplifies the process of creating scalable web services.",
    image: "/images/grace.webp",
    url: "docs.gracejs.dev",
  },
  {
    title: "Stivor ETS",
    description:
      "A website for a non-profit organization of Italians in Bosnia.",
    image: "/images/stivor.webp",
    url: "stivor.net",
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
    <div style={{ lineHeight: "1.8" }}>
      <Flex gap="md" justify="center" align="center" direction="column">
        <Title title={"projects"} />
        <Text size={"xl"}>some projects i worked on</Text>
        <Center>
          <Group justify="center" grow>
            {items.map((item, id) => (
              <Box
                p={16}
                key={id}
                miw={{ base: "100%", sm: 500 }}
                style={{
                  textAlign: "center",
                  display: "inline-block",
                }}
              >
                <Project item={item} />
              </Box>
            ))}
          </Group>
        </Center>
      </Flex>
    </div>
  );
}
