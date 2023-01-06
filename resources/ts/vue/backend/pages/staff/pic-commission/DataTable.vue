<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">Pic Commission List
            </caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in desserts" :key="index">
                    <td> {{ item.uid ?? "N/A" }}</td>
                    <td> {{ item.staff ?? "N/A" }}</td>
                    <td> {{ item.month ?? "N/A" }}</td>
                    <td> {{ item.total_invoice ?? "N/A" }} </td>
                    <td> {{ item.total_invoice_Ammount ?? "N/A" }}</td>
                    <td> {{ item.total_commission ?? "N/A" }}</td>
                    <td>
                        <div class="d-flex align-items-center">
                            <router-link :to="`/staff/pic-commission/view-commission-breakdown/${item.slug}/${item.uid}`"
                                class="text-body"><i class="ti ti-eye ti-sm me-2 text-primary"></i>
                            </router-link>
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
        deleteItem(item) {
            return this.$emit("deleteItem", item);
        },
    },
    mounted() {
    }
}
</script>
