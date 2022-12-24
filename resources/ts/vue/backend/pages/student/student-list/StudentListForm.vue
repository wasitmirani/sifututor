<template>
    <div class="card mb-4">
        <form class="card-body" v-on:submit.prevent="onSubmit">
            <div class="row g-3 mb-4">
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Register Date">Register Date</label>
                    <input type="date" v-model="submitData.register_date" id="multicol-Register Date"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'register_date')}`"
                        placeholder="Register Date" />
                    <validate-input :errors="errors?.errors" value="register_date"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-AdmininCharge">Admin in Charge</label>
                    <select id="multicol-AdmininCharge"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'admin_charge')}`"
                        data-allow-clear="true" v-model="submitData.admin_charge">
                        <option value="Sorfina"> Sorfina</option>
                        <option value="Fazira">Fazira</option>
                        <option value="ADIB AZMI">ADIB AZMI</option>
                        <option value="Aidid">Aidid </option>
                        <option value="Alif Naquiddin">Alif Naquiddin</option>

                    </select>
                    <validate-input :errors="errors?.errors" value="admin_charge"></validate-input>
                </div>
            </div>
            <h6>Student Information</h6>
            <div class="row g-3 mb-3" v-for="(item, index) in studentInfo" :key="index">
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Fullname">Fullname</label>
                    <input type="text" v-model="stdInfo[index].fullname" id="multicol-Fullname" class="form-control"
                        placeholder="Fullname" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Gender">Gender</label>
                    <select id="multicol-Gender" class="select2 form-select" data-allow-clear="true"
                        v-model="stdInfo[index].gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Fullname">Age</label>
                    <input type="number" id="multicol-Age" class="form-control" placeholder="Age"
                        v-model="stdInfo[index].age" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Dob">Date of Birth</label>
                    <input type="date" id="multicol-Dob" class="form-control" placeholder="Dob"
                        v-model="stdInfo[index].dob" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Nric">Nric</label>
                    <input type="text" id="multicol-Nric" class="form-control" placeholder="Nric"
                        v-model="stdInfo[index].nric" />
                </div>
                <div class="col-md-6 align-self-end text-end" v-if="index !== 0">
                    <button type="button" class="btn btn-danger" @click="removeStudent(index)"> <i
                            class="fa-solid fa-trash me-2"></i> Remove Student </button>
                </div>
            </div>
            <button type="button" class="btn btn-primary mt-3" @click="addStudent"> <i class="fa fa-plus me-2"></i> Add
                Student</button>
            <hr class="my-4 mx-n4" />
            <h6>Customer Information</h6>
            <div class="row g-3">
                <div class="col-md-6">
                    <label class="form-label" for="multicol-FullName">FullName</label>
                    <input type="text" id="multicol-FullName"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'customer.full_name')}`"
                        placeholder="FullName" v-model="customer.full_name" />
                    <validate-input :errors="errors?.errors" value="full_name"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Gender">Gender</label>
                    <select id="multicol-Gender"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'customer.gender')}`"
                        data-allow-clear="true" v-model="customer.gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="gender"></validate-input>
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
                    <validate-input :errors="errors?.errors" value="nric"></validate-input>
                </div>
            </div>
            <hr class="my-4 mx-n4" />
            <h6>Customer Address</h6>
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
                    <label class="form-label" for="multicol-State">State</label>
                    <select id="multicol-State"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'customer.address.state')}`"
                        data-allow-clear="true" v-model="customer.address.state">
                        <option value="">Select</option>
                        <option value="Selangor">Selangor</option>
                        <option value="Penang">Penang</option>
                        <option value="Johor">Johor</option>
                    <option value="Kuala Lumpur">Kuala Lumpur</option>
                        <option value="Negeri Sembilan">Negeri Sembilan</option>
                        <option value="Melaka">Melaka</option>
                        <option value="Pahang">Pahang</option>
                        <option value="Perlis">Perlis</option>
                        <option value="Perak">Perak</option>
                        <option value="Kedah">Kedah</option>
                        <option value="Terengganu">Terengganu</option>
                        <option value="Kelantan">Kelantan</option>
                        <option value="Serawak"> Serawak</option>
                        <option value="Sabah">Sabah</option>
                        <option value="Putrajaya">Putrajaya</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="state"></validate-input>
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
                    <validate-input :errors="errors?.errors" value="customer.address.city"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-PostCode">PostCode</label>
                    <input type="text" id="multicol-PostCode"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'customer.address.post_code')}`"
                        placeholder="PostCode" v-model="customer.address.post_code" />
                    <validate-input :errors="errors?.errors" value="post_code"></validate-input>
                </div>
            </div>
            <hr class="my-4 mx-n4" />
            <h6>Commitment Fee</h6>
            <div class="row g-3">
                <small class="mt-0">RM 50 payment receipt is required to be uploaded for a new student
                    registration.</small>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-PaymentAttachment">Payment Attachment</label>
                    <input type="file" id="multicol-PaymentAttachment" @change="previewFiles"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'payment_attachment')}`"
                        placeholder="Payment Attachment" />
                    <validate-input :errors="errors?.errors" value="payment_attachment"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-PaymentDate">Fee Payment Date</label>
                    <input type="date" id="multicol-PaymentDate"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'fee_payment_date')}`"
                        placeholder="Fee Payment Date" v-model="submitData.fee_payment_date" />
                    <validate-input :errors="errors?.errors" value="fee_payment_date"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-ReceivingAccountId">Receiving Account</label>
                    <select id="multicol-ReceivingAccountId"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'receiving_account')}`"
                        data-allow-clear="true" v-model="submitData.receiving_account">
                        <option value="45">Cash In Hand</option>
                        <option value="73">Payment Gateway - BillPlz Sdn Bhd</option>
                        <option value="76">Payment Gateway - Ipay88</option>
                        <option value="68">Public Bank</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="receiving_account"></validate-input>
                </div>
            </div>
            <hr class="my-4 mx-n4" />
            <h6>Subject Subscribes</h6>
            <div class="row g-3 mb-4">
                <div class="col-md-6">
                    <label class="form-label" for="multicol-HourPerSubject">Hour Per Subject</label>
                    <input type="text" id="multicol-HourPerSubject"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'hour_per_subject')}`"
                        placeholder="Hour Per Subject" v-model="submitData.hour_per_subject" />
                    <validate-input :errors="errors?.errors" value="hour_per_subject"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-SubscriptionDurationTerm">Subscription Duration Term</label>
                    <select id="multicol-SubscriptionDurationTerm"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'subscription_duration')}`"
                        data-allow-clear="true" v-model="submitData.subscription_duration">
                        <option>Short Term</option>
                        <option>Long Term</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="subscription_duration"></validate-input>
                </div>
                <div class="col-md-6">
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
// import ValidateInput from "../../../components/ValidateInputComponent.vue";
import ValidateInput from "../../../components/ValidateInputComponent.vue";
import Multiselect from 'vue-multiselect';
export default {
    name: "StudentListForm",
    props: ['edit_mode', 'form'],
    components: { Multiselect, ValidateInput },
    data: () => ({
        studentInfo: [{
            fullname: "",
            gender: "",
            age: "",
            dob: "",
            nric: "",
        }],
        stdInfo: [{}],
        errors: [],
        subjectList: [],
        subjects: [],
        submitData: {},
        customer: {
            address: {},
        },
        customer_address: {},
        payment_attachment: [],
    }),
    methods: {
        previewFiles(event) {
            this.payment_attachment = event.target.files
            // payment_attachment
        },
        addStudent() {
            this.studentInfo.push({
                fullname: "",
                gender: "",
                age: "",
                dob: "",
                nric: "",
            })
            this.stdInfo.push({
                fullname: "",
                gender: "",
                age: "",
                dob: "",
                nric: "",
            })
        },
        removeStudent(key) {
            this.studentInfo = this.studentInfo.filter((todo, index) => {
                return index !== key
            });
            this.stdInfo = this.stdInfo.filter((todo, index) => {
                return index !== key
            })
        },
        getSubjectList() {
            axios.get('/subject-list').then((res) => {
                this.subjectList = res.data.subjects;
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        updateStudent(data) {
            axios.put('/student/' + this.submitData.id, data).then((res) => {
                this.$router.push('/students/student-list');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        createStudent(data) {
            axios.post('/student', data).then((res) => {
                this.$router.push('/students/student-list');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        onSubmit() {
            this.loading = true;
            let data = { ...this.submitData, customer_address: this.customer_address, customer: this.customer, students: this.stdInfo, subjects: this.subjects };
            if (!this.edit_mode) {
                this.createStudent(data);
            } else {
                this.updateStudent(data);
            }
            setTimeout(() => {
                this.loading = false;
            }, 1000);

        },
    },
    mounted() {
        this.getSubjectList();
        if (this.edit_mode) {
            this.submitData = [];
            this.submitData = this.form;
            this.subjects = this.form?.subjects;
            this.customer = this.form?.customer;
            this.studentInfo = this.form?.students
            this.stdInfo = this.form?.students;
            // console.log('this.submitData', this.submitData);
        }
    }
}
</script>
