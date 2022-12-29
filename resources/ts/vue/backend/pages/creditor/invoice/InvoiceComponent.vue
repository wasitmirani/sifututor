<template>
    <breadcrumb active_name="Creditor Invoice"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Creditor Invoice</h5>
        </div>
        <div>
            <router-link style="float:right" class="btn btn-primary" to="/creditor/invoice/create"> Add Invoice
            </router-link>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by creditor name" :apiurl="'/std-invoice?page=' + this.page_num"
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
    name: "CreditorInvoiceComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: '#', align: 'start', sortable: false, value: '#' },
            { text: 'Creditor Name', value: 'Creditor Name' },
            { text: 'Description', value: 'Description' },
            { text: 'Category', value: 'Category' },
            { text: 'Total Amount', value: 'Total Amount' },
            { text: 'Paid Amount', value: 'Paid Amount' },
            { text: 'Occurance Date', value: 'Occurance Date' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        desserts: [
            {
                "uid": "1",
                "creditor_name": "KWSP",
                "description": "Nur Suziani Bt Mohd Yusoff's EPF",
                "category": "Employer & Employee EPF",
                "total_amount": "RM 630.00",
                "paid_amount": "RM 0.00",
                "occurance_date": "26/04/2019",
                "slug": "KWSP",
            },
            {
                "uid": "2",
                "creditor_name": "PERKESO",
                "description": "Nur Suziani Bt Mohd Yusoff's EPF",
                "category": "Employer & Employee EPF",
                "total_amount": "RM 630.00",
                "paid_amount": "RM 0.00",
                "occurance_date": "26/04/2019",
                "slug": "PERKESO",
            },
            {
                "uid": "3",
                "creditor_name": "KWSP",
                "description": "Nur Suziani Bt Mohd Yusoff's EPF",
                "category": "Employer & Employee EPF",
                "total_amount": "RM 630.00",
                "paid_amount": "RM 0.00",
                "occurance_date": "26/04/2019",
                "slug": "KWSP",
            },
        ],
        page_num: 1,
        loading: false,
        query: "",
        invoiceList: [],
    }),
    methods: {
        getInvoice(page = 1) {
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
                this.getInvoice();
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
            //     }
            // });
        },
    },
    mounted() {
        this.getInvoice();
    }
}
</script>
