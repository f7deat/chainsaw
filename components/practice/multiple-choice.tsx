import { checkAnswer } from "@/services/course";
import { playFalseSound, playTrueSound } from "@/utils/audio";
import { QuestionType } from "@/utils/constants";
import { ProForm, ProFormCheckbox } from "@ant-design/pro-components";
import { Alert, message, Divider } from "antd";
import { useRouter } from "next/router";
import { useState, Fragment } from "react";

type MultipleChoiceProps = {
    data: API.QuestionListItem;
    index: number;
    setScore: any;
    score: number;
}

const MultipleChoice: React.FC<MultipleChoiceProps> = (props) => {
    const { data, index, setScore, score } = props;
    const router = useRouter();

    const [answered, setAnswered] = useState<boolean>(false);

    const onFinish = async (values: any) => {
        if (answered || data.isCompleted) {
            return;
        }
        const response = await checkAnswer(data.id, 0, '', values.dapAnIds, QuestionType.MULTIPLE_CHOICE, router.query.id);
        if (response.correct) {
            setScore(score + 1);
            playTrueSound();
            message.success('Đúng rồi, con giỏi lắm');
        } else {
            playFalseSound();
            message.error('Sai rồi!')
        }
        setAnswered(true);
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center p-4">
                <div className="font-bold mb-4 text-2xl">Đáp án</div>
                <Divider />
                <ProForm onFinish={onFinish} className="text-center">
                    <ProFormCheckbox.Group 
                        name="dapAnIds"
                        options={data.answers.map(o => {
                            return {
                                label: <span className="font-medium" dangerouslySetInnerHTML={{ __html: o.text }}></span>,
                                value: o.id
                            }
                        })}
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng chọn câu trả lời'
                            }
                        ]}
                    />
                </ProForm>

            </div>
        </div>
    )
}

export default MultipleChoice