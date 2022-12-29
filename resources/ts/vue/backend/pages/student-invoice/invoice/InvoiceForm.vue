<template>
    <div class="card mb-4">
        <form class="card-body" v-on:submit.prevent="onSubmit">
            <div class="row g-3">
                <!-- <div class="col-md-12 col-sm-12">
                    <label class="form-label" for="multicol-reference_no">Reference No</label>
                    <input type="text" id="multicol-reference_no"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'reference_no')}`"
                        placeholder="Reference No" disabled v-model="invoice.reference_no" />
                    <validate-input :errors="errors?.errors" value="reference_no"></validate-input>
                </div> -->
                <div class="col-md-4 col-sm-12">
                    <label class="form-label" for="multicol-invoice_date">Invoice Date</label>
                    <input type="date" id="multicol-reference_no"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'invoice_date')}`"
                        placeholder="Invoice Date" v-model="invoice.invoice_date" />
                    <validate-input :errors="errors?.errors" value="invoice_date"></validate-input>
                </div>
                <div class="col-md-4 col-sm-12">
                    <label class="form-label" for="multicol-management_status">Management Status</label>
                    <select id="multicol-management_status"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'management_status')}`"
                        data-allow-clear="true" v-model="invoice.management_status">
                        <option value="normal" selected="selected">Normal</option>
                        <option value="early-month">Early-Month</option>
                        <option value="mid-month">Mid-Month</option>
                        <option value="end-month">End-Month</option>
                        <option value="hostel">Hostel</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="management_status"></validate-input>
                </div>
                <div class="col-md-4 col-sm-12">
                    <label class="form-label" for="multicol-brand">Brand</label>
                    <select id="multicol-brand"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'brand')}`"
                        data-allow-clear="true" v-model="invoice.brand">
                        <option value="sifuTutor">SifuTutor</option>
                        <option value="nakngaji">NakNgaji</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="brand"></validate-input>
                </div>
                <div class="col-md-4 col-sm-12">
                    <label class="form-label" for="multicol-payer_name">Payer Name</label>
                    <multiselect v-model="invoice.payer_name" :options="customers" track-by="id" label="full_name"
                        placeholder="Search by customer name" :multiple="false">
                    </multiselect>
                    <validate-input :errors="errors?.errors" value="payer_name"></validate-input>
                </div>
                <div class="col-md-4 col-sm-12">
                    <label class="form-label" for="multicol-email">Email</label>
                    <div class="input-group input-group-merge">
                        <input type="email" id="multicol-email"
                            :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'payer_email')}`"
                            placeholder="john.doe" aria-label="john.doe" v-model="invoice.payer_email"
                            aria-describedby="multicol-email2">
                    </div>
                    <validate-input :errors="errors?.errors" value="payer_email"></validate-input>
                </div>
                <div class="col-md-4 col-sm-12">
                    <label class="form-label" for="multicol-payer_number">Payer Phone Number</label>
                    <input type="number" id="multicol-payer_number"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'payer_phone')}`"
                        placeholder="Payer Phone Number" v-model="invoice.payer_phone" />
                    <validate-input :errors="errors?.errors" value="payer_phone"></validate-input>
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="basic-icon-default-Remark">Remark</label>
                    <div class="input-group input-group-merge"><textarea rows="3" id="basic-icon-default-Remark"
                            :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'remarks')}`"
                            placeholder="Remark" v-model="invoice.remarks"></textarea></div>
                    <validate-input :errors="errors?.errors" value="remarks"></validate-input>
                </div>

            </div>
            <hr class="my-4 mx-n4" />
            <h6>INVOICE ITEMS</h6>
            <div class="row g-3" v-for="(item, index) in invoiceItems" :key="index">
                <div class="mb-3 col-lg-6 col-xl-2 col-12">
                    <label class="form-label" for="multicol-Description">Description</label>
                    <input type="text" id="multicol-Description" class="form-control" placeholder="Description"
                        v-model="invoiceItems[index].description" />
                </div>
                <div class="mb-3 col-lg-6 col-xl-2 col-12">
                    <label class="form-label" for="multicol-Student">Student</label>
                    <multiselect v-model="invoiceItems[index].student" :options="studentList" track-by="id" label="fullname"
                        placeholder="Search by name" :multiple="false">
                    </multiselect>
                </div>
                <div class="mb-3 col-lg-6 col-xl-2 col-12">
                    <label class="form-label" for="multicol-Subject">Subject</label>
                    <multiselect v-model="invoiceItems[index].subject" :options="subjectList" :multiple="false"
                        group-values="subjects" group-label="category" :group-select="true" placeholder="Search by name"
                        track-by="name" label="name">
                        <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
                    </multiselect>
                </div>
                <div class="mb-3 col-lg-6 col-xl-2 col-12 mb-0">
                    <label class="form-label" for="multicol-Quantity">Quantity</label>
                    <input type="number" id="multicol-Quantity" class="form-control" placeholder="Quantity"
                        v-model="invoiceItems[index].quantity" min="1" />
                </div>
                <div class="mb-3 col-lg-6 col-xl-2 col-12 mb-0">
                    <label class="form-label" for="multicol-UnitPrice">Unit Price</label>
                    <input type="number" id="multicol-UnitPrice" class="form-control" placeholder="Unit Price"
                        v-model="invoiceItems[index].unit_price" min="0" />
                </div>
                <div class="mb-3 col-lg-12 col-xl-2 col-12 d-flex align-items-center mb-0" v-if="index !== 0">
                    <button type="button" class="btn btn-label-danger mt-4 waves-effect"
                        @click="removeInvoiceItem(index)"> <i class="fa-solid fa-trash me-2"></i> Remove Item
                    </button>
                </div>
            </div>
            <button type="button" class="btn btn-primary mt-3" @click="addInvoiceItem"> <i
                    class="fa fa-plus me-2"></i> Add Item</button>
            <hr class="my-4 mx-n4" />
            <h6>Deductions</h6>
            <div class="row g-3" v-for="(item, index) in deductionItems" :key="key">
                <div class="mb-3 col-lg-4 col-xl-4 col-md-4 col-12">
                    <label class="form-label" for="multicol-Descriptions">Description</label>
                    <input type="text" v-model="deductionItems[index].description" id="multicol-Descriptions" class="form-control" placeholder="Description" />
                </div>
                <div class="mb-3 col-lg-4 col-xl-4 col-md-4 col-12">
                    <label class="form-label" for="multicol-Amount">Amount</label>
                    <input type="number" v-model="deductionItems[index].amount" id="multicol-Amount" class="form-control" placeholder="Amount" />
                </div>
                <div class="mb-3 col-lg-4 col-xl-4 col-md-4 col-12 d-flex align-items-center mb-0">
                    <button type="button" class="btn btn-label-danger mt-4 waves-effect"
                        @click="removeDeduction(index)"> <i class="fa-solid fa-trash me-2"></i> Remove Deduction
                    </button>
                </div>
            </div>
            <button type="button" class="btn btn-primary mt-3" @click="addDeduction">
                    <i class="fa fa-plus me-2"></i> Add Deduction</button>
            <hr class="my-4 mx-n4" />
            <div>
                <button type="submit" class="btn btn-primary me-sm-3 me-1" v-if="!edit_mode">Submit</button>
                <button type="submit" class="btn btn-success me-sm-3 me-1" v-else>Update</button>
                <button type="reset" class="btn btn-label-secondary">Cancel</button>
            </div>
        </form>
    </div>
</template>
<script>
import Multiselect from 'vue-multiselect';
import ValidateInput from "../../../components/ValidateInputComponent.vue";
export default {
    name: "InoviceForm",
    components: { Multiselect,ValidateInput },
    props:['edit_mode','form'],
    data: () => ({
        errors: [],
        invoiceItems: [{
            subject: "",
            quantity: "",
            student:"",
            description:"",
            unit_price: 0,
            time: "",
        }],
        invItem: [{}],
        deductionItems: [{
            description:"",
            amount: 0,
        }],
        invoice: {
        },
        customers: [],
        studentList: [],
        subjectList: [],
    }),
    methods: {
        addInvoiceItem() {
            this.invoiceItems.push({
                subject: "",
                quantity: "",
                day: "",
                time: "",
            });
            this.invItem.push({
                subject: "",
                quantity: "",
                day: "",
                time: "",
            })
        },
        removeInvoiceItem(key) {
            this.invoiceItems = this.invoiceItems.filter((todo, index) => {
                return index !== key
            });
            this.invItem = this.invItem.filter((todo, index) => {
                return index !== key
            })
        },
        addDeduction(){
            this.deductionItems.push({
                description: "",
                amount: "",
            });
        },
        removeDeduction(key){
            this.deductionItems = this.deductionItems.filter((todo, index) => {
                return index !== key
            });
        },
        getStudent() {
            axios.get('/student-list').then((res) => {
                this.studentList = res.data.students;

            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        getCustomers() {
            axios.get('/customer-list').then((res) => {
                this.customers = res.data.customers;

            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },

        getSubjectList() {
            axios.get('/subject-list').then((res) => {
                this.subjectList = res.data.subjects;
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        updateInvoice(data) {
            axios.put('/student-invoice/' + this.invoice.id, data).then((res) => {
                this.$router.push('/student-invoices/invoice');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        createInvoice(data) {
            axios.post('/student-invoice', data).then((res) => {
                this.$router.push('/student-invoices/invoice');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        onSubmit() {
            this.loading = true;
            let data = { ...this.invoice,invoice_items:this.invoiceItems};
            data={ ...data,deductions_items:this.deductionItems}
            if (!this.edit_mode) {
                this.createInvoice(data);
            } else {
                this.updateInvoice(data);
            }
            setTimeout(() => {
                this.loading = false;
            }, 1000);

        },
    },
    mounted() {
        this.getStudent();
        this.getSubjectList();
        this.getCustomers();
        if (this.edit_mode) {
            // this.stdInfo = [];
            this.invoice = this.form;
            this.invoice.payer_name=this.form.payer;
            this.deductionItems=this.form.deductions_items;
            this.invoiceItems = this.form.invoice_items;
        }
    }
}
</script>
