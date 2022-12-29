<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">Products List</caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in products?.data" :key="index">
                    <td> {{ item.uid ?? "N/A" }}</td>
                    <td> {{ item.product_name ?? "N/A" }}</td>
                    <td> {{ item.product_code ?? "N/A" }}</td>
                    <td> {{ item.category ?? "N/A" }} </td>
                    <td> {{ item.purchase_cost ?? "N/A" }}</td>
                    <td> {{  item.sell_price ?? "N/A"}}</td>
                    <td class="" style=""><div class="d-flex align-items-center">
                        <router-link :to="`/products/product-list/edit/${item.slug}/${item.uid}`" class="text-body"><i class="ti ti-edit ti-sm me-2 text-primary"></i></router-link > |
                        <a role="button" @click="deleteItem(item)" class="text-body delete-record"><i class="ti ti-trash ti-sm mx-2 text-danger"></i></a>
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
    props: ["headers", "products"],
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
