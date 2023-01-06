
a<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">Total Class By Weekday/Weekend </caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in desserts" :key="index">
                    <td> Weekday </td>
                    <td> {{ item.first ?? "N/A" }}</td>
                    <td> {{ item.second ?? "N/A" }}</td>
                    <td> {{ item.third ?? "N/A" }}</td>
                    <td> {{ item.four ?? "N/A" }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: "DataTableComponent",
    props: ["headers", "desserts"],
    data: () => ({
    }),
    methods: {
    },
    mounted() {
    }
}
</script>
