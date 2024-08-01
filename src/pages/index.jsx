import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header/header";
import Scroll from "@/components/scroll/scroll";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="mx-60">
        <Header />
        <Scroll />
      </div>
    </main>
  );
}
