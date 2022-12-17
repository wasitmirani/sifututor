<template>
    <div class="card mb-4">
        <form class="card-body" v-on:submit.prevent="onSubmit">
            <div class="row g-3 mb-4">
                <div class="col-md-6">
                    <label class="form-label" for="multicol-tutor_id">Tutor Id</label>
                    <input type="text" id="multicol-tutor_id" placeholder="Tutor Id" v-model="tutor.tutor_id"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'tutor_id')}`"
                        disabled />
                    <validate-input :errors="errors?.errors" value="tutor_id"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-StartWorkingDate">Start Working Date</label>
                    <input type="date" v-model="tutor.start_date" id="StartWorkingDate"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'start_date')}`"
                        placeholder="Start Working Date" />
                    <validate-input :errors="errors?.errors" value="start_date"></validate-input>
                </div>
            </div>
            <!-- <hr class="my-4 mx-n4" /> -->
            <h6>Personal Information</h6>
            <div class="row g-3">
                <div class="col-md-4">
                    <label class="form-label" for="multicol-Fullname">Full Name</label>
                    <input type="text" v-model="tutor.full_name" id="Fullname"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'full_name')}`"
                        placeholder="Full Name" />
                    <validate-input :errors="errors?.errors" value="full_name"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-Nickname">Nick Name</label>
                    <input type="text" id="multicol-Nickname" placeholder="Nick Name" v-model="tutor.nick_name"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'nick_name')}`" />
                    <validate-input :errors="errors?.errors" value="nick_name"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-Gender">Gender</label>
                    <select id="multicol-Gender"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'gender')}`"
                        data-allow-clear="true" v-model="tutor.gender">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="gender"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-Age">Age</label>
                    <input type="text" id="multicol-Age" placeholder="Age" v-model="tutor.age"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'age')}`" />
                    <validate-input :errors="errors?.errors" value="age"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-DateBirth">Date of Birth</label>
                    <input type="date" id="multicol-DateBirth" placeholder="Date of Birth" v-model="tutor.dob"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'dob')}`" />
                    <validate-input :errors="errors?.errors" value="dob"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-DateBirth">Nric</label>
                    <input type="text" id="multicol-DateBirth" placeholder="Nric" v-model="tutor.nric"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'nric')}`" />
                    <validate-input :errors="errors?.errors" value="nric"></validate-input>
                </div>
                <div class="col-md-4"><label class="form-label" for="multicol-email">Email</label>
                    <div class="input-group input-group-merge">
                        <input type="email" id="multicol-email"
                            :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'email')}`"
                            placeholder="john.doe" aria-label="john.doe" v-model="tutor.email"
                            aria-describedby="multicol-email2"><span class="input-group-text"
                            id="multicol-email2">@example.com</span>
                    </div>
                    <validate-input :errors="errors?.errors" value="email"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-Phone-No">Phone No</label>
                    <input type="number" id="multicol-Phone-No" v-model="tutor.phone" placeholder="Phone No"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'phone')}`" />
                    <validate-input :errors="errors?.errors" value="phone"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-MaritalStatus">Marital Status</label>
                    <select id="multicol-MaritalStatus"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'marital_status')}`"
                        data-allow-clear="true" v-model="tutor.marital_status">
                        <option>Single</option>
                        <option>Married</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="marital_status"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-attended_training_date">Attended Training Date</label>
                    <input type="date" v-model="tutor.attended_training_date" id="attended_training_date"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'attended_training_date')}`"
                        placeholder="Attended Training Date" />
                    <validate-input :errors="errors?.errors" value="attended_training_date"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-shirt_size">Shirt Size</label>
                    <input type="text" v-model="tutor.shirt_size" id="shirt_size"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'shirt_size')}`"
                        placeholder="Shirt Size" />
                    <validate-input :errors="errors?.errors" value="shirt_size"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-bank_name">Bank Name</label>
                    <input type="text" v-model="tutor.bank_name" id="bank_name"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'bank_name')}`"
                        placeholder="Bank Name" />
                    <validate-input :errors="errors?.errors" value="bank_name"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-bank_account_no">Bank Account No</label>
                    <input type="text" v-model="tutor.bank_account_no" id="bank_account_no"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'bank_account_no')}`"
                        placeholder="Bank Account No" />
                    <validate-input :errors="errors?.errors" value="bank_account_no"></validate-input>
                </div>
            </div>
            <hr class="my-4 mx-n4" />
            <h6>Address</h6>
            <div class="row g-3">
                <div class="col-md-4">
                    <label class="form-label" for="multicol-StreetAddress1">Street Address 1</label>
                    <input type="text" id="multicol-StreetAddress1"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'street_address_1')}`"
                        placeholder="Street Address 1" v-model="tutor.street_address_1" />
                    <validate-input :errors="errors?.errors" value="street_address_1"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-StreetAddress2">Street Address 2</label>
                    <input type="text" id="multicol-StreetAddress2"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'street_address_2')}`"
                        v-model="tutor.street_address_2" placeholder="Street Address 2" />
                    <validate-input :errors="errors?.errors" value="street_address_2"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-PostCode">PostCode</label>
                    <input type="text" id="multicol-PostCode"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'post_code')}`"
                        placeholder="PostCode" v-model="tutor.post_code" />
                    <validate-input :errors="errors?.errors" value="post_code"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-State">State</label>
                    <select id="multicol-State"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'state')}`"
                        data-allow-clear="true" v-model="tutor.state">
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
                        data-allow-clear="true" v-model="tutor.city">
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
                            placeholder="Remark" v-model="tutor.remark"></textarea></div>
                    <validate-input :errors="errors?.errors" value="remark"></validate-input>
                </div>
            </div>
            <hr class="my-4 mx-n4" />
            <h6>Commitment Fee</h6>
            <div class="row g-3">
                <small class="mt-0">RM 50 payment receipt is required to be uploaded for a new student
                    registration.</small>
                <div class="col-md-4 col-sm-12">
                    <label class="form-label" for="multicol-payment_attacthment">Payment Attachment</label>
                    <input type="file" id="multicol-payment_attacthment"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'payment_attacthment')}`"
                        placeholder="Payment Attachment" :v-model="tutor.payment_attacthment" />
                    <validate-input :errors="errors?.errors" value="payment_attacthment"></validate-input>
                </div>
                <div class="col-md-4 col-sm-12">
                    <label class="form-label" for="multicol-payment_date">Fee Payment Date</label>
                    <input type="date" id="multicol-payment_date" v-model="tutor.payment_date"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'payment_date')}`"
                        placeholder="Fee Payment Date" />
                    <validate-input :errors="errors?.errors" value="payment_date"></validate-input>
                </div>
                <div class="col-md-4 col-sm-12">
                    <label class="form-label" for="multicol-recieving_account">Receiving Account</label>
                    <select id="multicol-recieving_account"
                        :class="`select2 form-select  ${this.$root.appendValidateClass(errors?.errors, 'payment_date')}`"
                        data-allow-clear="true" v-model="tutor.recieving_account">
                        <option value="44">Cash At Bank - Maybank</option>
                        <option value="45">Cash In Hand</option>
                        <option value="73">Payment Gateway - BillPlz Sdn Bhd</option>
                        <option value="76">Payment Gateway - Ipay88</option>
                        <option value="68">Public Bank</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="recieving_account"></validate-input>
                </div>
                <div class="col-md-12">
                    <div class="form-group">
                        <label> Subjects </label>
                        <multiselect v-model="subjects" :options="subjectList" :multiple="true" group-values="subjects"
                            group-label="category" :group-select="true" placeholder="Search by subject name"
                            track-by="name" label="name">
                            <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
                        </multiselect>
                    </div>
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
import Multiselect from 'vue-multiselect';
export default {
    name: "TutorListForm",
    components: { ValidateInput, Multiselect },
    props: ['edit_mode', 'form'],
    data: () => ({
        tutor: {},
        errors: [],
        loading: false,
        subjectList: [],
        subjects: [],
    }),
    methods: {
        getSubjectList() {
            axios.get('/subject-list').then((res) => {
                this.subjectList = res.data.subjects;
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        updateTutorList(data) {
            axios.put('/tutor-list/' + this.tutor.id, data).then((res) => {
                this.$router.push('/tutor/tutor-list');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        createTutorList(data) {
            axios.post('/tutor-list', data).then((res) => {
                this.$router.push('/tutor/tutor-list');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        onSubmit() {
            this.loading = true;
            let data = { ...this.tutor };
            if (!this.edit_mode) {
                this.createTutorList(data);
            } else {
                this.updateTutorList(data);
            }
            setTimeout(() => {
                this.loading = false;
            }, 1000);

        },
    },
    mounted() {
        this.getSubjectList();
        if (this.edit_mode) {
            // this.product = [];
            // this.product = this.form;
        }
    }
}
</script>
