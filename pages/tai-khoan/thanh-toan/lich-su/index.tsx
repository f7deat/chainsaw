import { listTransactionHistoryByCurrentUser } from "@/services/payment";
import { MoneyCollectOutlined } from "@ant-design/icons";
import { ProColumnType, ProTable } from "@ant-design/pro-components";
import { Button, Tooltip } from "antd";
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
            valueType: 'dateTime'
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
                <Tooltip  key="delete" title="Tới thanh toán">
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
                <ProTable columns={columns} request={listTransactionHistoryByCurrentUser}>

                </ProTable>
            </main>
        </>
    )
}