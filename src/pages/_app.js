import Layout from "@/components/layout/layout";
import SearchProvider from "@/provider/search-provider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <SearchProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SearchProvider>
  );
}
