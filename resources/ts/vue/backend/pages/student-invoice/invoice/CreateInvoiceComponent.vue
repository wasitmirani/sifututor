<template>
    <breadcrumb active_name="Add Invoice" :previous="[{name:'Student Invoice',link:'/student-invoices/invoice'}]"></breadcrumb>
        <div class="row">
            <div class="col-sm-12">
                <InvoiceForm />
            </div>
        </div>
</template>
<script>
import InvoiceForm from "./InvoiceForm.vue";
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
export default {
    name: "CreateInvocieComponent",
    components: { InvoiceForm,breadcrumb },
    data: () => ({
    }),
    mounted() {
    },
}
</script>
