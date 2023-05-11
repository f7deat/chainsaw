import { getStudent, listUserSelect, updateStudent } from "@/services/user";
import { ProForm, ProFormDatePicker, ProFormInstance, ProFormSelect, ProFormText } from "@ant-design/pro-components"
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
                    },
                    {
                        name: 'gender',
                        value: response.data.gioiTinh ? 0 : 1
                    },
                    {
                        name: 'maGioiThieu',
                        value: response.data.maGioiThieu
                    }
                ])
            }
        })
    }, []);

    const onFinish = async (values: any) => {
        values.gioiTinh = values.gender === 1;
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
            <ProFormDatePicker label="Ngày sinh" name="ngaySinh" colProps={{
                md: 6
            }} />
            <ProFormText label="Ảnh đại diện" name="avatar" colProps={{
                md: 18
            }} />
            <ProFormSelect request={listUserSelect} label="Người giới thiệu" name="maGioiThieu" showSearch/>
        </ProForm>
    )
}

export default StudentInfo