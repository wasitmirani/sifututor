<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">Students List</caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in studentList?.data" :key="index">
                    <td> {{ item.id ?? "N/A" }}</td>
                    <td>
                        <small class="badge bg-primary bg-glow me-1"  v-for="std in mapStudentsStudentID(item.students)">{{std}}</small>
                         </td>
                    <td> <small class="badge bg-dark bg-glow me-1"  v-for="std in mapStudentsFullName(item.students)">{{std}}</small> </td>
                    <td> {{ item?.students[0]?.gender ?? "N/A" }}</td>
                    <td> {{ item.admin_charge ?? "N/A" }}</td>
                    <td> <span class="badge bg-success bg-glow me-1">{{ item.status ?? "N/A" }}</span></td>
                    <td> {{ $filters.DateTimeFormat(item.register_date) ?? "N/A" }}</td>
                    <td>


                        <div class="d-flex align-items-center">

                            
                            <router-link :to="`/students/student-list/edit/${item.slug}/${item.uid}`"
                                class="text-body"><i class="ti ti-edit ti-sm me-2 text-primary"></i></router-link> |
                            <a role="button" @click="deleteItem(item)" class="text-body delete-record"><i
                                    class="ti ti-trash ti-sm mx-2 text-danger"></i></a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: "DataTableComponent",
    props: ["headers", "studentList"],
    data: () => ({
    }),
    methods: {
        mapStudentsStudentID(items){
            return items.map(item => item.student_id);
        },
        mapStudentsFullName(items){
            return items.map(item => item.fullname);
        },
        deleteItem(item) {
            return this.$emit("deleteItem", item);
        },
    },
    mounted() {
    }
}
</script>
