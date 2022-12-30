<template>
    <breadcrumb active_name="Income Statement"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Income Statement</h5>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by description"
                        :apiurl="'/Student?page=' + this.page_num" v-on:query="isQuery($event)"
                        v-on:loading="loadingStart($event)" v-on:reload="getIncomeStatement()"
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
    name: "IncomeStatementComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: '#', align: 'start', sortable: false, value: '#' },
            { text: 'Account Code', value: 'Account Code' },
            { text: 'Account Name', value: 'Account Name' },
            { text: 'Account Type', value: 'Account Type' },
            { text: 'Balance', value: 'Balance' },
        ],
        desserts: [
            {
                "uid": "1",
                "account_code": "Staff - Zakat",
                "account_name": "Staff - Zakat",
                "account_type": "Expense",
                "balance": "RM 0.00	",
                "slug": "Bahasa",
            },
            {
                "uid": "2",
                "account_code": "Staff - Zakat",
                "account_name": "Staff - Zakat",
                "account_type": "Expense",
                "balance": "RM 0.00	",
                "slug": "topup",
            }
        ],
        page_num: 1,
        loading: false,
        query: "",
        incomeStatement: [],
    }),
    methods: {
        getIncomeStatement(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/incomeStatement?page=' + page + '&query=' + this.query).then((res) => {
                this.incomeStatement = res.data.incomeStatement;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.incomeStatement = data.incomeStatement;
        },
        loadingStart(value) {
            this.loading = value;
        },
    },
    mounted() {
        // this.getIncomeStatement();
    }
}
</script>
