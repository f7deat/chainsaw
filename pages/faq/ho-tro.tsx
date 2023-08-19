import { SearchOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import Head from "next/head";
import Link from "next/link";

export default function Support() {
    return (
        <>
            <Head>
                <title>Trung tâm trợ giúp</title>
            </Head>
            <main>
                <div className="mb-8">
                    <Breadcrumb items={[
                        {
                            title: (
                                <Link href="/">
                                    Trang chủ
                                </Link>
                            )
                        },
                        {
                            title: (
                                <Link href={`/hoi-dap`}>
                                    Trợ giúp
                                </Link>
                            )
                        }
                    ]} />
                </div>
                <div className="text-4xl font-medium">Chúng tôi có thể giúp gì cho bạn?</div>
                <div className="md:w-2/3 md:mb-20 mb-4">
                    <div className="form-group w-full rounded-full my-8 py-2 bg-white shadow flex">
                        <input
                            className="bg-white rounded-full h-14 flex-1 px-6 text-xl"
                            type="text"
                            placeholder="What are you looking for?"
                        />
                        <button
                            className="rounded-full px-8 bg-blue-500 text-white text-xl flex gap-2 py-3 mr-4 items-center justify-center hover:bg-blue-600"
                            type="submit"
                        >
                            <SearchOutlined />
                            <span className="d-sm-inline d-none">Tìm kiếm</span>
                        </button>
                    </div>
                </div>
                <div className="bg-slate-200 rounded-xl md:p-10 p-4 flex justify-between items-center mb-10">
                    <div>
                        <div className="text-4xl font-medium mb-3">Bạn không tìm thấy câu trả lời?</div>
                        <div className="text-4xl font-medium mb-10">Chúng tôi có thể giúp bạn.</div>
                        <Link href="/hoi-dap" className="px-10 py-3 text-xl rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium">
                            Liên hệ
                        </Link>
                    </div>
                    <picture>
                        <img src="https://finder.createx.studio/img/city-guide/illustrations/support.svg" alt="Support" loading="lazy" />
                    </picture>
                </div>
            </main>
        </>
    )
}