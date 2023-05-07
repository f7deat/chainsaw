import { PageContainer, ProTable } from "@ant-design/pro-components";
import { Divider } from "antd";
import Head from "next/head";

export default function LiveClass() {
    return (
        <>
            <Head>
                <title>Học trực tuyến</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageContainer>
                <ProTable headerTitle="Livestream sắp diễn ra" />
                <Divider />
                <ProTable headerTitle="Danh sách Livestream" />
            </PageContainer>
        </>
    )
}