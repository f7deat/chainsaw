import { UserContext } from "@/models/user";
import { BarChartOutlined, CalendarOutlined, EditOutlined, InboxOutlined, MessageOutlined, UserAddOutlined } from "@ant-design/icons"
import { ModalForm, ProCard } from "@ant-design/pro-components";
import { Button, Image, Space, Tooltip, Upload, message } from "antd"
import dayjs from "dayjs";
import Link from "next/link"
import { useContext, useState } from "react";

type AccountLeftBarProps = {
    tab: number;
}
const { Dragger } = Upload;

const AccountLeftBar: React.FC<AccountLeftBarProps> = (props) => {

    const { user } = useContext<{
        user: API.User
    }>(UserContext);

    const [open, setOpen] = useState<boolean>(false);

    const onFollow = () => {
        message.success('Theo giõi thành công!');
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
                    <button type="button" className="absolute right-0" onClick={() => setOpen(true)}>
                        <Tooltip title="Đổi ảnh đại diện">
                            <EditOutlined />
                        </Tooltip>
                    </button>
                    <Image src={user?.avatar ? user.avatar : 'https://placehold.jp/200x200.png'} alt="IMG" width={200} height={200} className="rounded-full" />
                </div>
                <div className="text-xl text-center mb-1 font-medium">{user?.name}</div>
                <ul className="mb-4 text-center text-gray-500">
                    <li>
                        <CalendarOutlined /> {dayjs(user?.dateOfBirth).format('DD/MM/YYYY')}
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
            </ProCard>
            <ModalForm open={open} onOpenChange={setOpen} title="Đổi ảnh đại diện"
                submitter={{
                    render: () => {
                        return [
                            <Button
                                key="next"
                                type="primary"
                                onClick={() => {
                                    setOpen(false)
                                }}
                            >Đóng lại</Button>,
                        ];
                    },
                }}>
                <div className="md:flex">
                    <div className="md:w-1/3 flex items-center justify-center">
                        {
                            user?.avatar ? (
                                <picture>
                                    <img src={user?.avatar} alt="avatar" className="bg-gray-300 h-32 w-32 rounded-full" />
                                </picture>
                            ) : (
                                <div className="bg-gray-300 h-32 w-32 rounded-full">
                                </div>
                            )
                        }

                    </div>
                    <div className="md:w-2/3">
                        <Dragger>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Chọn hoặc kéo thả tệp tin</p>
                            <p className="ant-upload-hint">
                                Hỗ trợ các định dạng hình ảnh cho phép
                            </p>
                        </Dragger>
                    </div>
                </div>
            </ModalForm>
        </div>
    )
}

export default AccountLeftBar