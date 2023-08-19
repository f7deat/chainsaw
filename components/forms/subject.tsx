import { listSubject } from "@/services/subject";
import { ProFormSelect } from "@ant-design/pro-components"

const FormSubject: React.FC = () => {
    return (
        <ProFormSelect label="Môn học" fieldProps={{
            size: "large"
        }} name="subject" request={async (params) => {
            const response = await listSubject(params);
            return response.data.map((subject: API.Subject) => {
                return {
                    label: subject.name,
                    value: subject.id
                }
            })
        }}  rules={[
            {
                required: true,
                message: 'Vui lòng chọn môn học!'
            }
        ]}></ProFormSelect>
    )
}

export default FormSubject;