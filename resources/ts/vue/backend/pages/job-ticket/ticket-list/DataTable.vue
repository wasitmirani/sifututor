<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">Ticket List
            </caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in tickets?.data" :key="index">
                    <td> {{ item.id ?? "N/A" }}</td>
                    <td> {{ item.slug ?? "N/A" }}</td>
                    <td> <span class="badge bg-dark bg-glow me-1"  v-for="std in mapStudentsFullName(item.students)">{{std}}</span> </td>
                    <td>  <span class="badge bg-label-primary me-1">{{ item.status ?? "N/A" }}</span></td>
                    <td> <span class="badge bg-label-danger me-1">{{ item.application_status ?? "N/A" }} </span> </td>
                    <td> {{ $filters.DateTimeFormat(item.created_at) ?? "N/A"}}</td>
                    <td class="" style=""><div class="d-flex align-items-center">
                        <router-link :to="`/job-ticket/ticket-list/edit/${item.slug}/${item.uid}`" class="text-body"><i class="ti ti-edit ti-sm me-2 text-primary"></i></router-link > |
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
    props: ["headers", "tickets"],
    data: () => ({
    }),
    methods: {
        mapStudentsFullName(items){
            return items.map(item => item.fullname);
        },
        deleteItem(item) {
            return this.$emit("deleteItem", item);
        },
    },
    mounted() {
    }
}
</script>
