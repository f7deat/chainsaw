import { getStudent, updateStudent } from "@/services/user";
import { ProForm, ProFormDatePicker, ProFormInstance, ProFormText } from "@ant-design/pro-components"
import { message } from "antd";
import { useEffect, useRef } from "react"

const StudentInfo: React.FC = () => {

    const formRef = useRef<ProFormInstance>();

    useEffect(() => {
        getStudent().then(response => {
            if (response.succeeded) {
                formRef.current?.setFields([
                    {
                        name: 'hoVaTen',
                        value: response.data.hoVaTen
                    },
                    {
                        name: 'ngaySinh',
                        value: response.data.ngaySinh
                    },
                    {
                        name: 'avatar',
                        value: response.data.avatar
                    }
                ])
            }
        })
    }, []);

    const onFinish = async (values: any) => {
        const response = await updateStudent(values);
        if (response.succeeded) {
            message.success('Lưu thành công!');
        }
    }

    return (
        <ProForm grid formRef={formRef} onFinish={onFinish}>
            <ProFormText label="Họ và tên" name="hoVaTen" rules={[
                {
                    required: true
                }
            ]} />
            <ProFormDatePicker label="Ngày sinh" name="ngaySinh" colProps={{
                md: 6
            }} />
            <ProFormText label="Ảnh đại diện" name="avatar" colProps={{
                md: 18
            }} />
        </ProForm>
    )
}

export default StudentInfo