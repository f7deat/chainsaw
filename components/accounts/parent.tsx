import { getParent, updateParent } from "@/services/user";
import { ProForm, ProFormInstance, ProFormText } from "@ant-design/pro-components"
import { message } from "antd";
import { useEffect, useRef } from "react"

const ParentInfo: React.FC = () => {

    const formRef = useRef<ProFormInstance>();

    useEffect(() => {
        getParent().then(response => {
            formRef?.current?.setFields([
                {
                    name: 'name',
                    value: response.data.name
                }, 
                {
                    name: 'phoneNumber',
                    value: response.data.phoneNumber
                }, 
                {
                    name: 'email',
                    value: response.data.email
                }, 
                {
                    name: 'address',
                    value: response.data.address
                }
            ])
        })
    }, []);

    const onFinish = async (values: any) => {
        const response = await updateParent(values);
        if (response.succeeded) {
            message.success('Lưu thành công!');
        }
    }

    return (
        <ProForm formRef={formRef} onFinish={onFinish} grid>
            <ProFormText name="name" label="Họ và tên" rules={[
                {
                    required: true
                }
            ]} />
            <ProFormText name="phoneNumber" disabled label="Số điện thoại" colProps={{
                md: 12
            }} />
            <ProFormText name="email" disabled label="Email" colProps={{
                md: 12
            }} />
            <ProFormText name="address" label="Địa chỉ" />
        </ProForm>
    )
}

export default ParentInfo