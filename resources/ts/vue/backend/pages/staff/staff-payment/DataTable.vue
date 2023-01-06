<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">Staff Payment List</caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in staff_payments?.data" :key="index">
                    <td> {{ item.slug ?? "N/A" }}</td>
                    <td> {{ item.staff?.full_name ?? "N/A" }}</td>
                    <td> {{ item.salary_month+'-'+item.salary_year ?? "N/A" }}</td>
                    <td> {{ item.basic_salary ?? "N/A" }}</td>
                    <td> {{ item.total_ammount ?? "N/A" }} </td>
                    <td> {{ item.payment_Date ?? "N/A" }}</td>
                    <td>
                        <div class="d-flex align-items-center">
                        <router-link :to="`/staff/staff-payment/view-payment-slip/${item.slug}/${item.uid}`" class="text-body">View Slip</router-link >
                        <!-- <a role="button" @click="deleteItem(item)" class="text-body delete-record"><i class="ti ti-trash ti-sm mx-2 text-danger"></i></a> -->
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
    props: ["headers", "staff_payments"],
    data: () => ({
    }),
    methods: {
        // deleteItem(item) {
        //     return this.$emit("deleteItem", item);
        // },
    },
    mounted() {
    }
}
</script>
