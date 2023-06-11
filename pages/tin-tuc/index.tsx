import { Title } from "@/components";
import Head from "next/head";

export default function Index() {
    return (
        <>
            <Head>
                <title>Tin tức</title>
            </Head>
            <main>
                <Title subTitle="News" title="Tin tức mới" />
            </main>
        </>
    )
}