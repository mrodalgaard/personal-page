import registerCodeCoverageTasks from "@cypress/code-coverage/task";
import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "junit",
  reporterOptions: {
    mochaFile: "coverage/test-results.xml",
  },

  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents: (on, config) => {
      registerCodeCoverageTasks(on, config);
      return config;
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    setupNodeEvents: (on, config) => {
      registerCodeCoverageTasks(on, config);
      return config;
    },
  },
});
