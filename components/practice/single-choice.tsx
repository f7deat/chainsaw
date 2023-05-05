import { checkAnswer } from "@/services/course";
import { Alert, Col, Divider, Row, Typography, message } from "antd";
import { Fragment, useState } from "react";

type SingleChoiceProps = {
    data: API.QuestionListItem;
    total: number;
    index: number;
    setScore: any;
    score: number;
}

const SingleChoice: React.FC<SingleChoiceProps> = (props) => {

    const { data, total, index, setScore, score } = props;

    const [answered, setAnswered] = useState<boolean>(false);

    const ShowMessage = (item: API.QuestionListItem) => {
        if (item.isCompleted && item.result) {
            return <Alert message="Bạn đã hoàn thành chính xác câu hỏi này" type="success" showIcon />
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
        const response = await checkAnswer(values.questionId, values.id, '');
        if (response.correct) {
            const point = 10 / total;
            setScore(score + point);
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
                    <button className="bg-orange-500 text-white text-2xl px-6 py-2 shadow rounded-lg uppercase font-medium">Câu {index + 1}</button>
                </div>
                <div className="text-3xl mb-5">{data.title}</div>
                <div className="text-3xl mb-5">{data.content}</div>
                <div className="font-bold mb-4 text-2xl">Đáp án</div>
                <Divider />
                <Row gutter={16}>
                    {
                        data.answers.map(answer => (
                            <div key={answer.id}>
                                <Col>
                                    <button type="button" className="bg-slate-100 h-32 px-8 flex justify-center items-center hover:bg-yellow-400 rounded" onClick={() => onAnswer(answer)}>
                                        <Typography.Title level={2}>
                                            {answer.text}
                                        </Typography.Title>
                                    </button>
                                </Col>
                            </div>
                        ))
                    }
                </Row>

                <Divider />

                {ShowMessage(data)}

            </div>
        </div>
    )
}

export default SingleChoice