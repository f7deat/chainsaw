import { listChuongTrinhHocBySubjectId } from "@/services/course";
import { getSubject } from "@/services/subject";
import { EyeOutlined } from "@ant-design/icons";
import { ProColumns, ProTable } from "@ant-design/pro-components";
import { Button } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Index() {

    const router = useRouter();
    const [subject, setSubject] = useState<API.Subject>()

    useEffect(() => {
        if (router?.query?.id) {
            getSubject(router.query.id).then(response => setSubject(response));
        }
    }, [router]);

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
                <Button key="view" icon={<EyeOutlined />} className="flex items-center justify-center" type="primary" onClick={() => router.push(`/bai-giang/${entity.id}`)} />
            ]
        }
    ]

    return (
        <>
            <Head>
                <title>{subject?.name}</title>
            </Head>
            <div className="text-3xl font-medium text-blue-900 md:mb-8 mb-4">{subject?.name}</div>
            {
                router?.query?.id && (
                    <ProTable
                        rowKey="id"
                        request={(params) => listChuongTrinhHocBySubjectId(params, router.query.id)}
                        columns={columns}
                    />
                )
            }
        </>
    )
}