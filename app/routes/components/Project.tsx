import { Box, Button, Card, Image, Text } from "@mantine/core";
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
      h={{ base: "auto", sm: 300 }}
      withBorder
    >
      <Card.Section>
        <Image src={item.image} alt={item.title} h={100} />
      </Card.Section>
      <Card.Section p={16}>
        <Text fw={500} size={"xl"}>
          {item.title}
        </Text>
        <Text size="md" m={8} c="dimmed">
          {item.description}
        </Text>
      </Card.Section>
      <Box p={16}>
        <Button
          style={{
            position: "absolute",
            left: "50%",
            bottom: 16,
            transform: "translateX(-50%)",
            transition: "all 0.5s ease",
            opacity: item.url ? 1 : 0.5,
            pointerEvents: item.url ? "all" : "none",
          }}
          component={"a"}
          href={`https://${item.url}`}
          target="_blank"
          size="md"
          radius="xl"
          w={"50%"}
        >
          {item.url ? "visit" : "coming soon"}
        </Button>
      </Box>
    </Card>
  );
}
