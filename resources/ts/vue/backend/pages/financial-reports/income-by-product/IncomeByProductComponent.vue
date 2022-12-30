<template>
    <breadcrumb active_name="Income By Product"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Income By Product</h5>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by description"
                        :apiurl="'/Student?page=' + this.page_num" v-on:query="isQuery($event)"
                        v-on:loading="loadingStart($event)" v-on:reload="getincomeByProduct()"
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
    name: "IncomeByProductComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: '#', align: 'start', sortable: false, value: '#' },
            { text: 'Product', value: 'Product' },
            { text: 'Cost of Good Sale', value: 'Cost of Good Sale' },
            { text: 'Income', value: 'Income' },
            { text: 'Gross Profit', value: 'Gross Profit' },
        ],
        desserts: [
            {
                "uid": "1",
                "product": "Mathematics (UPSR) - PHYSICAL",
                "cost_of_good_sale": "RM 0.00",
                "income": "RM 905,045.00",
                "gross_profit": "RM 905,045.00",
                "slug": "Bahasa",
            },
            {
                "uid": "2",
                "product": "Mathematics (UPSR) - PHYSICAL",
                "cost_of_good_sale": "RM 0.00",
                "income": "RM 905,045.00",
                "gross_profit": "RM 905,045.00",
                "slug": "topup",
            }
        ],
        page_num: 1,
        loading: false,
        query: "",
        incomeByProduct: [],
    }),
    methods: {
        getincomeByProduct(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/incomeByProduct?page=' + page + '&query=' + this.query).then((res) => {
                this.incomeByProduct = res.data.incomeByProduct;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.incomeByProduct = data.incomeByProduct;
        },
        loadingStart(value) {
            this.loading = value;
        },
    },
    mounted() {
        // this.getincomeByProduct();
    }
}
</script>
