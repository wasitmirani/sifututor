<template >
    <breadcrumb active_name="Roles"></breadcrumb>
    <div class="row g-4 mb-4">
        <RoleCard></RoleCard>
    </div>
</template>
<script>
import breadcrumb from "../../components/BreadcrumbComponent.vue";
import SearchBox from "../../components/SearchBoxComponent.vue";
import RoleCard from "../../components/RoleCardComponent.vue";
export default {
    components: {breadcrumb,SearchBox,RoleCard}

}
</script>
<style lang="">

</style>
