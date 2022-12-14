<template>
   <!-- breadcrumb -->
   <breadcrumb :active_name="slug"  :previous="[{name:'Subject' , link:'/subject/subject-list'}]"></breadcrumb>
    <!-- /breadcrumb -->
    <SubjectForm :edit_mode="edit_mode" :form="form" v-if="edit_mode" />

</template>
<script>
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import SubjectForm from "./SubjectForm";
export default {
    name: "EditSubject",
    components: {breadcrumb, SubjectForm},
    data: () => ({
        form: {},
        edit_mode: false,
        slug: "",
    }),
    methods:{
        getSubject(id) {
            axios.get('/subject/' + id).then((res) => {
                this.form = res.data.subject;
                this.edit_mode = true;
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
                this.$router.push('/subject/subject-list');
            });
        }
    },
    mounted() {
        this.slug = this.$route.params.slug;
        this.getSubject(this.$route.params.id);
    }
}
</script>
