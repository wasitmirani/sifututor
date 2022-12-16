<template>
    <breadcrumb active_name="Add Staff" :previous="[{name:'Staff', link:'/staff/staff-list'}]"></breadcrumb>
        <div class="row">
            <div class="col-sm-12">
                <StaffListForm />
            </div>
        </div>
</template>
<script>
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import  StaffListForm  from "./StaffListForm.vue";
export default {
    name: "CreateStafftListComponent",
    components: { breadcrumb  , StaffListForm},
    data: () => ({
    }),
    mounted() {
    },
}
</script>
