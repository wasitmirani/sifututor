<template>
    <div class="card mb-4">
        <form class="card-body" v-on:submit.prevent="onSubmit">
            <div class="row g-3 mb-4">
                <div class="col-md-6">
                    <label class="form-label" for="multicol-StartWorkingDate">Start Working Date</label>
                    <input type="date" v-model="staff.start_date" id="StartWorkingDate"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'start_date')}`"
                        placeholder="Start Working Date" />
                    <validate-input :errors="errors?.errors" value="start_date"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Designation">Designation</label>
                    <input type="text" id="multicol-Designation" placeholder="Designation" v-model="staff.designation"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'designation')}`" />
                    <validate-input :errors="errors?.errors" value="designation"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-BasicSalary">Basic Salary</label>
                    <input type="text" id="multicol-BasicSalary" placeholder="Basic Salary" v-model="staff.basic_salary"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'basic_salary')}`" />
                    <validate-input :errors="errors?.errors" value="basic_salary"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-StaffType">Staff Type</label>
                    <select id="multicol-StaffType"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'staff_type')}`"
                        data-allow-clear="true" v-model="staff.staff_type">
                        <option>Probation</option>
                        <option>Intern</option>
                        <option>Part-Time</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="staff_type"></validate-input>
                </div>
            </div>
            <!-- <hr class="my-4 mx-n4" /> -->
            <h6>Personal Information</h6>
            <div class="row g-3">
                <div class="col-md-4">
                    <label class="form-label" for="multicol-Fullname">Full Name</label>
                    <input type="text" v-model="staff.full_name" id="Fullname"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'full_name')}`"
                        placeholder="Full Name" />
                    <validate-input :errors="errors?.errors" value="full_name"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-Nickname">Nick Name</label>
                    <input type="text" id="multicol-Nickname" placeholder="Nick Name" v-model="staff.nick_name"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'nick_name')}`" />
                    <validate-input :errors="errors?.errors" value="nick_name"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-Gender">Gender</label>
                    <select id="multicol-Gender"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'gender')}`"
                        data-allow-clear="true" v-model="staff.gender">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="gender"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-Age">Age</label>
                    <input type="text" id="multicol-Age" placeholder="Age" v-model="staff.age"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'age')}`" />
                    <validate-input :errors="errors?.errors" value="age"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-DateBirth">Date of Birth</label>
                    <input type="date" id="multicol-DateBirth" placeholder="Date of Birth" v-model="staff.dob"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'dob')}`" />
                    <validate-input :errors="errors?.errors" value="dob"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-DateBirth">Nric</label>
                    <input type="text" id="multicol-DateBirth" placeholder="Nric" v-model="staff.nric"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'nric')}`" />
                    <validate-input :errors="errors?.errors" value="nric"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-MaritalStatus">Marital Status</label>
                    <select id="multicol-MaritalStatus"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'marital_status')}`"
                        data-allow-clear="true" v-model="staff.marital_status">
                        <option>Single</option>
                        <option>Married</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="marital_status"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-child">No of Children</label>
                    <input type="number" id="multicol-child" placeholder="No Of Children" v-model="staff.no_of_children"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'no_of_children')}`" />
                    <validate-input :errors="errors?.errors" value="no_of_children"></validate-input>
                </div>

                <div class="col-sm-12">
                    <div class="form-check form-check-primary">
                        <input class="form-check-input" type="checkbox" value="" id="customCheckPrimary"
                            v-model="staff.spouse_is_Working" :true-value="1" :false-value="0">
                        <label class="form-check-label" for="customCheckPrimary">Spouse Is Working</label>
                    </div>
                </div>
                <div class="col-md-6"><label class="form-label" for="multicol-email">Email</label>
                    <div class="input-group input-group-merge">
                        <input type="email" id="multicol-email"
                            :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'email')}`"
                            placeholder="john.doe" aria-label="john.doe" v-model="staff.email"
                            aria-describedby="multicol-email2"><span class="input-group-text"
                            id="multicol-email2">@example.com</span>
                    </div>
                    <validate-input :errors="errors?.errors" value="email"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Phone-No">Phone No</label>
                    <input type="number" id="multicol-Phone-No" v-model="staff.phone" placeholder="Phone No"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'phone')}`" />
                    <validate-input :errors="errors?.errors" value="phone"></validate-input>
                </div>
            </div>
            <hr class="my-4 mx-n4" />
            <h6>Address</h6>
            <div class="row g-3">
                <div class="col-md-4">
                    <label class="form-label" for="multicol-StreetAddress1">Street Address 1</label>
                    <input type="text" id="multicol-StreetAddress1"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'street_address_1')}`"
                        placeholder="Street Address 1" v-model="staff.street_address_1" />
                    <validate-input :errors="errors?.errors" value="street_address_1"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-StreetAddress2">Street Address 2</label>
                    <input type="text" id="multicol-StreetAddress2"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'street_address_2')}`"
                        v-model="staff.street_address_2" placeholder="Street Address 2" />
                    <validate-input :errors="errors?.errors" value="street_address_2"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-PostCode">PostCode</label>
                    <input type="text" id="multicol-PostCode"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'post_code')}`"
                        placeholder="PostCode" v-model="staff.post_code" />
                    <validate-input :errors="errors?.errors" value="post_code"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-State">State</label>
                    <select id="multicol-State"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'state')}`"
                        data-allow-clear="true" v-model="staff.state">
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
                    <validate-input :errors="errors?.errors" value="state"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-City">City</label>
                    <select id="multicol-State"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'city')}`"
                        data-allow-clear="true" v-model="staff.city">
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
                <div class="col-md-12"><label class="form-label" for="basic-icon-default-Remark">Remark</label>
                    <div class="input-group input-group-merge"><textarea rows="3" id="basic-icon-default-Remark"
                            :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'remark')}`"
                            placeholder="Remark" v-model="staff.remark"></textarea></div>
                    <validate-input :errors="errors?.errors" value="remark"></validate-input>
                </div>
            </div>
            <hr class="my-4 mx-n4" />
            <h6>EPF & Tax Information</h6>
            <div class="row g-3">
                <div class="col-md-6">
                    <label class="form-label" for="multicol-EPFNo">EPF No</label>
                    <input type="text" id="multicol-EPFNo" v-model="staff.epf_no" placeholder="EPF No"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'epf_no')}`" />
                    <validate-input :errors="errors?.errors" value="epf_no"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Tax-No">Tax No</label>
                    <input type="text" id="multicol-Tax-No" v-model="staff.tax_no" placeholder="Tax No"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'tax_no')}`" />
                    <validate-input :errors="errors?.errors" value="tax_no"></validate-input>
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
    name: "StaffListForm",
    components: { ValidateInput },
    props: ['edit_mode', 'form'],
    data: () => ({
        staff: {},
        errors: [],
        loading: false,
    }),
    methods: {
        updateStaffList(data) {
            axios.put('/staff-list/' + this.staff.id, data).then((res) => {
                this.$router.push('/staff/staff-list');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        createStaffList(data) {
            axios.post('/staff-list', data).then((res) => {
                this.$router.push('/staff/staff-list');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        onSubmit() {
            this.loading = true;
            let data = { ...this.staff };
            if (!this.edit_mode) {
                this.createStaffList(data);
            } else {
                this.updateStaffList(data);
            }
            setTimeout(() => {
                this.loading = false;
            }, 1000);

        },
    },
    mounted() {
        if (this.edit_mode) {
            // this.product = [];
            // this.product = this.form;
        }
    }
}
</script>
