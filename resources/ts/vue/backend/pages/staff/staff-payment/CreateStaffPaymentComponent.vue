<template>
    <breadcrumb active_name="Add Payment" :previous="[{name:'Staff Payment', link:'/staff/staff-payment-list'}]"></breadcrumb>
        <div class="row">
            <div class="col-sm-12">
                <StaffPaymentForm />
            </div>
        </div>
</template>
<script>
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import  StaffPaymentForm  from "./StaffPaymentForm.vue";
export default {
    name: "CreateStaffPaymentComponent",
    components: { breadcrumb  , StaffPaymentForm},
    data: () => ({
    }),
    mounted() {
    },
}
</script>
