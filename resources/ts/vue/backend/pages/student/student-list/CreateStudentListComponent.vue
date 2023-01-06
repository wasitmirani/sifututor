<template>
    <breadcrumb active_name="Add Student" :previous="[{name:'Students',link:'/students/student-list/'}]"></breadcrumb>
        <div class="row">
            <div class="col-sm-12">
                <StudentListForm />
            </div>
        </div>
</template>
<script>
import StudentListForm from "./StudentListForm.vue";
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
export default {
    name: "CreateStudentListComponent",
    components: { StudentListForm,breadcrumb },
    data: () => ({
    }),
    mounted() {
    },
}
</script>
