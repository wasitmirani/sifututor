<template>
    <breadcrumb active_name="Add Tutor" :previous="[{name:'Tutor', link:'/tutor/tutor-list'}]"></breadcrumb>
        <div class="row">
            <div class="col-sm-12">
                <TutorListForm />
            </div>
        </div>
</template>
<script>
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import  TutorListForm  from "./TutorListForm.vue";
export default {
    name: "CreateStafftListComponent",
    components: { breadcrumb  , TutorListForm},
    data: () => ({
    }),
    mounted() {
    },
}
</script>
