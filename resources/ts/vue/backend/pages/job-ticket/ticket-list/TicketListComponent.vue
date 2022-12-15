<template>
    <breadcrumb active_name="Ticket"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Ticket List</h5>
        </div>
        <div>
            <router-link style="float:right" class="btn btn-primary" to="/job-ticket/ticket-list/create"> Add Ticket</router-link>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by name" :apiurl="'/subject?page=' + this.page_num"
                        v-on:query="isQuery($event)" v-on:loading="loadingStart($event)" v-on:reload="getTickets()"
                        v-on:filterData="filterData($event)">
                    </search-box>
                </div>

            </div>
        </div>
        <div class="card-datatable table-responsive">
        <DataTable :headers="headers" :desserts="desserts"  v-on:deleteItem="deleteItem($event)" />
    </div>
    </div>
</template>
<script>
import DataTable from "./DataTable";
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import SearchBox from "../../../components/SearchBoxComponent.vue";
export default {
    name: "JobTicketListComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: '#', align: 'start', sortable: false, value: 'name' },
            { text: 'Ticket No', value: 'Ticket No' },
            { text: 'Student(s)', value: 'Student(s)' },
            { text: 'Ticket Status', value: 'Ticket Status' },
            { text: 'Application Status', value: 'Application Status' },
            { text: 'Created On', value: 'Created On' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        desserts: [
            {
                "uid": "1",
                "ticket_no": "J22014379",
                "students": "Nur Alesha,Adam Muaz",
                "ticket_status": 'Open',
                "application_status": "Incomplete",
                "created_at": "	14/12/2022",
                "slug": "Nur",
            },
            {
                "uid": "2",
                "ticket_no": "J22014379",
                "students": "Muhammad  Alesha,Adam Muaz",
                "ticket_status": 'Open',
                "application_status": "Incomplete",
                "created_at": "	14/12/2022",
                "slug": "Nurnisrina",
                "slug": "Noor",
            }
        ],
        page_num: 1,
        loading: false,
        query: "",
        ticketList: [],
    }),
    methods: {
        getTickets(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/tickets?page=' + page + '&query=' + this.query).then((res) => {
                this.ticketList = res.data.subjects;
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
            axios.delete(`/tickets/${item.id}`).then((res) => {
                this.$root.alertNotify(res.status, "Destroyed Successfuly", "info", res.data);
                this.getTickets();
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
            //     }
            // });
        },
    },
    mounted() {
        this.getTickets();
    }
}
</script>
