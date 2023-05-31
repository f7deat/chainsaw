import { checkAnswer } from "@/services/course";
import { playAudio, playFalseSound, playTrueSound } from "@/utils/audio";
import { QuestionCircleOutlined, SoundOutlined } from "@ant-design/icons";
import { Alert, Button, Col, Divider, Row, Space, Typography, message } from "antd";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

type SingleChoiceProps = {
    data: API.QuestionListItem;
    index: number;
    setScore: any;
    score: number;
}

const SingleChoice: React.FC<SingleChoiceProps> = (props) => {

    const { index, setScore, score } = props;
    const [data, setData] = useState<API.QuestionListItem>(props.data)
    const router = useRouter();

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

    const onAnswer = async (values: API.AnswerListItem) => {
        if (answered || data.isCompleted) {
            return;
        }
        const response = await checkAnswer(values.questionId, values.id, '', undefined, data.type, router.query.id);
        let newData = { ...data };
        if (response.correct) {
            setScore(score + 1);
            playTrueSound();
            message.success('Đúng rồi, con giỏi lắm!');
            newData.result = true;
        } else {
            playFalseSound();
            message.error('Sai rồi!');
            newData.result = false;
        }
        newData.isCompleted = true;
        setData(newData);
        setAnswered(true);
    }

    const getBorder = (item: API.AnswerListItem) => {
        if (item.yourAnswer) {
            if (data.result) {
                return 'border-green-500';
            }
            return 'border-red-500';
        }
        return '';
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center p-4">
                <div className="mb-10">
                    <span className="bg-blue-500 text-white text-2xl px-6 py-2 shadow rounded-lg uppercase font-medium">
                        <QuestionCircleOutlined className="mr-2" />
                        Câu {index + 1}
                    </span>
                </div>
                <div className="text-3xl mb-5 text-center" dangerouslySetInnerHTML={{ __html: data.title }} />
                <div className="text-3xl mb-5 text-center" dangerouslySetInnerHTML={{ __html: data.content }} />
                <div className="font-bold mb-4 text-2xl">Đáp án</div>
                <Divider />
                <div className={`grid md:grid-cols-${data.answers.length} gap-4 mb-4`}>
                    {
                        data.answers.map(answer => (
                            <div key={answer.id} className="flex justify-center">
                                <button type="button"
                                    className={`py-4 px-8 flex justify-center w-full items-center hover:bg-slate-200 rounded border ${getBorder(answer)}`}
                                    onClick={() => onAnswer(answer)}>
                                    <Typography.Title level={2}>
                                        <div dangerouslySetInnerHTML={{
                                            __html: answer.text
                                        }} />
                                    </Typography.Title>
                                </button>
                                {
                                    answer.mp3Link && (
                                        <div>
                                            <Button icon={<SoundOutlined />} onClick={() => playAudio(answer.mp3Link)} type="link" />
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>

                {
                    (data?.suggestion.endsWith('.mp3') || data?.suggestion.endsWith('.m4a')) && (
                        <Button onClick={() => playAudio(data.suggestion)} size="large" type="primary">
                            <Space>
                                <SoundOutlined />
                                <span className="font-medium">Nghe lại</span>
                            </Space>
                        </Button>
                    )
                }

                <Divider />

                {ShowMessage(data)}

            </div>
        </div>
    )
}

export default SingleChoice