<template>
    <!-- breadcrumb -->
    <breadcrumb :active_name="slug" :previous="[{ name: 'Student', link: '/students/student-list' }]"></breadcrumb>
    <!-- /breadcrumb -->
    <StudentListForm  :edit_mode="edit_mode" :form="form" v-if="edit_mode" />

</template>
<script>
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import StudentListForm from "./StudentListForm.vue";
export default {
    name: "EditStudentListComponent",
    components: { StudentListForm, breadcrumb },
    data: () => ({
        form: {},
        edit_mode: false,
        slug: "",
    }),
    methods:{
        getStudent(id) {
            axios.get('/student/' + id).then((res) => {
                // console.log('res', res.data.student);
                this.form = res.data.student;
                this.edit_mode = true;
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
                this.$router.push('/students/student-list');
            });
        }
    },
    mounted() {
        this.slug = this.$route.params.slug;
        this.getStudent(this.$route.params.id);
    }
}
</script>