import { addStudent } from "@/services/user";
import { ProForm, ProFormDatePicker, ProFormSelect, ProFormText } from "@ant-design/pro-components"
import { message } from "antd";

const AddMember: React.FC = () => {

    const onFinish = async (values: any) => {
        values.gender = values.gender === 1;
        const response = await addStudent(values);
        if (response.succeeded) {
            message.success('Thêm thành công!');
        }
    }

    return (
        <ProForm onFinish={onFinish} grid>
            <ProFormText name="name" label="Họ và Tên" rules={[
                {
                    required: true,
                    message: 'Vui lòng nhập họ và tên'
                }
            ]} />
            <div className="md:flex gap-4">
                <ProFormDatePicker name="dateOfBirth" label="Ngày sinh" />
                <ProFormSelect name="gender" label="Giới tính"
                    options={[
                        {
                            label: 'Nam',
                            value: 1
                        },
                        {
                            label: 'Nữ',
                            value: 0
                        }
                    ]} params={undefined} debounceTime={undefined} request={undefined} valueEnum={undefined} />
            </div>
        </ProForm>
    )
}

export default AddMember