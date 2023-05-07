import { listSubject } from "@/services/course";
import { ArrowRightOutlined } from "@ant-design/icons";
import { ProList } from "@ant-design/pro-components";

const SubjectMenu: React.FC = () => {

    return (
        <ProList<{
            id: number;
            name: string;
        }>
            rowKey="id"
            ghost
            request={listSubject}
            metas={{
                title: {
                    render: (dom, entity) => (
                        <div className="flex gap-2 items-center justify-between">
                            <ArrowRightOutlined />
                            <div>{entity.name}</div>
                        </div>
                    )
                }
            }} />
    )
}

export default SubjectMenu