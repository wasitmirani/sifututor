<template>
    <!-- breadcrumb -->
    <breadcrumb :active_name="slug"  :previous="[{name:'Reports' , link:'/tutor/tutor-reports'}]"></breadcrumb>
     <!-- /breadcrumb -->
     <ReportForm :edit_mode="edit_mode" :form="form" v-if="edit_mode" />
 
 </template>
 <script>
 import breadcrumb from "../../../components/BreadcrumbComponent.vue";
 import ReportForm from "./ReportForm";
 export default {
     name: "EditReport",
     components: {breadcrumb, ReportForm},
     data: () => ({
         form: {},
         edit_mode: false,
         slug: "",
     }),
     methods:{
         getSubject(id) {
             axios.get('/tutor-report/' + id).then((res) => {
                 this.form = res.data.subject;
                 this.edit_mode = true;
             }).catch((err) => {
                 this.errors = err.response.data;
                 this.$root.alertNotify(err.response.status, null, "error", err.response.data);
                 this.$router.push('/tutor/tutor-reports');
             });
         }
     },
     mounted() {
         this.slug = this.$route.params.slug;
         this.getSubject(this.$route.params.id);
     }
 }
 </script>
 