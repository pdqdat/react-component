import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@comp": path.resolve(__dirname, "src/components"),
            "@ui": path.resolve(__dirname, "src/components/ui"),
            "@page": path.resolve(__dirname, "src/pages/"),
        },
    },
    base: "/react-component/",
});
