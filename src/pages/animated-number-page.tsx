import { useState } from "react";

import PageTemplate from "@comp/page-template";
import AnimatedNumber from "@comp/animated-number";
import Button from "@ui/button";

const reference = [
    {
        name: "Tailwind CSS",
        url: "https://tailwindcss.com/docs",
    },
    {
        name: "Framer Motion",
        url: "https://www.framer.com/motion/",
    },
];

const AnimatedNumberPage = () => {
    let [value, setValue] = useState(1000);

    return (
        <PageTemplate
            title="Animated number"
            location="src/components/animated-number.tsx"
            reference={reference}
        >
            <div className="flex items-center space-x-6 md:space-x-12">
                <Button
                    variant="outline"
                    className="border-none text-lg text-gray-400 md:text-xl"
                    onClick={() => setValue(value - 100)}
                >
                    -100
                </Button>

                <AnimatedNumber
                    value={value}
                    className="h2 w-32 text-center font-semibold"
                />

                <Button
                    variant="outline"
                    className="border-none text-lg text-gray-400 md:text-xl"
                    onClick={() => setValue(value + 100)}
                >
                    +100
                </Button>
            </div>
        </PageTemplate>
    );
};

export default AnimatedNumberPage;
