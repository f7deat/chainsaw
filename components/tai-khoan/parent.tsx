import { ProForm, ProFormText } from "@ant-design/pro-components"

const ParentInfo: React.FC = () => {
    return (
        <div>
            <ProForm>
                <ProFormText label="Họ và tên" />
                <ProFormText label="Số điện thoại" />
                <ProFormText label="Email" />
                <ProFormText label="Địa chỉ" />
            </ProForm>
        </div>
    )
}

export default ParentInfo