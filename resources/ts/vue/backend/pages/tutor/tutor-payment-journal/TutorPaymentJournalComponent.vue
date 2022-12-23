<template>
    <breadcrumb active_name="Tutor"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Tutor Payment Journal</h5>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by name" :apiurl="'/tutor-payment-journal?page=' + this.page_num"
                        v-on:query="isQuery($event)" v-on:loading="loadingStart($event)" v-on:reload="getTutorPaymentJournal()"
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
    name: "TutorPaymentJournalComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: '#', align: 'start', sortable: false, value: 'name' },
            { text: 'Tutor Id', value: 'Tutor Id' },
            { text: 'Tutor Name', value: 'Tutor name' },
            { text: 'Month', value: 'Month' },
            { text: 'Year', value: 'Year' },
            { text: 'Total Duration', value: 'Total Duration' },
            { text: 'Total Amount', value: 'Total Amount' },
            { text: 'Total Invoice Duration', value: 'Total Invoice Duration' },
            { text: 'Validation Type', value: 'Validation Type' },
            { text: 'Completion Date', value: 'Completion Date' },
            { text: 'Payment Status', value: 'Payment Status' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        desserts: [
            {
                "uid": "1",
                "tutor_id": "T200208",
                "tutor_name": "Mohd Zulhafiz Zakaria",
                "month": "November",
                "year": "2022",
                "total_duration": "10.5",
                "total_amount": "RM 310.50",
                "total_invoice_duration": "	10.5",
                "validation_type": "Fully Manual",
                "completion_date": "16/12/2022 ",
                "payment_status": "Paid",
                "slug": "WAN",
            },
            {
                "uid": "2",
                "tutor_id": "T200208",
                "tutor_name": "Mohd Zulhafiz Zakaria",
                "month": "November",
                "year": "2022",
                "total_duration": "10.5",
                "total_amount": "RM 310.50",
                "total_invoice_duration": "	10.5",
                "validation_type": "Fully Manual",
                "completion_date": "16/12/2022 ",
                "payment_status": "Paid",
                "slug": "Bushra",
            },
            {
                "uid": "3",
                "tutor_id": "T200208",
                "tutor_name": "Mohd Zulhafiz Zakaria",
                "month": "November",
                "year": "2022",
                "total_duration": "10.5",
                "total_amount": "RM 310.50",
                "total_invoice_duration": "	10.5",
                "validation_type": "Fully Manual",
                "completion_date": "16/12/2022 ",
                "payment_status": "Paid",
                "slug": "Nur",
            },
        ],
        page_num: 1,
        loading: false,
        query: "",
        tutorFind: [],
    }),
    methods: {
        getTutorPaymentJournal(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/getTutorPaymentJournal?page=' + page + '&query=' + this.query).then((res) => {
                this.tutorFind = res.data.payments;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.tutorFind = data.payments;
        },
        loadingStart(value) {
            this.loading = value;
        },
    },
    mounted() {
        // this.getTutorPaymentJournal();
    }
}
</script>
