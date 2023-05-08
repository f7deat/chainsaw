import { changePassword } from "@/services/user";
import { ProForm, ProFormText } from "@ant-design/pro-components"
import { message } from "antd";

const ChangePasswordComponent: React.FC = () => {
    const onFinish = async (values: any) => {
        if (values.newPassword !== values.confirmPassword) {
            message.error('Mật khẩu không khớp!');
            return;
        }
        const response = await changePassword(values);
        if (response.succeeded) {
            message.success('Đổi mật khẩu thành công!');
        } else {
            message.error(response.errors[0].description);
        }
    }
    return (
        <ProForm onFinish={onFinish}>
            <ProFormText.Password name="oldPassword" label="Mật khẩu cũ" rules={[
                {
                    required: true,
                    message: 'Vui lòng nhập'
                }
            ]} />
            <ProFormText.Password name="newPassword" label="Mật khẩu mới" rules={[
                {
                    required: true,
                    message: 'Vui lòng nhập'
                }
            ]} />
            <ProFormText.Password name="confirmPassword" label="Nhập lại mật khẩu" rules={[
                {
                    required: true,
                    message: 'Vui lòng nhập'
                }
            ]} />
        </ProForm>
    )
}

export default ChangePasswordComponent