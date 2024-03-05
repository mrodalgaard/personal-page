import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import packageJson from './package.json';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  define: {
    'import.meta.env.APP_NAME': JSON.stringify(packageJson.name),
    'import.meta.env.APP_VERSION': JSON.stringify(packageJson.version),
    'import.meta.env.APP_WEBSITE_NAME': JSON.stringify(packageJson.author.name),
    'import.meta.env.APP_DESCRIPTION': JSON.stringify(packageJson.description),
    'import.meta.env.APP_HOMEPAGE': JSON.stringify(packageJson.homepage),
  },
});
