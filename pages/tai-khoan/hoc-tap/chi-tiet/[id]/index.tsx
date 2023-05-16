import { getBaiGiang } from "@/services/course";
import { listQuestionHistory } from "@/services/user";
import { InfoCircleOutlined } from "@ant-design/icons";
import { PageContainer, ProColumns, ProTable } from "@ant-design/pro-components";
import { Popover } from "antd";
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

    const columns: ProColumns<{
        id: string;
        name: string;
        modifiedDate: Date;
        content: string;
    }>[] = [
            {
                title: '#',
                valueType: 'indexBorder',
            },
            {
                title: 'Câu hỏi',
                dataIndex: 'name',
                render: (dom, entity) => (
                    <Popover content={(
                        <div>
                            <div>{dom}</div>
                            <div dangerouslySetInnerHTML={{
                                __html: entity.content
                            }}></div>
                        </div>
                    )}>
                        {dom} <InfoCircleOutlined />
                    </Popover>
                )
            },
            {
                title: 'Kết quả thực hiện',
                dataIndex: 'result',
                valueEnum: {
                    false: {
                        text: 'Sai',
                        status: 'Error',
                    },
                    true: {
                        text: 'Đúng',
                        status: 'Processing',
                    },
                },
            },
            {
                title: 'Ngày làm',
                dataIndex: 'modifiedDate',
                valueType: 'fromNow',
                search: false
            }
        ]

    return (
        <>
            <Head>
                <title>{data?.tenBaiGiang}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageContainer title={data?.tenBaiGiang}>
                {
                    router?.query?.id && (
                        <ProTable
                        search={{
                            layout: 'vertical'
                        }}
                            request={(params) => listQuestionHistory({
                                hocVienId: router.query?.userId,
                                baiGiangId: router.query?.id,
                                ...params
                            })}
                            columns={columns}
                        />
                    )
                }
            </PageContainer>
        </>
    )
}