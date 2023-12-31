import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
      include: [/\.jsx$/, /\.tsx$/],
    })
  ]
})
