import { getUser, listUserSelect, updateStudent } from "@/services/user";
import { ProForm, ProFormDatePicker, ProFormInstance, ProFormSelect, ProFormText } from "@ant-design/pro-components"
import { Typography, message } from "antd";
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
                        value: response.data.gender
                    },
                    {
                        name: 'referalCode',
                        value: response.data.referalCode?.toLowerCase(),
                    }
                ]);
                if (response.data.referalCode) {
                    setDisable(true);
                }
            }
        })
    }, []);

    const onFinish = async (values: any) => {
        const response = await updateStudent(values);
        if (response.succeeded) {
            message.success('Lưu thành công!');
        } else {
            message.error(response.errors[0].description);
        }
    }

    return (
        <ProForm formRef={formRef} onFinish={onFinish}>
            <div>
                <div>
                    <Typography.Title level={5}>Thông tin cơ bản</Typography.Title>
                </div>
                <div className="md:flex gap-4">
                    <div className="flex-1">
                        <ProFormText label="Họ và tên" name="name" rules={[
                            {
                                required: true
                            }
                        ]}
                        />
                    </div>
                    <ProFormSelect label="Giới tính" name="gender" options={[
                        {
                            value: true as any,
                            label: 'Nam'
                        },

                        {
                            value: false as any,
                            label: 'Nữ'
                        }
                    ]} />
                    <ProFormDatePicker label="Ngày sinh" name="dateOfBirth" colProps={{
                        md: 6
                    }} />
                </div>
            </div>

            <div>
                <div>
                    <Typography.Title level={5}>Địa chỉ</Typography.Title>
                </div>
                <div className="md:flex gap-4">
                    <div className="flex-1">
                        <ProFormText name="address" label="Địa chỉ" />
                    </div>
                    <div>
                        <ProFormSelect name="country" label="Quốc tịch" />
                    </div>
                    <div>
                        <ProFormSelect name="city" label="Thành phố" />
                    </div>
                    <div>
                        <ProFormSelect name="district" label="Quận/Huyện" />
                    </div>
                    <div>
                        <ProFormSelect name="line" label="Xã/Phường/Thị Trấn" />
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <Typography.Title level={5}>Thông tin khác</Typography.Title>
                </div>
                <ProFormSelect request={listUserSelect} label="Người giới thiệu" name="referalCode" showSearch disabled={disable} />
            </div>
        </ProForm>
    )
}

export default StudentInfo