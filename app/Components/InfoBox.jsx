"use client";

import { Box, Heading, Text } from "theme-ui";

export default function InfoBox({ Header, children, sx }) {
  return (
    <Box
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
      <Box
        sx={{
          bg: "#2275ba",
          color: "white",
          fontSize: 2,
          width: "100%",
          mt: 3,
          p: 3,
          border: "2px solid",
          borderColor: "text",
          borderRadius: "extra",
          lineHeight: 1.5,
        }}
      >
        <Text>{children}</Text>
      </Box>
    </Box>
  );
}
