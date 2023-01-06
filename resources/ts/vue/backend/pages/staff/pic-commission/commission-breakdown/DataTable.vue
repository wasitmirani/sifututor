<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">Commsion BreakDown</caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in desserts" :key="index">
                    <td> {{ item.invoice_no ?? "N/A" }}</td>
                    <td> {{ item.invoice_date ?? "N/A" }}</td>
                    <td> {{ item.payment_date ?? "N/A" }}</td>
                    <td> {{ item.customer ?? "N/A" }} </td>
                    <td> {{ item.total_invoice_Ammount ?? "N/A" }}</td>
                    <td> {{ item.total_commission ?? "N/A" }}</td>
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
