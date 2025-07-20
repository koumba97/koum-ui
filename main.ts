// .storybook/main.ts
const config = {
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
    core: {
        builder: "@storybook/builder-vite",
    },
    addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};

export default config;
