import { Title } from "@/components";
import { getNotification, notificationList } from "@/services/notification";
import { CalendarOutlined, InboxOutlined } from "@ant-design/icons";
import { ProCard, ProList } from "@ant-design/pro-components";
import { Avatar, Empty, Tooltip } from "antd";
import Head from "next/head";
import { useState } from "react";

export default function Index() {

    const [data, setData] = useState<any>();

    const onRead = async (id: string) => {
        const response = await getNotification(id);
        setData(response);
    }

    return (
        <>
            <Head>
                <title>Thông báo</title>
            </Head>
            <main>
                <Title subTitle="Thông báo" title="Thông tin mới" />
                <div className="md:flex gap-4">
                    <div className="md:w-1/3">
                        <ProCard title="Danh sách" headerBordered>
                            <ProList
                                bordered
                                ghost
                                request={notificationList}
                                metas={{
                                    title: {
                                        dataIndex: 'title',
                                        render: (dom: any, record: any) => (<button className="font-medium" type="button" onClick={() => onRead(record.id)}>{dom}</button>)
                                    },
                                    avatar: {
                                        render: () => <Avatar icon={<InboxOutlined />} />
                                    },
                                    description: {
                                        dataIndex: 'summary'
                                    },
                                    actions: {
                                        render: (dom, entity) => [
                                            <Tooltip key={1} title="Đánh dấu là chưa đọc">
                                                <button className="text-xl">
                                                    <InboxOutlined />
                                                </button>
                                            </Tooltip>
                                        ]
                                    }
                                }}
                            />
                        </ProCard>
                    </div>
                    <div className="md:w-2/3">
                        <ProCard title="Nội dung" headerBordered>
                            {
                                data ? (
                                    <>
                                        <div className="font-medium text-xl mb-2 border-b-2 border-dashed border-gray-200 py-2">{data.title}</div>
                                        <div className="text-gray-500 mb-2 text-right"><CalendarOutlined /> {data.createdDate}</div>
                                        <div className="mb-4">{data.message}</div>
                                    </>
                                ) : (<Empty />)
                            }
                        </ProCard>
                    </div>
                </div>
            </main>
        </>
    )
}