<template>
    <div class="card mb-4">
        <form class="card-body" v-on:submit.prevent="onSubmit">
            <div class="row g-3 mb-4">
                <div class="col-md-6">
                    <label class="form-label" for="multicol-ClientCustomerId">ClientCustomerId</label>
                    <input type="text" id="multicol-ClientCustomerId" class="form-control"
                        placeholder="ClientCustomerId" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Status">Status</label>
                    <select id="multicol-Status" class="select2 form-select" data-allow-clear="true">
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Pending">Pending</option>
                    </select>
                </div>
            </div>
            <h6>Personal Information </h6>
            <div class="row g-3">
                <div class="col-md-6">
                    <label class="form-label" for="multicol-FullName">FullName</label>
                    <input type="text" id="multicol-FullName"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'customer.full_name')}`"
                        placeholder="FullName" v-model="customer.full_name" />
                    <validate-input :errors="errors?.errors" value="full_name"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-FullName">FullName</label>
                    <input type="text" id="multicol-FullName"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'customer.full_name')}`"
                        placeholder="FullName" v-model="customer.full_name" />
                    <validate-input :errors="errors?.errors" value="full_name"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Fullname">Age</label>
                    <input type="number" id="multicol-Age"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'customer.age')}`"
                        placeholder="Age" v-model="customer.age" />
                    <validate-input :errors="errors?.errors" value="age"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Dob">Date of Birth</label>
                    <input type="date" id="multicol-Dob"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'customer.dob')}`"
                        placeholder="Dob" v-model="customer.dob" />
                    <validate-input :errors="errors?.errors" value="dob"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Nric">Nric</label>
                    <input type="text" id="multicol-Nric"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'customer.nric')}`"
                        placeholder="Nric" v-model="customer.nric" />
                    <validate-input :errors="errors?.errors" value="customer.nric"></validate-input>
                </div>
                <div class="col-md-6"><label class="form-label" for="multicol-email">Email</label>
                    <div class="input-group input-group-merge">
                        <input type="email" id="multicol-email"
                            :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'customer.email')}`"
                            placeholder="john.doe" aria-label="john.doe" v-model="customer.email"
                            aria-describedby="multicol-email2"><span class="input-group-text"
                            id="multicol-email2">@example.com</span>
                    </div>
                    <validate-input :errors="errors?.errors" value="email"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Phone-No">Phone No</label>
                    <input type="number" id="multicol-Phone-No" v-model="customer.phone" placeholder="Phone No"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'customer.phone')}`" />
                    <validate-input :errors="errors?.errors" value="phone"></validate-input>
                </div>
            </div>
            <hr class="my-4 mx-n4" />
            <h6>Address</h6>
            <div class="row g-3">
                <div class="col-md-6">
                    <label class="form-label" for="multicol-StreetAddress1">Street Address 1</label>
                    <input type="text" id="multicol-StreetAddress1"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'customer.address.street_address_1')}`"
                        placeholder="Street Address 1" v-model="customer.address.street_address_1" />
                    <validate-input :errors="errors?.errors" value="street_address_1"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-StreetAddress2">Street Address 2</label>
                    <input type="text" id="multicol-StreetAddress2"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'customer.address.street_address_2')}`"
                        v-model="customer.address.street_address_2" placeholder="Street Address 2" />
                    <validate-input :errors="errors?.errors" value="street_address_2"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-City">City</label>
                    <select id="multicol-State"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'customer.address.city')}`"
                        data-allow-clear="true" v-model="customer.address.city">
                        <option>Pulau Indah</option>
                        <option>Pulau Ketam</option>
                        <option>Puncak Alam</option>
                        <option>Rasa</option>
                        <option>Rawang</option>
                        <option>Sabak Bernam</option>
                        <option>Sekinchan</option>
                        <option>Semenyih</option>
                        <option>Sepang</option>
                        <option>Serdang</option>
                        <option>Serendah</option>
                        <option>Seri Kembangan</option>
                        <option>Shah Alam</option>
                        <option>Subang Jaya</option>
                        <option>Sungai Besar</option>
                        <option>Sungai Buloh</option>
                        <option>Sungai Pelek</option>
                        <option>Tanjong Karang</option>
                        <option>Tanjong Sepat</option>
                        <option>Telok Panglima Garang</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="city"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-PostCode">PostCode</label>
                    <input type="text" id="multicol-PostCode"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'customer.address.post_code')}`"
                        placeholder="PostCode" v-model="customer.address.post_code" />
                    <validate-input :errors="errors?.errors" value="post_code"></validate-input>
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="multicol-State">State</label>
                    <select id="multicol-State"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'customer.address.state')}`"
                        data-allow-clear="true">
                        <option value="">Select</option>
                        <option>Selangor</option>
                        <option>Penang</option>
                        <option>Johor</option>
                        <option>Kuala Lumpur</option>
                        <option>Negeri Sembilan</option>
                        <option>Melaka</option>
                        <option>Pahang</option>
                        <option>Perlis</option>
                        <option>Perak</option>
                        <option>Kedah</option>
                        <option>Terengganu</option>
                        <option>Kelantan</option>
                        <option>Serawak</option>
                        <option>Sabah</option>
                        <option>Putrajaya</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="customer.address.state"></validate-input>
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="basic-icon-default-message">Remark</label>
                    <div class="input-group input-group-merge">
                        <textarea id="basic-icon-default-message"
                            :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'customer.address.remark')}`"
                            placeholder="Remark"></textarea>
                    </div>
                    <validate-input :errors="errors?.errors" value="remark"></validate-input>
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
import ValidateInput from "../../../components/ValidateInputComponent.vue";
export default {
    name: "CustomerListFormComponent",
    components: { ValidateInput },
    props: ['edit_mode', 'form'],
    data: () => ({
        customer: {
            address: {},
        },
        errors: [],
    }),
    methods: {
        updateCustomer(data) {
            axios.put('/customer/' + this.customer.id, data).then((res) => {
                this.$router.push('/students/customer-list');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        createCustomer(data) {
            axios.post('/customer', data).then((res) => {
                this.$router.push('/students/customer-list');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        onSubmit() {
            this.loading = true;
            let data = { ...this.customer};
            if (!this.edit_mode) {
                this.createCustomer(data);
            } else {
                this.updateCustomer(data);
            }
            setTimeout(() => {
                this.loading = false;
            }, 1000);

        },
    },
    mounted() {
        if (this.edit_mode) {
            this.customer = this.form;
        }
    },
}
</script>