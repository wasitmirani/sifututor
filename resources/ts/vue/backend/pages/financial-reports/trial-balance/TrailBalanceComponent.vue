<template>
    <breadcrumb active_name="Trail Balance"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Trail Balance</h5>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by description"
                        :apiurl="'/Student?page=' + this.page_num" v-on:query="isQuery($event)"
                        v-on:loading="loadingStart($event)" v-on:reload="getTrailBalance()"
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
    name: "TrailBalanceComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: '#', align: 'start', sortable: false, value: '#' },
            { text: 'Account Name', value: 'Account Name' },
            { text: 'Account Type', value: 'Account Type' },
            { text: 'Opening Balance', value: 'Opening Balance' },
            { text: 'Debit', value: 'Debit' },
            { text: 'Credit', value: 'Credit' },
            { text: 'Balance', value: 'Balance' },
        ],
        desserts: [
            {
                "uid": "1",
                "account_name": "Staff - Zakat",
                "account_type": "Expense",
                "opening_balance": "RM 0.00	",
                "debit": "RM 5,136.50",
                "credit": "RM 0.00",
                "balance": "RM 5,136.50",
                "slug": "Bahasa",
            },
            {
                "uid": "2",
                "account_name": "Staff - Zakat",
                "account_type": "Expense",
                "opening_balance": "RM 0.00	",
                "debit": "RM 5,136.50",
                "credit": "RM 0.00",
                "balance": "RM 5,136.50",
                "slug": "topup",
            }
        ],
        page_num: 1,
        loading: false,
        query: "",
        trailBalance: [],
    }),
    methods: {
        getTrailBalance(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/trailBalance?page=' + page + '&query=' + this.query).then((res) => {
                this.trailBalance = res.data.trailBalance;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.trailBalance = data.trailBalance;
        },
        loadingStart(value) {
            this.loading = value;
        },
    },
    mounted() {
        // this.getTrailBalance();
    }
}
</script>
