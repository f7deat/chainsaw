import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Jumbotron from "@/components/jumbotron";
import { courses } from "@/mock";
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
                <div className="mb-3 text-2xl font-medium">Chọn sách giáo khoa</div>
                <div className="flex gap-4 flex-wrap mb-8">
                    {
                        books.map((book, i) => (
                            <button key={i} className="px-6 shadow py-2 rounded bg-gray-200 hover:bg-orange-500 hover:text-white">{book.name}</button>
                        ))
                    }
                </div>
                <div className="md:grid grid-cols-2 gap-4">
                    {
                        courses.map((course, i) => (
                            <div className="flex" key={i}>
                                <div className="w-1/2">
                                    <div className="bg-amber-500 rounded-l-lg py-4 px-10 relative h-full relative">
                                        <div className="text-2xl mb-4 font-bold">{course.name}</div>
                                        <div className="mb-4">
                                            {course.description}
                                        </div>
                                        <div className="flex gap-4">
                                            <Link href={course.link}>
                                                <button className="px-6 rounded-lg shadow py-2 rounded text-white bg-green-500 border-b-4 border-green-700 font-medium text-xl hover:bg-green-600">
                                                    Xem thêm
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <picture>
                                        <img src={course.image} alt="IMG" className="w-full h-full" />
                                    </picture>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </main>
            <Footer />
        </>
    )
}