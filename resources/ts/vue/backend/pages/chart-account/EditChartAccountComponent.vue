<template>
    <!-- breadcrumb -->
    <breadcrumb :active_name="slug"  :previous="[{name:'Chart Accounts' , link:'/chart-account'}]"></breadcrumb>
     <!-- /breadcrumb -->
     <ChartAccountForm :edit_mode="edit_mode" :form="form" v-if="edit_mode" />
 
 </template>
 <script>
 import breadcrumb from "../../components/BreadcrumbComponent.vue";
 import  ChartAccountForm  from "./ChartAccountForm.vue";
 export default {
     name: "EditCharAccountComponent",
     components: {breadcrumb, ChartAccountForm},
     data: () => ({
         form: {},
         edit_mode: false,
         slug: "",
     }),
     methods:{
         getAccount(id) {
             axios.get('/account/' + id).then((res) => {
                 this.form = res.data.subject;
                 this.edit_mode = true;
             }).catch((err) => {
                 this.errors = err.response.data;
                 this.$root.alertNotify(err.response.status, null, "error", err.response.data);
                 this.$router.push('/chart-account');
             });
         }
     },
     mounted() {
         this.slug = this.$route.params.slug;
         this.getAccount(this.$route.params.id);
     }
 }
 </script>
 