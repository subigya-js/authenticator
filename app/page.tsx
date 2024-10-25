import { Montserrat } from "next/font/google";
import Register from "./components/Register/Register";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={montserrat.className}>
      <Register />
    </main>
  );
}
