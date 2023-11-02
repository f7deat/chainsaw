import { playAudio } from "@/utils/audio";
import { QuestionType } from "@/utils/constants";
import { LeftOutlined, SoundOutlined, InfoCircleOutlined, RightOutlined, CheckCircleOutlined, StopOutlined } from "@ant-design/icons";
import { Alert, Tabs, Button, Popover, Space, Empty, message } from "antd";
import Script from "next/script";
import { Fragment, useState } from "react";
import { FreeInput, Mime } from ".";
import DragDrop from "./drag-drop";
import MultipleChoice from "./multiple-choice";
import SingleChoice from "./single-choice";
import OrderChoice from "./sortable";
import Speech from "./speech";
import Player from "../commons/player";

type QuizContentProps = {
    items: API.QuestionListItem[];
    error?: string;
    score: number;
    setScore: any;
    module: any;
}

const QuizContent: React.FC<QuizContentProps> = (props) => {

    const { items, error, score, setScore, module } = props;
    const [activeKey, setActiveKey] = useState<string>('0');
    const [sound, setSound] = useState<string>('');

    const labelRender = (item: API.QuestionListItem, index: number) => {
        if (item.isCompleted) {
            if (item.result) {
                return (
                    <Space>
                        <span className="text-lg text-green-500 font-bold">{index}</span>
                        <CheckCircleOutlined className="text-green-500" />
                    </Space>
                )
            } else {
                return (
                    <Space>
                        <span className="text-lg text-red-500 font-bold">{index}</span>
                        <StopOutlined className="text-red-500" />
                    </Space>
                )
            }
        }
        return <span className="text-lg font-bold">{index}</span>
    }

    const renderTab = (item: API.QuestionListItem, index: number) => {
        if (item.type === QuestionType.FREE_INPUT) {
            return <FreeInput item={item} score={score} setScore={setScore} index={index} />
        } else if (item.type === QuestionType.MULTIPLE_CHOICE) {
            return <MultipleChoice data={item} index={index} score={score} setScore={setScore} />
        } else if (item.type === QuestionType.BAI_GIANG) {
            return <Mime data={item} index={index} />
        } else if (item.type === QuestionType.SORTABLE) {
            return <OrderChoice data={item} index={index} score={score} setScore={setScore} />
        } else if (item.type === QuestionType.SPEECH) {
            return <Speech data={item} index={index} />
        } else if (item.type === QuestionType.DRAG_DROP) {
            return <DragDrop data={item} index={index} score={score} setScore={setScore} />
        }
        return <SingleChoice data={item} index={index} score={score} setScore={setScore} />
    }

    const speak = (text: string, questionId: number, voiceUrl?: string) => {
        const doc = document.createElement('div');
        doc.innerHTML = text;
        const voice = window.speechSynthesis.getVoices().find(x => x.lang === 'vi-VN');

        if (!doc.textContent) {
            message.warning('Không tìm thấy nội dung câu hỏi!');
            return;
        }

        if (voice) {
            const utterance = new SpeechSynthesisUtterance(doc.textContent || '');
            utterance.voice = voice;
            window.speechSynthesis.speak(utterance);
        } else {
            if (voiceUrl) {
                playAudio(voiceUrl);
                return;
            }
            playAudio(`https://texttospeech.responsivevoice.org/v1/text:synthesize?text=${doc.textContent}&lang=vi&engine=g1&name=&pitch=0.5&rate=0.5&volume=1&key=kvfbSITh&gender=female`)
        }
    };

    const ShowMessage = (item: API.QuestionListItem) => {
        if (item.type === 'sapxep') {
            return;
        }
        if (item.isCompleted && item.result) {
            return <Alert message="Bạn đã hoàn thành chính xác câu hỏi này" type="success" showIcon className="text-lg" closable />
        }
        if (item.isCompleted && !item.result) {
            return <Alert message="Bạn đã trả lời sai câu hỏi này" type="error" showIcon className="text-lg" closable />
        }
        return <Fragment />
    }

    const onNextTab = (isNext: boolean) => {
        const newKey = isNext ? (Number(activeKey)) + 1 : (Number(activeKey)) - 1;
        setActiveKey(newKey.toString());
        onSound(newKey);
    }

    const onSound = (index: number) => {
        const question = items[index];
        if (question?.suggestion.endsWith('.mp3') || question?.suggestion.endsWith('.m4a')) {
            playAudio(question?.suggestion);
        }
    }

    return (
        <>
            {
                error ? <Alert type="error" message={error} /> : (<Fragment />)
            }

            {
                items?.length > 0 ? (
                    <>
                        <Tabs
                            type="card"
                            activeKey={activeKey}
                            tabPosition="top"
                            items={items?.map((item: API.QuestionListItem, i: number) => {
                                const id = String(i);
                                return {
                                    label: labelRender(item, i + 1),
                                    key: id,
                                    children: (
                                        <div className="relative">
                                            <div className="absolute left-0 inset-y-1/2">
                                                <Button type="primary" shape="circle" disabled={activeKey === "0"} onClick={() => onNextTab(false)}>
                                                    <span><LeftOutlined /></span>
                                                </Button>
                                            </div>
                                            {
                                                (module?.subjectId === 1 && item.title) && (
                                                    <Button className="flex items-center" onClick={() => speak(item.title, item.id, item.voiceUrl)} icon={<SoundOutlined />}>Nghe đọc bài</Button>
                                                )
                                            }

                                            {
                                                item?.suggestion && (item?.suggestion.endsWith('.mp3') || item?.suggestion.endsWith('.m4a')) && (
                                                    <div className="flex justify-end mb-4 md:mb-10 w-full py-2">
                                                        <Player sound={item.suggestion} id={item.id} />
                                                    </div>
                                                )
                                            }

                                            {renderTab(item, i)}
                                            <div className="mb-4">
                                                {ShowMessage(item)}
                                            </div>
                                            <div className="flex justify-end gap-2">
                                                {
                                                    (module?.subjectId === 1 && item.suggestion) && (
                                                        <Popover content={
                                                            <div dangerouslySetInnerHTML={{ __html: item.suggestion }} />
                                                        } trigger="click">
                                                            <Button type="link">
                                                                <Space>
                                                                    <InfoCircleOutlined /> Gợi ý
                                                                </Space>
                                                            </Button>
                                                        </Popover>
                                                    )
                                                }
                                            </div>
                                            <div className="absolute right-0 inset-y-1/2">
                                                <Button type="primary" shape="circle"
                                                    disabled={activeKey === (items?.length - 1).toString()} onClick={() => {
                                                        onNextTab(true);
                                                    }}>
                                                    <span><RightOutlined /></span>
                                                </Button>
                                            </div>
                                        </div>
                                    ),
                                };
                            })}
                            onTabClick={(activeKey) => {
                                setActiveKey(activeKey);
                                onSound(Number(activeKey));
                            }}
                        />
                        <Script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" />
                    </>
                ) : <Empty />
            }
        </>
    )
}

export default QuizContent