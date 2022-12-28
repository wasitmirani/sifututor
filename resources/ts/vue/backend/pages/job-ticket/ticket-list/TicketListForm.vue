<template>
    <div class="card mb-4">
        <form class="card-body" v-on:submit.prevent="onSubmit">
            <div class="row g-3 mb-4">
                <div class="col-md-4 col-sm-12">
                    <label class="form-label" for="multicol-Register Date">Register Date</label>

                    <input type="date" v-model="submitData.register_date" id="multicol-Register Date"
                    :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'register_date')}`"
                    placeholder="Register Date" />
                <validate-input :errors="errors?.errors" value="register_date"></validate-input>
                </div>
                <div class="col-md-4 col-sm-12">
                    <label class="form-label" for="multicol-EstimateCommission">Estimate Commission</label>

                        <input type="text" v-model="submitData.estimate_commission" id="multicol-Register Date"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'estimate_commission')}`"
                        placeholder="estimate_commission" />
                    <validate-input :errors="errors?.errors" value="estimate_commission"></validate-input>
                </div>
                <div class="col-md-4 col-sm-12">
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
            <h6 class="mb-0">Student Information</h6>
            <div class="row g-3 mb-3">
                <div class="col-md-6 col-sm-12">
                    <label class="form-label" for="multicol-EstimateCommission">Search Exising Student</label>
                    <multiselect v-model="student" :options="studentList" track-by="id" label="name"
                        placeholder="Search by student name">
                    </multiselect>
                </div>
            </div>
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
                    <button type="button" class="btn btn-label-danger mt-4 waves-effect"
                        @click="removeStudent(index)"> <i class="fa-solid fa-trash me-2"></i> Remove Student
                    </button>
                </div>
            </div>
            <button type="button" class="btn btn-primary mt-3" @click="addStudent"> <i class="fa fa-plus me-2"></i> Add
                Student</button>

            <hr class="my-4 mx-n4" />
            <h6>Student Address</h6>
            <div class="row g-3">
                <div class="col-md-12">
                    <label class="form-label" for="multicol-StreetAddress1">Street Address 1</label>
                    <input v-model="submitData.student_address.address" type="text" id="multicol-StreetAddress1" class="form-control"
                        placeholder="Street Address 1" />
                </div>

                <div class="col-md-6">
                    <label class="form-label" for="multicol-City">City</label>
                    <input type="text" v-model="submitData.student_address.city" id="multicol-City" class="form-control" placeholder="City" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-PostCode">PostCode</label>
                    <input type="text" v-model="submitData.student_address.postcode" id="multicol-PostCode" class="form-control" placeholder="PostCode" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Latitude">Latitude</label>
                    <input type="text" id="multicol-Latitude" v-model="submitData.student_address.latitude" class="form-control" placeholder="Latitude" />
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-Longitude">Longitude</label>
                    <input type="text" id="multicol-Longitude" v-model="submitData.student_address.longitude" class="form-control" placeholder="Longitude" />
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="multicol-State">State</label>
                    <select id="multicol-State"  v-model="submitData.student_address.state"  class="select2 form-select" data-allow-clear="true">
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
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="basic-icon-default-message">Remarks</label>
                    <div class="input-group input-group-merge">
                        <textarea id="basic-icon-default-message"  rows="3" v-model="submitData.remarks" class="form-control" placeholder="Remark"></textarea>
                    </div>
                </div>
            </div>
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
                            aria-describedby="multicol-email2">
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
                        <option value="Pulau Inda">Pulau Indah</option>
                        <option value="Pulau Ketam">Pulau Ketam</option>
                        <option value="Puncak Alam">Puncak Alam</option>
                        <option value="Rasa">Rasa</option>
                        <option value="Rawang">Rawang</option>
                        <option value="Sabak Bernam">Sabak Bernam</option>
                        <option value="Sekinchan">Sekinchan</option>

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
                        <option value="Cash In Hand">Cash In Hand</option>
                        <option value="Payment Gateway - BillPlz Sdn Bhd ">Payment Gateway - BillPlz Sdn Bhd</option>
                        <option value="Payment Gateway - Ipay88">Payment Gateway - Ipay88</option>
                        <option value="Public Bank">Public Bank</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="receiving_account"></validate-input>
                </div>
            </div>
            <hr class="my-4 mx-n4" />
            <h6>Subject Subscribes</h6>
            <div class="row g-3 mb-3" v-for="(item, index) in SubjectSubscribe" :key="index">
                <div class="mb-3 col-lg-6 col-xl-3 col-12 mb-0">
                    <label class="form-label" for="multicol-Subject">Subject</label>
                    <input type="text" id="multicol-Subject" class="form-control" placeholder="Subject" />
                </div>
                <div class="mb-3 col-lg-6 col-xl-3 col-12 mb-0">
                    <label class="form-label" for="multicol-Quantity">Quantity</label>
                    <input type="number" id="multicol-Quantity" class="form-control" placeholder="Quantity" min="0" />
                </div>
                <div class="mb-3 col-lg-6 col-xl-2 col-12 mb-0">
                    <label class="form-label" for="multicol-Day">Day</label>
                    <select id="multicol-Day" class="select2 form-select" data-allow-clear="true">
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday </option>
                        <option value="Friday">Friday</option>
                        <option value="Weekday">Weekday</option>
                        <option value="Weekend">Weekend</option>
                    </select>
                </div>
                <div class="mb-3 col-lg-6 col-xl-2 col-12 mb-0">
                    <label class="form-label" for="multicol-Time">Time (24hrs format)</label>
                    <input type="time" id="multicol-Time" class="form-control" placeholder="Subject" />
                </div>
                <div class="mb-3 col-lg-12 col-xl-2 col-12 d-flex align-items-center mb-0" v-if="index !== 0">
                    <button type="button" class="btn btn-label-danger mt-4 waves-effect"
                        @click="removeSubjectSubscription(index)"> <i class="fa-solid fa-trash me-2"></i> Remove Item
                    </button>
                </div>
            </div>
            <button type="button" class="btn btn-primary mt-3" @click="addSubjectSubscription"> <i
                    class="fa fa-plus me-2"></i>
                Add Item</button>
            <div class="row g-3 mt-3">
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
            </div>
            <hr class="my-4 mx-n4" />
            <div>
                <button type="submit" class="btn btn-primary me-sm-3 me-1">Submit</button>
                <button type="reset" class="btn btn-label-secondary">Cancel</button>
            </div>
        </form>
    </div>
</template>
<script>
import Multiselect from 'vue-multiselect';
export default {
    name: "TicketListForm",
    components: { Multiselect },
    props: ['edit_mode', 'form'],
    data: () => ({
        studentInfo: [{
            fullname: "",
            gender: "",
            age: "",
            dob: "",
            nric: "",
        }],
        stdInfo: [{}],
        errors: {},
        SubjectSubscribe: [{
            subject: "",
            quantity: "",
            day: "",
            time: "",
        }],
        subjectSub: [{}],
        studentList: [],
        submitData:{
            student_address:{},
        },
        customer: {
            address: {},
        },
        customer_address: {},
        student: [],
    }),
    watch: {
        student: function (newValue, oldValue) {
            console.log("new", newValue);
            console.log("old", oldValue);
            const arr = this.studentList?.filter(item => item.student_id === newValue.student_id);
            console.log('arr', arr);
            // this.stdInfo = 
            // this.SupplierList.filter((v) => ())
            // setTimeout(() => {
            //     this.supplierAddress = { ...this.supplierAddress, supplier_address: arr[0]?.address, supplier_city: arr[0]?.city, supplier_zipcode: arr[0]?.zip_code }
            // }, 1000);
        },
    },
    methods: {
        addSubjectSubscription() {
            this.SubjectSubscribe.push({
                subject: "",
                quantity: "",
                day: "",
                time: "",
            });
            this.subjectSub.push({
                subject: "",
                quantity: "",
                day: "",
                time: "",
            })
        },
        removeSubjectSubscription(key) {
            this.SubjectSubscribe = this.SubjectSubscribe.filter((todo, index) => {
                return index !== key
            });
            this.subjectSub = this.subjectSub.filter((todo, index) => {
                return index !== key
            })
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
        getStudent() {
            axios.get('/student-list').then((res) => {
                this.studentList = res.data.students.map((item, index) => {
                    return { id: index + Math.floor((Math.random() * 10000000)), name: item.fullname }
                });

            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        updateTicket(data) {
            axios.put('/job-ticket/' + this.submitData.id, data).then((res) => {
                this.$router.push('/job-ticket/ticket-list');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        createTicket(data) {
            axios.post('/job-ticket', data).then((res) => {
                this.$router.push('/job-ticket/ticket-list');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        onSubmit() {
            this.loading = true;
            let data = { ...this.submitData, customer_address: this.customer_address, customer: this.customer, students: this.stdInfo, subjects: this.subjects };
            if (!this.edit_mode) {
                this.createTicket(data);
            } else {
                this.updateTicket(data);
            }
            setTimeout(() => {
                this.loading = false;
            }, 1000);

        },
    },
    mounted() {
        this.getStudent();
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
