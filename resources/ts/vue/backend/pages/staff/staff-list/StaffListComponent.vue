<template>
    <breadcrumb active_name="Staff"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Staff List</h5>
        </div>
        <div>
            <router-link style="float:right" class="btn btn-primary" to="/staff/staff-list/create"> Add Staff</router-link>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by name" :apiurl="'/staff?page=' + this.page_num"
                        v-on:query="isQuery($event)" v-on:loading="loadingStart($event)" v-on:reload="getStaffList()"
                        v-on:filterData="filterData($event)">
                    </search-box>
                </div>

            </div>
        </div>
        <div class="card-datatable table-responsive">
            <DataTable :headers="headers" :desserts="desserts" :staffList="staffList" v-on:deleteItem="deleteItem($event)" />
        </div>
    </div>
</template>
<script>
import DataTable from "./DataTable";
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import SearchBox from "../../../components/SearchBoxComponent.vue";
export default {
    name: "StaffListComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: 'Full Name', align: 'start', sortable: false, value: 'name' },
            { text: 'Email', value: 'Email' },
            { text: 'Phone No', value: 'Phone No' },
            { text: 'Designation', value: 'Designation' },
            { text: 'Gender', value: 'Gender' },
            { text: 'Status', value: 'Status' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        desserts: [
            {
                "uid": "1",
                "full_name": "Nur Suziani Bt Mohd Yusoff",
                "email": "stsuzi88@gmail.com",
                "phone_no": '012-5774266',
                "designation": "Accounts/hr",
                "gender": "Female",
                "status": "Active",
                "slug": "Nur",
            },
            {
                "uid": "2",
                "full_name": "Mohammad Syamil",
                "email": "stsuzi88@gmail.com",
                "phone_no": '012-5774266',
                "designation": "Accounts/hr",
                "gender": "Female",
                "status": "Active",
                "slug": "Mohammad",
            },
            {
                "uid": "3",
                "full_name": "Hafiz Razali",
                "email": "stsuzi88@gmail.com",
                "phone_no": '012-5774266',
                "designation": "Accounts/hr",
                "gender": "Female",
                "status": "Active",
                "slug": "Hafiz",
            },
        ],
        page_num: 1,
        loading: false,
        query: "",
        staffList: [],
    }),
    methods: {
        getStaffList(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/staff?page=' + page + '&query=' + this.query).then((res) => {
                this.staffList = res.data.staffs;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.staffList = data.staffs;
        },
        loadingStart(value) {
            this.loading = value;
        },
        deleteItem(item) {
            axios.delete(`/staff/${item.id}`).then((res) => {
                this.$root.alertNotify(res.status, "Destroyed Successfuly", "info", res.data);
                this.getStaffList();
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
    },
    mounted() {
        this.getStaffList();
    }
}
</script>
