<template>
    <!-- <breadcrumb active_name="Class Schedule"></breadcrumb> -->
    <breadcrumb :active_name="slug"  :previous="[{name:'Class Schedule' , link:'/class-schedules'}]"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Schedule History</h5>
        </div>
        <div>
            <router-link style="float:right" class="btn btn-primary" :to="`/class-schedules/schedule-history/create/${slug}/${this.$route.params.id}`"> Add Schedule</router-link>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by student name" :apiurl="'/history?page=' + this.page_num"
                        v-on:query="isQuery($event)" v-on:loading="loadingStart($event)" v-on:reload="getHistory()"
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
    name: "ScheduleHistoryComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: '#', align: 'start', sortable: false, value: 'name' },
            { text: 'Subject', value: 'Subject' },
            { text: 'Date', value: 'Date' },
            { text: 'Start Time', value: 'Start Time' },
            { text: 'End Time', value: 'End Time' },
            { text: 'Total Duration (Hrs)', value: 'Total Duration (Hrs)' },
            { text: 'Tutor', value: 'Tutor' },
            { text: 'Status', value: 'Status' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        desserts: [
            {
                "uid": "1",
                "subject": 'Mathematics (PT3) - PHYSICAL',
                "date": "08/12/2022",
                "start_time": "22:23",
                "end_time": "22:23",
                "total_duration": "0",
                "tutor": "Mohammad Syamil Bin Mohd Yusoff",
                "status": "Scheduled",
                "slug": "Nur",
            },
            {
                "uid": "2",
                "subject": 'Mathematics (PT3) - PHYSICAL',
                "date": "08/12/2022",
                "start_time": "22:23",
                "end_time": "22:23",
                "total_duration": "0",
                "tutor": "Mohammad Syamil Bin Mohd Yusoff",
                "status": "Scheduled",
                "slug": "Adam",
            }
        ],
        page_num: 1,
        loading: false,
        query: "",
        historyList: [],
        slug: "",
    }),
    methods: {
        getHistory(id) {
            this.loading = true;
            // this.page_num = page;
            axios.get('/schedule-history?page=' + this.page_num + '&query=' + this.query).then((res) => {
                this.historyList = res.data.history;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.historyList = data.history;
        },
        loadingStart(value) {
            this.loading = value;
        },
        deleteItem(item) {
            axios.delete(`/schedule-history/${item.id}`).then((res) => {
                this.$root.alertNotify(res.status, "Destroyed Successfuly", "info", res.data);
                this.getAccount();
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
    },
    mounted() {
        this.slug = this.$route.params.slug;
        this.getHistory(this.$route.params.id);
    }
}
</script>
