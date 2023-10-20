import { BookOutlined, FireOutlined, FireTwoTone, GiftTwoTone, MenuFoldOutlined, MenuUnfoldOutlined, MessageOutlined, SettingOutlined, VideoCameraOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Playfair_Display } from 'next/font/google';
import { useContext, useEffect, useState } from "react";
import RightContent from "../layout/right-content";
import { useRouter } from "next/router";
import { AppContext } from "@/models/app-context";
import { Menu, MenuProps } from "antd";
import { Role } from "@/utils/constants";

const inter = Playfair_Display({ subsets: ['latin'] });

const Header: React.FC = () => {

    const [current, setCurrent] = useState('subject');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const { user } = useContext<API.AppContext>(AppContext);
    const [offset, setOffset] = useState(0);
    const router = useRouter();

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, []);

    useEffect(() => {
        setCollapsed(false);
    }, [router])

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const items: MenuProps['items'] = [
        {
            label: (<span className="font-medium hover:text-blue-500 text-lg">Môn học</span>),
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
                    <span className="font-medium hover:text-blue-500 text-lg">Nhận quà</span>
                </Link>
            ),
            icon: <GiftTwoTone twoToneColor="red" />,
            key: 'gift',
        },
        {
            label: (
                <Link href="/hoi-dap">
                    <span className="font-medium hover:text-blue-500 text-lg">Hỏi đáp</span>
                </Link>
            ),
            icon: <MessageOutlined />,
            key: 'qna',
        },
        {
            label: (
                <Link href="/live-class">
                    <span className="font-medium hover:text-blue-500 text-lg">Live Class</span>
                </Link>
            ),
            icon: <VideoCameraOutlined />,
            key: 'live',
        },
        {
            label: (
                <Link href="/hoc-nhom">
                    <span className="font-medium hover:text-blue-500 text-lg">Học nhóm</span>
                </Link>
            ),
            icon: <FireOutlined />,
            key: '/group',
        }
    ];

    return (
        <header className={`${offset < 50 ? '' : 'bg-white shadow'} fixed top-0 left-0 right-0 z-50 shadow md:shadow-none`}>
            <div className="container mx-auto px-4">
                <div className="flex gap-4 py-4 justify-between items-center">
                    <div className="md:flex-1 md:flex gap-4 items-center justify-between">
                        <Link href="/">
                            <div className="font-bold text-blue-700 md:text-3xl text-2xl flex gap-2" style={inter.style}>
                                <FireTwoTone twoToneColor="#f97316" />
                                E-Learning
                            </div>
                        </Link>
                    </div>
                    <Menu mode="horizontal" items={items} selectedKeys={[current]} className="border-b-0 md:min-w-[700px]" />
                    <div className="hidden md:flex gap-2">
                        <RightContent />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header