import { listChuongTrinhHocBySubjectId } from "@/services/course"
import { StarFilled } from "@ant-design/icons";
import { ProList } from "@ant-design/pro-components"
import Link from "next/link"

type ChuongTrinhHocBySubjectProps = {
    id: number;
    headerTitle: string;
}

const ChuongTrinhHocBySubject: React.FC<ChuongTrinhHocBySubjectProps> = (props) => {

    return (
        <ProList<API.ChuongTrinhHocListItem>
            headerTitle={props.headerTitle}
            request={(params) => listChuongTrinhHocBySubjectId(params, props.id)}
            pagination={{
                defaultPageSize: 4
            }}
            grid={{ gutter: 16, column: 4, md: 4, xs: 1 }}
            showActions="always"
            ghost={true}
            metas={{
                content: {
                    dataIndex: 'description',
                    render: (dom, entity) => (
                        <div className="-m-6">
                            <picture>
                                <img src={entity.thumbnail || 'https://cdn.getvisa.vn/images/cogiao.jpg'} alt="IMG" className="mb-2" />
                            </picture>
                            <div className="px-2 pb-1">
                                <Link href={`/bai-giang/${entity.id}`}>
                                    <div className="line-clamp-2 font-medium text-blue-500 mb-1 min-h-[45px]">{entity.name}</div>
                                </Link>
                                <div className="text-xs text-red-500 text-right">
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                </div>
                                <div className="line-clamp-3 text-gray-500 min-h-[70px]">{entity.description}</div>
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
                }
            }}
        />
    )
}

export default ChuongTrinhHocBySubject