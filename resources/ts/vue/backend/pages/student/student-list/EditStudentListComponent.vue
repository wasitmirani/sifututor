<template>
    <div class="container-xxl flex-grow-1 container-p-y">
        <div class="row">
            <div class="col-sm-12">
                <StudentListForm />
            </div>
        </div>
    </div>
</template>
<script>
import StudentListForm from "./StudentListForm.vue";
export default {
    name: "EditStudentListComponent",
    components: { StudentListForm },
    data: () => ({
        
    }),
    mounted() {
    },
}
</script>