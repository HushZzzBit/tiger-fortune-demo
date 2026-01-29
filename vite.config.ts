import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import vitePrerender from "vite-plugin-prerender";

const routes = [
  "/",
  "/como-jogar",
  "/demo",
  "/estrategias",
  "/politica-privacidade",
  "/termos-uso",
  "/contato",
  "/jogo-responsavel",
  "/go",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode === 'production' && vitePrerender({
      routes,
      staticDir: path.resolve(__dirname, "dist"),
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
