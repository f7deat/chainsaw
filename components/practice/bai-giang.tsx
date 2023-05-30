import { playAudio } from "@/utils/audio";
import { SoundOutlined } from "@ant-design/icons";
import { Button, Divider, Space, Typography } from "antd";

type BaiGiangProps = {
    data: API.QuestionListItem;
    index: number;
}

const BaiGiang: React.FC<BaiGiangProps> = (props) => {

    const { data, index } = props;

    const onListen = () => {
        playAudio(data.suggestion);
    }

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="mb-10">
                <button className="bg-blue-500 text-white text-2xl px-6 py-2 shadow rounded-lg uppercase font-medium">Câu {index + 1}</button>
            </div>
            <div className="text-3xl mb-5" dangerouslySetInnerHTML={{
                __html: data.title
            }}></div>
            <div className="text-3xl mb-5" dangerouslySetInnerHTML={{
                __html: data.content
            }}></div>

            {
                data?.suggestion && (
                    <Button onClick={onListen} size="large" type="primary">
                        <Space>
                            <SoundOutlined />
                            <span className="font-medium">Nghe lại</span>
                        </Space>
                    </Button>
                )
            }

            <Divider dashed />
            <div className={`grid md:grid-cols-${data.answers.length} gap-4`}>
                {
                    data.answers.map(answer => (
                        <div key={answer.id} className={`${answer.text ? 'flex' : 'hidden'} justify-center`}>
                            <button type="button"
                                className={`py-4 px-8 flex justify-center w-full items-center hover:bg-slate-200 rounded border`}>
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
        </div>
    )
}

export default BaiGiang