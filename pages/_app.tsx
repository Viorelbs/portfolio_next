import { WidthProvider } from "@/hooks/useWidth";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WidthProvider>
      <Component {...pageProps} />
      <Analytics />
    </WidthProvider>
  );
}
