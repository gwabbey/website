import { json } from "@remix-run/node";
import Title from "~/routes/components/Title";
import { Await, useLoaderData } from "@remix-run/react";
import { ActionIcon, Flex, Group, Text } from "@mantine/core";
import {
  IconBrandBandcamp,
  IconBrandSpotify,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { Suspense } from "react";

const buttons = [
  {
    label: "Spotify",
    icon: (
      <IconBrandSpotify style={{ width: "75%", height: "75%" }} stroke={1.5} />
    ),
    color: "green",
    link: "https://open.spotify.com/artist/038iYWhZBwm1mubQW0U5hB",
  },
  {
    label: "YouTube",
    icon: (
      <IconBrandYoutube style={{ width: "75%", height: "75%" }} stroke={1.5} />
    ),
    color: "red",
    link: "https://www.youtube.com/channel/UCCclrfXfNMQKoPS_mXQSnNg",
  },
  {
    label: "Bandcamp",
    icon: (
      <IconBrandBandcamp style={{ width: "75%", height: "75%" }} stroke={1.5} />
    ),
    color: "blue",
    link: "https://gwabbey.bandcamp.com",
  },
];

export const loader = async () => {
  const spotifyApiUrl =
    "https://api.spotify.com/v1/artists/038iYWhZBwm1mubQW0U5hB/albums";

  const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
    },
    body: "grant_type=client_credentials",
  });

  const tokenData = await tokenResponse.json();
  const accessToken = tokenData.access_token;

  const response = await fetch(spotifyApiUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();

  data.items.sort((a: { release_date: number }, b: { release_date: number }) =>
    a.release_date < b.release_date ? 1 : -1
  );

  return json(data);
};

export default function Music() {
  const { items } = useLoaderData() as { items: { id: string }[] };

  return (
    <div style={{ lineHeight: "1.8" }}>
      <Suspense fallback={<div>loading...</div>}>
        <Await
          resolve={items}
          errorElement={<div>something went wrong :(</div>}
        >
          {(data) => (
            <Flex gap="md" justify="center" align="center" direction="column">
              <Title title={"music"} />
              <div style={{ width: "100%", textAlign: "center" }}>
                <Text size={"xl"}>my latest release</Text>
                <iframe
                  title="my latest release"
                  style={{
                    borderRadius: 10,
                    border: "none",
                    maxWidth: 800,
                    minHeight: 400,
                    padding: 16,
                  }}
                  src={"https://open.spotify.com/embed/album/" + data[0].id}
                  width="100%"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
              <div
                style={{ width: "100%", maxWidth: 800, textAlign: "center" }}
              >
                <Text size={"xl"}>more music</Text>
                <iframe
                  title="more music"
                  style={{
                    borderRadius: 10,
                    border: "none",
                    maxWidth: 800,
                    minHeight: 600,
                    padding: 16,
                  }}
                  src={
                    "https://open.spotify.com/embed/artist/038iYWhZBwm1mubQW0U5hB"
                  }
                  width="100%"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
              <div
                style={{ width: "100%", maxWidth: 800, textAlign: "center" }}
              >
                <Group justify="center" gap="xl" pb={32}>
                  {buttons.map(({ label, icon, link }, id) => {
                    return (
                      <ActionIcon
                        key={id}
                        component="a"
                        href={link}
                        target="_blank"
                        size="xl"
                        radius="xl"
                        variant="outline"
                        aria-label={label}
                      >
                        {icon}
                      </ActionIcon>
                    );
                  })}
                </Group>
              </div>
            </Flex>
          )}
        </Await>
      </Suspense>
    </div>
  );
}
