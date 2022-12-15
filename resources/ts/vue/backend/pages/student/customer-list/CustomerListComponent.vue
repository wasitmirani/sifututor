<template>
    <breadcrumb active_name="Customer"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Customer List</h5>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
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
            <DataTable :headers="headers" :customertList="customertList" v-on:deleteItem="deleteItem($event)" />
        </div>
    </div>

</template>
<script>
import DataTable from "./DataTable";
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import SearchBox from "../../../components/SearchBoxComponent.vue";
export default {
    name: "CustomerListComponent",
    components: { DataTable, breadcrumb, SearchBox },
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
        page_num: 1,
        loading: false,
        query: "",
    }),
    methods: {
        getCustomers(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/customer?page=' + page + '&query=' + this.query).then((res) => {
                this.customertList = res.data.customers;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.customertList = data.customers;
        },
        loadingStart(value) {
            this.loading = value;
        },
        deleteItem(item) {
            // Swal.fire({
            //     title: "Are you sure?",
            //     text: "You won't be able to revert this!",
            //     icon: "warning",
            //     showCancelButton: true,
            //     confirmButtonColor: "#3085d6",
            //     cancelButtonColor: "#d33",
            //     confirmButtonText: "Yes, delete it!",
            // }).then((result) => {
            //     if (result.isConfirmed) {
                    // axios.delete(`/subject/${item.id}`).then((res) => {
                    //     this.$root.alertNotify(res.status, "Destroyed Successfuly", "info", res.data);
                    //     this.getSubjects();
                    // }).catch((err) => {
                    //     this.$root.alertNotify(err.response.status, null, "error", err.response.data);
                    // });
            //     }
            // });
        },
    },
    mounted() {
        this.getCustomers();
    }
}
</script>
