<template>
    <breadcrumb active_name="Add Chart Account" :previous="[{name:'Chart Accounts', link:'/chart-account'}]"></breadcrumb>
        <div class="row">
            <div class="col-sm-12">
                <ChartAccountForm />
            </div>
        </div>
</template>
<script>
import breadcrumb from "../../components/BreadcrumbComponent.vue";
import  ChartAccountForm  from "./ChartAccountForm.vue";
export default {
    name: "ChartAccountFormComponent",
    components: { breadcrumb  , ChartAccountForm},
    data: () => ({
    }),
    mounted() {
    },
}
</script>
