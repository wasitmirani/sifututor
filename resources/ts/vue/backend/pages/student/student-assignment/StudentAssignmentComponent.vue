<template>
    <breadcrumb active_name="Student"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Student Assigment</h5>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by name" :apiurl="'/customer?page=' + this.page_num"
                        v-on:query="isQuery($event)" v-on:loading="loadingStart($event)" v-on:reload="getStudents()"
                        v-on:filterData="filterData($event)">
                    </search-box>
                </div>
            </div>
            <div class="card-datatable table-responsive">
                <DataTable :headers="headers" :desserts="desserts" />
            </div>
        </div>
    </div>
</template>
<script>
import DataTable from "./DataTable";
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import SearchBox from "../../../components/SearchBoxComponent.vue";
export default {
    name: "StudentAssignmentComponent",
    components: { DataTable, breadcrumb,SearchBox },
    data: () => ({
        headers: [
            { text: '#', align: 'start', sortable: false, value: 'name' },
            { text: 'Student Id', value: 'CustomerId' },
            { text: 'Fullname', value: 'Fullname' },
            { text: 'Staff In Charge', value: 'Staff In Charge' },
            { text: 'Subject', value: 'Subject' },
            { text: 'Tutor', value: 'Tutor' },
        ],
        desserts: [
            {
                "id": "1",
                "student_id": "S224844",
                "fullname": "Musfira Syafia Binti Mustaza",
                "staff_in_charge": 'MUHAMMAD HAZMAN BIN MOHD SHAHRILL',
                "subject": "Physics (SPM) - ONLINE",
                "tutor": "Khairul Azree Rosli (T180796)",
            },
            {
                "id": "2",
                "student_id": "S224843",
                "fullname": "Mohamad Fahrin Syahmi Bin Husairi",
                "staff_in_charge": 'Monisha A/p Chandran	',
                "subject": "Mathematics (SPM) - ONLINE",
                "tutor": "FIRZAN HANIFF BIN ABD MANAP (T200319)",
            },
        ],
    }),
    mounted() {
    }
}
</script>
