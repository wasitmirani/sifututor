<template>
    <breadcrumb active_name="Staff"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Staff Payment</h5>
        </div>
        <div>
            <router-link style="float:right" class="btn btn-primary" to="/staff/staff-payment-list/create"> Add Payment</router-link>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by name" :apiurl="'/staff-payment?page=' + this.page_num"
                        v-on:query="isQuery($event)" v-on:loading="loadingStart($event)" v-on:reload="getStaffPayment()"
                        v-on:filterData="filterData($event)">
                    </search-box>
                </div>

            </div>
        </div>
        <div class="card-datatable table-responsive">
            <DataTable :headers="headers" :staff_payments="staff_payments" v-on:deleteItem="deleteItem($event)" />
        </div>
    </div>
</template>
<script>
import DataTable from "./DataTable";
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import SearchBox from "../../../components/SearchBoxComponent.vue";
export default {
    name: "StaffPaymentComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: '#', align: 'start', sortable: false, value: 'name' },
            { text: 'Staff', value: 'Staff' },
            { text: 'Month - Year', value: 'Month - Year' },
            { text: 'Nett Pay', value: 'Nett Pay' },
            { text: 'Total Amount', value: 'Total Amount' },
            { text: 'Payment Date', value: 'Payment Date' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        staff_payments: [],
        page_num: 1,
        loading: false,
        query: "",
        staff_payments: [],
    }),
    methods: {

        getStaffPayment(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/staff-payment?page=' + page + '&query=' + this.query).then((res) => {
                this.staff_payments = res.data.staff_payments;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.paymentList = data.payments;
        },
        loadingStart(value) {
            this.loading = value;
        },
        deleteItem(item) {
            axios.delete(`/staff-payment/${item.id}`).then((res) => {
                this.$root.alertNotify(res.status, "Destroyed Successfuly", "info", res.data);
                this.getStaffPayment();
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
    },
    mounted() {
        this.getStaffPayment();
    }
}
</script>
