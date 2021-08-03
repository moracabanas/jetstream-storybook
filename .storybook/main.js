module.exports = {
    stories: [
        '../resources/js/**/*.stories.mdx',
        '../resources/js/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    core: {
        builder: 'webpack5',
    },
}
