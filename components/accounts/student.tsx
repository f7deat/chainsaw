import { getUser, listUserSelect, updateStudent } from "@/services/user";
import { ProForm, ProFormDatePicker, ProFormInstance, ProFormSelect, ProFormText } from "@ant-design/pro-components"
import { message } from "antd";
import { useEffect, useRef, useState } from "react"

const StudentInfo: React.FC = () => {

    const formRef = useRef<ProFormInstance>();
    const [disable, setDisable] = useState<boolean>(false);

    useEffect(() => {
        getUser().then(response => {
            if (response.succeeded) {
                formRef.current?.setFields([
                    {
                        name: 'name',
                        value: response.data.name
                    },
                    {
                        name: 'dateOfBirth',
                        value: response.data.dateOfBirth
                    },
                    {
                        name: 'avatar',
                        value: response.data.avatar
                    },
                    {
                        name: 'gender',
                        value: response.data.gender ? 0 : 1
                    },
                    {
                        name: 'referalCode',
                        value: response.data.referalCode,
                    }
                ]);
                if (response.data.referalCode) {
                    setDisable(true);
                }
            }
        })
    }, []);

    const onFinish = async (values: any) => {
        values.gender = values.gender === 1;
        const response = await updateStudent(values);
        if (response.succeeded) {
            message.success('Lưu thành công!');
        } else {
            message.error(response.errors[0].description);
        }
    }

    return (
        <ProForm grid formRef={formRef} onFinish={onFinish}>
            <ProFormText label="Họ và tên" name="name" rules={[
                {
                    required: true
                }
            ]} 
            colProps={{
                md: 12
            }}
            />
            <ProFormSelect label="Giới tính" name="gender" colProps={{
                md: 12
            }} options={[
                {
                    value: 1,
                    label: 'Nam'
                },
                
                {
                    value: 0,
                    label: 'Nữ'
                }
            ]} />
            <ProFormDatePicker label="Ngày sinh" name="dateOfBirth" colProps={{
                md: 6
            }} />
            <ProFormText label="Ảnh đại diện" name="avatar" colProps={{
                md: 18
            }} />
            <ProFormSelect request={listUserSelect} label="Người giới thiệu" name="referalCode" showSearch disabled={disable}/>
        </ProForm>
    )
}

export default StudentInfo