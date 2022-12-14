<template>
    <breadcrumb active_name="Tutor"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Tutor Application</h5>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by name" :apiurl="'/subject?page=' + this.page_num"
                        v-on:query="isQuery($event)" v-on:loading="loadingStart($event)" v-on:reload="getStudents()"
                        v-on:filterData="filterData($event)">
                    </search-box>
                </div>

            </div>
        </div>
        <div class="card-datatable table-responsive">
        <DataTable :headers="headers" :desserts="desserts"/>
    </div>
    </div>
</template>
<script>
import DataTable from "./DataTable";
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import SearchBox from "../../../components/SearchBoxComponent.vue";
export default {
    name: "TutorApplicstionComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: '#', align: 'start', sortable: false, value: 'name' },
            { text: 'Tutor Id', value: 'Tutor Id' },
            { text: 'Full Name', value: 'Fullname' },
            { text: 'Phone No', value: 'Phone No' },
            { text: 'Subject Applied', value: 'Subject Applied' },
            { text: 'Application', value: 'Application' },
            { text: 'State City', value: 'State City'},
        ],
        desserts: [
            {
                "uid": "1",
                "tutor_id": "T200329",
                "full_name": "Nurul Fitriah Binti Patlillah",
                "phone_no": '60125656519',
                "subject_applied": "Sejarah (PT3) - ONLINE",
                "application": "1",
                "state_city": "All - All",
            },
            {
                "uid": "2",
                "tutor_id": "T210004",
                "full_name": "Nor Shuhada bt Md Hishamuddin",
                "phone_no": '601121520618',
                "subject_applied": "Sejarah (PT3) - ONLINE",
                "application": "1",
                "state_city": "All - All",
            },
            {
                "uid": "3",
                "tutor_id": "T191515",
                "full_name": "Kanchana Rajendran",
                "phone_no": '60103727530',
                "subject_applied": "Science (PT3) - ONLINE",
                "application": "1",
                "state_city": "All - All",
            }
        ],
        page_num: 1,
        loading: false,
        query: "",
        ticketList: [],
    }),
    methods: {
        getSubjects(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/subject?page=' + page + '&query=' + this.query).then((res) => {
                this.ticketList = res.data.subjects;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.subjectList = data.subjects;
        },
        loadingStart(value) {
            this.loading = value;
        },
    },
    mounted() {
        // this.getSubjects();
    }
}
</script>
