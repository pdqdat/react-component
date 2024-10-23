import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
    { id: "world", label: "World" },
    { id: "business", label: "Business" },
    { id: "technology", label: "Technology" },
    { id: "sports", label: "Sports" },
    { id: "science", label: "Science" },
];

const AnimatedTab = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="space-x-1">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative rounded-full px-3 py-1.5 font-medium outline-2 outline-primary-hover focus-visible:outline ${
                        activeTab === tab.id
                            ? "text-background dark:text-foreground"
                            : "hover:opacity-50"
                    }`}
                >
                    {activeTab === tab.id && (
                        <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 bg-primary"
                            transition={{ type: "spring", duration: 0.6 }}
                            style={{ borderRadius: 9999 }}
                        />
                    )}

                    <span className="relative z-10">{tab.label}</span>
                </button>
            ))}
        </div>
    );
};

export default AnimatedTab;
