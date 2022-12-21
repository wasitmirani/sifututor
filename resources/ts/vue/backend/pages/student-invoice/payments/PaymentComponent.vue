<template>
    <breadcrumb active_name="Student Invoices"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Student Invoice Payments</h5>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by tutor id"
                        :apiurl="'/student-invoice-payment?page=' + this.page_num" v-on:query="isQuery($event)"
                        v-on:loading="loadingStart($event)" v-on:reload="getPayment()"
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
    name: "PaymentComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: '#', align: 'start', sortable: false, value: 'name' },
            { text: 'Receipt No', value: 'Receipt No' },
            { text: 'Payment Date', value: 'Payment Date' },
            { text: 'Invoice Reference No', value: 'Invoice Reference No' },
            { text: 'Amount', value: 'Amount' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        desserts: [
            {
                "uid": "1",
                "recipt_no": "RC045108",
                "payment_date": "21/12/2022",
                "invoice_reference": "ST069102",
                "amount": "RM 150.00",
                "slug": "Mohd",
            },
            {
                "uid": "2",
                "recipt_no": "RC045108",
                "payment_date": "21/12/2022",
                "invoice_reference": "ST069102",
                "amount": "RM 150.00",
                "slug": "Bushra",
            },
            {
                "uid": "3",
                "recipt_no": "RC045108",
                "payment_date": "21/12/2022",
                "invoice_reference": "ST069102",
                "amount": "RM 150.00",
                "slug": "Nur",
            },
        ],
        page_num: 1,
        loading: false,
        query: "",
        payment: {},
    }),
    methods: {
        getPayment(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/student-invoice-payment?page=' + page + '&query=' + this.query).then((res) => {
                this.payment = res.data.payment;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.payment = data.payment;
        },
        loadingStart(value) {
            this.loading = value;
        },
    },
    mounted() {
        // this.getPayment();
    }
}
</script>
 