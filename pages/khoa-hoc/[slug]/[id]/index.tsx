import { Header } from "@/components/header";
import Jumbotron from "@/components/jumbotron";
import { course } from "@/mock/course";
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
            <Jumbotron name="Khóa Toán nâng cao theo chuyên đề lớp 2" />
            <main className="bg-gray-100 py-4">
                <div className="container mx-auto">
                    <div className="md:flex gap-4">
                        <div className="md:w-2/3">
                            <div className="mb-4">
                                <picture>
                                    <img src="https://xcdn-cf.vuihoc.vn/upload/5c209fe6176b0/2020/04/09/70/6b/bai-thi-dau-vao-04.jpg" alt="IMG" className="w-full" />
                                </picture>
                            </div>
                            <div className="bg-white p-4 rounded-lg mb-4">
                                {
                                    course.description
                                }
                            </div>
                            <div className="text-4xl font-bold mb-4">Chương trình học</div>
                            {
                                course.groups.map((group, i) => (
                                    <div key={i} className="bg-white mb-4">
                                        <div className="bg-blue-500 font-medium text-white text-xl px-4 py-2 rounded-t">{group.name}</div>
                                        {
                                            group.items.map((item, j) => (
                                                <div key={j}>
                                                    <Link href={`/luyen-tap/${item.slug}`}>
                                                        <div className="px-4 py-2 hover:bg-blue-100">{item.name}</div>
                                                    </Link>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}