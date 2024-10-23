import { useEffect, useState } from "react";

import { animate, useMotionValue } from "framer-motion";

// Split the text into words or characters:
// - Change to "" to split into characters
// - Change to " " to split into words
const delimiter = " ";

const useAnimatedText = (text: string) => {
    const animatedCursor = useMotionValue(0);
    const [cursor, setCursor] = useState(0);
    const [prevText, setPrevText] = useState(text);
    const [isSameText, setIsSameText] = useState(true);

    // Check if the text has changed
    if (prevText !== text) {
        setPrevText(text);
        setIsSameText(text.startsWith(prevText));

        if (!text.startsWith(prevText)) {
            setCursor(0);
        }
    }

    useEffect(() => {
        if (!isSameText) {
            animatedCursor.jump(0);
        }

        const controls = animate(animatedCursor, text.split(" ").length, {
            duration: 3,
            ease: "linear",
            onUpdate(latest) {
                setCursor(Math.floor(latest));
            },
        });

        return () => controls.stop();
    }, [text, isSameText, animatedCursor]);

    return text.split(delimiter).slice(0, cursor).join(delimiter);
};

export default useAnimatedText;
