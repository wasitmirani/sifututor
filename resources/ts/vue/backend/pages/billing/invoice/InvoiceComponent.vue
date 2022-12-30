<template>
    <breadcrumb active_name="My Invoice"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">My Invoice</h5>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by description"
                        :apiurl="'/Student?page=' + this.page_num" v-on:query="isQuery($event)"
                        v-on:loading="loadingStart($event)" v-on:reload="getInvoice()"
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
    name: "InvoiceComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: '#', align: 'start', sortable: false, value: '#' },
            { text: 'Reference No.', value: '   Reference No.' },
            { text: 'Invoice Date', value: 'Invoice Date' },
            { text: 'Payment Due Date', value: 'Payment Due Date' },
            { text: 'Total Price', value: 'Total Price' },
            { text: 'Status', value: 'Status' },
        ],
        desserts: [
            {
                "uid": "1",
                "refference_no": "FINV001262",
                "invoice_date": "01/05/2022	",
                "payment_due_date": "07/05/2022	",
                "total_price": "RM 4,710.00",
                "status": "Paid",
                "slug": "Bahasa",
            },
            {
                "uid": "2",
                "refference_no": "FINV001262",
                "invoice_date": "01/05/2022	",
                "payment_due_date": "07/05/2022	",
                "total_price": "RM 4,710.00",
                "status": "Paid",
                "slug": "topup",
            }
        ],
        page_num: 1,
        loading: false,
        query: "",
        invoice: [],
    }),
    methods: {
        getInvoice(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/invoice?page=' + page + '&query=' + this.query).then((res) => {
                this.invoice = res.data.invoice;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.invoice = data.invoice;
        },
        loadingStart(value) {
            this.loading = value;
        },
    },
    mounted() {
        // this.getInvoice();
    }
}
</script>
