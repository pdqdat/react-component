import React from "react";

import type { Folder } from "@/types";

import { MdChevronRight } from "react-icons/md";
import { FaFolder, FaFileAlt } from "react-icons/fa";

import { AnimatePresence, motion } from "framer-motion";

const RecursiveFolder: React.FC<{ folder: Folder }> = ({ folder }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <li className="my-1.5">
            <span className="flex items-center gap-1.5">
                {folder.folders && folder.folders.length > 0 && (
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <motion.span
                            animate={{ rotate: isOpen ? 90 : 0 }}
                            transition={{
                                type: "spring",
                                bounce: 0,
                                duration: 0.5,
                            }}
                            className="flex"
                        >
                            <MdChevronRight className="size-4 text-gray-400 dark:text-gray-300" />
                        </motion.span>
                    </button>
                )}

                {folder.folders ? (
                    <FaFolder
                        className={`size-6 text-primary ${folder.folders.length === 0 ? "ml-[22px]" : ""}`}
                    />
                ) : (
                    <FaFileAlt className="ml-[22px] size-6 text-gray-400 dark:text-gray-300" />
                )}

                <span className="font-semibold duration-200 ease-in-out hover:text-primary">
                    {folder.name}
                </span>
            </span>

            <AnimatePresence>
                {isOpen && folder.folders && (
                    <motion.ul
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{
                            type: "spring",
                            bounce: 0,
                            duration: 0.5,
                        }}
                        className="flex flex-col justify-end overflow-hidden pl-6"
                    >
                        {folder.folders.map((folder, idx) => (
                            <RecursiveFolder
                                folder={folder}
                                key={`${folder.name}-${idx}`}
                            />
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </li>
    );
};

export default RecursiveFolder;
