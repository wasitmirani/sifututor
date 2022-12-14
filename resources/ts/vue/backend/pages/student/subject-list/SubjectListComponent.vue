<template>
    <breadcrumb active_name="Subject"></breadcrumb>
    <div class="card">
        <div class="card-header border-bottom">
            <h5 class="card-title mb-3">Subject List
                <router-link style="float:right" class="btn btn-primary" to="/subject/subject-list/create"> Add Subject </router-link>
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
            <DataTable :headers="headers" :desserts="desserts" />
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
            { text: 'Price  ', value: 'price  ' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        desserts: [
            {
                "name": "1",
                "cateogry": "S224844",
                "description": "Musfira Syafia Binti Mustaza",
                "thumbnail": 'Female',
                "price  ": "Active",
            },
            {
                "name": "1",
                "cateogry": "S224844",
                "description": "Musfira Syafia Binti Mustaza",
                "thumbnail": 'Female',
                "price  ": "Active",
            },
        ],
    }),
    mounted() {
    }
}
</script>
