<template>
    <breadcrumb active_name="Student Pic Sales Performance"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Student Pic Sales Performance</h5>
        </div>
    </div>
    <div class="card">
    </div>
</template>
<script>
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
export default {
    name: "PicsalesperformanceComponent",
    components: {breadcrumb },
    data: () => ({
        page_num: 1,
        loading: false,
        query: "",
        data: [],
    }),
    methods: {
        getData(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/getData?page=' + page + '&query=' + this.query).then((res) => {
                this.data = res.data.data;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
    },
    mounted() {
        // this.getData();
    }
}
</script>
