"use client";

import theme from "@hackclub/theme";
import { Box, Heading, Text, Card } from "theme-ui";

export default function InfoBox({ Header, children, sx }) {
  return (
    <Card
      variant="interactive"
      sx={{
        textAlign: "center",
        bg: "elevated",
        border: "2px solid",
        borderColor: "text",
        borderRadius: "extra",
        maxWidth: "1025px",
        width: "100%",
        p: ["15px", 3],
        px: ["10px", 3],
        mt: 4,
        ...sx,
      }}
    >
      <Heading
        as="h2"
        sx={{ fontSize: [3, 4], color: "text", lineHeight: 1.3 }}
      >
        {Header}
      </Heading>
      <Card
        sx={{
          color: "white",
          fontSize: 2,
          width: "100%",
          mt: 3,
          p: 3,
          border: "2px solid",
          borderColor: "text",
          borderRadius: "extra",
          lineHeight: 1.5,
          backgroundImage: (theme) => theme.util.gx("blue", "#2275ba"),
        }}
      >
        <Text>{children}</Text>
      </Card>
    </Card>
  );
}
