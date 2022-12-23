<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">In App Student Reports</caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in desserts" :key="index">
                    <td>{{ item.uid ?? "N/A" }}</td>
                    <td>{{ item.tutor_id ?? "N/A" }}</td>
                    <td>{{ item.tutor_name ?? "N/A" }}</td>
                    <td>{{ item.student_id ?? "N/A" }}</td>
                    <td>{{ item.student ?? "N/A" }}</td>
                    <td>{{ item.report_type ?? "N/A" }} </td>
                    <td>{{ item.submitted_on ?? "N/A" }}</td>
                    <td>
                        <div class="d-flex align-items-center">
                            <router-link :to="`/tutor/tutor-reports/edit/${item.slug}/${item.uid}`"  class="text-body"><i
                                    class="ti ti-edit ti-sm mx-2 text-primary"></i></router-link>  |
                                    <a  role="button" @click="deleteItem(item)" class="text-body delete-record"><i class="ti ti-trash ti-sm mx-2 text-danger"></i></a>
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
