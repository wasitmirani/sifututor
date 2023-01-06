<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">Cash Flow</caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in desserts" :key="index">
                    <td> {{ item.uid ?? "N/A" }}</td>
                    <td> {{ item.transction_date ?? "N/A" }}</td>
                    <td> {{ item.desciption ?? "N/A" }}</td>
                    <td> {{ item.money_in ?? "N/A" }}</td>
                    <td> {{ item.money_out ?? "N/A" }}</td>
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
