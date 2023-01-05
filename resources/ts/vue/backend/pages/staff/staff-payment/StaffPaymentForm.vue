<template>
    <div class="card mb-4">
        <form class="card-body" v-on:submit.prevent="onSubmit">
            <div class="row g-3">
                <div class="col-md-12">
                    <label class="form-label" for="multicol-staffName">Staff Name</label>
                    <!-- <input type="text" v-model="payment.staff_name" id="staffName"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'staff_name')}`"
                        placeholder="Staff Name" /> -->
                    <multiselect v-model="payment.staff" :options="staffs" :multiple="false"  placeholder="Search by staff name" track-by="id" label="full_name">
                        <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
                    </multiselect>
                    <validate-input :errors="errors?.errors" value="staff"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-payment_date">Payment Date</label>
                    <input type="date" id="multicol-payment_date" placeholder="Payment Date"
                        v-model="payment.payment_date"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'payment_date')}`" />
                    <validate-input :errors="errors?.errors" value="payment_date"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-salary_month">Salary Month</label>
                    <select id="multicol-salary_month"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'salary_month')}`"
                        data-allow-clear="true" v-model="payment.salary_month">
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="salary_month"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-salary_month">Salary Year</label>
                    <select id="multicol-salary_month"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'salary_year')}`"
                        data-allow-clear="true" v-model="payment.salary_year">
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="salary_year"></validate-input>
                </div>

                <div class="col-md-4">
                    <label class="form-label" for="multicol-salary_description">Basic Salary Description</label>
                    <input type="text" v-model="payment.basic_salary_description" id="basic_salary_description"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'basic_salary_description')}`"
                        placeholder="Basic Salary Description" />
                    <validate-input :errors="errors?.errors" value="salary_description"></validate-input>
                </div>

                <div class="col-md-4">
                    <label class="form-label" for="multicol-basic_salary">Basic Salary</label>
                    <input type="number" id="multicol-basic_salary" placeholder="Basic Salary"
                        v-model="payment.basic_salary"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'basic_salary')}`" />
                    <validate-input :errors="errors?.errors" value="basic_salary"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-bonus_amount">Bonus Amount</label>
                    <input type="number" id="multicol-bonus_amount" placeholder="Bonus Amount"
                        v-model="payment.bonus_amount"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'bonus_amount')}`" />
                    <validate-input :errors="errors?.errors" value="bonus_amount"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-commission">Commission</label>
                    <input type="number" id="multicol-commission" placeholder="Commission" v-model="payment.commission"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'commission')}`" />
                    <validate-input :errors="errors?.errors" value="commission"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-over_time">Overtime Amount (Per Hour)</label>
                    <input type="number" id="multicol-over_time" placeholder="Overtime Amount (Per Hour)"
                        v-model="payment.overtime_amount_perhour"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'overtime_amount_perhour')}`" />
                    <validate-input :errors="errors?.errors" value="overtime_amount_perhour"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-over_time_hour">Overtime (Hour)</label>
                    <input type="number" id="multicol-over_time_hour" placeholder="Overtime (Hour)"
                        v-model="payment.overtime_hour"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'overtime_hour')}`" />
                    <validate-input :errors="errors?.errors" value="overtime_hour"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-claim">Claim</label>
                    <input type="number" id="multicol-claim" placeholder="Claim" v-model="payment.claim"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'claim')}`" />
                    <validate-input :errors="errors?.errors" value="claim"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-unpaide_leave">No. of Unpaid leave</label>
                    <input type="number" id="multicol-unpaide_leave" placeholder="No. of Unpaid leave"
                        v-model="payment.unpaide_leave"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'unpaide_leave')}`" />
                    <validate-input :errors="errors?.errors" value="unpade_leave"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-deduction">Deduction</label>
                    <input type="number" id="multicol-deduction" placeholder="Deduction" v-model="payment.deduction"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'deduction')}`" />
                    <validate-input :errors="errors?.errors" value="deduction"></validate-input>
                </div>

                <div class="col-sm-12">
                    <div class="form-check form-check-primary mt-3">
                        <input class="form-check-input" type="checkbox" id="customCheckPrimary" v-model="payment.epf"
                            :true-value="1" :false-value="0" />
                        <label class="form-check-label" for="customCheckPrimary">Has EPF</label>
                    </div>
                    <div class="form-check form-check-primary">
                        <input class="form-check-input" type="checkbox" id="customCheckSecondary"
                            v-model="payment.socso" :true-value="1" :false-value="0" />
                        <label class="form-check-label" for="customCheckSecondary">Has SOCSO</label>
                    </div>
                    <div class="form-check form-check-primary">
                        <input class="form-check-input" type="checkbox" id="customCheckSuccess" v-model="payment.eis"
                            :true-value="1" :false-value="0" />
                        <label class="form-check-label" for="customCheckSuccess">Has EIS</label>
                    </div>
                    <div class="form-check form-check-primary">
                        <input class="form-check-input" type="checkbox" id="customCheckDanger" v-model="payment.pcb"
                            :true-value="1" :false-value="0" />
                        <label class="form-check-label" for="customCheckDanger">Has INCOME TAX PCB</label>
                    </div>
                </div>

                <div class="col-md-6">
                    <label class="form-label" for="multicol-salary_month">Paying Account</label>
                    <select id="multicol-salary_month"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'paying_account')}`"
                        data-allow-clear="true" v-model="payment.paying_account">
                        <option value="Cash In Hand">
                        Cash In Hand
                        </option>
                        <option value="Payment Gateway - BillPlz Sdn Bhd">
                        Payment Gateway - BillPlz Sdn Bhd
                        </option>
                        <option value="Payment Gateway - Ipay88">Payment Gateway - Ipay88

                        </option>
                        <option value="Public Bank">Public Bank</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="paying_account"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-remark">Remark</label>
                    <input type="text" id="multicol-remark" placeholder="Remark" v-model="payment.remark"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'remark')}`" />
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
import Multiselect from 'vue-multiselect';
export default {
    name: "StaffPaymentForm",
    components: { ValidateInput, Multiselect },
    props: ['edit_mode', 'form'],
    data: () => ({
        payment: {},
        errors: [],
        loading: false,
        service: "",
        staffs: [],
    }),
    methods: {

        getStaffs(){
            axios.get('/staffs').then((res)=>{
                this.staffs = res.data.staffs;
            });
        },
        updateStaffPayment(data) {
            axios.put('/staff-payment/' + this.payment.id, data).then((res) => {
                this.$router.push('/staff/staff-payment-list');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        createStaffPayment(data) {
            axios.post('/staff-payment', data).then((res) => {
                this.$router.push('/staff/staff-payment-list');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        onSubmit() {
            this.loading = true;
            let data = { ...this.payment };
            if (!this.edit_mode) {
                this.createStaffPayment(data);
            } else {
                this.updateStaffPayment(data);
            }
            setTimeout(() => {
                this.loading = false;
            }, 1000);

        },
    },
    mounted() {
        this.getStaffs();
        if (this.edit_mode) {
            // this.product = [];
            // this.product = this.form;
        }
    }
}
</script>
