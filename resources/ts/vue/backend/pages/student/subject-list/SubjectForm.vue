<template>
    <div class="card mb-4">
        <form class="card-body" v-on:submit.prevent="onSubmit">
            <div class="row g-3">
                <div class="col-md-6">
                    <label class="form-label" for="multicol-name">Name</label>
                    <input type="text" v-model="SubjectInfo.name" id="name-" class="form-control" placeholder="Name" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-cateogry">Cateogry</label>
                    <input type="number" id="multicol-cateogry" class="form-control" placeholder="Cateogry"
                        v-model="SubjectInfo.cateogry" />
                </div>
                <div class="col-md-6"><label class="form-label" for="basic-icon-default-message">Description</label>
                    <div class="input-group input-group-merge"><textarea id="basic-icon-default-message"
                            class="form-control" placeholder="Description"></textarea></div>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-price">price</label>
                    <input type="number" id="multicol-price" class="form-control" placeholder="price"
                        v-model="SubjectInfo.cateogry" />
                </div>
            </div>
            <div class="pt-4">
                <button type="submit" class="btn btn-primary me-sm-3 me-1">Submit</button>
                <button type="reset" class="btn btn-label-secondary">Cancel</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: "SubjectForm",
    data: () => ({
        SubjectInfo: {},
        errors: [],
        loading: false,
    }),
    methods: {
        updateWarehouse(data) {
            axios.put('/warehouses/warehouse/' + this.warehouse.id, data).then((res) => {
                this.$router.push('/warehouses');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        createWarehouse(data) {
            axios.post('/warehouses/warehouse', data).then((res) => {
                this.$router.push('/warehouses');
            }).catch((err) => {
                this.errors = err.response.data;
                console.log("errors", this.errors);
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        onSubmit() {
            this.loading = true;
            let data = { ...this.SubjectInfo};
            if (!this.edit_mode) {
                this.createWarehouse(data);
            } else {
                this.updateWarehouse(data);
            }
            setTimeout(() => {
                this.loading = false;
            }, 1000);

        },
    }
}
</script>