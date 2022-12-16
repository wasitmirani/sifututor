<template>
    <breadcrumb active_name="PIC Commission"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Student PIC Commission List</h5>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by name" :apiurl="'/producct?page=' + this.page_num"
                        v-on:query="isQuery($event)" v-on:loading="loadingStart($event)" v-on:reload="getCommission()"
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
    name: "PicCommmissionComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: '#', align: 'start', sortable: false, value: 'name' },
            { text: 'Staff', value: 'Staff' },
            { text: 'Month - Year', value: 'Month - Year' },
            { text: 'Total Invoices', value: 'Total Invoices' },
            { text: 'Total Invoices Amount', value: 'Total Invoices Amount' },
            { text: 'Total Commissions', value: 'Total Commissions' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        desserts: [
            {
                "uid": "1",
                "staff": "Nurul Azuha Binti Nazmi",
                "month": "November - 2022",
                "total_invoice": '57',
                "total_invoice_Ammount": "RM 11,518.00",
                "total_commission": "RM 230.36",
                "slug": "Nurul",
            },
            {
                "uid": "2",
                "staff": "MUHAMMAD HAZMAN BIN MOHD SHAHRILL",
                "month": "November - 2022",
                "total_invoice": '39',
                "total_invoice_Ammount": "RM 10,500.00",
                "total_commission": "RM 105.00",
                "slug": "MUHAMMAD",
            }
        ],
        page_num: 1,
        loading: false,
        query: "",
        commissionList: [],
    }),
    methods: {
        getCommission(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/commission?page=' + page + '&query=' + this.query).then((res) => {
                this.commissionList = res.data.commissions;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.commissionList = data.commissions;
        },
        loadingStart(value) {
            this.loading = value;
        },
    },
    mounted() {
        // this.getCommission();
    }
}
</script>
