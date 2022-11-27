import {AppType} from "next/app";
import Head from "next/head";
import {MantineProvider} from "@mantine/core";
import {trpc} from "@/utils/trpc";






const MyApp: AppType = ({Component, pageProps}) => {
  return (
      <>
        <Head>
          <title>Pokemon: Pass/Smash</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
          <meta name="description" content="A simple pass or smash game but pokemon"/>
        </Head>

        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{colorScheme: "dark"}}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </>
  );
};
export default trpc.withTRPC(MyApp);
