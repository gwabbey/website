import {Flex, Text} from "@mantine/core";
import {
    IconBrandGithub,
    IconBrandSoundcloud,
    IconBrandSpotify,
    IconBrandX,
    IconBrandYoutube,
    IconMail,
} from "@tabler/icons-react";
import Links from "@/components/Links";
import Title from "@/components/Title";
import Image from "next/image";
import Transition from "@/components/Transition";

const buttons = [
    {
        label: "spotify",
        icon: <IconBrandSpotify size={32} />,
        color: "green",
        link: "https://open.spotify.com/artist/038iYWhZBwm1mubQW0U5hB",
        username: "gab",
    },
    {
        label: "youtube",
        icon: <IconBrandYoutube size={32} />,
        color: "red",
        link: "https://youtube.com/@g3b",
        username: "gab",
    },
    {
        label: "twitter",
        icon: <IconBrandX size={32} />,
        color: "cyan",
        link: "https://twitter.com/gwabbeyy",
        username: "gwabbeyy",
    },
    {
        label: "soundcloud",
        icon: <IconBrandSoundcloud size={32} />,
        color: "orange",
        link: "https://soundcloud.com/gwabbey",
        username: "gwabbey",
    },
    {
        label: "github",
        icon: <IconBrandGithub size={32} />,
        color: "gray",
        link: "https://github.com/gwabbey",
        username: "gwabbey",
    },
    {
        label: "email",
        icon: <IconMail size={32} />,
        color: "hotpink",
        link: "mailto:mail@g3b.dev",
        username: "mail@g3b.dev",
    },
];

export default function Home() {
    return (
        <Transition>
            <Flex justify="center" align="center" direction="column">
                <div style={{
                    paddingTop: 32,
                    paddingBottom: 16,
                }}>
                    <Image
                        priority
                        src="/gab.webp"
                        alt="gab"
                        width={200}
                        height={200}
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
                <Title title={"gab"} />
                <Text size="xl" p={16}>
                    ✨ musician and developer ✨
                </Text>
            </Flex>
            <Links buttons={buttons} />
        </Transition>
    );
}