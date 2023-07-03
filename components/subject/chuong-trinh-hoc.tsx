import { listChuongTrinhHocBySubjectId } from "@/services/course"
import { ProList } from "@ant-design/pro-components"
import { Rate } from "antd";
import Link from "next/link"
import { ReactNode } from "react";

type ChuongTrinhHocBySubjectProps = {
    id: number;
    headerTitle: ReactNode;
}

const ChuongTrinhHocBySubject: React.FC<ChuongTrinhHocBySubjectProps> = (props) => {

    return (
        <ProList<API.ChuongTrinhHocListItem>
            headerTitle={props.headerTitle}
            request={() => listChuongTrinhHocBySubjectId({
                pageSize: 4,
                current: 1
            }, props.id)}
            pagination={false}
            grid={{ gutter: 16, column: 4, md: 4, xs: 1 }}
            showActions="always"
            ghost={true}
            metas={{
                content: {
                    dataIndex: 'description',
                    render: (dom: any, entity: API.ChuongTrinhHocListItem) => (
                        <div className="-m-6">
                            <picture>
                                <img src={entity.thumbnail || 'https://cdn.getvisa.vn/images/cogiao.jpg'} alt="IMG" className="mb-2" loading="lazy" />
                            </picture>
                            <div className="px-2 pb-1">
                                <Link href={`/bai-giang/${entity.id}`}>
                                    <div className="line-clamp-2 font-medium text-blue-500 mb-1 min-h-[45px]">{entity.name}</div>
                                </Link>
                                <div className="text-right mb-2">
                                    <Rate value={5} disabled /> 
                                </div>
                                {
                                    entity.description && (<div className="line-clamp-3 text-gray-500 min-h-[70px]">{entity.description}</div>)
                                }
                            </div>
                        </div>
                    )
                },
                actions: {
                    cardActionProps: 'actions',
                    render: (_dom: any, entity: { id: any; }) => [
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