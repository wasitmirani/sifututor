<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">Daily Ticket Application</caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in desserts" :key="index">
                    <td> {{ item.total_created ?? "N/A" }}</td>
                    <td> {{ item.total_applied ?? "N/A" }}</td>
                    <td> {{ item.total_applied_same_day ?? "N/A" }}</td>
                    <td> {{ item.subject ?? "N/A" }} </td>
                    <td> {{ item.state ?? "N/A" }} </td>
                    <td> {{ item.city ?? "N/A" }} </td>
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
        deleteItem(item) {
            return this.$emit("deleteItem", item);
        },
    },
    mounted() {
    }
}
</script>
