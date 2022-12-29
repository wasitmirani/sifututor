<template>
    <!-- breadcrumb -->
    <breadcrumb :active_name="slug" :previous="[{name:'Creditor Payments',link:'/creditor/payments'}]"></breadcrumb>
    <!-- /breadcrumb -->
    <PaymentForm  :edit_mode="edit_mode" :form="form" v-if="edit_mode" />

</template>
<script>
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import PaymentForm from "./PaymentForm.vue";
export default {
    name: "EditPaymentComponent",
    components: { PaymentForm, breadcrumb },
    data: () => ({
        form: {},
        edit_mode: false,
        slug: "",
        errors: [],
    }),
    methods:{
        getPayment(id) {
            axios.get('/payment/' + id).then((res) => {
                // console.log('res', res.data.student);
                this.form = res.data.invoice;
                this.edit_mode = true;
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
                this.$router.push('/creditor/payments');
            });
        }
    },
    mounted() {
        this.slug = this.$route.params.slug;
        this.getPayment(this.$route.params.id);
    }
}
</script>