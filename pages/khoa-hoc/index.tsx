import { Title } from "@/components";
import { ProTable } from "@ant-design/pro-components";
import Head from "next/head";

export default function Index() {
    return (
        <>
            <Head>
                <title>Danh sách khóa học</title>
                <meta name="description" content="Danh sách khóa học" />
            </Head>
            <main>
                <Title subTitle="Khóa học" title="Danh sách khóa học" />
                <ProTable
                    search={{
                        layout: 'vertical'
                    }}
                />
            </main>
        </>
    )
}