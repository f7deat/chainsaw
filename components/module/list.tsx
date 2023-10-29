import { listBaiGiang } from "@/services/course"
import { PlayCircleOutlined, EditOutlined, QuestionCircleFilled, CheckCircleFilled, ClockCircleFilled } from "@ant-design/icons"
import { ProList } from "@ant-design/pro-components"
import { Button, Tooltip } from "antd"
import router from "next/router"

type ModuleListProps = {
    moduleGroupId: number;
    moduleGroupName: string;
    currentModuleId?: number;
}

const ModuleList: React.FC<ModuleListProps> = (props) => {

    const { moduleGroupId, moduleGroupName, currentModuleId } = props;

    return (
        <ProList
            className="mb-4 shadow"
            rowKey="id"
            headerTitle={<div className=" font-medium text-2xl rounded-t text-blue-600 truncate">{moduleGroupName}</div>}
            request={(params) => listBaiGiang({
                nhomBaiGiangId: moduleGroupId,
                ...params
            })}
            showActions="always"
            metas={{
                title: {
                    render: (dom, entity: any) => (
                        <div className={`md:text-lg font-medium flex gap-2 ${currentModuleId === entity.id && 'text-blue-500'}`}>
                            <div dangerouslySetInnerHTML={{
                                __html: entity.name
                            }}></div>
                            {
                                entity.free && (
                                    <div>
                                        <span className="text-xs bg-red-500 text-white px-1 rounded font-normal animate-bounce absolute">Miễn phí</span>
                                    </div>
                                )
                            }
                        </div>
                    )
                },
                actions: {
                    render: (dom, entity) => [
                        <Button
                            key={0} type="link"
                            icon={<PlayCircleOutlined />}
                            disabled={!entity.video}
                            className="text-lg flex items-center"
                            onClick={() => router.push(`/luyen-tap/video/${entity.id}`)}
                        />,
                        <Button
                            disabled={entity.id === currentModuleId}
                            key={1} type="link" icon={<EditOutlined />} className="text-lg flex items-center" onClick={() => router.push(`/luyen-tap/cau-hoi/${entity.id}`)} />
                    ]
                },
                avatar: {
                    render: (dom, entity) => {
                        if (entity.status == null) {
                            return <div className="text-xl ml-2">
                                <QuestionCircleFilled style={{ color: 'gray' }} />
                            </div>
                        }
                        if (entity.status) {
                            return (
                                <Tooltip title="Đã hoàn thành bài giảng">
                                    <div className="text-xl ml-2">
                                        <CheckCircleFilled style={{ color: 'limegreen' }} />
                                    </div>
                                </Tooltip>
                            )
                        }
                        return (
                            <Tooltip title="Bài giảng đang học">
                                <div className="text-xl ml-2">
                                    <ClockCircleFilled style={{ color: 'orange' }} />
                                </div>
                            </Tooltip>
                        )
                    }
                }
            }}
            rowClassName="bg-white"
        />
    )
}

export default ModuleList