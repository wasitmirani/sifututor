<template>
    <breadcrumb active_name="Users"></breadcrumb>
    <div class="row g-4 mb-4">
        <div class="col-sm-6 col-xl-3">
            <stat-card heading="Total" :value="110"
            :total="110" color="dark"
             subheading="Total Users"
             icon="ti ti-user ti-sm"/>
          </div>
          <div class="col-sm-6 col-xl-3">
            <stat-card heading="Active" :value="60"
            :total="110" color="success"
             subheading="Active Users"
             icon="ti ti-user ti-sm"/>
          </div>
          <div class="col-sm-6 col-xl-3">
            <stat-card heading="Deactive" :value="35"
            :total="110" color="danger"
             subheading=" Deactive Users"
             icon="ti ti-user ti-sm"/>
          </div>

          <div class="col-sm-6 col-xl-3">
            <stat-card heading="Pending" :value="25"
            :total="110" color="warning"
             subheading=" Pending Users"
             icon="ti ti-user ti-sm"/>
          </div>



    </div>
    <div class="row g-4 mb-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <div>
                <h5 class="card-title">Users List</h5>
            </div>
            <div>
                <router-link style="float:right"   to="/portal/user/create" class="dt-button add-new btn btn-primary"
                  type="button">
                  <span><i class="ti ti-plus me-0 me-sm-1 ti-xs"></i>
                    <span class="d-none d-sm-inline-block">Add New User</span></span>
                </router-link>
            </div>
        </div>
        <div class="card">
            <div class="card-header border-bottom">
                <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                    <div class="col-md-5 user_role">
                        <search-box class="ml-2" label="Search by name" :apiurl="'/user?page=' + this.page_num"
                            v-on:query="isQuery($event)" v-on:loading="loadingStart($event)" v-on:reload="getStudents()"
                            v-on:filterData="filterData($event)">
                        </search-box>
                    </div>

                </div>
            </div>
            <div class="card-datatable table-responsive">
                <UserTable :headers="headers" :users="users" v-on:deleteItem="deleteItem($event)" />
            </div>
            <!-- Offcanvas to add new user -->

        </div>
    </div>
</template>
<script>
import UserTable from "./UserTable.vue";
import breadcrumb from "../../components/BreadcrumbComponent.vue";
import SearchBox from "../../components/SearchBoxComponent.vue";
import StatCard from "../../components/StatCardComponent.vue";
export default {
    name: "StudentListComponent",
    components: { UserTable, breadcrumb, SearchBox,StatCard },
    data: () => ({
        headers: [
            { text: '#', align: 'start', sortable: false, value: 'name' },
            { text: 'Full Name', value: 'name' },
            { text: 'Email', value: 'email' },
            { text: 'phone', value: 'phone' },
            { text: 'Role', value: 'role' },
            { text: 'City', value: 'city' },
            { text: 'Country', value: 'country' },
            { text: 'Status', value: 'Status' },
            { text: 'Created', value: 'Created' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        users:[],
    }),
    mounted() {
    }
}
</script>
