import { defineConfig } from "vite";

import {
  vitePlugin as react,
  cloudflareDevProxyVitePlugin,
} from "@react-router/dev";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [cloudflareDevProxyVitePlugin(), react(), tsconfigPaths()],
});
