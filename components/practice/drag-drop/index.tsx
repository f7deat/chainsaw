import { checkAnswer } from "@/services/course";
import { playAudio, playFalseSound, playTrueSound } from "@/utils/audio";
import { MenuOutlined, QuestionCircleOutlined, SendOutlined, SoundOutlined } from "@ant-design/icons";
import { Button, Divider, Space, Typography, message } from "antd";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import DragableItem from "./dragable-item";
import { DndContext } from "@dnd-kit/core";
import DropableItem from "./dropable-item";

type DragDropProps = {
    data: API.QuestionListItem;
    index: number;
    setScore: any;
    score: number;
}

const DragDrop: React.FC<DragDropProps> = (props) => {

    const { index, setScore, score } = props;
    const [data, setData] = useState<API.QuestionListItem>(props.data)
    const router = useRouter();
    const [drops, setDrops] = useState(props.data.answers);
    const [answered, setAnswered] = useState<boolean>(false);
    const [activeId, setActiveId] = useState<number>();

    const onAnswer = async () => {
        if (answered || data.isCompleted) {
            return;
        }
        if (!activeId) {
            message.warning('Bạn chưa điền câu trả lời!');
            return;
        }
        const answer = data.title.replace('[dropzone]', data.answers.find(x => x.id === activeId)?.text || '');
        const response = await checkAnswer(data.id, 0, answer, undefined, data.type, router.query.id);
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

    const deserializerQuestion = (question: string, answers: API.AnswerListItem[]) => {
        const list = question.split('[dropzone]');
        if (list.length === 0) {
            return <Fragment />
        }
        return (
            <div className="flex gap-2 image-central">
                {
                    list.map((value: string, index: number) => (
                        <div key={index} className="flex gap-2 items-center text-3xl">
                            {
                                <div dangerouslySetInnerHTML={{ __html: value }} />
                            }
                            {
                                index !== (list.length - 1) && (
                                    <DropableItem id={index}>
                                        <div className="border-2 border-dashed border-slate-200 h-16 flex items-center justify-center" style={{
                                            width: activeId ? (answers.find(x => x.id === activeId)?.text.length || 10) * 30 : 100
                                        }}>
                                            {
                                                activeId && (answers.find(x => x.id === activeId)?.text)
                                            }
                                        </div>
                                    </DropableItem>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        )
    }

    function handleDragEnd(event: {
        active: any; over: any;
    }) {
        const { active, over } = event;

        if (active && active.data.current && active.data.current.text) {
            console.log(active)
            setActiveId(event.active.id);
            setDrops(data.answers.filter(x => x.id !== event.active.id));
        }
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
                <DndContext onDragEnd={handleDragEnd}>
                    {
                        deserializerQuestion(data.title, data.answers)
                    }
                    <div className="text-3xl mb-5 text-center" dangerouslySetInnerHTML={{ __html: data.content }} />
                    <div className="font-bold mb-4 text-2xl">Đáp án</div>
                    <Divider />
                    <div className={`grid grid-cols-2 md:grid-cols-${data.answers.length} gap-4 mb-4`}>
                        {
                            drops.map(answer => (
                                <DragableItem id={answer.id} key={answer.id} text={answer.text}>
                                    <button type="button"
                                        className={`py-3 px-8 flex justify-center items-center hover:bg-slate-200 rounded border relative cursor-move`}>
                                        <span className="text-gray-400 absolute top-0 left-0">
                                            <MenuOutlined />
                                        </span>
                                        <div className="text-3xl font-medium">
                                            <div dangerouslySetInnerHTML={{
                                                __html: answer.text
                                            }} />
                                        </div>
                                    </button>
                                </DragableItem>
                            ))
                        }

                    </div>
                </DndContext>

                <div className="py-4">
                    <button type="button" className="px-6 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white text-lg flex items-center justify-center gap-2" onClick={onAnswer}>
                        <SendOutlined />
                        Gửi câu trả lời
                    </button>
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

export default DragDrop