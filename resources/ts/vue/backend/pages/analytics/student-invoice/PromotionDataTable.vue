<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">Promotion Invoices</caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in desserts" :key="index">
                    <td> {{ item.month_year ?? "N/A" }}</td>
                    <td> {{ item.total_invoice ?? "N/A" }}</td>
                    <td> {{ item.total_promo_invoice ?? "N/A" }}</td>
                    <td> {{ item.total_paid_promo_invoice ?? "N/A" }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: "PromotionDataTableComponent",
    props: ["headers", "desserts"],
    data: () => ({
    }),
    methods: {
    },
    mounted() {
    }
}
</script>
