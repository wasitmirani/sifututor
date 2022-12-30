<template>
    <breadcrumb active_name="Customer Vs Subject"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Customer Vs Subject</h5>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by description"
                        :apiurl="'/Student?page=' + this.page_num" v-on:query="isQuery($event)"
                        v-on:loading="loadingStart($event)" v-on:reload="getCustomerVsSubject()"
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
    name: "CustomerVsSubjectComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: 'Subject', align: 'start', sortable: false, value: 'Subject' },
            { text: 'Subscribed Customer', value: 'Subscribed Customer' },
        ],
        desserts: [
            {
                "uid": "1",
                "subject": "Bahasa Arab (UPSR) - ONLINE",
                "subscribed_customer": "11",
                "slug": "Bahasa",
            },
            {
                "uid": "2",
                "subject": "Bahasa Arab (UPSR) - ONLINE",
                "subscribed_customer": "11",
                "slug": "topup",
            }
        ],
        page_num: 1,
        loading: false,
        query: "",
        customerVsSubject: [],
    }),
    methods: {
        getCustomerVsSubject(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/customerVsSubject?page=' + page + '&query=' + this.query).then((res) => {
                this.customerVsSubject = res.data.customerVsSubject;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.customerVsSubject = data.customerVsSubject;
        },
        loadingStart(value) {
            this.loading = value;
        },
    },
    mounted() {
        // this.getCustomerVsSubject();
    }
}
</script>
