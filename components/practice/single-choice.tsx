import { checkAnswer } from "@/services/course";
import { playAudio, playFalseSound, playTrueSound } from "@/utils/audio";
import { SoundOutlined } from "@ant-design/icons";
import { Button, Divider, Space, message } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";

type SingleChoiceProps = {
    data: API.QuestionListItem;
    setScore: any;
    score: number;
}

const SingleChoice: React.FC<SingleChoiceProps> = (props) => {

    const { setScore, score } = props;
    const [data, setData] = useState<API.QuestionListItem>(props.data)
    const router = useRouter();

    const [answered, setAnswered] = useState<boolean>(false);

    const onAnswer = async (values: API.AnswerListItem) => {
        if (answered || data.isCompleted) {
            return;
        }
        const response = await checkAnswer(values.questionId, values.id, '', undefined, data.type, router.query.id);
        if (response.correct) {
            setScore(score + 1);
            playTrueSound();
            message.success('Đúng rồi, con giỏi lắm!');
        } else {
            playFalseSound();
            message.error('Sai rồi!');
        }
        setData(response.question);
        setAnswered(true);
    }

    const getBorder = (item: API.AnswerListItem) => {
        if (item.yourAnswer) {
            if (data.result) {
                return 'border-green-500 bg-slate-100';
            }
            return 'border-red-500 bg-slate-100';
        }
        return '';
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center p-4">
                <div className="font-bold mb-4 text-2xl">Đáp án</div>
                <Divider />
                <div className={`grid grid-cols-2 md:grid-cols-${data?.answers.length} gap-4 mb-4`}>
                    {
                        data?.answers.map(answer => (
                            <div key={answer.id} className="flex justify-center">
                                <button type="button"
                                    className={`py-4 px-8 flex justify-center w-full items-center hover:bg-slate-200 rounded border ${getBorder(answer)}`}
                                    onClick={() => onAnswer(answer)}>
                                    <div className="md:text-3xl text-lg font-medium">
                                        <div dangerouslySetInnerHTML={{
                                            __html: answer.text
                                        }} />
                                    </div>
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

            </div>
        </div>
    )
}

export default SingleChoice