<template>
    <breadcrumb active_name="Monthly Promo Invoice"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Monthly Promo Invoice</h5>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom">
            <div class="head-label">
                <h5 class="card-title mb-0">Promotion Invoice</h5>
            </div>
        </div>
        <div class="card-datatable table-responsive">
            <PromotionDataTable :headers="headers" :desserts="desserts" />
        </div>
    </div>
    <hr class="my-5">

    <div class="card">
        <div class="card-header border-bottom">
            <div class="head-label">
                <h5 class="card-title mb-0">Class Type Invocies</h5>
            </div>
        </div>
        <div class="card-datatable table-responsive">
            <ClassTypeDataTable :headers2="headers2" :desserts2="desserts2" />
        </div>
    </div>
</template>
<script>
import PromotionDataTable from "./PromotionDataTable";
import ClassTypeDataTable from "./ClassTypeDataTable";
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
export default {
    name: "StudentInvoiceComponent",
    components: { PromotionDataTable, breadcrumb, ClassTypeDataTable },
    data: () => ({
        headers: [
            { text: 'Month-Year', align: 'start', sortable: false, value: 'Month-Year' },
            { text: 'Total Invoice', value: 'Total Invoice' },
            { text: 'Total Promo Invoice', value: 'Total Promo Invoice' },
            { text: 'Total Paid Promo Invoice', value: 'Total Paid Promo Invoice' },
        ],
        headers2: [
            { text: 'Month-Year', align: 'start', sortable: false, value: 'Month-Year' },
            { text: 'Total Invoice', value: 'Total Invoice' },
            { text: 'Total Physical Invoice', value: 'Total Physical Invoice' },
            { text: 'Total Online Invoice', value: 'Total Online Invoice' },
            { text: 'Total Mixed Invoice', value: 'Total Mixed  Invoice' },
        ],
        desserts2: [
            {
                "uid": "1",
                "month_year": "June - 2022",
                "total_invoice": "1558",
                "total_physical_invoice": "14",
                "total_online_invoice": "14",
                "total_mixed_invoice": "14",
                "slug": "Bahasa",
            },
            {
                "uid": "2",
                "month_year": "June - 2022",
                "total_invoice": "1558",
                "total_physical_invoice": "14",
                "total_online_invoice": "14",
                "total_mixed_invoice": "14",
                "slug": "topup",
            }
        ],
        desserts: [
            {
                "uid": "1",
                "month_year": "June - 2022",
                "total_invoice": "1558",
                "total_promo_invoice": "14",
                "total_paid_promo_invoice": "14",
                "slug": "Bahasa",
            },
            {
                "uid": "2",
                "month_year": "June - 2022",
                "total_invoice": "1558",
                "total_promo_invoice": "14",
                "total_paid_promo_invoice": "14",
                "slug": "topup",
            }
        ],
        page_num: 1,
        loading: false,
        query: "",
        stdInvoice: [],
    }),
    methods: {
        getData(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/stdInvoice?page=' + page + '&query=' + this.query).then((res) => {
                this.stdInvoice = res.data.stdInvoice;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.stdInvoice = data.stdInvoice;
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
