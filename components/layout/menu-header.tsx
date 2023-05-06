import { FireTwoTone } from "@ant-design/icons"
import { Space } from "antd"
import Link from "next/link"

const MenuHeader: React.FC = () => {
    return (
        <div>
            <Link href="/">
                <Space className="font-medium text-xl">
                    <FireTwoTone color='#1677ff' />
                    <span>E-Learning</span>
                </Space>
            </Link>
        </div>
    )
}

export default MenuHeader