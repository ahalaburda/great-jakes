import Head from "next/head";
import { Open_Sans } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import CloseIcon from "@/images/CloseIcon";
import FirmFacts from "@/ components/FirmFacts";
import { DATA } from "@/data";

const openSans = Open_Sans({
  weights: [400, 600],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Great Jake Styling Challenge</title>
        <meta
          name="description"
          content="Great Jake Styling Challenge - Generated by create next app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${openSans.className}`}>
        <div className={styles.container}>
          <div className={styles.closeButton}>
            <CloseIcon />
          </div>
          <div className={styles.title}>
            <h1>Firm Facts</h1>
          </div>
          <hr />
          <div>
            <FirmFacts data={DATA} />
          </div>
        </div>
      </main>
    </>
  );
}
