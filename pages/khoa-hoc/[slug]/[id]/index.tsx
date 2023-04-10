import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { CirclePlayIcon, PenToSquareIcon, SearchIcon } from "@/components/icons";
import Jumbotron from "@/components/jumbotron";
import { course } from "@/mock/course";
import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import CourseSummary from "./components/summary";

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

                            <div className="flex bg-white shadow rounded-lg md:mb-10 mb-4">
                                <div className="flex-grow grid grid-cols-2 font-medium text-2xl text-center">
                                    <button>
                                        <div className="border-r py-2 hover:bg-blue-100">Thông tin khóa học</div>
                                    </button>
                                    <button>
                                        <div className="border-r py-2 hover:bg-blue-100">Chương tình học</div>
                                    </button>
                                </div>
                                <div className="flex items-center justify-center py-2 w-14">
                                    <SearchIcon className="w-6 h-6" />
                                </div>
                            </div>

                            <div className="mb-2 text-2xl">Thông tin khóa học</div>
                            <div className="bg-white p-4 rounded-lg mb-4 shadow">
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
                                                    <div className="px-4 py-2 hover:bg-blue-100 flex justify-between items-center text-lg">
                                                        <div>{item.name}</div>
                                                        <div className="flex gap-4 items-center">
                                                            {
                                                                item.video ? (
                                                                    <Link href={`/luyen-tap/video/${item.video.id}`}>
                                                                        <button className="text-gray-400 hover:text-orange-500">
                                                                            <CirclePlayIcon className="w-7 h-7" />
                                                                        </button>
                                                                    </Link>
                                                                ) : (<Fragment />)
                                                            }
                                                            {
                                                                item.practice ? (
                                                                    <Link href={`/luyen-tap/cau-hoi/${item.practice.id}`}>
                                                                        <button className="text-gray-400 hover:text-orange-500">
                                                                            <PenToSquareIcon className="w-7 h-7" />
                                                                        </button>
                                                                    </Link>
                                                                ) : (<Fragment />)
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                        <div className="md:w-1/3">
                            <CourseSummary />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}