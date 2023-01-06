<template>
    <breadcrumb active_name="Total Class By Weekday/Weekend"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Total Class By Weekday/Weekend</h5>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by description" :apiurl="'/Student?page=' + this.page_num"
                        v-on:query="isQuery($event)" v-on:loading="loadingStart($event)" v-on:reload="getData()"
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
    name: "TotalClassByWeekday/WeekendComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: '', align: 'start', sortable: false, value: '' },
            { text: '8am – 12pm', value: '8am – 12pm' },
            { text: '12pm – 4pm', value: '12pm – 4pm' },
            { text: '4pm - 8pm', value: '4pm - 8pm' },
            { text: '8pm - 12am', value: '8pm - 12am' },
        ],
        desserts: [
            {
                "uid": "1",
                "first": "11345",
                "second": "9371",
                "third": "13806",
                "four": "10775",
                "slug": "Bahasa",
            },
            {
                "uid": "2",
                "first": "11345",
                "second": "9371",
                "third": "13806",
                "four": "10775",
                "slug": "topup",
            }
        ],
        page_num: 1,
        loading: false,
        query: "",
        data: [],
    }),
    methods: {
        getData(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/data?page=' + page + '&query=' + this.query).then((res) => {
                this.data = res.data.data;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.data = data.data;
        },
        loadingStart(value) {
            this.loading = value;
        },
    },
    mounted() {
        // this.getData();
    }
}
</script>
