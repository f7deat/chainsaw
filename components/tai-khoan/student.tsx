import { ProForm, ProFormDatePicker, ProFormText } from "@ant-design/pro-components"

const StudentInfo: React.FC = () => {
    return (
        <div>
            <ProForm grid>
                <ProFormText label="Họ và tên" name="hoVaTen" />
                <ProFormDatePicker label="Ngày sinh" name="ngaySinh" colProps={{
                    md: 6
                }} />
                <ProFormText label="Ảnh đại diện" name="avatar" colProps={{
                    md: 18
                }} />
            </ProForm>
        </div>
    )
}

export default StudentInfo