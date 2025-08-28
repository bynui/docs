import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs/snappy/",
  title: "Snappy documentation",
  description: "A manual for Snappy framework",
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "What is Snappy", link: "/what-is-snappy" },
          {
            text: "Requirement & installation",
            link: "/requirement-installation",
          },
        ],
      },
      {
        text: "Manual",
        items: [
          { text: "Configuration", link: "/configuration" },
          {
            text: "Controller",
            link: "/controller",
            items: [
              {
                text: "Semi-auto routing",
                link: "/controller-routing",
              },
              {
                text: "Formatting",
                link: "/controller-formatting",
              },
              {
                text: "Callback values",
                link: "/controller-callback-values",
              },
            ],
          },
          { text: "Model", link: "/model" },
          {
            text: "Middleware",
            link: "/middleware",
          },
          {
            text: "Misc",
            items: [
              {
                text: "Error handler",
                link: "/error-handler",
              },
              {
                text: "Log",
                link: "/log",
              },
            ],
          },
          // { text: "Helper", link: "/helper" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/bynui/snappy" },
      { icon: "linkedin", link: "https://linkedin.com/in/samodra" },
    ],
  },
});
