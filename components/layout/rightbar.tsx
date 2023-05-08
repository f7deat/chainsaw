import { listNewStudent } from "@/services/user";
import { StarTwoTone, UserOutlined } from "@ant-design/icons";
import { ProList } from "@ant-design/pro-components";
import { Avatar, Divider, Typography } from "antd";

const RightBar: React.FC = () => {

    return (
        <div className="py-4">
            <Typography.Title level={5}>Học viên mới</Typography.Title>
            <ProList<{
                id: number;
                name: string;
                avatar: string;
            }>
                rowKey="id"
                request={listNewStudent}
                metas={{
                    title: {
                        render: (dom, entity) => (
                            <div className="flex gap-2 items-center">
                                <Avatar src={
                                    entity.avatar ? <picture>
                                        <img src={entity.avatar} alt="avatar" />
                                    </picture> : 
                                    <picture>
                                    <img src='https://kitpro.site/tutturu/wp-content/uploads/sites/69/2022/02/avatar1.png' alt="avatar" />
                                </picture>
                                } />
                                <div className="line-clamp-2">{entity.name}</div>
                            </div>
                        )
                    }
                }} />
            <Divider />

            <Typography.Title level={5}>Thống kê</Typography.Title>
            <ul>
                <li className="mb-2">
                    <StarTwoTone /> Khóa học: 100+
                </li>
                <li className="mb-2">
                    <StarTwoTone /> Học viên: 2000+
                </li>
                <li className="mb-2">
                    <StarTwoTone /> Bài giảng: 3000+
                </li>
            </ul>
        </div>
    )
}

export default RightBar;