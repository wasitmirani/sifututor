<template>
    <breadcrumb active_name="Add Subject" :previous="[{name:'Subjects',link:'/subject/subject-list/'}]"></breadcrumb>
        <div class="row">
            <div class="col-sm-12">
                <SubjectForm />
            </div>
        </div>
</template>
<script>
import SubjectForm from "./SubjectForm.vue";
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
export default {
    name: "CreateSubjectComponent",
    components: { SubjectForm,breadcrumb },
    data: () => ({
    }),
    mounted() {
    },
}
</script>
