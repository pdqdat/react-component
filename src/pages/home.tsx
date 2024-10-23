import { IoPencilOutline } from "react-icons/io5";

import reactLogo from "@/assets/react.svg";

import PageTitle from "@comp/page-title";

function Home() {
    return (
        <div className="container min-h-96 pt-24 text-center">
            <PageTitle title="Useful React Components" />

            <h1 className="h1">Useful React Components</h1>

            <div className="mt-2 flex items-center justify-center space-x-4">
                <IoPencilOutline className="size-6" />

                <p className="h6">
                    Collected by{" "}
                    <a
                        href="https://github.com/pdqdat"
                        target="_blank"
                        className="rounded-md text-primary duration-300 ease-in-out hover:bg-primary hover:text-background"
                    >
                        Dat Phan
                    </a>
                </p>

                <IoPencilOutline className="size-6" />
            </div>

            <img
                src={reactLogo}
                alt="React Logo"
                className="mx-auto mt-8 w-32 animate-spin-slow"
            />

            <p className="h6 mt-8">
                Components are located in{" "}
                <code className="font-code text-primary">src/components</code>{" "}
                directory
            </p>
        </div>
    );
}

export default Home;
