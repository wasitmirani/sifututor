<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">List of Projects</caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in desserts" :key="index">
                    <td> {{ item.id ?? "N/A" }}</td>
                    <td> {{ item.customer_id ?? "N/A" }}</td>
                    <td> {{ item.fullname ?? "N/A" }}</td>
                    <td> {{ item.phone_number ?? "N/A" }}</td>
                    <td> {{ item.email ?? "N/A" }}</td>
                    <td> <span class="badge bg-label-primary me-1">{{ item.status ?? "N/A" }}</span></td>
                    <td>
                        <router-link to="" class="btn btn-icon btn-primary waves-effect waves-light btn-sm me-2">
                            <i class="fa-solid fa-eye"> </i>
                        </router-link>
                        <router-link to="/students/customer-list/edit" class="btn btn-icon btn-success waves-effect waves-light btn-sm me-2">
                            <i class="fa-solid fa-pen-to-square"> </i>
                        </router-link>
                        <a href="" class="btn btn-icon btn-danger waves-effect waves-light btn-sm">
                            <i class="fa-solid fa-trash"> </i>
                        </a>
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
    mounted() {
    }
}
</script>