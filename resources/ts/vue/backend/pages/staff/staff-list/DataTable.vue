<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">Staff List</caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in staffList?.data" :key="index">
                    <td> {{ item.full_name ?? "N/A" }}</td>
                    <td> {{ item.email ?? "N/A" }}</td>
                    <td> {{ item.phone ?? "N/A" }}</td>
                    <td> {{ item.designation ?? "N/A" }} </td>
                    <td> {{ item.gender ?? "N/A" }}</td>
                    <td>
                        <p v-html="this.$root.mapStatus(item.status)" class="mb-0" />
                    </td>
                    <td>
                        <div class="d-flex align-items-center">
                            <router-link :to="`/staff/staff-payment-list/edit/${item.slug}/${item.uid}`"
                                class="text-body"> <i
                                    class="ti ti-cash-banknote ti-sm me-2 text-success"></i></router-link> |
                            <router-link :to="`/staff/staff-list/edit/${item.slug}/${item.uid}`" class="text-body"><i
                                    class="ti ti-edit ti-sm mx-2 text-primary"></i></router-link> |
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
    props: ["headers", "desserts", "staffList"],
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
