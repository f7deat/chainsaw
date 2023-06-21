import { playFalseSound, playTrueSound } from "@/utils/audio";
import { AudioOutlined, SoundOutlined } from "@ant-design/icons";
import { Alert, Divider, Select, Tooltip } from "antd";
import { useState } from "react";

type SpeechProps = {
    data: API.QuestionListItem;
    index: number;
}

const Speech: React.FC<SpeechProps> = (props) => {

    const { data, index } = props;
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const SpeechGrammarList = (window as any).SpeechGrammarList || (window as any).webkitSpeechGrammarList;
    const SpeechRecognitionEvent = (window as any).SpeechRecognitionEvent || (window as any).webkitSpeechRecognitionEvent;
    const [diagnostic, setDiagnostic] = useState<string>('');
    const [recording, setRecording] = useState<boolean>(false);
    const [selectedVoice, setSelectedVoice] = useState<number>(1);

    const recognition = new SpeechRecognition();
    const speechRecognitionList = new SpeechGrammarList();
    recognition.grammars = speechRecognitionList;
    recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    const onSpeech = () => {
        setRecording(true);
        recognition.start();
        console.log("Ready to receive a color command.");
    }

    const onRead = () => {
        const utterance = new SpeechSynthesisUtterance(data.title);
        utterance.voice = voices[selectedVoice];
        console.log(synth.getVoices())
        synth.speak(utterance);
    }

    recognition.onresult = (event: any) => {
        const result = event.results[0][0].transcript;
        setDiagnostic(result);
        if (result) {
            if ((result as string).toLocaleLowerCase() === data.title.toLocaleLowerCase()) {
                playTrueSound();
            } else {
                playFalseSound();
            }
        }
        console.log(`Confidence: ${event.results[0][0].confidence}`);
        setRecording(false);
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center p-4">
                <div className="mb-4 w-full flex justify-end items-center">
                    <div>
                        <div className="mb-2 font-medium">Chọn giọng và ngôn ngữ:</div>
                        <Select value={selectedVoice} options={voices.map((x, i) => {
                            return {
                                value: i,
                                label: x.name
                            }
                        })} onChange={(value) => setSelectedVoice(value)} />
                    </div>
                </div>
                <div className="flex gap-2 items-center mb-5">
                    <div className="text-3xl" dangerouslySetInnerHTML={{ __html: data.title }} />
                    <Tooltip title="Nghe trước phát âm">
                        <button className="text-orange-500" onClick={onRead}>
                            <SoundOutlined className="text-2xl" />
                        </button>
                    </Tooltip>
                </div>
                <div className="text-3xl mb-5" dangerouslySetInnerHTML={{
                    __html: data.content
                }}>

                </div>

                <div className="relative">
                    <span hidden={!recording}>
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                        </span>
                    </span>
                    <button className="h-32 w-32 rounded-full border flex justify-center items-center hover:bg-slate-100 relative" onClick={onSpeech}>
                        <AudioOutlined className="text-4xl" />
                    </button>
                </div>

                <Divider />

                {
                    diagnostic && <Alert message={diagnostic} showIcon />
                }

            </div>
        </div>
    )
}

export default Speech