<template>
    <breadcrumb active_name="Add Journal Ledger" :previous="[{name:'Journal Ledger', link:'/cash-flow/journal-ledger'}]"></breadcrumb>
        <div class="row">
            <div class="col-sm-12">
                <JournalLedgerForm />
            </div>
        </div>
</template>
<script>
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import  JournalLedgerForm  from "./JournalLedgerForm.vue";
export default {
    name: "CreateJournalLedgerComponent",
    components: { breadcrumb  , JournalLedgerForm},
    data: () => ({
    }),
    mounted() {
    },
}
</script>
