import { listRefer } from "@/services/user";
import { EyeOutlined } from "@ant-design/icons";
import { ProCard, ProColumns, ProList, ProTable } from "@ant-design/pro-components";
import { Button } from "antd";
import { useRouter } from "next/router";

export default function Index() {

    const router = useRouter();

    const columns: ProColumns<API.ReferListItem>[] = [
        {
            title: '#',
            valueType: 'indexBorder',
        },
        {
            title: 'Họ và tên',
            dataIndex: 'name'
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phoneNumber'
        },
        {
            title: 'Ngày sinh',
            dataIndex: 'dateOfBirth',
            valueType: 'date',
            search: false
        },
        {
            title: 'Giới tính',
            dataIndex: 'gender',
            valueEnum: {
                true: 'Nam',
                false: 'Nữ'
            }
        },
        {
            title: '',
            valueType: 'option',
            render: (dom, entity) => [
                <Button key="view" icon={<EyeOutlined />} className="flex items-center justify-center" type="primary" onClick={() => router.push(`/tai-khoan/hoc-tap/${entity.id}`)} />
            ]
        }
    ]

    return (
        <>
            <div className="md:flex gap-4">
                <div className="md:w-1/4">
                    <ProCard title="Lớp">
                        <ProList />
                    </ProCard>
                </div>
                <div className="md:w-3/4">
                    <ProTable<API.ReferListItem>
                        search={{
                            layout: 'vertical'
                        }}
                        request={listRefer}
                        rowKey="id"
                        columns={columns}
                    />
                </div>
            </div>
        </>
    )
}