import { getMyCourse } from "@/services/course";
import Link from "next/link";
import { ProList } from "@ant-design/pro-components";

const MyCourse: React.FC = () => {

    return (
        <ProList<API.ChuongTrinhHocListItem>
            headerTitle="Khóa học của tôi"
            request={getMyCourse}
            pagination={{
                defaultPageSize: 4
            }}
            grid={{
                gutter: 16,
                column: 4,
                md: 4,
                xs: 1
            }}
            showActions="always"
            metas={{
                title: {
                    dataIndex: 'name'
                },
                content: {
                    dataIndex: 'description',
                    render: (dom, entity) => (
                        <div>
                            <picture hidden={!entity.thumbnail}>
                                <img src={entity.thumbnail} alt="IMG" className="mb-2" />
                            </picture>
                            <div>{entity.description}</div>
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
                }
            }}
        />
    )
}

export default MyCourse