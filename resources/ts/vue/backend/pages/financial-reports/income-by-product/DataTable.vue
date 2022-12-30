<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">Income By Product</caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in desserts" :key="index">
                    <td> {{ item.uid ?? "N/A" }}</td>
                    <td> {{ item.product ?? "N/A" }}</td>
                    <td> {{ item.cost_of_good_sale ?? "N/A" }}</td>
                    <td> {{ item.income ?? "N/A" }}</td>
                    <td> {{ item.gross_profit ?? "N/A" }}</td>
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
