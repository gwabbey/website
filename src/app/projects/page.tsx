import {Box, Center, Flex, Group, Text} from "@mantine/core";
import Title from "@/components/Title";
import Project from "@/components/Project";
import Transition from "@/components/Transition";

const items = [
    {
        title: "Gestione Move",
        description:
            "An ERP system for Move Automation Srl, a company that provides automation solutions for industries.",
        image: "/move.webp",
        url: "gestione.moveautomation.it",
    },
    {
        title: "GraceJS",
        description:
            "A TypeScript framework that simplifies the process of creating scalable web services.",
        image: "/grace.webp",
        url: "github.com/grace-js/grace",
    },
    {
        title: "scuola.bar",
        description: "An easier way to order food and drinks at school.",
        image: "/scuolabar.webp",
        url: "scuola.bar",
    },
    {
        title: "Stivor ETS",
        description:
            "A website for a non-profit organization of Italians in Bosnia.",
        image: "/stivor.webp",
        url: "stivor.net",
    },
    {
        title: "Private and school projects",
        description:
            "I've done some projects for other companies or school purposes. You can find them on my GitHub profile.",
        image: "/github.webp",
        url: "github.com/gwabbey",
    },
];

export default function Projects() {
    return (
        <Transition>
            <Flex gap="md" justify="center" align="center" direction="column">
                <Title title={"projects"} />
                <Text size={"xl"}>some projects i worked on</Text>
                <Center>
                    <Group justify="center" grow>
                        {items.map((item, index) => (
                            <Box
                                p={16}
                                key={index}
                                miw={{base: "100%", sm: 500}}
                                style={{
                                    textAlign: "center",
                                    display: "inline-block",
                                }}
                            >
                                <Project item={item} index={index} />
                            </Box>
                        ))}
                    </Group>
                </Center>
            </Flex>
        </Transition>
    );
}
