<template>
    <breadcrumb active_name="Expenditures"></breadcrumb>
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Expenditures</h5>
        </div>
        <div>
            <router-link style="float:right" class="btn btn-primary" to="/cash-flow/expenditures/create"> Add Expenditure</router-link>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom pb-0">
            <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                <div class="col-md-5 user_role">
                    <search-box class="ml-2" label="Search by description"
                        :apiurl="'/expenditure?page=' + this.page_num" v-on:query="isQuery($event)"
                        v-on:loading="loadingStart($event)" v-on:reload="getExpenditure()"
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
    name: "ExpendituresComponent",
    components: { DataTable, breadcrumb, SearchBox },
    data: () => ({
        headers: [
            { text: '#', align: 'start', sortable: false, value: '#' },
            { text: 'Description', value: 'Description' },
            { text: 'Category', value: 'Category' },
            { text: 'Total Amount', value: 'Total Amount' },
            { text: 'Chart of Account', value: 'Chart of Account' },
            { text: 'Payment Date', value: 'Payment Date' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        desserts: [
            {
                "uid": "1",
                "description": "Digi topup",
                "category": "utilities",
                "total_amount": "RM 30.00",
                "chat_of_amount": "Telephone / Streamyx & Fax",
                "payment_date": "26/12/2022",
                "slug": "Digi",
            },
            {
                "uid": "2",
                "description": "Digi topup",
                "category": "utilities",
                "total_amount": "RM 30.00",
                "chat_of_amount": "Telephone / Streamyx & Fax",
                "payment_date": "26/12/2022",
                "slug": "topup",
            }
        ],
        page_num: 1,
        loading: false,
        query: "",
        expenditure: [],
    }),
    methods: {
        getExpenditure(page = 1) {
            this.loading = true;
            this.page_num = page;
            axios.get('/expenditure?page=' + page + '&query=' + this.query).then((res) => {
                this.expenditure = res.data.products;
                this.loading = false;
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        isQuery(query) {
            return (this.query = query);
        },
        filterData(data) {
            this.expenditure = data.products;
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
            axios.delete(`/expenditure/${item.id}`).then((res) => {
                this.$root.alertNotify(res.status, "Destroyed Successfuly", "info", res.data);
                this.getExpenditure();
            }).catch((err) => {
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
            //     }
            // });
        },
    },
    mounted() {
        // this.getSubjects();
    }
}
</script>
