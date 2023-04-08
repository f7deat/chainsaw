import Header from "@/components/header/header";
import Jumbotron from "@/components/jumbotron";
import { books } from "@/mock/book";
import Head from "next/head";
import Link from "next/link";

export default function KhoaHoc() {
    return (
        <>
            <Head>
                <title>Khóa học</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Jumbotron name="Toán học lớp một" />
            <main className="container mx-auto mt-6">
                <div className="mb-3 text-xl font-medium">Chọn sách giáo khoa</div>
                <div className="flex gap-4 flex-wrap mb-8">
                    {
                        books.map((book, i) => (
                            <button key={i} className="px-6 py-2 rounded bg-gray-200 hover:bg-orange-500 hover:text-white">{book.name}</button>
                        ))
                    }
                </div>
                <div className="flex">
                    <div className="w-2/3">
                        <div className="bg-orange-400 rounded-l-lg py-4 px-10 relative h-full">
                            <div className="text-2xl mb-4">Khoá Toán nâng cao theo chuyên đề lớp 2</div>
                            <div className="mb-4">
                            Giúp con đi sâu vào từng chuyên đề chinh phục các dạng bài khó, đạt giải thưởng cao trong các kỳ thi học sinh giỏi.
                            </div>
                            <div className="flex gap-4">
                                <Link href="/">
                                    <button className="px-4 py-2 rounded text-white bg-green-500">
                                        Xem thêm
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <picture>
                            <img src="https://xcdn-cf.vuihoc.vn/upload/5c209fe6176b0/2022/03/19/eff0_khoa-toan-nang-cao-theo-chuyen-de-2.jpg" alt="IMG"/>
                        </picture>
                    </div>
                </div>
            </main>
        </>
    )
}