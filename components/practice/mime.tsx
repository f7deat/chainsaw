import { playAudio } from "@/utils/audio";
import { SoundOutlined } from "@ant-design/icons";
import { Button, Divider, Typography } from "antd";

type MimeProps = {
    data: API.QuestionListItem;
    index: number;
}

const Mime: React.FC<MimeProps> = (props) => {

    const { data, index } = props;

    return (
        <div className="flex flex-col items-center justify-center p-4">

            <div className="text-3xl mb-5" dangerouslySetInnerHTML={{
                __html: data.title
            }}></div>
            <div className="text-3xl mb-5" dangerouslySetInnerHTML={{
                __html: data.content
            }}></div>

            <Divider dashed />
            <div className={`grid md:grid-cols-${data.answers.length} gap-4 mb-4`}>
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
            <div className="text-center">
                Trang {index + 1}
            </div>
        </div>
    )
}

export default Mime