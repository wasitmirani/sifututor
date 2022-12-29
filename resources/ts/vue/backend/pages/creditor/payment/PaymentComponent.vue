<template>
    <breadcrumb active_name="Creditor Payments"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Creditor Payments</h5>
        </div>
        <div>
            <router-link style="float:right" class="btn btn-primary" to="/creditor/payments/create"> Add Payment
            </router-link>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by payment date" :apiurl="'/std-invoice?page=' + this.page_num"
                        v-on:query="isQuery($event)" v-on:loading="loadingStart($event)" v-on:reload="getStudents()"
                        v-on:filterData="filterData($event)">
                    </search-box>
                </div>

            </div>
        </div>
        <div class="card-datatable table-responsive">
            <DataTable :headers="headers" :invoiceList="invoiceList" :desserts="desserts" v-on:deleteItem="deleteItem($event)" />
        </div>
    </div>
</template>
<script>
import DataTable from "./DataTable";
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import SearchBox from "../../../components/SearchBoxComponent.vue";
export default {
    name: "creaditorPaymentComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: '#', align: 'start', sortable: false, value: '#' },
            { text: 'Creditor Name', value: 'Creditor Name' },
            { text: 'Payment Amount', value: 'Payment Amount' },
            { text: 'Floating Amount', value: 'Floating Amount' },
            { text: 'Payment Date', value: 'Payment Date' },
            { text: 'Related Creditor Invoice', value: 'Related Creditor Invoice' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        desserts: [
            {
                "uid": "1",
                "creditor_name": "KWSP",
                "payment_amount":  "RM 0.00",
                "floating_amount":  "RM 0.00",
                "payment_date": "26/04/2019",
                "related_credior_invoice": "RM 0.00",
                "slug": "KWSP",
            },
            {
                "uid": "2",
                "creditor_name": "KWSP",
                "payment_amount":  "RM 0.00",
                "floating_amount":  "RM 0.00",
                "payment_date": "26/04/2019",
                "related_credior_invoice": "RM 0.00",
                "slug": "PERKESO",
            },
            {
                "uid": "3",
                "creditor_name": "KWSP",
                "payment_amount":  "RM 0.00",
                "floating_amount":  "RM 0.00",
                "payment_date": "26/04/2019",
                "related_credior_invoice": "RM 0.00",
                "slug": "KWSP",
            },
        ],
        page_num: 1,
        loading: false,
        query: "",
        invoiceList: [],
    }),
    methods: {
        getPayment(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/std-invoice?page=' + page + '&query=' + this.query).then((res) => {
                this.invoiceList = res.data.invoice;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.invoiceList = data.invoice;
        },
        loadingStart(value) {
            this.loading = value;
        },
        deleteItem(item) {
            // Swal.fire({
            //     title: "Are you sure?",
            //     text: "You won't be able to revert this!",
            //     icon: "warning",
            //     showCancelButton: true,
            //     confirmButtonColor: "#3085d6",
            //     cancelButtonColor: "#d33",
            //     confirmButtonText: "Yes, delete it!",
            // }).then((result) => {
            //     if (result.isConfirmed) {
            axios.delete(`/std-invoice/${item.id}`).then((res) => {
                this.$root.alertNotify(res.status, "Destroyed Successfuly", "info", res.data);
                this.getPayment();
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
            //     }
            // });
        },
    },
    mounted() {
        // this.getPayment();
    }
}
</script>
