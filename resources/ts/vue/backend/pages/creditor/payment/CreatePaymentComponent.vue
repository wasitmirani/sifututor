<template>
    <breadcrumb active_name="Add Payment" :previous="[{name:'Creditor Payments',link:'/creditor/payments'}]"></breadcrumb>
        <div class="row">
            <div class="col-sm-12">
                <PaymentForm />
            </div>
        </div>
</template>
<script>
import PaymentForm from "./PaymentForm.vue";
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
export default {
    name: "CreateCreditorPaymentComponent",
    components: { PaymentForm, breadcrumb },
    data: () => ({
    }),
    mounted() {
    },
}
</script>
