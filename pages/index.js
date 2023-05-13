import Head from "next/head";
import NavBar from "@/pages/components/nav.js"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Head>
        <title>Graham Rowe!</title>
        <meta name='description' content="Graham Rowe's Portfolio site!" />
      </Head>
    </main>
  );
}
