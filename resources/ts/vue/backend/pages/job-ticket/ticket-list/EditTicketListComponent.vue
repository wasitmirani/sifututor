<template>
    <!-- breadcrumb -->
    <breadcrumb :active_name="slug"  :previous="[{name:'Ticket' , link:'/job-ticket/ticket-list'}]"></breadcrumb>
     <!-- /breadcrumb -->
     <TicketListForm :edit_mode="edit_mode" :form="form" v-if="edit_mode" />
 
 </template>
 <script>
 import breadcrumb from "../../../components/BreadcrumbComponent.vue";
 import TicketListForm from "./TicketListForm.vue";
 export default {
     name: "EditTicketListComponent",
     components: {breadcrumb, TicketListForm},
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
                 this.$router.push('/job-ticket/ticket-list');
             });
         }
     },
     mounted() {
         this.slug = this.$route.params.slug;
         this.getSubject(this.$route.params.id);
     }
 }
 </script>
 