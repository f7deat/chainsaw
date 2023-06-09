import { addComment, listComment } from "@/services/comment";
import { CalendarOutlined, UserOutlined } from "@ant-design/icons";
import { ActionType, ProCard, ProForm, ProFormInstance, ProFormTextArea, ProList } from "@ant-design/pro-components";
import { Avatar, Divider, Tag, message } from "antd";
import { useRouter } from "next/router";
import { Fragment, useRef } from "react";

const CommentComponent: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const actionRef = useRef<ActionType>();
    const formRef = useRef<ProFormInstance>();

    const onFinish = async (values: any) => {
        values.baiGiangId = id;
        const response = await addComment(values);
        if (response.succeeded) {
            message.success('Đã gửi bình luận');
            actionRef.current?.reload();
            formRef.current?.resetFields()
        }
    }

    const roleName = (normalizedName: string) => {
        if (normalizedName === 'Student') {
            return 'Học sinh';
        }
        return 'Giáo viên';
    }

    return (
        <div>
            <ProCard title="Bình luận" className="shadow mb-4">
                <ProForm onFinish={onFinish} formRef={formRef}>
                    <ProFormTextArea name="noiDung" label="Nội dung" rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập nội dung'
                        }
                    ]} />
                </ProForm>
            </ProCard>

            {
                id ? (
                    <ProList<API.CommentListItem>
                        className="shadow"
                        pagination={{
                            pageSize: 5
                        }}
                        actionRef={actionRef}
                        request={(params) => listComment(params, id)}
                        rowKey="id"
                        headerTitle="Danh sách"
                        metas={{
                            title: {
                                dataIndex: 'name',
                                render: (dom, entity) => (
                                    <div className="flex justify-between items-center">
                                        <Tag color="blue">{roleName(entity.role)}</Tag><div className="font-medium">{entity.name}</div>
                                    </div>
                                )
                            },
                            description: {
                                render: (dom, entity) => {
                                    return (
                                        <div>
                                            <div className="mb-2">{entity.content}</div>
                                            <div className="text-gray-500 text-sm text-right">
                                                <CalendarOutlined /> {entity.createdDate.toLocaleString()}
                                            </div>
                                        </div>
                                    )
                                },
                            },
                            avatar: {
                                render: () => <Avatar icon={<UserOutlined />} />
                            }
                        }}
                    />
                ) : (<Fragment />)
            }
        </div>
    )
}

export default CommentComponent