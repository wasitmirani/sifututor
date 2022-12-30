<template>
    <breadcrumb active_name="Monthly Product Vs Commission"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Monthly Product Vs Commission</h5>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by description"
                        :apiurl="'/productVsCommission?page=' + this.page_num" v-on:query="isQuery($event)"
                        v-on:loading="loadingStart($event)" v-on:reload="getProductVsCommission()"
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
    name: "ProductVsCommissionComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: 'Month', align: 'start', sortable: false, value: 'Month' },
            { text: 'Category', value: 'Category' },
            { text: 'Commission Paid', value: 'Commission Paid' },
        ],
        desserts: [
            {
                "uid": "1",
                "monthly": "2",
                "category": "10",
                "commission_paid": "10",
                "slug": "Digi",
            },
            {
                "uid": "2",
                "monthly": "2",
                "category": "10",
                "commission_paid": "10",
                "slug": "topup",
            }
        ],
        page_num: 1,
        loading: false,
        query: "",
        productVsCommission: [],
    }),
    methods: {
        getProductVsCommission(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/productVsCommission?page=' + page + '&query=' + this.query).then((res) => {
                this.productVsCommission = res.data.productVsCommission;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.productVsCommission = data.productVsCommission;
        },
        loadingStart(value) {
            this.loading = value;
        },
    },
    mounted() {
        // this.getProductVsCommission();
    }
}
</script>
