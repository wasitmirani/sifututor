<template>
    <!-- breadcrumb -->
    <breadcrumb :active_name="slug" :previous="[{ name: 'Staff', link: '/staff/staff-list' }]"></breadcrumb>
    <!-- /breadcrumb -->
    <StaffListForm :edit_mode="edit_mode" :form="form" v-if="edit_mode" />

</template>
<script>
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import StaffListForm from "./StaffListForm.vue";
export default {
    name: "EditProductListComponent",
    components: { breadcrumb, StaffListForm },
    data: () => ({
        form: {},
        edit_mode: false,
        slug: "",
    }),
    methods: {
        getStaff(id) {
            axios.get('/staff/' + id).then((res) => {
                this.form = res.data.staff;
                this.edit_mode = true;
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
                this.$router.push('/staff/staff-list');
            });
        }
    },
    mounted() {
        this.slug = this.$route.params.slug;
        this.getStaff(this.$route.params.id);
    }
}
</script>
 