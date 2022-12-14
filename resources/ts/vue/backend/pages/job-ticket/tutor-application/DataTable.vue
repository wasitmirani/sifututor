<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">Tutor List
            </caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in desserts" :key="index">
                    <td> {{ item.uid ?? "N/A" }}</td>
                    <td> {{ item.tutor_id ?? "N/A" }}</td>
                    <td> {{ item.full_name ?? "N/A" }}</td>
                    <td>{{item.phone_no ?? "N/A"}}</td>
                    <td>{{item.subject_applied ?? "N/A"}}</td>
                    <td>{{item.application ?? "N/A"}}</td>
                    <td>{{item.state_city ?? "N/A"}}</td>
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
