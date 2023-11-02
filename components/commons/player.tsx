import { PlayCircleFilled, StopFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import useSound from "use-sound";

type PlayerProps = {
    sound: string;
    id: number;
}

const Player: React.FC<PlayerProps> = (props) => {

    const { id } = props;
    const [isPlaying, setIsPlaying] = useState(false);

    const [time, setTime] = useState({
        min: 0,
        sec: 0
    });
    const [currTime, setCurrTime] = useState({
        min: 0,
        sec: 0
    });

    const [seconds, setSeconds] = useState();

    const [play, { pause, duration, sound }] = useSound(props.sound);

    useEffect(() => {
        if (duration) {
            const sec = duration / 1000;
            const min = Math.floor(sec / 60);
            const secRemain = Math.floor(sec % 60);
            setTime({
                min: min,
                sec: secRemain
            });
        }
    }, [isPlaying, duration, id]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (sound) {
                setSeconds(sound.seek([]));
                const min = Math.floor(sound.seek([]) / 60);
                const sec = Math.floor(sound.seek([]) % 60);
                setCurrTime({
                    min,
                    sec
                });
                const total = Math.floor((duration || 1) / 1000)
                console.log(seconds)
                if (total == seconds) {
                    setIsPlaying(false);
                }
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [sound]);

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
            <div className="px-2 py-1 rounded border">
                <div className="flex gap-2 items-end">
                    <div className="flex justify-center gap-4 text-xl">
                        {!isPlaying ? (
                            <button className="text-blue-500" onClick={playingButton}>
                                <PlayCircleFilled />
                            </button>
                        ) : (
                            <button className="text-blue-500" onClick={playingButton}>
                                <StopFilled />
                            </button>
                        )}
                    </div>
                    <div>
                        <div className="flex justify-between items-center">
                            <div className="text-sm">
                                {currTime.sec}s
                            </div>
                            <div className="text-sm">
                                {time.sec}s
                            </div>
                        </div>
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