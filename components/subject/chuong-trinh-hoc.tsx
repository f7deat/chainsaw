import { listChuongTrinhHocBySubjectId } from "@/services/course"
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
            grid={{ gutter: 16, column: 4 }}
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
                }
            }}
        />
    )
}

export default ChuongTrinhHocBySubject