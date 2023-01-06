<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">My Invoice</caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in desserts" :key="index">
                    <td> {{ item.uid ?? "N/A" }}</td>
                    <td> {{ item.refference_no ?? "N/A" }}</td>
                    <td> {{ item.invoice_date ?? "N/A" }}</td>
                    <td> {{ item.payment_due_date ?? "N/A" }}</td>
                    <td> {{ item.total_price ?? "N/A" }}</td>
                    <td> <span class="badge bg-label-primary me-1">{{ item.status ?? "N/A" }}</span></td>
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
