<template>
    <!-- breadcrumb -->
    <breadcrumb :active_name="slug" :previous="[{ name: 'Customer', link: '/students/customer-list' }]"></breadcrumb>
    <!-- /breadcrumb -->
    <CustomerListForm :edit_mode="edit_mode" :form="form" v-if="edit_mode" />

</template>
<script>
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import CustomerListForm from "./CustomerListForm.vue";
export default {
    name: "EditCustomerListComponent",
    components: { CustomerListForm, breadcrumb },
    data: () => ({
        form: {},
        edit_mode: false,
        slug: "",
    }),
    methods: {
        getClient(id) {
            axios.get('/subject/' + id).then((res) => {
                this.form = res.data.subject;
                this.edit_mode = true;
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
                this.$router.push('/students/customer-list');
            });
        }
    },
    mounted() {
        this.slug = this.$route.params.slug;
        this.getClient(this.$route.params.id);
    }
}
</script>