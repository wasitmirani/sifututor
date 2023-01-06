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
                    <input type="number" id="multicol-BasicSalary" placeholder="Basic Salary" v-model="staff.basic_salary"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'basic_salary')}`" />
                    <validate-input :errors="errors?.errors" value="basic_salary"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-StaffType">Staff Type</label>
                    <select id="multicol-StaffType"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'type')}`"
                        data-allow-clear="true" v-model="staff.type">
                        <option value="probation">Probation</option>
                        <option value="intern">Intern</option>
                        <option value="part-time">Part-Time</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="type"></validate-input>
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
                    <input type="number" id="multicol-child" placeholder="No Of Children" v-model="staff.no_children"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'no_children')}`" />
                    <validate-input :errors="errors?.errors" value="no_children"></validate-input>
                </div>

                <div class="col-sm-12">
                    <div class="form-check form-check-primary">
                        <input class="form-check-input" type="checkbox" value="" id="customCheckPrimary"
                            v-model="staff.spouse_working" :true-value="1" :false-value="0">
                        <label class="form-check-label" for="customCheckPrimary">Spouse Is Working</label>
                    </div>
                </div>
                <div class="col-md-6"><label class="form-label" for="multicol-email">Email</label>
                    <div class="input-group input-group-merge">
                        <input type="email" id="multicol-email"
                            :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'email')}`"
                            placeholder="john.doe" aria-label="john.doe" v-model="staff.email"
                            aria-describedby="multicol-email2">
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
                        data-allow-clear="true" @change="changeCity($event)"  v-model="staff.address.state">
                        <option  v-for="item in states" :value="item.id">{{item.name}}</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="state"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-City">City</label>
                    <select id="multicol-State"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'city')}`"
                        data-allow-clear="true" v-model="staff.address.city">
                        <option v-for="item in cities">{{item.name}}</option>

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
                <router-link to="/staff/staff-list" class="btn btn-label-secondary">Cancel</router-link>
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
        staff: {
            address:{},
        },
        errors: [],
        states:[],
        cities:[],
        loading: false,
        state:1,
    }),
    methods: {
        changeCity(event){
            console.log(event.target.value)
            this.getCities(event.target.value);
        },
        getStates(){
            axios.get('/states').then((res)=>{
                this.states=res.data.states;
            });
        },
        getCities(state_id){
            axios.get('/cities/'+state_id).then((res)=>{
                this.cities=res.data.cities;
            });
        },
        updateStaffList(data) {
            axios.put('/staff/' + this.staff.id, data).then((res) => {
                this.$router.push('/staff/staff-list');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        createStaffList(data) {
            axios.post('/staff', data).then((res) => {
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
        this.getStates();
        if (this.edit_mode) {
            this.staff = [];
            this.staff = this.form;
        }
    }
}
</script>
