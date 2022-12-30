<template>
    <breadcrumb active_name="Monthly Invoice Charge Status"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Monthly Invoice Charge Status</h5>
        </div>
    </div>
    <div class="card">
    </div>
</template>
<script>
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
export default {
    name: "MonthlyInvoiceChargeStatusComponent",
    components: {breadcrumb },
    data: () => ({
        page_num: 1,
        loading: false,
        query: "",
        montlyStatus: [],
    }),
    methods: {
        getMontlyStatus(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/getMontlyStatus?page=' + page + '&query=' + this.query).then((res) => {
                this.montlyStatus = res.data.montlyStatus;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
    },
    mounted() {
        // this.getMontlyStatus();
    }
}
</script>
