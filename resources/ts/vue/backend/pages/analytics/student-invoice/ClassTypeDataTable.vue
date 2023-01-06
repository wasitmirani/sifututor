<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">Class Type Invoices</caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers2" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in desserts2" :key="index">
                    <td> {{ item.month_year ?? "N/A" }}</td>
                    <td> {{ item.total_invoice ?? "N/A" }}</td>
                    <td> {{ item.total_physical_invoice ?? "N/A" }}</td>
                    <td> {{ item.total_online_invoice ?? "N/A" }}</td>
                    <td> {{ item.total_mixed_invoice ?? "N/A" }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: "ClassTypeDataTableComponent",
    props: ["headers2", "desserts2"],
    data: () => ({
    }),
    methods: {
    },
    mounted() {
    }
}
</script>
