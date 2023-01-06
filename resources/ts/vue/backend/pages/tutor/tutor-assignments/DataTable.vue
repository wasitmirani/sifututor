<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">Tutor Assigments List</caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in desserts" :key="index">
                    <td> {{ item.uid ?? "N/A" }}</td>
                    <td> {{ item.tutor_id ?? "N/A" }}</td>
                    <td> {{ item.fullname ?? "N/A" }}</td>
                    <td> {{ item.subject ?? "N/A" }}</td>
                    <td> {{ item.student ?? "N/A" }}</td>
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