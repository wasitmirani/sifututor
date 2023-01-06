<template>
    <div class="card mb-4">
        <form class="card-body" v-on:submit.prevent="onSubmit">
            <div class="row g-3">
                <div class="col-md-4">
                    <label class="form-label" for="multicol-Description">Description</label>
                    <input type="text" v-model="journalLedger.description" id="Description"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'description')}`"
                        placeholder="Description" />
                    <validate-input :errors="errors?.errors" value="description"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-TransactionDate">Transaction Date</label>
                    <input type="date" id="multicol-TransactionDate" placeholder="Transaction Date"
                        v-model="journalLedger.transction_date"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'transction_date')}`" />
                    <validate-input :errors="errors?.errors" value="transction_date"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-SupportingDocumentDate">Supporting Document Date</label>
                    <input type="date" id="multicol-SupportingDocumentDate" placeholder="SupportingDocumentDate"
                        v-model="journalLedger.supporting_date"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'supporting_date')}`" />
                    <validate-input :errors="errors?.errors" value="supporting_date"></validate-input>
                </div>
            </div>
            <hr class="my-4 mx-n4" />
            <h6>Chart Of Accounts</h6>
            <div class="row g-3 mb-3" v-for="(item, index) in chartAccount" :key="index">
                <div class="mb-3 col-lg-3 col-xl-3 col-12 mb-0">
                    <label class="form-label" for="multicol-chartofAccount">Chart of Account</label>
                    <select id="multicol-Day" class="select2 form-select" data-allow-clear="true">
                        <option value="46">Acc.Depr - Air-Conditioners</option>
                        <option value="47">Acc.Depr - Computer &amp; Software</option>
                        <option value="48">Acc.Depr - Furniture &amp; Fittings</option>
                        <option value="49">Acc.Depr - Maintenance Equipment &amp; Tools</option>
                        <option value="50">Acc.Depr - Office Equipment</option>
                        <option value="7">Account Payable</option>
                        <option value="6">Account Receivable</option>
                        <option value="39">Accounting Fee</option>
                        <option value="58">Administration Fee</option>
                        <option value="34">Air-Cond Services</option>
                        <option value="17">Air-Conditioners</option>
                        <option value="38">Bank Charges &amp; Commission</option>
                        <option value="55">Capital Account</option>
                        <option value="44">Cash At Bank - Maybank</option>
                        <option value="45">Cash In Hand</option>
                        <option value="78">Company Car Insurance &amp; Roadtax</option>
                        <option value="72">Company Phone</option>
                        <option value="40">Computer &amp; Software</option>
                        <option value="37">Computer Software Upkeep</option>
                        <option value="1">Cost of Good Sold</option>
                        <option value="3">Current Profit &amp; Loss</option>
                        <option value="62">Customer Refund </option>
                        <option value="18">Depreciation of Fixed Assets</option>
                        <option value="64">Director</option>
                        <option value="26">Donation &amp; Gift</option>
                        <option value="19">Electricity expenses</option>
                        <option value="65">Entertainment Expenses</option>
                        <option value="41">Furniture &amp; Fittings</option>
                        <option value="51">GST Control Account</option>
                        <option value="20">GST Expenses</option>
                        <option value="2">Inventory Account</option>
                        <option value="5">Inventory Over And Short</option>
                        <option value="77">Ipay88 Fee</option>
                        <option value="42">Maintenance Equipment &amp; Tools</option>
                        <option value="61">Marketing/Advertising</option>
                        <option value="43">Office Equipment</option>
                        <option value="21">Office Supplies</option>
                        <option value="54">Other Creditor</option>
                        <option value="57">Other Income</option>
                        <option value="73">Payment Gateway - BillPlz Sdn Bhd</option>
                        <option value="76">Payment Gateway - Ipay88</option>
                        <option value="23">Penalty / Late Payment Fee</option>
                        <option value="22">Photostate Machine Rental</option>
                        <option value="70">Professional/Legal Fee</option>
                        <option value="53">Provision for audit fee</option>
                        <option value="52">Provision for Taxation</option>
                        <option value="68">Public Bank</option>
                        <option value="66">Renovation Expenses</option>
                        <option value="24">Rental of Building</option>
                        <option value="35">Repair &amp; Maintenance Works</option>
                        <option value="56">Retained Profit &amp; Loss</option>
                        <option value="4">Sales</option>
                        <option value="63">Seminar- Expenses</option>
                        <option value="25">Staff - Allowance</option>
                        <option value="27">Staff - Medical</option>
                        <option value="36">Staff - Welfare</option>
                        <option value="75">Staff - Zakat</option>
                        <option value="12">Staff EIS</option>
                        <option value="10">Staff EPF</option>
                        <option value="13">Staff Income Tax (PCB)</option>
                        <option value="9">Staff Salary</option>
                        <option value="11">Staff SOCSO</option>
                        <option value="71">Staff- Training</option>
                        <option value="28">Stationery &amp; Printing</option>
                        <option value="15">Student Commitment Fee</option>
                        <option value="29">Telephone / Streamyx &amp; Fax</option>
                        <option value="32">Toiletry Items</option>
                        <option value="69">Transfer to Enterprise </option>
                        <option value="31">Travelling Expenses</option>
                        <option value="8">Tuition Fees Income</option>
                        <option value="16">Tutor Commitment Fee</option>
                        <option value="14">Tutor Salary</option>
                        <option value="30">Unifi Internet Line</option>
                        <option value="59">Upkeep Office Equipment</option>
                        <option value="74">Vehicle Company</option>
                        <option value="33">Water Charges</option>
                        <option value="60">Written Off / Contra</option>
                    </select>
                </div>
                <div class="mb-3 col-lg-3 col-xl-3 col-12 mb-0">
                    <label class="form-label" for="multicol-Debit">Debit</label>
                    <input type="number" id="multicol-Debit" class="form-control" placeholder="Debit" min="0" />
                </div>
                <div class="mb-3 col-lg-3 col-xl-3 col-12 mb-0">
                    <label class="form-label" for="multicol-Credit">Credit</label>
                    <input type="number" id="multicol-Credit" class="form-control" placeholder="Credit" min="0" />
                </div>
                <div class="mb-3 col-lg-3 col-xl-3 col-12 d-flex align-items-center mb-0"
                    v-if="index !== 1 && index !== 0">
                    <button type="button" class="btn btn-label-danger mt-4 waves-effect"
                        @click="removechartAccounts(index)"> <i class="fa-solid fa-trash me-2"></i> Remove Entry
                    </button>
                </div>
            </div>
            <button type="button" class="btn btn-primary mt-3" @click="addchartAccounts"> <i
                    class="fa fa-plus me-2"></i> Add Entry</button>
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
    name: "journalLedgerForm",
    components: { ValidateInput },
    props: ['edit_mode', 'form'],
    data: () => ({
        journalLedger: {},
        errors: [],
        loading: false,
        service: "",
        chartAccount: [{}, {}],
        chartAccountData: [{}],
    }),
    methods: {
        updateJournal(data) {
            axios.put('/journalLedger/' + this.journalLedger.id, data).then((res) => {
                this.$router.push('/cash-flow/journal-ledger');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        createJournal(data) {
            axios.post('/journalLedger', data).then((res) => {
                this.$router.push('/cash-flow/journal-ledger');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        onSubmit() {
            this.loading = true;
            let data = { ...this.journalLedger };
            if (!this.edit_mode) {
                this.createJournal(data);
            } else {
                this.updateJournal(data);
            }
            setTimeout(() => {
                this.loading = false;
            }, 1000);

        },
        addchartAccounts() {
            this.chartAccount.push({
                subject: "",
                quantity: "",
                day: "",
                time: "",
            });
            this.chartAccountData.push({
                subject: "",
                quantity: "",
                day: "",
                time: "",
            })
        },
        removechartAccounts(key) {
            this.chartAccount = this.chartAccount.filter((todo, index) => {
                return index !== key
            });
            this.chartAccountData = this.chartAccountData.filter((todo, index) => {
                return index !== key
            })
        },
    },
    mounted() {
        if (this.edit_mode) {
            // this.journalLedger = [];
            // this.journalLedger = this.form;
        }
    }
}
</script>
