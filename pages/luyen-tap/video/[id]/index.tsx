import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Head from "next/head";

export default function Video() {
    return (
        <>
            <Head>
                <title>Video</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Footer />
        </>
    )
}