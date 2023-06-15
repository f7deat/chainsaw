import { Title } from "@/components";
import { InboxOutlined, SearchOutlined } from "@ant-design/icons";
import Head from "next/head";
import Link from "next/link";

export default function Index() {
    return (
        <>
            <Head>
                <title>Hỗ trợ</title>
            </Head>
            <main>
                <Title subTitle="Xin chào" title="GET Central có thể giúp gì cho bạn?" />
                <div className="flex gap-4 mb-6">
                    <input className="px-6 py-4 flex-1 border text-lg" placeholder="Nhập từ khóa hoặc nội dung cần tìm kiếm" />
                    <button className="flex gap-2 items-center justify-center bg-blue-500 hover:bg-blue-600 text-white text-xl font-medium px-6 py-4">
                        <SearchOutlined />
                        Tìm kiếm
                    </button>
                </div>
                <div className="text-2xl font-medium mb-4">Danh mục</div>
                <div className="grid md:grid-cols-4 grid-cols-2 mb-10 gap-4 text-xl">
                    <div className="h-24 border shadow flex items-center justify-center bg-white gap-4">
                        <picture>
                            <img src="https://fileproxy.scsusercontent.com/api/v2/files/Y3MtaW5ob3VzZTAx/7b89e174835f48f89151da2b3dcd73db.png" alt="1" width={52} />
                        </picture>
                        <div>Thông tin mới nhất</div>
                    </div>
                    <div className="h-24 border shadow flex items-center justify-center bg-white gap-4">
                        <picture>
                            <img src="https://fileproxy.scsusercontent.com/api/v2/files/Y3MtaW5ob3VzZTAx/293d6154c2b44a0ebf5a7f194af7c8bf.png" alt="1" width={52} />
                        </picture>
                        <div>Hiệu quả tham gia</div>
                    </div>
                    <div className="h-24 border shadow flex items-center justify-center bg-white gap-4">
                        <picture>
                            <img src="https://fileproxy.scsusercontent.com/api/v2/files/Y3MtaW5ob3VzZTAx/2628bd33c3be433697ed2b00674922b2.png" alt="1" width={52} />
                        </picture>
                        <Link href="/faq/dieu-khoan">Điều khoản sử dụng</Link>
                    </div>
                    <div className="h-24 border shadow flex items-center justify-center bg-white gap-4">
                        <picture>
                            <img src="https://fileproxy.scsusercontent.com/api/v2/files/Y3MtaW5ob3VzZTAx/db71e4167d8c48f0ae40b6779becd39f.png" alt="1" width={52} />
                        </picture>
                        <div>Sáng tạo nội dung</div>
                    </div>
                </div>
                <div className="text-lg text-center font-medium mb-4">
                    Bạn cần hỗ trợ thêm thông tin gì không?
                </div>
                <div className="flex justify-center mb-6">
                    <button className="px-6 py-4 bg-white shadow flex items-center gap-4">
                        <InboxOutlined className="text-4xl" />
                        <div>
                            <div className="font-bold text-left">Email</div>
                            <div className="mt-2">
                                Gửi câu hỏi của bạn
                            </div>
                        </div>
                    </button>
                </div>
            </main>
        </>
    )
}