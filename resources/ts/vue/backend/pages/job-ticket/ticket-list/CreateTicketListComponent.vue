<template>
    <breadcrumb active_name="Add Ticket" :previous="[{name:'Ticket', link:'/job-ticket/ticket-list'}]"></breadcrumb>
        <div class="row">
            <div class="col-sm-12">
                <TicketListForm />
            </div>
        </div>
</template>
<script>
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import TicketListForm from "./TicketListForm.vue";
export default {
    name: "CreateSubjectComponent",
    components: { breadcrumb  , TicketListForm},
    data: () => ({
    }),
    mounted() {
    },
}
</script>
