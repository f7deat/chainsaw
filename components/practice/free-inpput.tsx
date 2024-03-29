import { checkAnswer } from "@/services/course";
import { playFalseSound, playTrueSound } from "@/utils/audio";
import { Alert, Button, Divider, Form, Input, message } from "antd"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type PracticeContentProps = {
    item: API.QuestionListItem;
    setScore: any;
    score: number;
}

const PracticeContent: React.FC<PracticeContentProps> = (props) => {

    const { item, setScore, score } = props;
    const [answered, setAnswered] = useState<boolean>(false);
    const router = useRouter();

    const onFinish = async (values: any) => {
        const response = await checkAnswer(item.id, 0, values.answer, undefined, item.type, router.query.id);
        if (response.correct) {
            setScore(score + 1);
            playTrueSound();
            message.success('Đúng rồi!!!');
        } else {
            playFalseSound();
            message.error('Sai rồi!!!');
        }

        setAnswered(true);
    }

    useEffect(() => {
        if ((window as any).MathJax) {
            (window as any).MathJax.typeset()
        }
    }, [])

    return (
        <div>
            <div className="flex flex-col items-center justify-center p-4">
                <div className="font-bold mb-4 text-2xl">Đáp án</div>
                <Form onFinish={onFinish}>
                    <Form.Item initialValue={item.type} name="type" hidden>
                        <Input />
                    </Form.Item>
                    <Form.Item name="answer" rules={[
                        {
                            required: true,
                            message: 'Vui lòng điền đáp án'
                        }
                    ]}>
                        <Input size="large" disabled={answered || item.isCompleted} />
                    </Form.Item>
                    <Button disabled={item.isCompleted || answered} size="large" htmlType="submit" className="w-full bg-blue-500 font-bold" type="primary">Gửi câu trả lời</Button>
                </Form>

            </div>
        </div>
    )
}

export default PracticeContent