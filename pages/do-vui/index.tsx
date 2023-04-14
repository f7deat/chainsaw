import Footer from "@/components/footer";
import { Header } from "@/components/header";
import Head from "next/head";

export default function Index() {
    return (
        <>
            <Head>
                <title>Đố vui</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Footer />
        </>
    )
}