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
        <div className="shadow mb-4 bg-white">
            <div className="px-4 py-3 font-medium text-lg md:text-2xl rounded-t text-blue-600">{moduleGroupName}</div>
            <ProList
                rowKey="id"
                request={(params) => listBaiGiang({
                    nhomBaiGiangId: moduleGroupId,
                    ...params
                })}
                showActions="always"
                metas={{
                    title: {
                        render: (dom, entity: any) => (
                            <div className={`md:text-lg font-medium flex gap-2 ${currentModuleId === entity.id && 'text-blue-500'}`} onClick={() => router.push(`/luyen-tap/cau-hoi/${entity.id}`)}>
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
                                onClick={() => router.push(`/luyen-tap/video/${entity.id}`)}
                                size="small"
                            />,
                            <Button
                                disabled={entity.id === currentModuleId}
                                key={1} type="link" icon={<EditOutlined />} onClick={() => router.push(`/luyen-tap/cau-hoi/${entity.id}`)}
                                size="small" />
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
            />
        </div>
    )
}

export default ModuleList