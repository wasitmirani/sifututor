<template>
     <breadcrumb active_name="Customer"></breadcrumb>
    <div class="card">
        <div class="card-header border-bottom">
            <h5 class="card-title mb-3">Customer List</h5>
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by name" :apiurl="'/customer?page=' + this.page_num"
                        v-on:query="isQuery($event)" v-on:loading="loadingStart($event)" v-on:reload="getStudents()"
                        v-on:filterData="filterData($event)">
                    </search-box>
                </div>

            </div>
        </div>
        <div class="card-datatable table-responsive">
            <DataTable :headers="headers" :desserts="desserts" />
        </div>
    </div>

</template>
<script>
import DataTable from "./DataTable";
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
export default {
    name: "CustomerListComponent",
    components: { DataTable, breadcrumb },
    data: () => ({
        headers: [
            { text: '#', align: 'start', sortable: false, value: 'name' },
            { text: 'CustomerId', value: 'CustomerId' },
            { text: 'Fullname', value: 'Fullname' },
            { text: 'PhoneNumber', value: 'PhoneNumber' },
            { text: 'Email', value: 'Email' },
            { text: 'Status', value: 'Status' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        desserts: [
            {
                "id": "1",
                "customer_id": "C220000",
                "fullname": "Nurnisrina",
                "phone_number": '601124166237',
                "email": "nurnisrina040602@gmail.com",
                "status": "Active",
            },
            {
                "id": "2",
                "customer_id": "C220000",
                "fullname": "Noor Hasima",
                "phone_number": '60178960258',
                "email": "nhahsheema73@gmail.com",
                "status": "Active",
            }
        ],
    }),
    mounted() {
    }
}
</script>
