import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { Avatar, Card } from "antd";
import Head from "next/head";

export default function Profile() {
    return (
        <>
            <Head>
                <title>Thông tin cá nhân</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <div className="container mx-auto px-4 py-10">
                    <div className="md:flex gap-4">
                        <div className="md:w-1/4">
                            <Card>
                                <div className="mb-4 text-center">
                                    <Avatar size="large" />
                                </div>
                                <div className="text-xl text-center">Nguyễn Hiểu Minh</div>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}