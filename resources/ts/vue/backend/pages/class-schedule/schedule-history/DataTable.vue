<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">Schedule History
            </caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in desserts" :key="index">
                    <td> {{ item.uid ?? "N/A" }}</td>
                    <td> {{ item.subject ?? "N/A" }} </td>
                    <td> {{ item.date ?? "N/A" }}</td>
                    <td> {{ item.start_time ?? "N/A" }} </td>
                    <td> {{ item.end_time ?? "N/A" }}</td>
                    <td> {{ item.total_duration ?? "N/A" }}</td>
                    <td> {{ item.tutor ?? "N/A" }}</td>
                    <td> <span class="badge bg-label-warning  me-1"> {{ item.status ?? "N/A" }} </span></td>
                    <td class="" style="">
                        <div class="d-flex align-items-center">
                            <router-link :to="`/class-schedules/schedule-history/edit/${item.slug}/${item.uid}`" class="text-body"><i class="ti ti-eye ti-sm me-2 text-primary"></i></router-link> |
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
