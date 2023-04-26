import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Jumbotron from "@/components/jumbotron";
import { courses } from "@/mock";
import { books } from "@/mock/book";
import { CourseType } from "@/mock/courses";
import { chuongTrinhHoc } from "@/services/course";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function KhoaHoc() {

    const router = useRouter();

    const data = courses[`${router.query.slug}`] || [];
    const [data2, setData2] = useState<any>();

    useEffect(() => {
        if (router.query.slug) {
            chuongTrinhHoc(router.query.slug).then(response => {
                setData2(response.data)
            })
        }
    }, [router.query.slug]);

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
                        data2?.map((book: any) => (
                            <button key={book.chuongTrinhHocId} className="px-6 shadow py-2 rounded bg-gray-200 hover:bg-orange-500 hover:text-white">
                                <Link href={`/khoa-hoc/1/${book.chuongTrinhHocId}`}>
                                    {book.tenChuongTrinhHoc}
                                </Link>
                            </button>
                        ))
                    }
                </div>
                <div className="md:grid grid-cols-2 gap-4">
                    {
                        data.map((course: CourseType, i: number) => (
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