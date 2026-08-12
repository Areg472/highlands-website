"use client";

import Link from "next/link";
import { Box, Button, Card, Heading, Text } from "theme-ui";
import InfoBox from "@/app/Components/InfoBox";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        bg: "sunken",
        p: 3,
      }}
    >
      <Card
        variant="primary"
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "2px solid",
          borderColor: "text",
          maxWidth: "layout",
          width: "100%",
          p: 4,
        }}
      >
        <Heading
          as="h1"
          variant="text.ultratitle"
          sx={{ fontSize: ["28px", 5], color: "text", lineHeight: 1.3 }}
        >
          Welcome to Highlands YSWS!
        </Heading>
        <Text variant="lead" sx={{ color: "secondary" }}>
          Check out #highlands on Slack and scroll down for more info!
        </Text>
        <Button
          as={Link}
          href="https://link.aregus.me/highlands-rsvp"
          variant="lg"
          sx={{ mt: 2, fontSize: [2, 3] }}
        >
          RSVP Now!
        </Button>
      </Card>
      <InfoBox Header="What's this about?">
        This is a mountain themed YSWS where you code hours and can earn prizes
        like earbuds, credits, games, 3d printers, and more! Plus we&apos;ll
        have hiking equipment as prizes! And if you code for enough hours, you
        can even earn a ticket for a hackathon in Yerevan, Armenia!
      </InfoBox>

      <InfoBox Header="What is the Highlands Challenge?">
        The Highlands challenge involves climbing digital mountains in the
        dashboard to obtain free shop currency. A mountain will have stages,
        which will require certain amounts of hours. For example, a mountain
        could have 5h, 8h, 4h stages. You must complete a stage in the specified
        amount of time or else you&apos;ll fall from the mountain. As the
        mountains get taller, you&apos;ll be rewarded with more shop currency!
      </InfoBox>

      <InfoBox Header="Where is Armenia?">
        Armenia is in the Southern Caucasus, between Iran, Georgia, and Turkey!
        Armenia is considered the 10th most mountainous nation, hence the name
        &quot;Highlands.&quot; I would like this YSWS to happen in Yerevan, the
        capital, because it provides the most flexibility. Also, most major
        European and Middle Eastern airlines fly to Armenia, and it&apos;s
        visa-free for most nations.
      </InfoBox>

      <InfoBox Header="Is there anything in Yerevan?">
        There are a lot of places to visit in Yerevan. Most famous sites in
        Yerevan include the cascade complex, Tsitsernakaberd, Republic Square,
        The National History Museum, the Opera, and even the Metro here + more
        outside of Yerevan
      </InfoBox>
    </Box>
  );
}
