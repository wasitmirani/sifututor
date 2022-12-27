<template>
    <!-- breadcrumb -->
    <breadcrumb :active_name="slug"  :previous="[{name:'Expenditure', link:'/cash-flow/expenditures'}]"></breadcrumb>
     <!-- /breadcrumb -->
     <ExpenditureForm :edit_mode="edit_mode" :form="form" v-if="edit_mode" />

 </template>
 <script>
 import breadcrumb from "../../../components/BreadcrumbComponent.vue";
 import ExpenditureForm  from "./ExpenditureForm.vue";
 export default {
     name: "EditExpenditureComponent",
     components: {breadcrumb, ExpenditureForm},
     data: () => ({
         form: {},
         edit_mode: false,
         slug: "",
     }),
     methods:{
         getSubject(id) {
             axios.get('/expenditure/' + id).then((res) => {
                 this.form = res.data.ticket;
                 this.edit_mode = true;
             }).catch((err) => {
                 this.errors = err.response.data;
                 this.$root.alertNotify(err.response.status, null, "error", err.response.data);
                 this.$router.push('/cash-flow/journal-ledger');
             });
         }
     },
     mounted() {
         this.slug = this.$route.params.slug;
         this.getSubject(this.$route.params.id);
     }
 }
 </script>
