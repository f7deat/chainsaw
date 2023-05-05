import { checkAnswer } from "@/services/course";
import { QuestionType } from "@/utils/constants";
import { ProForm, ProFormCheckbox } from "@ant-design/pro-components";
import { Alert, message, Divider, Row, Col, Typography } from "antd";
import { useState, Fragment } from "react";

type MultipleChoiceProps = {
    data: API.QuestionListItem;
    index: number;
    setScore: any;
    score: number;
}

const MultipleChoice: React.FC<MultipleChoiceProps> = (props) => {
    const { data, index, setScore, score } = props;

    const [answered, setAnswered] = useState<boolean>(false);

    const ShowMessage = (item: API.QuestionListItem) => {
        if (item.isCompleted && item.result) {
            return <Alert message="Bạn đã hoàn thành chính xác câu hỏi này" type="success" showIcon className="text-lg" />
        }
        if (item.isCompleted && !item.result) {
            return <Alert message="Bạn đã trả lời sai câu hỏi này" type="error" showIcon className="text-lg" />
        }
        return <Fragment />
    }

    const onFinish = async (values: any) => {
        if (answered || data.isCompleted) {
            return;
        }
        const response = await checkAnswer(data.id, 0, '', values.dapAnIds, QuestionType.MULTIPLE_CHOICE);
        if (response.correct) {
            setScore(score + 1);
            message.success('Đúng rồi, con giỏi lắm')
        } else {
            message.error('Sai rồi!')
        }
        setAnswered(true);
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center p-4">
                <div className="mb-10">
                    <button className="bg-blue-500 text-white text-2xl px-6 py-2 shadow rounded-lg uppercase font-medium">Câu {index + 1}</button>
                </div>
                <div className="text-3xl mb-5">{data.title}</div>
                <div className="text-3xl mb-5" dangerouslySetInnerHTML={{
                    __html: data.content
                }}>

                </div>
                <div className="font-bold mb-4 text-2xl">Đáp án</div>
                <Divider />
                <ProForm onFinish={onFinish}>
                    <ProFormCheckbox.Group name="dapAnIds"
                        options={data.answers.map(o => {
                            return {
                                label: <span className="font-medium">{o.text}</span>,
                                value: o.id
                            }
                        })}
                    />
                </ProForm>

                <Divider />

                {ShowMessage(data)}

            </div>
        </div>
    )
}

export default MultipleChoice