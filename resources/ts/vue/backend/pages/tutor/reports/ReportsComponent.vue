<template>
    <breadcrumb active_name="Reports"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Tutor Reports</h5>
        </div>
        <div>
            <router-link style="float:right" class="btn btn-primary" to="/tutor/tutor-reports/create"> Add Report</router-link>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by tutor id"
                        :apiurl="'/reports?page=' + this.page_num" v-on:query="isQuery($event)"
                        v-on:loading="loadingStart($event)" v-on:reload="getReport()"
                        v-on:filterData="filterData($event)">
                    </search-box>
                </div>

            </div>
        </div>
        <div class="card-datatable table-responsive">
            <DataTable :headers="headers" :desserts="desserts" v-on:deleteItem="deleteItem($event)" />
        </div>
    </div>
</template>
<script>
import DataTable from "./DataTable";
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import SearchBox from "../../../components/SearchBoxComponent.vue";
export default {
    name: "ReportsComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: '#', align: 'start', sortable: false, value: 'name' },
            { text: 'Tutor Id', value: 'Tutor Id' },
            { text: 'Tutor', value: 'Tutor' },
            { text: 'Student Id', value: 'Student Id' },
            { text: 'Student', value: 'Student' },
            { text: 'Report Type', value: 'Report Type' },
            { text: 'Submitted On', value: 'Submitted On' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        desserts: [
            {
                "uid": "1",
                "tutor_id": "T200208",
                "tutor_name": "Mohd Zulhafiz Zakaria",
                "student_id": "S224762",
                "student": "Muhammad Syahmie",
                "report_type": "Progressive/Attendance Report",
                "submitted_on": "21/12/2022 13:00:29",
                "slug": "Mohd",
            },
            {
                "uid": "2",
                "tutor_id": "T200208",
                "tutor_name": "Mohd Zulhafiz Zakaria",
                "student_id": "S224762",
                "student": "Muhammad Syahmie",
                "report_type": "Progressive/Attendance Report",
                "submitted_on": "21/12/2022 13:00:29",
                "slug": "Bushra",
            },
            {
                "uid": "3",
                "tutor_id": "T200208",
                "tutor_name": "Mohd Zulhafiz Zakaria",
                "student_id": "S224762",
                "student": "Muhammad Syahmie",
                "report_type": "Progressive/Attendance Report",
                "submitted_on": "21/12/2022 13:00:29",
                "slug": "Nur",
            },
        ],
        page_num: 1,
        loading: false,
        query: "",
        reports: {},
    }),
    methods: {
        getReport(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/reports?page=' + page + '&query=' + this.query).then((res) => {
                this.reports = res.data.reports;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.reports = data.reports;
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
            axios.delete(`/reports/${item.id}`).then((res) => {
                this.$root.alertNotify(res.status, "Destroyed Successfuly", "info", res.data);
                this.getReport();
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
            //     }
            // });
        },
    },
    mounted() {
        // this.getReport();
    }
}
</script>
 