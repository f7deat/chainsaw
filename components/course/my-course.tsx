import { getMyCourse } from "@/services/course";
import Link from "next/link";
import { ProList } from "@ant-design/pro-components";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const MyCourse: React.FC = () => {

    return (
        <ProList<API.ChuongTrinhHocListItem>
            toolBarRender={() => {
                return [
                    <Link key="viewMore" href="/tai-khoan/khoa-hoc">
                        <span className="flex items-center gap-2 text-blue-500 font-medium">
                            Xem tất cả
                            <ArrowRightOutlined />
                        </span>
                    </Link>,
                ];
            }}
            ghost
            headerTitle="Khóa học của tôi"
            request={getMyCourse}
            pagination={{
                defaultPageSize: 4
            }}
            grid={{
                gutter: 16,
                column: 4,
                md: 4,
                xs: 1,
            }}
            showActions="always"
            metas={{
                content: {
                    render: (dom, entity) => (
                        <div className="-m-6">
                            <picture>
                                <img src={entity.thumbnail || 'https://cdn.getvisa.vn/images/cogiao.jpg'} alt="IMG" className="mb-2" />
                            </picture>
                            <div className="px-2 pb-1">
                                <div className="line-clamp-2 font-medium text-blue-500 mb-1">{entity.name}</div>
                                <div className="line-clamp-3 text-gray-500">{entity.description}</div>
                            </div>
                        </div>
                    )
                },
                actions: {
                    cardActionProps: 'actions',
                    render: (dom, entity) => [
                        <Link key={1} href={`/bai-giang/${entity.id}`}>
                            Xem thêm
                        </Link>
                    ]
                },
            }}
        />
    )
}

export default MyCourse