<template>
    <breadcrumb active_name="Tutor"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Tutor List</h5>
        </div>
        <div>
            <router-link style="float:right" class="btn btn-primary" to="/tutor/tutor-list/create"> Add Tutor
            </router-link>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by name" :apiurl="'/tutor?page=' + this.page_num"
                        v-on:query="isQuery($event)" v-on:loading="loadingStart($event)" v-on:reload="getTutor()"
                        v-on:filterData="filterData($event)">
                    </search-box>
                </div>
            </div>
        </div>
        <div class="card-datatable table-responsive">
            <DataTable :headers="headers" :desserts="desserts" :tutorList="tutorList"
                v-on:deleteItem="deleteItem($event)" />
        </div>
    </div>
</template>
<script>
import DataTable from "./DataTable";
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import SearchBox from "../../../components/SearchBoxComponent.vue";
export default {
    name: "StaffListComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: '#', align: 'start', sortable: false, value: 'name' },
            { text: 'Tutor Id', value: 'Tutor id' },
            { text: 'Full Name', value: 'Fullname' },
            { text: 'Email', value: 'Email' },
            { text: 'Phone No', value: 'Phone No' },
            { text: 'Status', value: 'Status' },
            { text: 'Fee Payment Date', value: 'Fee Payment Date' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        desserts: [
            {
                "uid": "1",
                "tutor_id": "T220661",
                "full_name": "NUR HAFIDAH BT ISMAIL",
                "email": 'butterflygreen93@gmail.com',
                "phone_number": "60172655965",
                "status": "Active",
                "fee_payment_date": "07/12/2022	",
                "slug": "NUR",
            },
            {
                "uid": "2",
                "tutor_id": "T220662",
                "full_name": "Nurhidayah Rafhida Binti Sudarman",
                "email": 'hidayahrafida1@gmail.com',
                "phone_number": "60177808357",
                "status": "Active",
                "fee_payment_date": "15/12/2022",
                "slug": "Nurhidayah",
            }
        ],
        page_num: 1,
        loading: false,
        query: "",
        tutorList: [],
    }),
    methods: {
        getTutor(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/tutor?page=' + page + '&query=' + this.query).then((res) => {
                this.tutorList = res.data.tutors;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.tutorList = data.tutors;
        },
        loadingStart(value) {
            this.loading = value;
        },
        deleteItem(item) {
            // Swal.fire({
            //     title: "Are you sure?",
            //     text: "You won't be able to revert this!",
            //     icon: "warning",
            //     showCancelButton: true,
            //     confirmButtonColor: "#3085d6",
            //     cancelButtonColor: "#d33",
            //     confirmButtonText: "Yes, delete it!",
            // }).then((result) => {
            //     if (result.isConfirmed) {
            axios.delete(`/tutor/${item.id}`).then((res) => {
                this.$root.alertNotify(res.status, "Destroyed Successfuly", "info", res.data);
                this.getTutor();
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
            //     }
            // });
        },
    },
    mounted() {
        // this.getTutor();
    }
}
</script>
