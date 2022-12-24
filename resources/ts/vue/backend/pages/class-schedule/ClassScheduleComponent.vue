<template>
    <breadcrumb active_name="Class Schedule"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Class Schedule</h5>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by student name" :apiurl="'/schedule?page=' + this.page_num"
                        v-on:query="isQuery($event)" v-on:loading="loadingStart($event)" v-on:reload="getSchedule()"
                        v-on:filterData="filterData($event)">
                    </search-box>
                </div>

            </div>
        </div>
        <div class="card-datatable table-responsive">
        <DataTable :headers="headers" :desserts="desserts"/>
    </div>
    </div>
</template>
<script>
import DataTable from "./DataTable";
import breadcrumb from "../../components/BreadcrumbComponent.vue";
import SearchBox from "../../components/SearchBoxComponent.vue";
export default {
    name: "ClassScheduleComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: '#', align: 'start', sortable: false, value: 'name' },
            { text: 'StudentId', value: 'StudentId' },
            { text: 'Full Name', value: 'Full Name' },
            { text: 'Subject', value: 'Subject' },
            { text: 'Subscribed Duration hr(s)', value: 'Subscribed Duration hr(s)' },
            { text: 'Assigned Duration hr(s)', value: 'Assigned Duration hr(s)' },
            { text: 'Status', value: 'Status' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        desserts: [
            {
                "uid": "1",
                "std_id": "S180771",
                "full_name": "Nur Alya Syafiqah Binti Roslin",
                "subject": 'Mathematics (PT3) - PHYSICAL',
                "subscribe_duration": "0    ",
                "assigned_duration": "0",
                "status": "Pending",
                "slug": "Nur",
            },
            {
                "uid": "2",
                "std_id": "S180481",
                "full_name": "Adam Mohd Faizal",
                "subject": 'Mathematics (PT3) - PHYSICAL',
                "subscribe_duration": "0    ",
                "assigned_duration": "0",
                "status": "Pending",
                "slug": "Adam",
            }
        ],
        page_num: 1,
        loading: false,
        query: "",
        scheduleList: [],
    }),
    methods: {
        getSchedule(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/schedule?page=' + page + '&query=' + this.query).then((res) => {
                this.scheduleList = res.data.schedule;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.scheduleList = data.schedule;
        },
        loadingStart(value) {
            this.loading = value;
        },
    },
    mounted() {
        // this.getSchedule();
    }
}
</script>
