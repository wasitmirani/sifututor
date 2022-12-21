<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">Student Invoice Payments</caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in desserts" :key="index">
                    <td>{{ item.uid ?? "N/A" }}</td>
                    <td>{{ item.recipt_no ?? "N/A" }}</td>
                    <td>{{ item.payment_date ?? "N/A" }}</td>
                    <td>{{ item.invoice_reference ?? "N/A" }}</td>
                    <td>{{ item.amount ?? "N/A" }}</td>
                    <td>
                        <div class="d-flex align-items-center">
                            <router-link :to="`/student-invoices/payment/payment-slip/${item.slug}/${item.uid}`" class="text-body">
                                <i class="ti ti-eye ti-sm mx-2 text-primary"></i>
                            </router-link>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts">
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
