import { UserContext } from "@/models/user";
import { addComment, listComment } from "@/services/comment";
import { CalendarOutlined, UserOutlined } from "@ant-design/icons";
import { ActionType, ProCard, ProForm, ProFormInstance, ProFormTextArea, ProList } from "@ant-design/pro-components";
import { Avatar, Tag, message } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { Fragment, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useContext, useRef } from "react";

type CommentComponentProps = {
    id: string | string[];
}

const CommentComponent: React.FC<CommentComponentProps> = () => {
    const router = useRouter();
    const { id } = router.query;
    const actionRef = useRef<ActionType>();
    const formRef = useRef<ProFormInstance>();
    const { user } = useContext<{
        user: API.User
    }>(UserContext);

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
                <ProForm onFinish={onFinish} formRef={formRef} disabled={!user}>
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
                        request={(params: any) => listComment(params, id)}
                        rowKey="id"
                        headerTitle="Danh sách"
                        metas={{
                            title: {
                                dataIndex: 'name',
                                render: (dom: any, entity: { role: string; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
                                    <div className="flex justify-between items-center">
                                        <Tag color="blue">{roleName(entity.role)}</Tag><div className="font-medium">{entity.name}</div>
                                    </div>
                                )
                            },
                            description: {
                                render: (dom: any, entity: { content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; createdDate: Date; }) => {
                                    return (
                                        <div>
                                            <div className="mb-2">{entity.content}</div>
                                            <div className="text-gray-500 text-sm text-right">
                                                <CalendarOutlined /> {dayjs(entity.createdDate).format('DD/MM/YYYY hh:mm:ss')}
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