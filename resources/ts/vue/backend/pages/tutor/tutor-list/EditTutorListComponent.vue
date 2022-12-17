<template>
    <!-- breadcrumb -->
    <breadcrumb :active_name="slug" :previous="[{ name: 'Tutor', link: '/tutor/tutor-list' }]"></breadcrumb>
    <!-- /breadcrumb -->
    <TutorListForm  :edit_mode="edit_mode" :form="form" v-if="edit_mode" />

</template>
<script>
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import  TutorListForm  from "./TutorListForm.vue";
export default {
    name: "EditStudentListComponent",
    components: { TutorListForm, breadcrumb },
    data: () => ({
        form: {},
        edit_mode: false,
        slug: "",
    }),
    methods:{
        getTutorList(id) {
            axios.get('/tutor/' + id).then((res) => {
                this.form = res.data.tutor;
                this.edit_mode = true;
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
                this.$router.push('/tutor/tutor-list');
            });
        }
    },
    mounted() {
        this.slug = this.$route.params.slug;
        this.getTutorList(this.$route.params.id);
    }
}
</script>