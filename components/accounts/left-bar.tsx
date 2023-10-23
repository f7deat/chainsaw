import { AppContext } from "@/models/app-context";
import { changeAvatar } from "@/services/user";
import { Role } from "@/utils/constants";
import { formatDate } from "@/utils/formatter";
import { BarChartOutlined, BookOutlined, CalendarOutlined, EditOutlined, MessageOutlined, MoneyCollectOutlined, UserAddOutlined } from "@ant-design/icons"
import { ProCard } from "@ant-design/pro-components";
import { Image, Space, Tooltip, Upload, UploadProps, message } from "antd"
import Link from "next/link"
import { useContext, useState } from "react";

type AccountLeftBarProps = {
    tab: number;
}

const AccountLeftBar: React.FC<AccountLeftBarProps> = (props) => {

    const API_HOST = process.env.API_HOST;

    const { user } = useContext<API.AppContext>(AppContext);

    const onFollow = () => {
        message.success('Theo giõi thành công!');
    }

    const onChange = async (data: { file: any; }) => {
        let formData = new FormData();
        formData.append("file", data.file);
        const response = await changeAvatar(formData);
        if (response.succeeded) {
            message.success('Đổi ảnh đại diện thành công!');
            window.location.reload();
        } else {
            message.error(response.errors[0].description);
        }
    }

    return (
        <div className="md:w-72">
            <ProCard
                className="shadow"
                title="Thông tin cá nhân"
                headerBordered
                actions={[
                    <UserAddOutlined key={1} onClick={onFollow} />,
                    <MessageOutlined key={2} />
                ]}>
                <div className="mb-4 text-center relative">
                    <button type="button" className="absolute right-0">
                        <Upload accept=".png, .jpg, .jpeg" method="POST" beforeUpload={() => false} onChange={onChange}>
                            <Tooltip title="Đổi ảnh đại diện">
                                <EditOutlined />
                            </Tooltip>
                        </Upload>
                    </button>
                    <Image src={user?.avatar ? user.avatar : 'https://placehold.jp/200x200.png'} alt="IMG" width={200} height={200} className="rounded-full" />
                </div>
                <div className="text-xl text-center mb-1 font-medium">{user?.name}</div>
                <ul className="mb-4 text-center text-gray-500">
                    <li>
                        <CalendarOutlined /> {formatDate(user?.dateOfBirth)}
                    </li>
                </ul>
                <Link href={`/tai-khoan/hoc-tap/${user?.id}`}>
                    <div className={`px-4 py-2 rounded border ${props.tab === 3 ? 'border-blue-500' : ''} mb-1 hover:border-blue-500`}>
                        <Space>
                            <BarChartOutlined />
                            <div className="text-lg">
                                Quá trình học tập
                            </div>
                        </Space>
                    </div>
                </Link>
                {
                    user?.roles.includes(Role.Student) && (
                        <div>
                            <Link href={`/tai-khoan/khoa-hoc`} className="px-4 py-2 rounded border mb-1 hover:border-blue-500 block">
                                <Space>
                                    <BookOutlined />
                                    <div className="text-lg">
                                        Khóa học của tôi
                                    </div>
                                </Space>
                            </Link>
                            <Link href={`/tai-khoan/diem-danh`}>
                                <div className={`px-4 py-2 rounded border mb-1 hover:border-blue-500`}>
                                    <Space>
                                        <CalendarOutlined />
                                        <div className="text-lg">
                                            Điểm danh
                                        </div>
                                    </Space>
                                </div>
                            </Link>
                        </div>
                    )
                }
                {
                    !user?.roles.includes(Role.Student) && (
                        <Link href={`/tai-khoan/thanh-toan/lich-su`} className="px-4 py-2 rounded border mb-1 hover:border-blue-500 block">
                            <Space>
                                <MoneyCollectOutlined />
                                <div className="text-lg">
                                    Lịch sử thanh toán
                                </div>
                            </Space>
                        </Link>
                    )
                }
            </ProCard>
        </div>
    )
}

export default AccountLeftBar