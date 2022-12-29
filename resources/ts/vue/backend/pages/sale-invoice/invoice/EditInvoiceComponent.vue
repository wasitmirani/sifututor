<template>
    <!-- breadcrumb -->
    <breadcrumb :active_name="slug" :previous="[{name:'Sales Invoice',link:'/sales-invoice/invoice'}]"></breadcrumb>
    <!-- /breadcrumb -->
    <InvoiceForm  :edit_mode="edit_mode" :form="form" v-if="edit_mode" />

</template>
<script>
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import InvoiceForm from "./InvoiceForm.vue";
export default {
    name: "EditInvoiceComponent",
    components: { InvoiceForm, breadcrumb },
    data: () => ({
        form: {},
        edit_mode: false,
        slug: "",
        errors: [],
    }),
    methods:{
        getInvoice(id) {
            axios.get('/invoice/' + id).then((res) => {
                // console.log('res', res.data.student);
                this.form = res.data.invoice;
                this.edit_mode = true;
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
                this.$router.push('/sales-invoice/invoice');
            });
        }
    },
    mounted() {
        this.slug = this.$route.params.slug;
        this.getInvoice(this.$route.params.id);
    }
}
</script>