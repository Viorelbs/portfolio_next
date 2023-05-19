import { WidthProvider } from "@/hooks/useWidth";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <WidthProvider>
        <Component {...pageProps} />
      </WidthProvider>
    </RecoilRoot>
  );
}
