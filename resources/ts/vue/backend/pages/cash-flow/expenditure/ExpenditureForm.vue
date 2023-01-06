<template>
    <div class="card mb-4">
        <form class="card-body" v-on:submit.prevent="onSubmit">
            <div class="row g-3">
                <div class="col-md-4">
                    <label class="form-label" for="multicol-OccuranceDate">Occurance Date</label>
                    <input type="date" v-model="expenditure.description" id="OccuranceDate"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'occurance_Date')}`"
                        placeholder="Occurance Date" />
                    <validate-input :errors="errors?.errors" value="occurance_Date"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-Category">Category</label>
                    <select id="multicol-Day"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'description')}`"
                        data-allow-clear="true" v-model="expenditure.category">
                        <option selected="selected">Accounting</option>
                        <option>Administration </option>
                        <option>Administration Fee</option>
                        <option>Advertisement </option>
                        <option>Bank Charge</option>
                        <option>Bank Charges</option>
                        <option>Bank Charges- Bulk Payment</option>
                        <option>Bonus</option>
                        <option>Business Reference</option>
                        <option>Cash in hand</option>
                        <option>Co Phone</option>
                        <option>Customer Refund</option>
                        <option>Director </option>
                        <option>Directors expenses</option>
                        <option>Electricity Expenses </option>
                        <option>Entertainment</option>
                        <option>ID Staff</option>
                        <option>Income Tax</option>
                        <option>Internship Allowance</option>
                        <option>Licence</option>
                        <option>Marketing </option>
                        <option>Office Equipment</option>
                        <option>Office Fragrance</option>
                        <option>Office Property</option>
                        <option>Office Supplies </option>
                        <option>Office System</option>
                        <option>Office Utilities</option>
                        <option>Phone Office</option>
                        <option>Printing </option>
                        <option>Refund</option>
                        <option>Renovation</option>
                        <option>Rental </option>
                        <option>Salary</option>
                        <option>Seminar</option>
                        <option>SOCSO </option>
                        <option>Software</option>
                        <option>Staff - Zakat</option>
                        <option>Staff Allowance </option>
                        <option>Staff Dinner</option>
                        <option>Staff EIS </option>
                        <option>Staff EPF</option>
                        <option>Staff KWSP </option>
                        <option>Staff Medical</option>
                        <option>Staff PERKESO</option>
                        <option>Staff SIP</option>
                        <option>Staff SOCSO </option>
                        <option>Staff Team Building</option>
                        <option>Staff Teambuilding</option>
                        <option>Staff Welfare</option>
                        <option>Stationery</option>
                        <option>System</option>
                        <option>System Topup</option>
                        <option>Training</option>
                        <option>Transfer</option>
                        <option>Travelling Expenses </option>
                        <option>utilities</option>
                        <option>Water Charges</option>
                        <option>Web System</option>
                        <option>Withdrawal</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="transction_date"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-Description">Description</label>
                    <input type="text" id="multicol-Description" placeholder="Description"
                        v-model="expenditure.description"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'description')}`" />
                    <validate-input :errors="errors?.errors" value="description"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-Description">Chart of Account</label>
                    <select id="multicol-Day"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'description')}`"
                        data-allow-clear="true" v-model="expenditure.chart_of_account">
                        <option selected="selected" value="39">Accounting Fee</option>
                        <option value="21">Office Supplies</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="description"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-Quantity">Quantity</label>
                    <input type="number" id="multicol-Quantity" placeholder="Quantity" v-model="expenditure.description"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'quantity')}`" />
                    <validate-input :errors="errors?.errors" value="quantity"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-CostPerUnit">Cost Per Unit</label>
                    <input type="number" id="multicol-CostPerUnit" placeholder="Cost Per Unit"
                        v-model="expenditure.cost_per_unit"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'cost_per_unit')}`" />
                    <validate-input :errors="errors?.errors" value="cost_per_unit"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-PayingAccount">Paying Account</label>
                    <select id="multicol-PayingAccount"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'payment_account')}`"
                        data-allow-clear="true" v-model="expenditure.payment_account">
                        <option value="44">Cash At Bank - Maybank</option>
                        <option value="45">Cash In Hand</option>
                        <option value="73">Payment Gateway - BillPlz Sdn Bhd</option>
                        <option value="76">Payment Gateway - Ipay88</option>
                        <option value="68">Public Bank</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="payment_account"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-payment_Date">Payment Date</label>
                    <input type="number" id="multicol-payment_Date" placeholder="Payment Date"
                        v-model="expenditure.payment_Date"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'payment_Date')}`" />
                    <validate-input :errors="errors?.errors" value="payment_Date"></validate-input>
                </div>
                <div class="col-md-4 col-sm-12">
                    <label class="form-label" for="multicol-payment_attacthment">Attachment</label>
                    <input type="file" id="multicol-payment_attacthment"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'attachment')}`"
                        placeholder="Attachment" :v-model="expenditure.attachment">
                    <small> Supported Extensions: doc,docx,pdf,jpg,jpeg,png,zip </small>
                    <validate-input :errors="errors?.errors" value="attachment"></validate-input>
                </div>
                <div class="col-md-12"><label class="form-label" for="basic-icon-default-message">Remark</label>
                    <div class="input-group input-group-merge"><textarea rows="3" id="basic-icon-default-message"
                            :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'remark')}`"
                            placeholder="Remark" v-model="expenditure.remark"></textarea></div>
                    <validate-input :errors="errors?.price" value="remark"></validate-input>
                </div>
            </div>
            <hr class="my-4 mx-n4">
            <div>
                <button type="submit" class="btn btn-primary me-sm-3 me-1">Submit</button>
                <button type="reset" class="btn btn-label-secondary">Cancel</button>
            </div>
        </form>
    </div>
</template>
<script>
import ValidateInput from "../../../components/ValidateInputComponent.vue";
export default {
    name: "ExpenditureForm",
    components: { ValidateInput },
    props: ['edit_mode', 'form'],
    data: () => ({
        expenditure: {},
        errors: [],
        loading: false,
    }),
    methods: {
        updateJournal(data) {
            axios.put('/expenditure/' + this.expenditure.id, data).then((res) => {
                this.$router.push('/cash-flow/journal-ledger');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        createJournal(data) {
            axios.post('/expenditure', data).then((res) => {
                this.$router.push('/cash-flow/journal-ledger');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        onSubmit() {
            this.loading = true;
            let data = { ...this.expenditure };
            if (!this.edit_mode) {
                this.createJournal(data);
            } else {
                this.updateJournal(data);
            }
            setTimeout(() => {
                this.loading = false;
            }, 1000);

        },
    },
    mounted() {
        if (this.edit_mode) {
            // this.expenditure = [];
            // this.expenditure = this.form;
        }
    }
}
</script>
