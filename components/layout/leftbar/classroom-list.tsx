import { listClassroom } from "@/services/course";
import { ArrowRightOutlined } from "@ant-design/icons";
import { ProList } from "@ant-design/pro-components";
import Link from "next/link";

const ClassroomList: React.FC = () => {
    return (
        <ProList<{
            id: number;
            name: string;
        }>
            rowKey="id"
            ghost
            request={() => listClassroom({
                pageSize: 5
            })}
            metas={{
                title: {
                    render: (dom, entity) => (
                        <Link href={`/lop-hoc/${entity.id}`}>
                            <div className="flex gap-2 items-center justify-between">
                                <ArrowRightOutlined />
                                <div>{entity.name}</div>
                            </div>
                        </Link>
                    )
                }
            }} />
    )
}

export default ClassroomList