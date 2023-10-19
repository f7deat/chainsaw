import { listTransactionHistoryByCurrentUser } from "@/services/payment";
import { MoneyCollectOutlined, PlusOutlined } from "@ant-design/icons";
import { ProCard, ProColumnType, ProTable } from "@ant-design/pro-components";
import { Button, Empty, Tooltip } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Index() {

    const router = useRouter();

    const columns: ProColumnType<any>[] = [
        {
            title: '#',
            valueType: 'indexBorder'
        },
        {
            title: 'Thông tin thanh toán',
            dataIndex: 'note'
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'createdDate',
            valueType: 'dateTime',
            search: false
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            valueEnum: {
                0: 'Chưa thanh toán',
                1: 'Đã thanh toán'
            }
        },
        {
            title: '',
            valueType: 'option',
            render: (dom, entity) => [
                <Tooltip key="delete" title="Tới thanh toán">
                    <Button type="primary" icon={<MoneyCollectOutlined />} onClick={() => router.push('/tai-khoan/redeem/thanh-toan')} />
                </Tooltip>
            ]
        }
    ]

    return (
        <>
            <Head>
                <title>Lịch sử thanh toán</title>
            </Head>
            <main>
                <div className="md:flex gap-4">
                    <div className="md:w-2/3">
                        <ProCard title="Lịch sử thanh toán" headerBordered className="shadow">
                            <ProTable columns={columns} request={listTransactionHistoryByCurrentUser} search={{
                                layout: 'vertical'
                            }}
                                rowSelection={{}} />
                        </ProCard>
                    </div>
                    <div className="md:w-1/3">
                        <ProCard title="Thông tin thanh toán" className="shadow" headerBordered extra={<Button type="primary">Thêm</Button>}>
                            <Empty />
                        </ProCard>
                    </div>
                </div>
            </main>
        </>
    )
}