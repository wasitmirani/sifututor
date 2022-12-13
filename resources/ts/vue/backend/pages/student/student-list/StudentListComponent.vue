<template>
    <div class="container-xxl flex-grow-1 container-p-y">
        <div class="text-end mb-2">
            <router-link class="btn btn-primary" to="/students/student-list/create"> New </router-link>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <DataTable :headers="headers" :desserts="desserts" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import DataTable from "./DataTable";
export default {
    name: "StudentListComponent",
    components: { DataTable },
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