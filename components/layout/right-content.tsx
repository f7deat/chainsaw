import { BarChartOutlined, BellOutlined, BookOutlined, CalendarOutlined, LogoutOutlined, MoneyCollectOutlined, UserOutlined } from "@ant-design/icons"
import { Avatar, Badge, Button } from "antd"
import HeaderDropdown from "./header-dropdown"
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Role } from "@/utils/constants";
import LoginForm from "../accounts/login-form";
import { notificationCount } from "@/services/notification";
import { AppContext } from "@/models/app-context";

const RightContent: React.FC = () => {

    const router = useRouter();
    const [open, setOpen] = useState<boolean>(false);
    const { user } = useContext<API.AppContext>(AppContext);
    const [notiCount, setNotiCount] = useState<number>(0);

    useEffect(() => {
        notificationCount().then(response => {
            setNotiCount(response);
        })
    }, []);

    const loginOut = async () => {
        localStorage.removeItem('access_token');
        const urlParams = new URL(window.location.href).searchParams;
        const redirect = urlParams.get('redirect');
        if (window.location.pathname !== '/accounts/login' && !redirect) {
            window.location.href = "/";
        }
    };

    const onMenuClick = (event: any) => {
        const { key } = event;
        if (key === 'logout') {
            loginOut();
            return;
        } else if (key === 'profile') {
            router.push(`/tai-khoan/thong-tin`);
            return;
        } else if (key === 'settings') {
            router.push(`/tai-khoan/khoa-hoc`);
            return;
        } else if (key === 'history') {
            router.push(`/tai-khoan/hoc-tap/${user?.id}`);
            return;
        } else if (key === 'refer') {
            router.push(`/tai-khoan/thu-nhap`);
            return;
        }
        router.push(`/tai-khoan/${key}`);
    }

    const menuItems = [
        ...(user?.roles?.find((x: any) => x === Role.Referal) ?
            [{
                key: 'refer',
                icon: <MoneyCollectOutlined />,
                label: 'Thu nhập của tôi',
            }] : [
                {
                    key: 'settings',
                    icon: <BookOutlined />,
                    label: 'Khóa học của tôi',
                },
                {
                    key: 'history',
                    icon: <BarChartOutlined />,
                    label: 'Quá trình học tập',
                },
                {
                    key: 'diem-danh',
                    icon: <CalendarOutlined />,
                    label: 'Điểm danh'
                }
            ]),
        {
            key: 'profile',
            icon: <UserOutlined />,
            label: 'Thông tin cá nhân',
        },
        {
            type: 'divider' as const,
        },
        {
            key: 'logout',
            icon: <LogoutOutlined />,
            label: 'Đăng xuất',
            danger: true
        }
    ];

    return user ? (
        <>
            <HeaderDropdown
                menu={{
                    selectedKeys: [],
                    onClick: onMenuClick,
                    items: menuItems,
                }}
            >
                <div className="flex items-center gap-2">
                    <Avatar src={user?.avatar ? <picture>
                        <img src={user?.avatar} alt="avatar" />
                    </picture> : <div className="bg-gray-500">
                        <UserOutlined />
                    </div>} />
                    <div className="text-left">
                        <div className="text-xs">Xin chào,</div>
                        <div className="font-medium text-sm">{user?.name}</div>
                    </div>
                </div>
            </HeaderDropdown>
            <button onClick={() => router.push('/thong-bao')}>
                <Badge count={notiCount}>
                    <Avatar icon={<BellOutlined />} />
                </Badge>
            </button>
        </>
    ) : (
        <>
            <button onClick={() => setOpen(true)} className="flex gap-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2 items-center text-lg">
                <UserOutlined />
                Đăng nhập
            </button>
            <LoginForm open={open} setOpen={setOpen} />
        </>
    )
}

export default RightContent