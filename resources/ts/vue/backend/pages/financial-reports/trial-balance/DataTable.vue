<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">Trail Balance</caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in desserts" :key="index">
                    <td> {{ item.uid ?? "N/A" }}</td>
                    <td> {{ item.account_name ?? "N/A" }}</td>
                    <td> {{ item.account_type ?? "N/A" }}</td>
                    <td> {{ item.opening_balance ?? "N/A" }}</td>
                    <td> {{ item.debit ?? "N/A" }}</td>
                    <td> {{ item.credit ?? "N/A" }}</td>
                    <td> {{ item.balance ?? "N/A" }}</td>
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
