import Title from "~/routes/components/Title";
import { Button, Card, Flex, Group, Image, Text } from "@mantine/core";

export default function Projects() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Flex gap="md" justify="center" align="center" direction="column">
        <Title title={"projects"} />
        <div style={{ width: "100%", maxWidth: 800, textAlign: "center" }}>
          <Text size={"xl"}>some of my projects</Text>
          <Card shadow="sm" padding="lg" radius="md" m={16} withBorder>
            <Card.Section>
              <Image
                src="/images/move-automation.png"
                height={80}
                width={80}
                alt="Gestione Move"
              />
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
        </div>
      </Flex>
    </div>
  );
}
