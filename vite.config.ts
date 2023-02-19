import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
});

/* 
absolute react atau menghilakangkan titik pada saat import, Caranya:

instal dulu:
npm i -D vite-tsconfig-paths

ketika sudah install buka vite config.ts
lalu import 
import tsconfigPaths from "vite-tsconfig-paths";

setelah itu dipluggin
tsconfigPaths()

Lalu buka file tsconfig.json tambahkan:

"baseUrl": ".",
    "paths": {
      "*": ["src/*"],
    }


    lalu tulis

    "include": ["src", "vite.config.ts"], (hanya "vite.config.ts" saja)

    terakhir save
*/
