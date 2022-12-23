<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">Student Invoice
            </caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in desserts" :key="index">
                    <td> {{ item.uid ?? "N/A" }}</td>
                    <td> {{ item.reference_no ?? "N/A" }}</td>
                    <td> {{ item.student_id ?? "N/A" }}</td>
                    <td> {{ item.full_name ?? "N/A" }}</td>
                    <td> {{ item.payer_name ?? "N/A" }}</td>
                    <td> {{ item.invoice_date ?? "N/A" }}</td>
                    <td> {{ item.total_price ?? "N/A" }}</td>
                    <td> <span class="badge bg-label-warning me-1">{{ item.status ?? "N/A" }} </span></td>
                    <td> {{ item.email_customer_on ?? "N/A" }}</td>
                    <td class="" style=""><div class="d-flex align-items-center">
                        <router-link :to="`/student-invoices/invoice/edit/${item.slug}/${item.uid}`" class="text-body"><i class="ti ti-edit ti-sm me-2 text-primary"></i></router-link > |
                        <a  role="button" @click="deleteItem(item)" class="text-body delete-record"><i class="ti ti-trash ti-sm mx-2 text-danger"></i></a>
                        </div>

                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: "DataTableComponent",
    props: ["headers", "invoiceList", "desserts"],
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
