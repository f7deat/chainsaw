import { Header } from "@/components/header";
import Jumbotron from "@/components/jumbotron";
import Head from "next/head";

export default function ToanTienLopMot() {
    return (
        <>
            <Head>
                <title>Toán tiền lớp một</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Jumbotron name="Toán tiền lớp 1" />
        </>
    )
}