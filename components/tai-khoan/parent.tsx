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
                    name: 'tenPhuHuynh',
                    value: response.tenPhuHuynh
                }, 
                {
                    name: 'soDienThoai',
                    value: response.soDienThoai
                }, 
                {
                    name: 'email',
                    value: response.email
                }, 
                {
                    name: 'diaChi',
                    value: response.diaChi
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
        <ProForm formRef={formRef} onFinish={onFinish}>
            <ProFormText name="tenPhuHuynh" label="Họ và tên" rules={[
                {
                    required: true
                }
            ]} />
            <ProFormText name="soDienThoai" disabled label="Số điện thoại" />
            <ProFormText name="diaChi" label="Địa chỉ" />
        </ProForm>
    )
}

export default ParentInfo