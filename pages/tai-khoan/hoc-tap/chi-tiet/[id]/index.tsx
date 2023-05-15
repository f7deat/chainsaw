import { getBaiGiang } from "@/services/course";
import { PageContainer } from "@ant-design/pro-components";
import { Empty } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Index() {
    const router = useRouter();

    const [data, setData] = useState<any>();
    useEffect(() => {
        if (router?.query?.id) {
            getBaiGiang(router.query.id).then(response => {
                setData(response);
            })
        }
    }, [router]);

    return (
        <>
            <Head>
                <title>{data?.tenBaiGiang}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageContainer title={data?.tenBaiGiang}>
                <Empty />
            </PageContainer>
        </>
    )
}