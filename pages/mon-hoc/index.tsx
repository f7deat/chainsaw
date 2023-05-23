import { listSubject } from "@/services/subject";
import { EyeOutlined } from "@ant-design/icons";
import { ProColumns, ProTable } from "@ant-design/pro-components";
import { Button } from "antd";
import Head from "next/head";
import router from "next/router";

export default function Index() {

    const columns: ProColumns<any>[] = [
        {
            title: '#',
            valueType: 'indexBorder',
        },
        {
            title: 'Môn học',
            dataIndex: 'name'
        },
        {
            title: '',
            valueType: 'option',
            render: (dom, entity) => [
                <Button key="view" icon={<EyeOutlined />} className="flex items-center justify-center" type="primary" onClick={() => router.push(`/mon-hoc/${entity.id}`)} />
            ]
        }
    ]

    return (
        <>
            <Head>
                <title>Danh sách môn học</title>
            </Head>
            <div className="text-3xl font-medium text-blue-900 md:mb-8 mb-4">Danh sách môn học</div>
            <ProTable
                rowKey="id"
                request={listSubject}
                columns={columns}
            />
        </>
    )
}