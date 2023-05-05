import { HeadTitle } from "@/components";
import MyCourse from "@/components/course/my-course";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import AccountLeftBar from "@/components/tai-khoan/left-bar";
import Head from "next/head";

export default function Index() {

    return (
        <>
            <Head>
                <title>Khóa học của tôi</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <div className="container mx-auto px-4 py-10">
                    <div className="md:flex gap-4">
                        <AccountLeftBar tab={1} />
                        <div className="flex-1">
                            <MyCourse itemPerRow={3} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}