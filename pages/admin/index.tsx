import AdminMenu from "@/components/menu/admin";
import { HomeOutlined } from "@ant-design/icons";
import { ProCard } from "@ant-design/pro-components";
import { Breadcrumb } from "antd";
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
            <main>
            <div className="mb-4">
                    <Breadcrumb items={[
                        {
                            title: (
                                <Link href="/">
                                    <HomeOutlined className="mr-2" />
                                    Trang chủ
                                </Link>
                            )
                        },
                        {
                            title: (
                                <Link href={`/admin`}>
                                    Dashboard
                                </Link>
                            )
                        }
                    ]} />
                </div>
                <div className="md:flex gap-4">
                    <div className="md:w-64">
                        <AdminMenu current="dashboard" />
                    </div>
                    <div className="flex-1">
                        <ProCard />
                    </div>
                </div>
            </main>

        </>
    )
}