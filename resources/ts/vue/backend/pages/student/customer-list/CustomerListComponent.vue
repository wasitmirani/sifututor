<template>
    <div class="container-xxl flex-grow-1 container-p-y">
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
    name: "CustomerListComponent",
    components: { DataTable },
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