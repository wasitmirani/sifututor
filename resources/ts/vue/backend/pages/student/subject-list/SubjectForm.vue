<template>
    <div class="card mb-4">
        <form class="card-body" v-on:submit.prevent="onSubmit">
            <div class="row g-3">
                <div class="col-md-4">
                    <label class="form-label" for="multicol-name">Name</label>
                    <input type="text" v-model="SubjectInfo.name" id="name-" class="form-control" placeholder="Name" />
                    <validate-input :errors="errors?.errors" value="name"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-category">Category</label>
                    <input type="text" id="multicol-category" placeholder="Category"
                        v-model="SubjectInfo.category"   :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'category')}`" />
                    <validate-input :errors="errors?.errors" value="category"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-price">price</label>
                    <input type="number" id="multicol-price" class="form-control" placeholder="price"
                        v-model="SubjectInfo.price" />
                    <validate-input :errors="errors?.price" value="description"></validate-input>
                </div>
                <div class="col-md-12"><label class="form-label" for="basic-icon-default-message">Description</label>
                    <div class="input-group input-group-merge"><textarea rows="3" id="basic-icon-default-message"
                            class="form-control" placeholder="Description"  v-model="SubjectInfo.description"></textarea></div>
                            <validate-input :errors="errors?.price" value="description"></validate-input>
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
// import ValidateInput from "../../components/ValidateInputComponent.vue";
import ValidateInput from "../../../components/ValidateInputComponent.vue";
export default {
    name: "SubjectForm",
    components: {ValidateInput},
    props: ['edit_mode', 'form'],
    data: () => ({
        SubjectInfo: {},
        errors: [],
        loading: false,
        errors: {},
    }),
    methods: {
        updateSubject(data) {
            axios.put('/subject/' + this.SubjectInfo.id, data).then((res) => {
                this.$router.push('/subject/subject-list');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        createSubject(data) {
            axios.post('/subject', data).then((res) => {
                this.$router.push('/subject/subject-list');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        onSubmit() {
            this.loading = true;
            let data = { ...this.SubjectInfo };
            if (!this.edit_mode) {
                this.createSubject(data);
            } else {
                this.updateSubject(data);
            }
            setTimeout(() => {
                this.loading = false;
            }, 1000);

        },
    },
    mounted() {
        if (this.edit_mode) {
            this.SubjectInfo = [];
            this.SubjectInfo = this.form;
        }
    }
}
</script>
