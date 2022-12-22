<template>
    <div class="card mb-4">
        <form class="card-body" v-on:submit.prevent="onSubmit">
            <div class="row g-3">
                <div class="col-md-12 col-sm-12">
                    <label class="form-label" for="multicol-reference_no">Reference No</label>
                    <input type="text" id="multicol-reference_no"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'reference_no')}`"
                        placeholder="Reference No" disabled v-model="invoice.reference_no" />
                    <validate-input :errors="errors?.errors" value="reference_no"></validate-input>
                </div>
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
                        <option selected="selected">Normal</option>
                        <option>Early-Month</option>
                        <option>Mid-Month</option>
                        <option>End-Month</option>
                        <option>Hostel</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="management_status"></validate-input>
                </div>
                <div class="col-md-4 col-sm-12">
                    <label class="form-label" for="multicol-brand">Brand</label>
                    <select id="multicol-brand"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'brand')}`"
                        data-allow-clear="true" v-model="invoice.brand">
                        <option>SifuTutor</option>
                        <option>NakNgaji</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="brand"></validate-input>
                </div>
                <div class="col-md-4 col-sm-12">
                    <label class="form-label" for="multicol-payer_name">Payer Name</label>
                    <multiselect v-model="invoice.customer" :options="customers" track-by="customerId" label="fullname"
                        placeholder="Search by customer name" :multiple="true">
                    </multiselect>
                    <validate-input :errors="errors?.errors" value="payer_name"></validate-input>
                </div>
                <div class="col-md-4 col-sm-12">
                    <label class="form-label" for="multicol-email">Email</label>
                    <div class="input-group input-group-merge">
                        <input type="email" id="multicol-email"
                            :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'email')}`"
                            placeholder="john.doe" aria-label="john.doe" v-model="invoice.email"
                            aria-describedby="multicol-email2"><span class="input-group-text"
                            id="multicol-email2">@example.com</span>
                    </div>
                    <validate-input :errors="errors?.errors" value="email"></validate-input>
                </div>
                <div class="col-md-4 col-sm-12">
                    <label class="form-label" for="multicol-payer_number">Payer Phone Number</label>
                    <input type="number" id="multicol-payer_number"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'payer_number')}`"
                        placeholder="Payer Phone Number" v-model="invoice.payer_number" />
                    <validate-input :errors="errors?.errors" value="payer_number"></validate-input>
                </div>
                <div class="col-md-12">
                    <label class="form-label" for="basic-icon-default-Remark">Remark</label>
                    <div class="input-group input-group-merge"><textarea rows="3" id="basic-icon-default-Remark"
                            :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'remark')}`"
                            placeholder="Remark" v-model="invoice.remark"></textarea></div>
                    <validate-input :errors="errors?.errors" value="remark"></validate-input>
                </div>

            </div>
            <hr class="my-4 mx-n4" />
            <h6>INVOICE ITEMS</h6>
            <div class="row g-3" v-for="(item, index) in invoiceItems" :key="index">
                <div class="mb-3 col-lg-6 col-xl-2 col-12">
                    <label class="form-label" for="multicol-Description">Description</label>
                    <input type="text" id="multicol-Description" class="form-control" placeholder="Description"
                        v-model="invoice.description" />
                </div>
                <div class="mb-3 col-lg-6 col-xl-2 col-12">
                    <label class="form-label" for="multicol-Student">Student</label>
                    <multiselect v-model="invoice.student" :options="studentList" track-by="id" label="name"
                        placeholder="Search by name" :multiple="true">
                    </multiselect>
                </div>
                <div class="mb-3 col-lg-6 col-xl-2 col-12">
                    <label class="form-label" for="multicol-Subject">Subject</label>
                    <multiselect v-model="invoice.subjects" :options="subjectList" :multiple="true"
                        group-values="subjects" group-label="category" :group-select="true" placeholder="Search by name"
                        track-by="name" label="name">
                        <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
                    </multiselect>
                </div>
                <div class="mb-3 col-lg-6 col-xl-2 col-12 mb-0">
                    <label class="form-label" for="multicol-Quantity">Quantity</label>
                    <input type="number" id="multicol-Quantity" class="form-control" placeholder="Quantity"
                        v-model="invoice.quantity" min="1" />
                </div>
                <div class="mb-3 col-lg-6 col-xl-2 col-12 mb-0">
                    <label class="form-label" for="multicol-UnitPrice">Unit Price</label>
                    <input type="number" id="multicol-UnitPrice" class="form-control" placeholder="Unit Price"
                        v-model="invoice.unit_price" min="0" />
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
                    <input type="text" id="multicol-Descriptions" class="form-control" placeholder="Description" />
                </div>
                <div class="mb-3 col-lg-4 col-xl-4 col-md-4 col-12">
                    <label class="form-label" for="multicol-Amount">Amount</label>
                    <input type="number" id="multicol-Amount" class="form-control" placeholder="Amount" />
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
                <button type="submit" class="btn btn-primary me-sm-3 me-1">Submit</button>
                <button type="reset" class="btn btn-label-secondary">Cancel</button>
            </div>
        </form>
    </div>
</template>
<script>
import Multiselect from 'vue-multiselect';
export default {
    name: "InoviceForm",
    components: { Multiselect },
    data: () => ({
        errors: [],
        invoiceItems: [{
            subject: "",
            quantity: "",
            day: "",
            time: "",
        }],
        invItem: [{}],
        deductionItems: [],
        invoice: {
            reference_no: "ST069123",
        },
        customers: [
            {
                "fullname": "Abd basit masdar",
                "customerId": 817
            },
            {
                "fullname": "Ahmad Nurul Aswad",
                "customerId": 20648
            },
            {
                "fullname": "ASDIANA BT HJ MUHD ALI & FATMIRAL BIN ZAINAL",
                "customerId": 4151
            },
            {
                "fullname": "Azni binti Abdul Aziz",
                "customerId": 487
            },
            {
                "fullname": "Datuk Jalaludin",
                "customerId": 2669
            },
            {
                "fullname": "Hasdia",
                "customerId": 19544
            },
            {
                "fullname": "Lina Tan",
                "customerId": 2116
            },
            {
                "fullname": "Masdalina selamat",
                "customerId": 2305
            },
            {
                "fullname": "Masdia Binti Budin",
                "customerId": 9502
            },
            {
                "fullname": "masdiah",
                "customerId": 4413
            },
            {
                "fullname": "Masdiana",
                "customerId": 21018
            },
            {
                "fullname": "Masdiana Che Jamil",
                "customerId": 8195
            },
            {
                "fullname": "MASDITA BINTI MD DAN",
                "customerId": 4154
            },
            {
                "fullname": "Masittah Masdar",
                "customerId": 16826
            },
            {
                "fullname": "Maslinda bt Masdar",
                "customerId": 6793
            },
            {
                "fullname": "Mazlina binti Masdar",
                "customerId": 5994
            },
            {
                "fullname": "Mohd Rasdan Ibrahim",
                "customerId": 21035
            },
            {
                "fullname": "Nur Azila Rasdi",
                "customerId": 11257
            },
            {
                "fullname": "Nur masdeera Binti abdul razak",
                "customerId": 9180
            },
            {
                "fullname": "Nurshahiza Mohd Isa",
                "customerId": 18270
            },
            {
                "fullname": "Omar",
                "customerId": 3262
            },
            {
                "fullname": "Pn Masduta",
                "customerId": 19330
            },
            {
                "fullname": "Shamsiah binti Hashim",
                "customerId": 5763
            }
        ],
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
                this.studentList = res.data.students.map((item, index) => {
                    return { id: index, name: item.fullname }
                });

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
            axios.put('/invoice/' + this.invoice.id, data).then((res) => {
                this.$router.push('/student-invoices/invoice');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        createInvoice(data) {
            axios.post('/invoice', data).then((res) => {   
                this.$router.push('/student-invoices/invoice');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        onSubmit() {
            this.loading = true;
            let data = { ...this.invoice };
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
        if (this.edit_mode) {
            // this.stdInfo = [];
            // this.stdInfo = this.form;
        }
    }
}
</script>