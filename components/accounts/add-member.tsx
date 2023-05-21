import { addStudent, listUserSelect } from "@/services/user";
import { ProForm, ProFormDatePicker, ProFormSelect, ProFormText } from "@ant-design/pro-components"
import { message } from "antd";

const AddMember: React.FC = () => {

    const onFinish = async (values: any) => {
        values.gender = values.gioiTinh === 1;
        const response = await addStudent(values);
        if (response.succeeded) {
            message.success('Thêm thành công!');
        }
    }

    return (
        <ProForm onFinish={onFinish} grid>
            <ProFormText name="name" label="Họ và Tên" rules={[
                {
                    required: true
                }
            ]} />
            <ProFormDatePicker name="dateOfBirth" colProps={{
                md: 8
            }} label="Ngày sinh" />
            <ProFormSelect name="gender" colProps={{
                md: 16
            }} label="Giới tính"
                options={[
                    {
                        label: 'Nam',
                        value: 1
                    },
                    {
                        label: 'Nữ',
                        value: 0
                    }
                ]} />
            <ProFormSelect request={listUserSelect} label="Người giới thiệu" name="maGioiThieu" showSearch />
        </ProForm>
    )
}

export default AddMember