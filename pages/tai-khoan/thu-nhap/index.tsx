import { listRefer } from "@/services/user";
import { ProColumns, ProTable } from "@ant-design/pro-components";

export default function Index() {

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
            valueType: 'date'
        },
        {
            title: 'Giới tính',
            dataIndex: 'gender',
            valueEnum: {
                true: 'Nam',
                false: 'Nữ'
            }
        }
    ]

    return (
        <>
            <ProTable<API.ReferListItem>
                search={{
                    layout: 'vertical'
                }}
                request={listRefer}
                rowKey="id"
                columns={columns}
            />
        </>
    )
}