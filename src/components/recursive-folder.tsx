import React from "react";

import type { Folder } from "@/types";

import { MdChevronRight } from "react-icons/md";
import { FaFolder, FaFileAlt } from "react-icons/fa";

const RecursiveFolder: React.FC<{ folder: Folder }> = ({ folder }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <li className="my-1.5">
            <span className="flex items-center gap-1.5">
                {folder.folders && folder.folders.length > 0 && (
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <MdChevronRight
                            className={`size-4 text-gray-400 dark:text-gray-300 ${isOpen ? "rotate-90" : ""}`}
                        />
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

            {isOpen && folder.folders && (
                <ul className="pl-6">
                    {folder.folders.map((folder, idx) => (
                        <RecursiveFolder
                            folder={folder}
                            key={`${folder.name}-${idx}`}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default RecursiveFolder;
