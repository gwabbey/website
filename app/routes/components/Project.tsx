import { Button, Card, Group, Image, Text } from "@mantine/core";
import styles from "./Project.module.css";

interface ItemProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function Project({ item }: { item: ItemProps }) {
  return (
    <Card
      className={styles.card}
      shadow="sm"
      padding="lg"
      radius="md"
      m={16}
      style={{
        minHeight: "100%",
      }}
      withBorder
    >
      <Card.Section>
        <Image src={item.image} alt={item.title} h={100} />
      </Card.Section>
      <Group justify="center" mt="md" mb="xs">
        <Text fw={500} size={"xl"}>
          {item.title}
        </Text>
      </Group>
      <Text size="md" c="dimmed">
        {item.description}
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
          href={item.url}
          target="_blank"
          size="md"
          radius="xl"
          w={"50%"}
        >
          Visit
        </Button>
      </Card.Section>
    </Card>
  );
}
