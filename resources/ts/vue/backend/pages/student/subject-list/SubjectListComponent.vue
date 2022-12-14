<template>
    <breadcrumb active_name="Subject"></breadcrumb>
    <div class="card">
        <div class="card-header border-bottom">
            <h5 class="card-title mb-3">Subject List
                <router-link style="float:right" class="btn btn-primary" to="/subject/subject-list/create"> Add Subject
                </router-link>
            </h5>
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
            <DataTable :headers="headers" :subjectList="subjectList" v-on:deleteItem="deleteItem($event)" />
        </div>
        <!-- Offcanvas to add new user -->

    </div>
</template>
<script>
import DataTable from "./DataTable";
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
import SearchBox from "../../../components/SearchBoxComponent.vue";
export default {
    name: "SubjectComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: 'Name', align: 'start', sortable: false, value: 'name' },
            { text: 'Cateogry', value: 'cateogry' },
            { text: 'Description', value: 'description' },
            { text: 'Thumbnail', value: 'thumbnail' },
            { text: 'Price', value: 'price' },
            { text: 'Created At', value: 'price' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        page_num: 1,
        loading: false,
        query: "",
        subjectList: [],
    }),
    methods: {
        getSubjects(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/subject?page=' + page + '&query=' + this.query).then((res) => {
                this.subjectList = res.data.subjects;
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
                    axios.delete(`/subject/${item.id}`).then((res) => {
                        this.$root.alertNotify(res.status, "Destroyed Successfuly", "info", res.data);
                        this.getSubjects();
                    }).catch((err) => {
                        this.$root.alertNotify(err.response.status, null, "error", err.response.data);
                    });
            //     }
            // });
        },
    },
    mounted() {
        this.getSubjects();  
    }
}
</script>
