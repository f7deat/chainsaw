import { createWithCoupon } from "@/services/user";
import { queryVoucher } from "@/services/voucher";
import { formatDate, formatter } from "@/utils/formatter";
import { GiftOutlined } from "@ant-design/icons";
import { ProCard, ProForm, ProFormText } from "@ant-design/pro-components";
import { Button, message } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Index() {

    const router = useRouter();

    const [voucher, setVoucher] = useState<API.Voucher>();
    const [hidden, setHidden] = useState<boolean>(false);

    const onGetVoucher = async (values: any) => {
        const response = await queryVoucher(values.code);
        if (response) {
            message.success('Áp dụng thành công!')
            setVoucher(response);
            setHidden(true);
        }
    }

    const onFinish = async (values: any) => {
        values.couponCode = voucher?.couponCode;
        if (values.password !== values.confirmPassword) {
            message.warning('Mật khẩu không khớp!');
            return;
        }
        const response = await createWithCoupon(values);
        if (response.succeeded) {
            router.push('/tai-khoan/redeem/thanh-toan');
            return;
        } else {
            if (response.errors[0].code === 'DuplicateUserName') {
                message.error('Tài khoản đã tồn tại, vui lòng đăng nhập!');
            }
        }
    }

    return (
        <>
            <Head>
                <title>Redeem Code</title>
            </Head>
            <div hidden={hidden}>
                <div className="justify-center md:flex">
                    <div className="md:w-1/3">
                        <ProForm onFinish={onGetVoucher} submitter={{
                            render: ({ form }) => {
                                return [
                                    <Button
                                        key="submit"
                                        onClick={() => {
                                            form?.submit();
                                        }}
                                        size="large"
                                        type="primary"
                                        className="w-full rounded-full"
                                    >
                                        Xác nhận
                                    </Button>
                                ]
                            }
                        }}>
                            <ProFormText name="code" label="Voucher"
                                fieldProps={{
                                    size: 'large'
                                }} rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập mã khuyến mại'
                                    }
                                ]} />
                        </ProForm>
                        <div className="text-gray-500 text-right mt-2">
                            <a href="#">Điều khoản và dịch vụ</a>
                        </div>
                    </div>
                </div>
            </div>
            <div hidden={!hidden}>
                <div className="md:flex gap-4">
                    <div className="md:w-2/3">
                        <ProCard title="Thông tin">
                            <ProForm onFinish={onFinish}>
                                <ProFormText name="parentName" label="Họ và tên phụ huynh" />
                                <ProFormText name="phoneNumber" label="Số điện thoại" rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập số điện thoại'
                                    }
                                ]} />
                                <ProFormText name="studentName" label="Họ và tên học sinh" />
                                <ProFormText.Password name="password" label="Mật khẩu" rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập mật khẩu'
                                    }
                                ]} />
                                <ProFormText.Password name="confirmPassword" label="Nhập lại mật khẩu" rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập lại mật khẩu'
                                    }
                                ]} />
                            </ProForm>
                        </ProCard>
                    </div>
                    <div className="md:w-1/3">
                        <ProCard title="Thông tin voucher">
                            <div className="bg-white shadow rounded-lg">
                                <div className="flex p-4 gap-6">
                                    <div className="w-1/3 border-r border-dashed flex justify-center">
                                        <div className="flex flex-col">
                                            <div className="h-20 w-20 bg-green-500 text-white rounded-full flex justify-center items-center text-4xl mb-2">
                                                <GiftOutlined />
                                            </div>
                                            <div className="text-center">
                                                <div className="text-gray-400 text-sm">Hiệu lực đến</div>
                                                <div className="font-medium text-slate-600">{formatDate(voucher?.expiredDate)}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-2/3">
                                        <div className="text-right text-4xl mb-4 font-medium text-slate-600">
                                            {formatter.format(voucher?.fixedPrice ?? 0)}
                                        </div>
                                        <div className="flex gap-2 items-center mb-2">
                                            <span className="text-gray-500">Promo code</span>
                                            <span className="px-4 py-1 bg-red-100 rounded-full text-red-500 font-medium uppercase text-lg">{voucher?.couponCode}</span>
                                        </div>
                                        <div className="text-xs text-gray-400 text-right">Áp dụng cho toàn bộ khóa học</div>
                                    </div>
                                </div>
                            </div>
                        </ProCard>
                    </div>
                </div>
            </div>
        </>
    )
}