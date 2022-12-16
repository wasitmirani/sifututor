<template>
    <breadcrumb active_name="Add Product" :previous="[{name:'Products', link:'/products/product-list'}]"></breadcrumb>
        <div class="row">
            <div class="col-sm-12">
                <ProductListForm />
            </div>
        </div>
</template>
<script>
import breadcrumb from "../../components/BreadcrumbComponent.vue";
import  ProductListForm  from "./ProductListForm.vue";
export default {
    name: "CreateProductListFormComponent",
    components: { breadcrumb  , ProductListForm},
    data: () => ({
    }),
    mounted() {
    },
}
</script>
