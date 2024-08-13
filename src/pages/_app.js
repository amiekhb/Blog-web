import "@/styles/globals.css";
import MyProvider from "./provider";
import Layout from "@/components/layout/layout";

export default function App({ Component, pageProps }) {
  return (
    <MyProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MyProvider>
  );
}
