import {Flex} from "@mantine/core";
import Title from "@/components/Title";
import Transition from "@/components/Transition";

export default function Music() {
    return (<Transition>
        <Flex gap="md" justify="center" align="center" direction="column">
            <Title title={"music"} />
            <iframe
                title="music"
                style={{
                    borderRadius: 10, border: "none", maxWidth: 800, minHeight: 600, padding: 16,
                }}
                src={"https://open.spotify.com/embed/artist/038iYWhZBwm1mubQW0U5hB"}
                width="100%"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
        </Flex>
    </Transition>);
}
