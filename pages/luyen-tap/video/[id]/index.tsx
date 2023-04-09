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
            <main className="container mx-auto mt-10">
                <div className="md:flex gap-4">
                    <div className="md:w-2/3">
                        <div className="h-96 bg-gray-500">

                        </div>
                    </div>
                    <div className="md:w-1/3">
                        <div className="flex border font-bold mb-2">
                            <button className="flex-1 py-3 border-r text-orange-500">Bài học</button>
                            <button className="flex-1 py-3 border-r">Bình luận</button>
                            <button className="flex-1 py-3 border-r">Thông tin</button>
                        </div>
                        <div className="border">
                            <div className="flex items-center hover:bg-gray-100 cursor-pointer">
                                <div className="font-bold flex items-center justify-center w-12">1</div>
                                <div className="text-xl px-4 py-3">
                                    <div>Bài toán que diêm</div>
                                    <div className="text-sm">Thời gian: 5 phút</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}