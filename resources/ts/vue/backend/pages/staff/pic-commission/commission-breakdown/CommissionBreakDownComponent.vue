<template>
    <!-- breadcrumb -->
    <breadcrumb :active_name="slug" :previous="[{ name: 'PIC Commission', link: '/staff/pic-commission-list' }]"></breadcrumb>
    <!-- /breadcrumb -->
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h5 class="card-title">Commsion BreakDown</h5>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <!-- <search-box class="ml-2" label="Search by name" :apiurl="'/producct?page=' + this.page_num"
                        v-on:query="isQuery($event)" v-on:loading="loadingStart($event)" v-on:reload="getCommission()"
                        v-on:filterData="filterData($event)">
                    </search-box> -->
                    <h5> {{this.slug ?? "N/A"}} </h5>
                </div>

            </div>
        </div>
        <div class="card-datatable table-responsive">
            <DataTable :headers="headers" :desserts="desserts"/>
        </div>
    </div>
</template>
<script>
import breadcrumb from "../../../../components/BreadcrumbComponent.vue";
import DataTable from "./DataTable.vue";
export default {
    name: "CommissionBreakDownComponent",
    components: { breadcrumb, DataTable },
    data: () => ({
        slug: "",
        headers: [
            { text: 'Invoice No', align: 'start', sortable: false, value: 'name' },
            { text: 'Invoice Date', value: 'Invoice Date' },
            { text: 'Payment Date', value: 'Payment Date' },
            { text: 'Customer', value: 'Customer' },
            { text: 'Class Type', value: 'Class Type' },
            { text: 'Invoice Amount', value: 'Invoice Amount' },
        ],
        desserts: [
            {
                "uid": "1",
                "invoice_no": "ST062593",
                "invoice_date": "17/10/2022",
                "payment_date": "01/11/2022",
                "customer": "Hanna Desa",
                "class_type": "Online",
                "invoice_amount": "RM 130.00",
            },
            {
                "uid": "2",
                "invoice_no": "ST062593",
                "invoice_date": "17/10/2022",
                "payment_date": "01/11/2022",
                "customer": "Hanna Desa",
                "class_type": "Online",
                "invoice_amount": "RM 130.00",
            }
        ],
    }),
    methods: {
        getCommsionBreakdown(id) {
            axios.get('/product/' + id).then((res) => {
                this.edit_mode = true;
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
                this.$router.push('/products/product-list');
            });
        }
    },
    mounted() {
        this.slug = this.$route.params.slug;
        this.getCommsionBreakdown(this.$route.params.id);
    }
}
</script>
 