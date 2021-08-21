<template>
    <app-layout title="Table">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Table
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <the-table />
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
    import AppLayout from '@/Layouts/AppLayout.vue'
    import TheTable from '@/Components/TheTable.vue'

    export default {
        components: {
            AppLayout,
            TheTable,
        },
    }
</script>
