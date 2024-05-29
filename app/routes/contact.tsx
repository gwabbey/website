import { Anchor, Flex } from "@mantine/core";

export default function Contact() {
  return (
    <div style={{ lineHeight: "1.8" }}>
      <Flex gap="md" justify="center" align="center" direction="column">
        <div style={{ width: "100%", textAlign: "center" }}>
          <Flex direction={"column"} align={"center"}>
            <span>contact me at </span>
            <Anchor href="mailto:mail@g3b.dev" size="xl" underline="hover">
              mail@g3b.dev
            </Anchor>
          </Flex>
        </div>
      </Flex>
    </div>
  );
}
