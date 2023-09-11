import { createWithCoupon } from "@/services/user";
import { ProFormText } from "@ant-design/pro-components";
import { Form, Input, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import Head from "next/head";

export default function Index() {

    const onFinish = async (values: any) => {
        const response = await createWithCoupon(values);
        if (response.succeeded) {
            message.success('Nhập thành công!')
        } else {
            message.error(response.errors[0].description)
        }
    }

    return (
        <>
            <Head>
                <title>Redeem Code</title>
            </Head>
            <div className="justify-center flex">
                <div className="md:w-1/3">
                    <Form onFinish={onFinish}>
                        <div className="font-medium mb-2">Mã khuyến mại</div>
                        <FormItem name="couponCode">
                            <Input size="large" />
                        </FormItem>
                        <div className="font-medium mb-2">Số điện thoại</div>
                        <FormItem name="phoneNumber">
                            <Input size="large" />
                        </FormItem>
                        <div className="font-medium mb-2">Họ và tên</div>
                        <FormItem name="name">
                            <Input size="large" />
                        </FormItem>
                        <button type="submit" className="w-full px-10 py-3 bg-blue-500 text-white hover:bg-blue-600 rounded-full">Xác nhận</button>
                    </Form>
                    <div className="text-gray-500 text-right mt-2">
                        <a href="#">Điều khoản và dịch vụ</a>
                    </div>
                </div>
            </div>
        </>
    )
}