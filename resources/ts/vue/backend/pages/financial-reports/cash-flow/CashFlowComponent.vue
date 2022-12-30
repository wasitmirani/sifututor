<template>
    <breadcrumb active_name="Cash Flow"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Cash Flow</h5>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by description"
                        :apiurl="'/Student?page=' + this.page_num" v-on:query="isQuery($event)"
                        v-on:loading="loadingStart($event)" v-on:reload="getCashFlow()"
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
    name: "CashFlowComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: '#', align: 'start', sortable: false, value: '#' },
            { text: 'Transaction Date', value: 'Transaction Date' },
            { text: 'Description', value: 'Description' },
            { text: 'Money In', value: 'Money In' },
            { text: 'Money Out', value: 'Money Out' },
        ],
        desserts: [
            {
                "uid": "1",
                "transction_date": "31/12/2022",
                "desciption": "Staff Payment: - December - 2022",
                "money_in": "RM 0.00",
                "money_out": "RM 1,837.05",
                "slug": "Bahasa",
            },
            {
                "uid": "2",
                "transction_date": "31/12/2022",
                "desciption": "Staff Payment: - December - 2022",
                "money_in": "RM 0.00",
                "money_out": "RM 1,837.05",
                "slug": "topup",
            }
        ],
        page_num: 1,
        loading: false,
        query: "",
        CashFlow: [],
    }),
    methods: {
        getCashFlow(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/CashFlow?page=' + page + '&query=' + this.query).then((res) => {
                this.CashFlow = res.data.CashFlow;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.CashFlow = data.CashFlow;
        },
        loadingStart(value) {
            this.loading = value;
        },
    },
    mounted() {
        // this.getCashFlow();
    }
}
</script>
