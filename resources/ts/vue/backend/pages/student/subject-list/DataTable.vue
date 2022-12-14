<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">Subjects List
            </caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in subjectList?.data" :key="index">
                    <td> {{ item.name ?? "N/A" }}</td>
                    <td> {{ item.category ?? "N/A" }}</td>
                    <td> {{ item.description ?? "N/A" }}</td>
                    <td> {{ item.thumbnail ?? "N/A" }}</td>
                    <td> {{ item.price ?? "N/A" }}</td>
                    <td> {{item.created_at ?? "N/A"}}</td>
                    <td class="" style=""><div class="d-flex align-items-center">
                        <router-link :to="`/subject/subject-list/edit/${item.slug}/${item.uid}`" class="text-body"><i class="ti ti-edit ti-sm me-2 text-primary"></i></router-link > |
                        <a  role="button" @click="deleteItem(item)" class="text-body delete-record"><i class="ti ti-trash ti-sm mx-2 text-danger"></i></a>
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
    props: ["headers", "subjectList"],
    data: () => ({
    }),
    methods: {
        deleteItem(item) {
            return this.$emit("deleteItem", item);
        },
    },
    mounted() {
    }
}
</script>
