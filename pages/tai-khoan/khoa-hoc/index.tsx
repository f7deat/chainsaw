import MyCourse from "@/components/course/my-course";
import AccountLeftBar from "@/components/tai-khoan/left-bar";
import { PageContainer } from "@ant-design/pro-components";
import Head from "next/head";

export default function Index() {

    return (
        <>
            <Head>
                <title>Khóa học của tôi</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageContainer title="Khóa học của tôi">
                <div className="md:flex gap-4">
                    <AccountLeftBar tab={1} />
                    <div className="flex-1">
                        <MyCourse />
                    </div>
                </div>
            </PageContainer>
        </>
    )
}