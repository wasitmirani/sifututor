<template>
    <breadcrumb active_name="OverView"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">OverView</h5>
        </div>
    </div>
    <div class="card">
    </div>
</template>
<script>
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
export default {
    name: "OverViewComponent",
    components: {breadcrumb },
    data: () => ({
        page_num: 1,
        loading: false,
        query: "",
        overView: [],
    }),
    methods: {
        getOverView(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/getOverView?page=' + page + '&query=' + this.query).then((res) => {
                this.overView = res.data.overView;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
    },
    mounted() {
        // this.getOverView();
    }
}
</script>
