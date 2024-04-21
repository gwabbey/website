import Title from "~/routes/components/Title";
import { Button, Card, Flex, Grid, Group, Image, Text } from "@mantine/core";

export default function Projects() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Flex gap="md" justify="center" align="center" direction="column">
        <Title title={"projects"} />
        <Text size={"xl"}>some of my projects</Text>
        <Grid justify="center" align="stretch">
          <Grid.Col style={{ maxWidth: 600, textAlign: "center" }}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              m={16}
              h={300}
              withBorder
            >
              <Card.Section>
                <Image
                  src="/images/move-automation.webp"
                  alt="Gestione Move"
                  h={100}
                />
              </Card.Section>
              <Group justify="center" mt="md" mb="xs">
                <Text fw={500} size={"xl"}>
                  Gestione Move
                </Text>
              </Group>
              <Text size="md" c="dimmed">
                An ERP system for Move Automation Srl, a company that provides
                automation solutions for industrial plants.
              </Text>
              <Card.Section p={16}>
                <Button
                  style={{
                    position: "absolute",
                    bottom: 16,
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                  component={"a"}
                  href="gestione.moveautomation.it"
                  target="_blank"
                  size="md"
                  radius="xl"
                  w={"50%"}
                >
                  Visit
                </Button>
              </Card.Section>
            </Card>
          </Grid.Col>
          <Grid.Col style={{ maxWidth: 500, textAlign: "center" }}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              m={16}
              withBorder
              h={375}
            >
              <Card.Section>
                <Image src="/images/stivor.webp" alt="Gestione Move" h={200} />
              </Card.Section>
              <Group justify="center" mt="md" mb="xs">
                <Text fw={500} fs={"xl"}>
                  Gestione Move
                </Text>
              </Group>
              <Text size="sm" c="dimmed">
                A web application for managing a small business
              </Text>
              <Card.Section p={16}>
                <Button
                  style={{
                    position: "absolute",
                    bottom: 16,
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                  component={"a"}
                  href="gestione.moveautomation.it"
                  target="_blank"
                  size="md"
                  radius="xl"
                  w={"50%"}
                >
                  Visit
                </Button>
              </Card.Section>
            </Card>
          </Grid.Col>
          <Grid.Col style={{ maxWidth: 500, textAlign: "center" }}>
            <Card shadow="sm" padding="lg" radius="md" m={16} withBorder>
              <Card.Section>
                <Image src="/images/stivor.webp" alt="Gestione Move" h={200} />
              </Card.Section>

              <Group justify="center" mt="md" mb="xs">
                <Text fw={500} fs={"xl"}>
                  Gestione Move
                </Text>
              </Group>

              <Text size="sm" c="dimmed">
                A web application for managing a small business
              </Text>

              <Card.Section p={16}>
                <Button
                  component={"a"}
                  href="gestione.moveautomation.it"
                  target="_blank"
                  size="md"
                  radius="xl"
                  w={"50%"}
                >
                  Visit
                </Button>
              </Card.Section>
            </Card>
          </Grid.Col>
        </Grid>
      </Flex>
    </div>
  );
}
