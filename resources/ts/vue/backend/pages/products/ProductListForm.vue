<template>
    <div class="card mb-4">
        <form class="card-body" v-on:submit.prevent="onSubmit">
            <div class="row g-3">
                <div class="col-md-4">
                    <label class="form-label" for="multicol-ProductName">Product Name</label>
                    <input type="text" v-model="product.name" id="ProductName"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'name')}`"
                        placeholder="Product Name" />
                    <validate-input :errors="errors?.errors" value="name"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-ProductCode">Product Code</label>
                    <input type="text" id="multicol-ProductCode" placeholder="Product Code"
                        v-model="product.code"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'code')}`" />
                    <validate-input :errors="errors?.errors" value="code"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-Brand">Brand</label>
                    <select id="multicol-Brand"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'brand')}`"
                        data-allow-clear="true" v-model="product.brand">
                        <option value="sifuTutor">SifuTutor</option>
                        <option value="nakNgaji">NakNgaji</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="brand"></validate-input>
                </div>

                <div class="col-md-4">
                    <label class="form-label" for="multicol-Category">Category</label>
                    <input type="text" v-model="product.category" id="Category"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'category')}`"
                        placeholder="Category" />
                    <validate-input :errors="errors?.errors" value="category"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-PurchaseCost">Purchase Cost</label>
                    <input type="text" id="multicol-PurchaseCost" placeholder="Purchase Cost"
                        v-model="product.cost"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'cost')}`" />
                    <validate-input :errors="errors?.errors" value="cost"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-SellPrice">Sell Price</label>
                    <input type="text" id="multicol-SellPrice" placeholder="Sell Price"
                        v-model="product.price"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'price')}`" />
                    <validate-input :errors="errors?.errors" value="price"></validate-input>
                </div>
                <div class="col-md-6"><label class="form-label" for="basic-icon-default-message">Description</label>
                    <div class="input-group input-group-merge"><textarea rows="3" id="basic-icon-default-message"
                            :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'description')}`"
                            placeholder="Description" v-model="product.description"></textarea></div>
                    <validate-input :errors="errors?.errors" value="description"></validate-input>
                </div>
                <div class="col-md-6"><label class="form-label" for="basic-icon-default-Remark">Remark</label>
                    <div class="input-group input-group-merge"><textarea rows="3" id="basic-icon-default-Remark"
                            :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'remarks')}`"
                            placeholder="Remarks" v-model="product.remarks"></textarea></div>
                    <validate-input :errors="errors?.errors" value="remarks"></validate-input>
                </div>
                <div class="col-sm-12">
                    <div class="form-check form-check-primary">
                        <input class="form-check-input" type="checkbox" value="" id="customCheckPrimary"
                            v-model="product.tuition_service" :true-value="1" :false-value="0">
                        <label class="form-check-label" for="customCheckPrimary">Is Tuition Service</label>
                    </div>
                </div>
            </div>
            <div class="row g-3 mt-2" v-if="product.tuition_service === 1">
                <div class="col-md-6">
                    <label class="form-label" for="multicol-SellPrice">Commision Rate (Before Training)</label>
                    <input type="number" id="multicol-Commision" placeholder="Commision Rate (Before Training)"
                        v-model="product.services.commision_rate_before"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'commision_rate_before')}`" min="0" />
                    <validate-input :errors="errors?.errors" value="commision_rate_before"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Incentive">Incentive Rate (Before Training)</label>
                    <input type="number" id="multicol-Incentive" placeholder="Incentive Rate (Before Training)"
                        v-model="product.services.incentive_rate_before"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'incentive_rate_before')}`"   min="0"/>
                    <validate-input :errors="errors?.errors" value="incentive_rate_before"></validate-input>
                </div>

                <div class="col-md-6">
                    <label class="form-label" for="multicol-Commisionafter">Commision Rate (After Training)</label>
                    <input type="number" id="multicol-Commisionafter" placeholder="Commision Rate (After Training)"
                        v-model="product.services.commision_rate_after"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'commision_rate_after')}`" min="0" />
                    <validate-input :errors="errors?.errors" value="commision_rate_after"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Incentiveafter">Incentive Rate (After Training)</label>
                    <input type="number" id="multicol-Incentiveafter" placeholder="Incentive Rate (After Training)"
                        v-model="product.services.incentive_rate_after"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'incentive_rate_after')}`"   min="0"/>
                    <validate-input :errors="errors?.errors" value="incentive_rate_after"></validate-input>
                </div>

            </div>
            <div class="pt-4">
                <button type="submit"  v-if="!edit_mode" class="btn btn-primary me-sm-3 me-1">Submit</button>
                <button type="submit"  v-else class="btn btn-success me-sm-3 me-1">Update</button>
                <button type="reset" class="btn btn-label-secondary">Cancel</button>
            </div>
        </form>
    </div>
</template>
<script>
import ValidateInput from "../../components/ValidateInputComponent.vue";
export default {
    name: "ProductListForm",
    components: { ValidateInput },
    props: ['edit_mode', 'form'],
    data: () => ({
        product: {
            tuition_service:0,
            services:{
                incentive_rate_before:0,
                incentive_rate_after:0,
                commision_rate_after:0,
                commision_rate_before:0,
            }
        },
        errors: [],
        loading: false,
        service: "",
    }),
    methods: {
        updateProduct(data) {
            axios.put('/product/' + this.product.id, data).then((res) => {
                this.$root.alertNotify(res.status,'Update Successfuly','success',res.data);

                this.$router.push('/products/product-list');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        createProduct(data) {
            axios.post('/product', data).then((res) => {
                this.$root.alertNotify(res.status, 'Created Successfuly', "success", res.data);
                this.$router.push('/products/product-list');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        onSubmit() {
            this.loading = true;
            let data = { ...this.product };
            if (!this.edit_mode) {
                this.createProduct(data);
            } else {
                this.updateProduct(data);
            }
            setTimeout(() => {
                this.loading = false;
            }, 1000);

        },
    },
    mounted() {
        if (this.edit_mode) {
            this.product = [];
            this.product = this.form;
        }
    }
}
</script>
