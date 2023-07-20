import { getMyCourse } from "@/services/course";
import Link from "next/link";
import { ProList } from "@ant-design/pro-components";
import { ArrowRightOutlined, StarFilled } from "@ant-design/icons";
import { Fragment, useContext } from "react";
import { UserContext } from "@/models/user";

type MyCourseProps = {
    defaultPageSize: number;
}

const MyCourse: React.FC<MyCourseProps> = (props) => {

    const { user } = useContext<{
      user: API.User
    }>(UserContext);

    return user ? (
        <ProList<API.TopicListItem>
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
            headerTitle={
                <div className='text-2xl'>Khóa học của tôi</div>
            }
            request={getMyCourse}
            pagination={{
                defaultPageSize: props.defaultPageSize
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
                                <Link href={`/bai-giang/${entity.id}`}>
                                    <div className="line-clamp-2 font-medium text-blue-500 mb-1" style={{
                                        minHeight: 48
                                    }}>{entity.name}</div>
                                </Link>
                                <div className="text-xs text-red-500 text-right">
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                </div>
                                <div className="line-clamp-3 text-gray-500" style={{
                                    minHeight: 72
                                }}>{entity.description}</div>
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
    ) : (<Fragment />)
}

export default MyCourse