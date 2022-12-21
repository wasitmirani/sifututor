<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">Tutor Payment Journal</caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in desserts" :key="index">
                    <td>{{item.uid ?? "N/A" }}</td>
                    <td>{{item.tutor_id ?? "N/A" }}</td>
                    <td>{{item.tutor_name ?? "N/A" }}</td>
                    <td>{{item.month ?? "N/A" }}</td>
                    <td>{{item.year ?? "N/A" }}</td>
                    <td>{{item.total_duration ?? "N/A" }} </td>
                    <td>{{item.total_amount  ?? "N/A"}}</td>
                    <td>{{item.total_invoice_duration  ?? "N/A"}}</td>
                    <td>{{item.validation_type ?? "N/A"}}</td>
                    <td>{{item.completion_date ?? "N/A"}}</td>
                    <td> <span class="badge bg-label-primary me-1"> {{ item.payment_status ?? "N/A" }}</span> </td>
                    <td>
                        <div class="d-flex align-items-center">
                            <router-link :to="`/`" class="text-body"> <i class="ti ti-cash-banknote ti-sm me-2 text-success"></i></router-link > |
                        <router-link :to="`/`" class="text-body"><i class="ti ti-edit ti-sm mx-2 text-primary"></i></router-link > 
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
