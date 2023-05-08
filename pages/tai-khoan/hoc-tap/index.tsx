import AccountLeftBar from "@/components/tai-khoan/left-bar";
import { PageContainer, ProCard } from "@ant-design/pro-components";
import { Empty } from "antd";
import Head from "next/head";

export default function Index() {
    return (
        <>
            <Head>
                <title>Quá trình học tập</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageContainer title="Quá trình học tập">
                <div className="md:flex gap-4">
                    <AccountLeftBar tab={3} />
                    <div className="flex-1">
                        <ProCard>
                            <Empty />
                        </ProCard>
                    </div>
                </div>
            </PageContainer>
        </>
    )
}