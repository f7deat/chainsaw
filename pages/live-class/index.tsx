import { HeadTitle } from "@/components";
import Head from "next/head";

export default function LiveClass() {
    return (
        <>
            <Head>
                <title>Học trực tuyến</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="py-10 px-4 container mx-auto">
                <HeadTitle center>Học trực tuyến</HeadTitle>
                <div className="text-2xl font-bold text-blue-700 mb-10">Livestream sắp diễn ra</div>
                <div className="text-2xl font-bold text-blue-700 mb-10">Danh sách Livestream</div>
            </main>
        </>
    )
}