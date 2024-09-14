import Title from "~/routes/components/Title";
import { Flex } from "@mantine/core";

export default function Music() {
  return (
    <div style={{ lineHeight: "1.8" }}>
      <Flex gap="md" justify="center" align="center" direction="column">
        <Title title={"music"} />
        <iframe
          title="music"
          style={{
            borderRadius: 10,
            border: "none",
            maxWidth: 800,
            minHeight: 600,
            padding: 16,
          }}
          src={"https://open.spotify.com/embed/artist/038iYWhZBwm1mubQW0U5hB"}
          width="100%"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </Flex>
    </div>
  );
}
