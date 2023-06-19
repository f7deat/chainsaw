import { playFalseSound, playTrueSound } from "@/utils/audio";
import { AudioOutlined, SoundOutlined } from "@ant-design/icons";
import { Alert, Divider, Tooltip } from "antd";
import { useState } from "react";

type SpeechProps = {
    data: API.QuestionListItem;
    index: number;
}

const Speech: React.FC<SpeechProps> = (props) => {

    const { data, index } = props;

    const synth = window.speechSynthesis;

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const SpeechGrammarList = (window as any).SpeechGrammarList || (window as any).webkitSpeechGrammarList;
    const SpeechRecognitionEvent = (window as any).SpeechRecognitionEvent || (window as any).webkitSpeechRecognitionEvent;
    const [diagnostic, setDiagnostic] = useState<string>('');

    const recognition = new SpeechRecognition();
    const speechRecognitionList = new SpeechGrammarList();
    recognition.grammars = speechRecognitionList;
    recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    const onSpeech = () => {

        recognition.start();
        console.log("Ready to receive a color command.");
    }

    const onRead = () => {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(data.title);
        utterance.voice = synth.getVoices()[1];
        console.log(synth.getVoices())
        synth.speak(utterance);
    }

    recognition.onresult = (event: any) => {
        const result = event.results[0][0].transcript;
        setDiagnostic(result);
        if (result === data.title) {
            playTrueSound();
        } else {
            playFalseSound();
        }
        console.log(`Confidence: ${event.results[0][0].confidence}`);
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center p-4">
                <div className="mb-10">
                    <button className="bg-blue-500 text-white text-2xl px-6 py-2 shadow rounded-lg uppercase font-medium">Câu {index + 1}</button>
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

                <button className="h-32 w-32 rounded-full border flex justify-center items-center hover:bg-slate-100" onClick={onSpeech}>
                    <AudioOutlined className="text-4xl" />
                </button>

                <Divider />

                {
                    diagnostic && <Alert message={diagnostic} showIcon />
                }

            </div>
        </div>
    )
}

export default Speech