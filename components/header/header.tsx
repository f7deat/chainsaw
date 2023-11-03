import { BookOutlined, FireOutlined, FireTwoTone, GiftTwoTone, MessageOutlined, VideoCameraOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Playfair_Display } from 'next/font/google';
import { useState } from "react";
import RightContent from "../layout/right-content";
import { Layout, Menu, MenuProps } from "antd";

const inter = Playfair_Display({ subsets: ['latin'] });
const { Header } = Layout;

const MyHeader: React.FC = () => {

    const [current, setCurrent] = useState('subject');

    const items: MenuProps['items'] = [
        {
            label: (<span className="font-medium hover:text-blue-500 md:text-lg">Môn học</span>),
            key: 'subject',
            icon: <BookOutlined />,
            children: [
                {
                    label: (<Link href="/mon-hoc/1">Toán</Link>),
                    key: 'math',
                },
                {
                    label: (<Link href="/mon-hoc/2">Tiếng Anh</Link>),
                    key: 'english',
                },
            ],
        },
        {
            label: (
                <Link href="/tai-khoan/redeem">
                    <span className="font-medium hover:text-blue-500 md:text-lg">Nhận quà</span>
                </Link>
            ),
            icon: <GiftTwoTone twoToneColor="red" />,
            key: 'gift',
        },
        {
            label: (
                <Link href="/hoi-dap">
                    <span className="font-medium hover:text-blue-500 md:text-lg">Hỏi đáp</span>
                </Link>
            ),
            icon: <MessageOutlined />,
            key: 'qna',
        },
        {
            label: (
                <Link href="/live-class">
                    <span className="font-medium hover:text-blue-500 md:text-lg">Live Class</span>
                </Link>
            ),
            icon: <VideoCameraOutlined />,
            key: 'live',
        },
        {
            label: (
                <Link href="/hoc-nhom">
                    <span className="font-medium hover:text-blue-500 md:text-lg">Học nhóm</span>
                </Link>
            ),
            icon: <FireOutlined />,
            key: '/group',
        }
    ];

    return (
        <Header style={{
            position: 'sticky',
            zIndex: 1,
            paddingInline: 0
        }} className="shadow items-center flex w-full top-0">
            <div className="container mx-auto flex items-center gap-4">
                <Link href="/">
                    <div className="font-bold text-blue-700 md:text-3xl text-2xl flex gap-2" style={inter.style}>
                        <FireTwoTone twoToneColor="#f97316" />
                        <span className="truncate">E-Learning</span>
                    </div>
                </Link>
                <Menu mode="horizontal" items={items} selectedKeys={[current]} className="flex-1" />
                <div className="flex gap-4 py-4 justify-end items-center flex-1">
                    <div className="hidden md:flex gap-2">
                        <RightContent />
                    </div>
                </div>
            </div>
        </Header>
    )
}

export default MyHeader