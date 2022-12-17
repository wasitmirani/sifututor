<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">Tutor Payment List</caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in desserts" :key="index">
                    <td> {{ item.uid ?? "N/A" }}</td>
                    <td> {{ item.tutor_id ?? "N/A" }}</td>
                    <td> {{ item.Fullname ?? "N/A" }}</td>
                    <td> {{ item.date ?? "N/A" }}</td>
                    <td> {{ item.total_ammount ?? "N/A" }} </td>
                    <td> {{ item.payment_Date ?? "N/A" }}</td>
                    <td>
                        <div class="d-flex align-items-center">
                        <router-link :to="`/tutor/tutor-payment/view-payment-slip/${item.slug}/${item.uid}`" class="text-body">View Slip</router-link > 
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
    props: ["headers", "desserts"],
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
