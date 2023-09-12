import { AppContext } from "@/models/app-context";
import { CheckOutlined } from "@ant-design/icons";
import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";

export default function ToCheckout() {

    const { user } = useContext<API.AppContext>(AppContext);

    return (
        <>
            <Head>
                <title>Thanh toán</title>
            </Head>
            <main>
                <div className="mb-2 text-center font-medium text-xl">Thông tin thanh toán:</div>
                <div className="flex justify-center mb-4">
                    <div className="md:w-1/3">
                        <div className="py-1 px-2 bg-slate-100">
                        <div className="font-bold mb-2">Ngân hàng TMCP Đông Nam Á (SeABank)</div>
                            <div className="flex mb-2">
                                <div className="flex-1">
                                    <ul>
                                        <li>Chủ Tài Khoản: <b>Nguyễn Văn Nam</b></li>
                                        <li>Số Tài Khoản: <b>000005100680</b></li>
                                    </ul>
                                </div>
                                <picture>
                                    <img src="https://www.seabank.com.vn/assets/images/brands/logo-seabank4.png" alt="l" className="w-32 mt-2" />
                                </picture>
                            </div>
                            <div className="mb-2">
                                <div className="mb-2 text-orange-700">Nội dung chuyển khoản:</div>
                                <div className="font-bold">
                                    [Số điện thoại] [Mã voucher]
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-500 text-xs text-right">
                            <CheckOutlined /> Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất!
                        </div>
                    </div>
                </div>
                <div className="text-center text-sm" hidden={user !== null}>
                    Xem thông tin chi tiết: <Link href="/admin/login" className="font-medium text-blue-500 hover:text-blue-600">Đăng nhập</Link>
                </div>
            </main>
        </>
    )
}