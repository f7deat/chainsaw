import { BookOutlined, FireOutlined, FireTwoTone, GiftTwoTone, MenuFoldOutlined, MenuUnfoldOutlined, MessageOutlined, VideoCameraOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Playfair_Display } from 'next/font/google';
import { useState } from "react";
import RightContent from "../layout/right-content";
import { Button, Layout, Menu, MenuProps } from "antd";

const inter = Playfair_Display({ subsets: ['latin'] });
const { Header } = Layout;

const MyHeader: React.FC = () => {

    const [current, setCurrent] = useState('subject');
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

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
            <div className="container mx-auto flex items-center gap-4 justify-between px-4 md:px-0">
                <Link href="/">
                    <div className="font-bold text-blue-700 md:text-3xl text-2xl flex gap-2" style={inter.style}>
                        <FireTwoTone twoToneColor="#f97316" />
                        <span className="truncate">E-Learning</span>
                    </div>
                </Link>
                <div className="md:hidden">
                    <Button type="link" icon={<MenuFoldOutlined />} onClick={() => setMenuOpen(true)} />
                </div>
                <div className="md:block flex-1 absolute md:relative left-0 w-full h-full bg-white z-10" hidden={!menuOpen}>
                    <div className="p-4 flex items-center justify-between border-b md:hidden">
                        <Link href="/">
                            <div className="font-bold text-blue-700 md:text-3xl text-2xl flex gap-2" style={inter.style}>
                                <FireTwoTone twoToneColor="#f97316" />
                                <span className="truncate">E-Learning</span>
                            </div>
                        </Link>
                        <Button icon={<MenuUnfoldOutlined />} type="link" onClick={() => setMenuOpen(false)} />
                    </div>
                    <div className="flex flex-col md:flex-row bg-white">
                        <Menu mode={menuOpen ? "vertical" : "horizontal"} items={items} selectedKeys={[current]} className="flex-1" />
                        <div className="flex gap-4 md:justify-end justify-center items-center border-t p-2 md:p-0 border-b md:border-none">
                            <div className="md:flex gap-2">
                                <RightContent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-800 opacity-50 fixed top-0 h-screen w-screen" hidden={!menuOpen}></div>
        </Header>
    )
}

export default MyHeader