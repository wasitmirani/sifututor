<template>
    <breadcrumb active_name="Student"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Students List</h5>
        </div>
        <div>
            <router-link style="float:right" class="btn btn-primary" to="/students/student-list/create"> Add Student
            </router-link>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by name" :apiurl="'/students?page=' + this.page_num"
                        v-on:query="isQuery($event)" v-on:loading="loadingStart($event)" v-on:reload="getStudentss()"
                        v-on:filterData="filterData($event)">
                    </search-box>
                </div>
            </div>
        </div>
        <div class="card-datatable table-responsive">
            <DataTable :headers="headers" :desserts="desserts" :studentList="studentList" v-on:deleteItem="deleteItem($event)" />
        </div>
    </div>
</template>
<script>
import DataTable from "./DataTable";
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import SearchBox from "../../../components/SearchBoxComponent.vue";
export default {
    name: "StudentListComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: '#', align: 'start', sortable: false, value: 'name' },
            { text: 'StudentId', value: 'StudentId' },
            { text: 'Fullname', value: 'Fullname' },
            { text: 'Gender', value: 'Gender' },
            { text: 'Staff In Charge', value: 'Staff In Charge' },
            { text: 'Status', value: 'Status' },
            { text: 'Register Date', value: 'Register Date' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        page_num: 1,
        loading: false,
        query: "",
        studentList: [],
    }),
    methods: {
        getStudents(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/student?page=' + page + '&query=' + this.query).then((res) => {
                this.studentList = res.data.students;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.subjectList = data.subjects;
        },
        loadingStart(value) {
            this.loading = value;
        },
        deleteItem(item) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.isConfirmed) {
            axios.delete(`/student/${item.id}`).then((res) => {
                this.$root.alertNotify(res.status, "Destroyed Successfuly", "info", res.data);
                this.getStudents();
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
                }
            });
        },
    },
    mounted() {
        this.getStudents();
    }
}
</script>
