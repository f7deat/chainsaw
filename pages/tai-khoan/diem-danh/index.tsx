import { Calendar } from "antd";
import Head from "next/head";

export default function Index() {
    return (
        <>
            <Head>
                <title>Điểm danh</title>
            </Head>
            <main>
                <Calendar />
            </main>
        </>
    )
}