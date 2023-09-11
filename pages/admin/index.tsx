import { ProCard } from "@ant-design/pro-components";
import Head from "next/head";
import Link from "next/link";

export default function Index() {

    return (
        <>
            <Head>
                <title>Quản trị</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ProCard title="Quản trị">
                <div className="px-4 py-2 border-b">
                    <Link href="/admin/course-discount" className="text-blue-500 hover:text-blue-600">Quản lý giảm giá</Link>
                </div>
                <div className="px-4 py-2 border-b">
                    <Link href="/admin/users" className="text-blue-500 hover:text-blue-600">Quản lý người dùng</Link>
                </div>
            </ProCard>
        </>
    )
}