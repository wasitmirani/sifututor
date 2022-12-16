<template>
    <!-- breadcrumb -->
    <breadcrumb :active_name="slug"  :previous="[{name:'Products' , link:'/products/product-list'}]"></breadcrumb>
     <!-- /breadcrumb -->
     <ProductListForm :edit_mode="edit_mode" :form="form" v-if="edit_mode" />
 
 </template>
 <script>
 import breadcrumb from "../../components/BreadcrumbComponent.vue";
 import  ProductListForm  from "./ProductListForm.vue";
 export default {
     name: "EditProductListComponent",
     components: {breadcrumb, ProductListForm},
     data: () => ({
         form: {},
         edit_mode: false,
         slug: "",
     }),
     methods:{
         getProduct(id) {
             axios.get('/product/' + id).then((res) => {
                 this.form = res.data.products;
                 this.edit_mode = true;
             }).catch((err) => {
                 this.errors = err.response.data;
                 this.$root.alertNotify(err.response.status, null, "error", err.response.data);
                 this.$router.push('/products/product-list');
             });
         }
     },
     mounted() {
         this.slug = this.$route.params.slug;
         this.getProduct(this.$route.params.id);
     }
 }
 </script>
 