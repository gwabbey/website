import { json } from "@remix-run/node";
import Title from "~/routes/components/Title";
import { useLoaderData } from "@remix-run/react";
import { Flex, Text } from "@mantine/core";

export const loader = async () => {
  const spotifyApiUrl =
    "https://api.spotify.com/v1/artists/038iYWhZBwm1mubQW0U5hB/albums";

  try {
    const tokenResponse = await fetch(
      "https://accounts.spotify.com/api/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${Buffer.from(
            `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
          ).toString("base64")}`,
        },
        body: "grant_type=client_credentials",
      }
    );

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    const response = await fetch(spotifyApiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    data.items.sort((a: any, b: any) =>
      a.release_date < b.release_date ? 1 : -1
    );

    return json(data);
  } catch (error) {
    console.error("Error fetching data from Spotify API:", error);
    throw new Error("Unable to fetch data from Spotify API");
  }
};

export default function Music() {
  const data = useLoaderData() as { items: { id: string }[] };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Flex gap="md" justify="center" align="center" direction="column">
        <Title title={"music"} />
        <Text size={"xl"}>my latest release</Text>
        <iframe
          style={{ borderRadius: 10, border: "none" }}
          src={"https://open.spotify.com/embed/album/" + data.items[0].id}
          width="75%"
          height="352"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </Flex>
    </div>
  );
}
