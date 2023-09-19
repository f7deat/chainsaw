import { BookOutlined, CameraOutlined, DashboardOutlined, HistoryOutlined, MoneyCollectOutlined, SettingOutlined, TransactionOutlined, UserOutlined } from "@ant-design/icons";
import { MenuProps, Menu } from "antd";
import { useRouter } from "next/router";

type AdminMenuProps = {
    current: string;
}

const AdminMenu: React.FC<AdminMenuProps> = ({ current }) => {

    const router = useRouter();

    const items: MenuProps['items'] = [
        {
            label: 'Dashboard',
            key: 'dashboard',
            icon: <DashboardOutlined />,
        },
        {
            label: 'Voucher',
            key: 'voucher',
            icon: <MoneyCollectOutlined />
        },
        {
            label: 'Người dùng',
            key: 'users',
            icon: <UserOutlined />
        },
        {
            label: 'Môn học',
            key: 'subject',
            icon: <BookOutlined />
        },
        {
            label: 'Live class',
            key: 'livestream',
            icon: <CameraOutlined />
        },
        {
            label: 'Transaction',
            key: 'transaction',
            icon: <TransactionOutlined />
        },
        {
            label: 'Logs',
            key: 'logs',
            icon: <HistoryOutlined />
        },
    ];

    const onClick: MenuProps['onClick'] = (e) => {
        if (e.key === 'voucher') {
            router.push('/admin/course-discount')
        } else if (e.key === 'dashboard') {
            router.push('/admin');
        } else if (e.key === 'users') {
            router.push('/admin/users');
        }
        console.log('click ', e);
    };
    return (
        <>
            <Menu onClick={onClick} selectedKeys={[current]} mode="vertical" items={items} />
        </>
    )
}

export default AdminMenu;