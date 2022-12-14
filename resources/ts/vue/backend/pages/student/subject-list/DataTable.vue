<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">List of Projects</caption>
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
                    <td>
                        <router-link to="" class="btn btn-icon btn-primary waves-effect waves-light btn-sm me-2">
                            <i class="fa-solid fa-eye"> </i>
                        </router-link>
                        <router-link :to="`/subject/subject-list/edit/${item.slug}/${item.uid}`" class="btn btn-icon btn-success waves-effect waves-light btn-sm me-2">
                            <i class="fa-solid fa-pen-to-square"> </i>
                        </router-link>
                        <a   @click="deleteItem(item)" class="btn btn-icon btn-danger waves-effect waves-light btn-sm">
                            <i class="fa-solid fa-trash"> </i>
                        </a>
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