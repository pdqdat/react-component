import type { Folder } from "@/types";

import PageTemplate from "@page/page-template";
import RecursiveFolder from "@comp/recursive-folder";

const folders: Folder[] = [
    {
        name: "Home",
        folders: [
            {
                name: "Movies",
                folders: [
                    {
                        name: "Series",
                        folders: [
                            {
                                name: "Breaking-Bad.mp4",
                            },
                            {
                                name: "Better-Call-Saul.mp4",
                            },
                            {
                                name: "Hospital-Playlist.mp4",
                            },
                        ],
                    },
                    {
                        name: "Crime",
                        folders: [
                            {
                                name: "The-Silence-of-the-Lambs.mp4",
                            },
                            {
                                name: "Se7en.mp4",
                            },
                            {
                                name: "The-Bone-Collector.mp4",
                            },
                            {
                                name: "Knives-Out.mp4",
                            },
                        ],
                    },
                    {
                        name: "2000's",
                        folders: [],
                    },
                    {
                        name: "Comedy",
                        folders: [
                            {
                                name: "Hitch.mp4",
                            },
                            {
                                name: "Grown-Ups.mp4",
                            },
                            {
                                name: "Click.mp4",
                            },
                            {
                                name: "3-Idiots.mp4",
                            },
                        ],
                    },
                ],
            },
            {
                name: "Music",
                folders: [
                    {
                        name: "Hip Hop",
                        folders: [],
                    },
                    {
                        name: "Pop",
                        folders: [
                            {
                                name: "Birds.mp3",
                            },
                        ],
                    },
                    {
                        name: "Alternative Rock",
                        folders: [
                            {
                                name: "Numb.mp3",
                            },
                            {
                                name: "Wrecked.mp3",
                            },
                            {
                                name: "Whatever-It-Takes.mp3",
                            },
                        ],
                    },
                    {
                        name: "80's",
                        folders: [
                            {
                                name: "Cheri-Cheri-Lady.mp3",
                            },
                            {
                                name: "You're-My-Heart-You're-My-Soul.mp3",
                            },
                            {
                                name: "Brother-Louie.mp3",
                            },
                            {
                                name: "Touch-By-Touch.mp3",
                            },
                        ],
                    },
                ],
            },
            {
                name: "Pictures",
                folders: [
                    {
                        name: "Vacation",
                        folders: [
                            {
                                name: "New York",
                                folders: [],
                            },
                            {
                                name: "London",
                                folders: [],
                            },
                        ],
                    },
                    {
                        name: "Family",
                        folders: [],
                    },
                ],
            },
            {
                name: "Documents",
                folders: [],
            },
            {
                name: "README.md",
            },
            {
                name: "password.txt",
            },
        ],
    },
];

const reference = [
    {
        name: "Sam Selikoff tutorial",
        url: "https://youtu.be/6UU2Ey4KZr8?si=7xN6mgjO9Nu39G-H",
    },
    {
        name: "Tailwind CSS",
        url: "https://tailwindcss.com/docs",
    },
];

const RecursiveFolderPage = () => {
    return (
        <PageTemplate
            title="Recursive folder"
            location="src/components/recursive-folder.tsx"
            reference={reference}
        >
            <ul>
                {folders.map((folder, idx) => (
                    <RecursiveFolder
                        folder={folder}
                        key={`${folder.name}-${idx}`}
                    />
                ))}
            </ul>
        </PageTemplate>
    );
};

export default RecursiveFolderPage;
