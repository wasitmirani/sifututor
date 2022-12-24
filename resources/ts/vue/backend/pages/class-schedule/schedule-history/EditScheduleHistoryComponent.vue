<template>
    <!-- breadcrumb -->
    <breadcrumb :active_name="slug"
        :previous="[{ name: 'Schedule History', link: `/class-schedules/schedule-history/${slug}/${this.$route.params.id}` }]">
    </breadcrumb>
    <!-- /breadcrumb -->
    <ScheduleHistoryForm :edit_mode="edit_mode" :form="form" v-if="edit_mode" />

</template>
<script>
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import ScheduleHistoryForm from "./ScheduleHistoryForm.vue";
export default {
    name: "EditScheduleHistoryComponent",
    components: { breadcrumb, ScheduleHistoryForm },
    data: () => ({
        form: {},
        edit_mode: false,
        slug: "",
    }),
    methods: {
        getScheduleHistory(id) {
            axios.get('/getScheduleHistory/' + id).then((res) => {
                this.form = res.data.subject;
                this.edit_mode = true;
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
                this.$router.push('/chart-account');
            });
        }
    },
    mounted() {
        this.slug = this.$route.params.slug;
        this.getScheduleHistory(this.$route.params.id);
    }
}
</script>
 