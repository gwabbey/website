import type { MetaFunction } from "@remix-run/node";
import { Button, Flex, Image, Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandSoundcloud,
  IconBrandSpotify,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { useHover, useMediaQuery } from "@mantine/hooks";
import gab from "/images/gab.webp";
import Title from "~/routes/components/Title";

export const meta: MetaFunction = () => {
  return [
    { title: "gab" },
    { name: "description", content: "musician and developer" },
  ];
};

const buttons = [
  {
    label: "spotify",
    icon: <IconBrandSpotify size={32} />,
    color: "green",
    link: "https://open.spotify.com/artist/038iYWhZBwm1mubQW0U5hB",
  },
  {
    label: "youtube",
    icon: <IconBrandYoutube size={32} />,
    color: "red",
    link: "https://youtube.com/@g3b",
  },
  {
    label: "twitter",
    icon: <IconBrandTwitter size={32} />,
    color: "cyan",
    link: "https://twitter.com/gwabbeyy",
  },
  {
    label: "soundcloud",
    icon: <IconBrandSoundcloud size={32} />,
    color: "orange",
    link: "https://soundcloud.com/gwabbey",
  },
  {
    label: "github",
    icon: <IconBrandGithub size={32} />,
    color: "gray",
    link: "https://github.com/gwabbey",
  },
];

export default function Index() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div style={{ lineHeight: "1.8" }}>
      <Flex justify="center" align="center" direction="column">
        <Image src={gab} alt="gab" w={200} />
        <Title title={"gab"} />
        <Text size="xl" p={16}>
          ✨ musician and developer ✨
        </Text>
      </Flex>

      <Flex
        gap="xl"
        justify="center"
        align="center"
        py={16}
        direction={isMobile ? "column" : "row"}
      >
        {buttons.map(({ label, icon, color, link }, id) => {
          const { hovered, ref } = useHover();
          return (
            <div
              ref={ref}
              key={id}
              style={{
                width: isMobile ? "100%" : "auto",
                paddingInline: isMobile ? "24px" : "0px",
                borderRadius: "9999px",
              }}
            >
              <Button
                fullWidth={isMobile}
                component="a"
                href={link}
                target="_blank"
                size="xl"
                justify="center"
                leftSection={isMobile && icon}
                variant={hovered ? "outline" : "default"}
                color={color}
                radius="xl"
                style={{
                  transition: "all 0.5s ease",
                  backgroundImage: `linear-gradient(128deg, #FFF5F9 0%, #FFF5F9 100%)`,
                  boxShadow: hovered
                    ? `0 0 20px 10px var(--mantine-color-${color}-light)`
                    : "none",
                }}
              >
                {isMobile ? label : icon}
              </Button>
            </div>
          );
        })}
      </Flex>
    </div>
  );
}
