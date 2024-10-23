import { useEffect, useState, useRef } from "react";

import { FaPlay, FaPause } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";

import Button from "@ui/button";

import { greatGatsbyFull } from "@/const";

import useAnimatedText from "@hook/use-animated-text";

const delay = 300;
const characters = 150;

const StreamingText = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [text, setText] = useState("");

    const animatedText = useAnimatedText(text);

    useInterval(
        () => {
            const newText = getNextChars(characters);
            setText((text) => text + newText);
        },
        isPlaying ? delay : null,
    );

    return (
        <div className="relative w-full">
            <div className="flex items-center justify-between gap-4">
                <div className="flex gap-2">
                    <Button
                        className="w-32"
                        variant={isPlaying ? "outline" : "default"}
                        onClick={() => setIsPlaying(!isPlaying)}
                    >
                        {isPlaying ? (
                            <>
                                <FaPause className="size-4" /> Pause
                            </>
                        ) : (
                            <>
                                <FaPlay className="size-4" /> Start
                            </>
                        )}
                    </Button>

                    <Button
                        variant="secondary"
                        onClick={() => {
                            setText("");
                            setIsPlaying(false);
                            position = 0;
                        }}
                    >
                        <FaArrowRotateLeft className="size-4" /> Reset
                    </Button>
                </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                    <div className="h-[500px] overflow-auto rounded-lg bg-white p-4">
                        <p className="whitespace-pre-wrap text-background">
                            {text}
                        </p>
                    </div>

                    <p className="mt-4 font-bold">text</p>
                </div>

                <div>
                    <div className="h-[500px] overflow-auto rounded-lg bg-white">
                        <p className="whitespace-pre-wrap p-4 text-background">
                            {animatedText}
                        </p>
                    </div>

                    <p className="mt-4 font-bold">useAnimatedText(text)</p>
                </div>
            </div>
        </div>
    );
};

let position = 0;
const getNextChars = (n: number) => {
    const result = greatGatsbyFull.slice(position, position + n);
    position += n;

    return result;
};

const useInterval = (callback: () => void, delay: number | null) => {
    const savedCallback = useRef<() => void>();

    // Remember the latest callback if it changes.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval and call the callback immediately.
    useEffect(() => {
        if (delay === null) {
            return;
        }

        // Call the callback immediately.
        savedCallback.current?.();

        function tick() {
            savedCallback.current?.();
        }

        const id = setInterval(tick, delay);
        return () => clearInterval(id);
    }, [delay]);
};

export default StreamingText;
