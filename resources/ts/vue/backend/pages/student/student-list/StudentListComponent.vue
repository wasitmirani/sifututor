<template>
    <breadcrumb active_name="Student"></breadcrumb>
    <div class="card">
        <div class="card-header border-bottom">
            <h5 class="card-title mb-3">Students List
                <router-link style="float:right" class="btn btn-primary" to="/students/student-list/create"> Add Student
                </router-link>
            </h5>
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by name" :apiurl="'/students?page=' + this.page_num"
                        v-on:query="isQuery($event)" v-on:loading="loadingStart($event)" v-on:reload="getStudents()"
                        v-on:filterData="filterData($event)">
                    </search-box>
                </div>
            </div>
            <div class="card-datatable table-responsive">
                <DataTable :headers="headers" :desserts="desserts" />
            </div>
            <!-- Offcanvas to add new user -->
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
        desserts: [
            {
                "id": "1",
                "student_id": "S224844",
                "fullname": "Musfira Syafia Binti Mustaza",
                "gender": 'Female',
                "staff_in_charge": "HAZMAN SHAHRILL",
                "status": "Active",
                "register_date": "13/12/2022"
            },
            {
                "id": "2",
                "student_id": "S224843",
                "fullname": "Mohamad Fahrin Syahmi Bin Husairi",
                "gender": 'Male',
                "staff_in_charge": "Monisha A/p Chandran",
                "status": "Active",
                "register_date": "13/12/2022"
            }
        ],
    }),
    mounted() {
    }
}
</script>
