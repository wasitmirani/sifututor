<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">Class Schedule
            </caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in desserts" :key="index">
                    <td> {{ item.uid ?? "N/A" }}</td>
                    <td> <span class="text-truncate d-flex align-items-center">
                            <span class="badge badge-center rounded-pill bg-label-success me-3 w-px-30 h-px-30">
                                <i class="ti ti-user ti-sm"></i></span>{{ item.std_id ?? "N/A" }}
                        </span>
                    </td>
                    <td> {{ item.full_name ?? "N/A" }}</td>
                    <td> {{ item.subject ?? "N/A" }} </td>
                    <td> {{ item.subscribe_duration ?? "N/A" }}</td>
                    <td> {{ item.assigned_duration ?? "N/A" }}</td>
                    <td> <span class="badge bg-label-warning  me-1"> {{ item.status ?? "N/A" }} </span></td>
                    <td class="" style="">
                        <div class="d-flex align-items-center">
                            <router-link :to="`/class-schedules/schedule-history/${item.slug}/${item.uid}`"
                                class="text-body">
                                <i class="ti ti-eye ti-sm me-2 text-primary"></i>
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
    },
    mounted() {
    }
}
</script>
