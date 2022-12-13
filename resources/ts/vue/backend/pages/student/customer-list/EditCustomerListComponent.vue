<template>
    <div class="container-xxl flex-grow-1 container-p-y">
        <div class="row">
            <div class="col-sm-12">
                <CustomerListForm />
            </div>
        </div>
    </div>
</template>
<script>
import CustomerListForm from "./CustomerListForm.vue";
export default {
    name: "EditCustomerListComponent",
    components: {CustomerListForm},
    data: () => ({

    }),
    mounted(){
        console.log(' i am here');
    }
}
</script>