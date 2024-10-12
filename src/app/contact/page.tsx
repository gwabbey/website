import Transition from "@/components/Transition";
import {Flex} from "@mantine/core";
import TypingEmail from "@/components/TypingEmail";

export default function Contact() {
    return (
        <Transition>
            <Flex gap="md" justify="center" align="center" direction="column">
                <div style={{width: "100%", textAlign: "center"}}>
                    <Flex direction={"column"} align={"center"}>
                        <span>contact me at </span>
                        <TypingEmail text={"mail@g3b.dev"} />
                    </Flex>
                </div>
            </Flex>
        </Transition>
    );
}
