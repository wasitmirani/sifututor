<template>
    <breadcrumb active_name="Add Expenditure" :previous="[{name:'Expenditure', link:'/cash-flow/expenditures'}]"></breadcrumb>
        <div class="row">
            <div class="col-sm-12">
                <ExpenditureForm />
            </div>
        </div>
</template>
<script>
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import ExpenditureForm  from "./ExpenditureForm.vue";
export default {
    name: "CreateJournalLedgerComponent",
    components: { breadcrumb  , ExpenditureForm},
    data: () => ({
    }),
    mounted() {
    },
}
</script>
