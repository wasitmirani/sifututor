<template>
    <breadcrumb active_name="Add Report" :previous="[{name:'Reports', link:'/tutor/tutor-reports/'}]"></breadcrumb>
        <div class="row">
            <div class="col-sm-12">
                <ReportForm />
            </div>
        </div>
</template>
<script>
import ReportForm from "./ReportForm.vue";
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
export default {
    name: "CreateTutorReportComponent",
    components: { ReportForm,breadcrumb },
    data: () => ({
    }),
    mounted() {
    },
}
</script>
