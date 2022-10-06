import "../styles/globals.css";
import { LanguageContextProvider } from "../languageService/LanguageContextProvider";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <LanguageContextProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </LanguageContextProvider>
  );
}

export default MyApp;
