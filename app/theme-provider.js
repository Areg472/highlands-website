"use client";

import theme from "@hackclub/theme";
import { ThemeUIProvider } from "theme-ui";

export default function Providers({ children }) {
  return <ThemeUIProvider theme={theme}>{children}</ThemeUIProvider>;
}
