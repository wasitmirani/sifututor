<template>
    <breadcrumb active_name="Tutor Assigments"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Tutor - Student Assigments</h5>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by name" :apiurl="'/tutor-assigment?page=' + this.page_num"
                        v-on:query="isQuery($event)" v-on:loading="loadingStart($event)" v-on:reload="getTutorAssignments()"
                        v-on:filterData="filterData($event)">
                    </search-box>
                </div>
            </div>
        </div>
        <div class="card-datatable table-responsive">
            <DataTable :headers="headers" :desserts="desserts" :tutorAssigmentList="tutorAssigmentList"
                v-on:deleteItem="deleteItem($event)" />
        </div>
    </div>
</template>
<script>
import DataTable from "./DataTable";
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import SearchBox from "../../../components/SearchBoxComponent.vue";
export default {
    name: "TutorAssignmentsComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: '#', align: 'start', sortable: false, value: 'name' },
            { text: 'Tutor Id', value: 'Tutor id' },
            { text: 'Full Name', value: 'Fullname' },
            { text: 'Subject', value: 'Subject' },
            { text: 'Student', value: 'Student' },
        ],
        desserts: [
            {
                "uid": "1",
                "tutor_id": "T220661",
                "full_name": "NUR HAFIDAH BT ISMAIL",
                "subject": 'No Subject',
                "student": "No Student",
                "slug": "NUR",
            },
            {
                "uid": "2",
                "tutor_id": "T220661",
                "full_name": "Nurhidayah Rafhida Binti Sudarman",
                "subject": 'No Subject',
                "student": "No Student",
                "slug": "Nurhidayah",
            }
        ],
        page_num: 1,
        loading: false,
        query: "",
        tutorAssigmentList: [],
    }),
    methods: {
        getTutorAssignments(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/tutor-assigment?page=' + page + '&query=' + this.query).then((res) => {
                this.tutorAssigmentList = res.data.tutors;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.tutorAssigmentList = data.tutors;
        },
        loadingStart(value) {
            this.loading = value;
        },
    },
    mounted() {
        // this.getTutorAssignments();
    }
}
</script>
