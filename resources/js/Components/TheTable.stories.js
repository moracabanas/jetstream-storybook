import TheTable from './TheTable.vue'

export default {
    component: TheTable,
    excludeStories: /.*Data$/,
    title: 'TheTable',
    argTypes: {},
}

export const actionsData = {}

const Template = (args) => ({
    components: { TheTable },
    setup() {
        return { args, actionsData }
    },
    template: '<the-table v-bind="args" />',
})

export const Default = Template.bind({})
