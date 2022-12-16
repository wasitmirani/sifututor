<template>
    <!-- breadcrumb -->
    <breadcrumb :active_name="slug"  :previous="[{name:'Staff Payment', link:'/staff/staff-payment-list'}]"></breadcrumb>
     <!-- /breadcrumb -->
      <StaffPaymentForm  :edit_mode="edit_mode" :form="form" v-if="edit_mode" />
 
 </template>
 <script>
 import breadcrumb from "../../../components/BreadcrumbComponent.vue";
 import  StaffPaymentForm  from "./StaffPaymentForm.vue";
 export default {
     name: "EditStaffPaymentComponent",
     components: {breadcrumb, StaffPaymentForm},
     data: () => ({
         form: {},
         edit_mode: false,
         slug: "",
     }),
     methods:{
         getStaffPayment(id) {
             axios.get('/payment/' + id).then((res) => {
                 this.form = res.data.products;
                 this.edit_mode = true;
             }).catch((err) => {
                 this.errors = err.response.data;
                 this.$root.alertNotify(err.response.status, null, "error", err.response.data);
                 this.$router.push('/staff/staff-payment-list');
             });
         }
     },
     mounted() {
         this.slug = this.$route.params.slug;
         this.getStaffPayment(this.$route.params.id);
     }
 }
 </script>
 