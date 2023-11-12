import { PlayCircleFilled, ReloadOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import useSound from "use-sound";

type PlayerProps = {
    src: string;
    index: number;
    current: number;
}

const Player: React.FC<PlayerProps> = (props) => {

    const { src, index, current } = props;
    const [isPlaying, setIsPlaying] = useState(false);

    const [seconds, setSeconds] = useState();

    const [play, { pause, duration, sound, stop,  }] = useSound(src);

    useEffect(() => {
        if (current === index) {
            const interval = setInterval(() => {
                if (sound) {
                    setSeconds(sound.seek([]));
                    console.log(sound.seek([]));
                    const total = Math.floor((duration || 1) / 1000)
                    if (total == seconds) {
                        setIsPlaying(false);
                    }
                }
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [current, isPlaying]);

    useEffect(() => {
        if (index === current) {
            play();
            setIsPlaying(true);
        } else {
            stop();
            setIsPlaying(false);
        }
    }, [current]);

    const playingButton = () => {
        if (isPlaying) {
            pause();
            setIsPlaying(false);
        } else {
            play();
            setIsPlaying(true);
        }
    };
    return (
        <>
            <div className="px-2 py-1 border-b border-l border-r border-gray-100">
                <div className="flex gap-2 items-end">
                    <div className="flex justify-center gap-4 text-xl">
                        {!isPlaying ? (
                            <button className="text-blue-500" id='supersecretbutton' onClick={playingButton}>
                                <PlayCircleFilled />
                            </button>
                        ) : (
                            <button className="text-blue-500" onClick={playingButton}>
                                <ReloadOutlined />
                            </button>
                        )}
                    </div>
                     <div>
                        <input
                            type="range"
                            min="0"
                            max={(duration || 1) / 1000}
                            value={seconds}
                            className="w-full"
                            onChange={(e) => {
                                sound.seek([e.target.value]);
                            }}
                        />
                    </div> 
                </div>
            </div>
        </>
    )
}

export default Player