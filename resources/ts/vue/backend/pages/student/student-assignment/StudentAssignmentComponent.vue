<template>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <DataTable :headers="headers" :desserts="desserts" />
                </div>
            </div>
        </div>
</template>
<script>
import DataTable from "./DataTable";
export default {
    name: "StudentAssignmentComponent",
    components: { DataTable },
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
