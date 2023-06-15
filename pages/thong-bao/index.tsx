import { Title } from "@/components";
import { notificationList } from "@/services/notification";
import { ProCard, ProList } from "@ant-design/pro-components";
import { Avatar, Empty } from "antd";
import Head from "next/head";

export default function Index() {
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
                                    },
                                    avatar: {
                                        render: () => <Avatar />
                                    },
                                    description: {
                                        dataIndex: 'summary'
                                    }
                                }}
                            />
                        </ProCard>
                    </div>
                    <div className="md:w-2/3">
                        <ProCard title="Nội dung" headerBordered>
                            <Empty />
                        </ProCard>
                    </div>
                </div>
            </main>
        </>
    )
}