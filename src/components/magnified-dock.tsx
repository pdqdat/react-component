import React from "react";

import {
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";

const MagnifiedDock = () => {
    // Create a motion value to store the mouse X position,
    // and set it to Infinity to make sure the initial distance falls outside the range of the `distance` used in useTransform hook below, which is [-200, 200]
    const mouseX = useMotionValue(Infinity);

    return (
        <div
            // Update the `mouseX` value when the mouse moves over the container
            onMouseMove={(e) => mouseX.set(e.pageX)}
            // Set the `mouseX` value to the initial value, which is Infinity, when the mouse leaves the container
            onMouseLeave={() => mouseX.set(Infinity)}
            // Align the items in the end to make them grow upwards, remember to add some bottom padding,
            // eg: `items-end pb-3`
            className="flex h-16 items-center gap-4 rounded-2xl bg-background px-4"
        >
            {[...Array(8).keys()].map((idx) => (
                <Icon key={idx} mouseX={mouseX} />
            ))}
        </div>
    );
};

const Icon = ({ mouseX }: { mouseX: MotionValue }) => {
    // Create a reference to a DOM element, initially set to null
    const ref = React.useRef<HTMLDivElement>(null);

    // Transform the `mouseX` value to calculate the `distance` from the center of the referenced element
    const distance = useTransform(mouseX, (val) => {
        // Get the bounding rectangle of the referenced element
        // If the reference is null, default to an object with x and width set to 0
        const bounds = ref.current?.getBoundingClientRect() ?? {
            x: 0,
            width: 0,
        };

        // Calculate the distance from the `mouseX` position to the center of the referenced element
        return val - bounds.x - bounds.width / 2;
    });

    // Transform the `distance` value to a `width` value:
    // - When the distance is -200, the width is 40
    // - When the distance is 0, the width is 80
    // - When the distance is 200, the width is 40
    const widthSync = useTransform(distance, [-200, 0, 200], [40, 80, 40]);

    // Create a spring animation for the `width` value
    const width = useSpring(widthSync, {
        damping: 15,
        mass: 0.5,
        stiffness: 200,
        // DEFAULT SPRING CONFIG:
        // - damping: 10,
        // - mass: 1,
        // - stiffness: 100,
    });

    return (
        <motion.div
            ref={ref}
            style={{ width }}
            className="aspect-square w-10 rounded-full bg-foreground"
        />
    );
};

export default MagnifiedDock;
