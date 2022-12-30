<template>
    <breadcrumb active_name="Daily Ticket Application"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Daily Ticket Application</h5>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by description"
                        :apiurl="'/dailyTicket?page=' + this.page_num" v-on:query="isQuery($event)"
                        v-on:loading="loadingStart($event)" v-on:reload="getDailyTicket()"
                        v-on:filterData="filterData($event)">
                    </search-box>
                </div>

            </div>
        </div>
        <div class="card-datatable table-responsive">
            <DataTable :headers="headers" :desserts="desserts" />
        </div>
    </div>
</template>
<script>
import DataTable from "./DataTable";
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import SearchBox from "../../../components/SearchBoxComponent.vue";
export default {
    name: "DailyTicketApplicationComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: 'Total Ticket Created', align: 'start', sortable: false, value: 'Total Ticket Created' },
            { text: 'Total Tutor Applied', value: 'Total Tutor Applied' },
            { text: 'Total Tutor Applied on Same Day', value: 'Total Tutor Applied on Same Day' },
            { text: 'Subject', value: 'Subject' },
            { text: 'State', value: 'State' },
            { text: 'City', value: 'City' },
        ],
        desserts: [
            {
                "uid": "1",
                "total_created": "2",
                "total_applied": "10",
                "total_applied_same_day": "10",
                "subject": "Asas Mengaji: 4 sesi - PHYSICAL",
                "state": "Kuala Lumpur",
                "city": "Kuala Lumpur",
                "slug": "Digi",
            },
            {
                "uid": "2",
                "total_created": "2",
                "total_applied": "10",
                "total_applied_same_day": "10",
                "subject": "Asas Mengaji: 4 sesi - PHYSICAL",
                "state": "Kuala Lumpur",
                "city": "Kuala Lumpur",
                "slug": "topup",
            }
        ],
        page_num: 1,
        loading: false,
        query: "",
        dailyTicket: [],
    }),
    methods: {
        getDailyTicket(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/dailyTicket?page=' + page + '&query=' + this.query).then((res) => {
                this.dailyTicket = res.data.dailyTicket;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.dailyTicket = data.dailyTicket;
        },
        loadingStart(value) {
            this.loading = value;
        },
    },
    mounted() {
        // this.getSubjects();
    }
}
</script>
