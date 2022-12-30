<template>
    <breadcrumb active_name="Tutor Vs Subject"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Tutor Vs Subject</h5>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by description"
                        :apiurl="'/tutorVsSubject?page=' + this.page_num" v-on:query="isQuery($event)"
                        v-on:loading="loadingStart($event)" v-on:reload="getTutorVsSubject()"
                        v-on:filterData="filterData($event)">
                    </search-box>
                </div>

            </div>
        </div>
        <div class="card-datatable table-responsive">
            <DataTable :headers="headers" :desserts="desserts" />
        </div>
    </div>
</template>
<script>
import DataTable from "./DataTable";
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import SearchBox from "../../../components/SearchBoxComponent.vue";
export default {
    name: "TutorVsSubjectComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: 'Subject', align: 'start', sortable: false, value: 'Subject' },
            { text: 'Assigned Tutors', value: 'Assigned Tutors' },
            { text: 'Teaching Tutors', value: 'Teaching Tutors' },
        ],
        desserts: [
            {
                "uid": "1",
                "subject": "Bahasa Arab (UPSR) - ONLINE",
                "assined_tutor": "26",
                "teaching_tutor": "6",
                "slug": "Bahasa",
            },
            {
                "uid": "2",
                "subject": "Bahasa Arab (UPSR) - ONLINE",
                "assined_tutor": "26",
                "teaching_tutor": "6",
                "slug": "topup",
            }
        ],
        page_num: 1,
        loading: false,
        query: "",
        tutorVsSubject: [],
    }),
    methods: {
        getTutorVsSubject(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/tutorVsSubject?page=' + page + '&query=' + this.query).then((res) => {
                this.tutorVsSubject = res.data.tutorVsSubject;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.tutorVsSubject = data.tutorVsSubject;
        },
        loadingStart(value) {
            this.loading = value;
        },
    },
    mounted() {
        // this.getTutorVsSubject();
    }
}
</script>
