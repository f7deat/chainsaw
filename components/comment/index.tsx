import { addComment, listComment } from "@/services/comment";
import { UserOutlined } from "@ant-design/icons";
import { ActionType, ProCard, ProForm, ProFormInstance, ProFormTextArea, ProList } from "@ant-design/pro-components";
import { Avatar, Divider, message } from "antd";
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

    return (
        <div>
            <Divider />
            <ProCard title="Bình luận">
                <ProForm onFinish={onFinish} formRef={formRef}>
                    <ProFormTextArea name="noiDung" label="Nội dung" rules={[
                        {
                            required: true
                        }
                    ]} />
                </ProForm>
            </ProCard>
            <Divider />
            
            {
                id ? (
                    <ProList<API.CommentListItem>
                actionRef={actionRef}
                request={(params) => listComment(params, id)}
                rowKey="id"
                headerTitle="Danh sách"
                metas={{
                    title: {
                        dataIndex: 'name',
                        title: 'Name'
                    },
                    description: {
                        render: (dom, entity) => {
                            return entity.content;
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