<template>
    <breadcrumb active_name="Tutor"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Tutor Finder</h5>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by name" :apiurl="'/tutor-find?page=' + this.page_num"
                        v-on:query="isQuery($event)" v-on:loading="loadingStart($event)" v-on:reload="getTutorFind()"
                        v-on:filterData="filterData($event)">
                    </search-box>
                </div>

            </div>
        </div>
        <div class="card-datatable table-responsive">
            <DataTable :headers="headers" :desserts="desserts" v-on:deleteItem="deleteItem($event)" />
        </div>
    </div>
</template>
<script>
import DataTable from "./DataTable";
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import SearchBox from "../../../components/SearchBoxComponent.vue";
export default {
    name: "FindTutorComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: '#', align: 'start', sortable: false, value: 'name' },
            { text: 'Tutor Id', value: 'Tutor Id' },
            { text: 'Fullname', value: 'Fullname' },
            { text: 'Email', value: 'Email' },
            { text: 'Phone No', value: 'Phone No' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        desserts: [
            {
                "uid": "1",
                "tutor_id": "T220082",
                "Fullname": "WAN SONA AFZAN BINTI WAN MOHD NASSERUDIN",
                "email": "November - 2022",
                "phone_number": "RM 130.02",
                "slug": "WAN",
            },
            {
                "uid": "2",
                "tutor_id": "T210102",
                "Fullname": "Bushra Daud",
                "email": "November - 2022",
                "phone_number": "RM 130.02",
                "slug": "Bushra",
            },
            {
                "uid": "3",
                "tutor_id": "T220180",
                "Fullname": "NUR HAZIQAH BINTI AMIRUDDIN",
                "email": "November - 2022",
                "phone_number": "RM 130.02",
                "slug": "Nur",
            },
        ],
        page_num: 1,
        loading: false,
        query: "",
        tutorFind: [],
    }),
    methods: {
        getTutorFind(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/tutor-find?page=' + page + '&query=' + this.query).then((res) => {
                this.tutorFind = res.data.payments;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.tutorFind = data.payments;
        },
        loadingStart(value) {
            this.loading = value;
        },
    },
    mounted() {
        // this.getTutorFind();
    }
}
</script>
