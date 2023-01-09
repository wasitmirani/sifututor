<template>
    <div class="card mb-4">
        <form class="card-body" v-on:submit.prevent="onSubmit">
            <div class="row g-3">
                <div class="col-md-6 col-sm-12">
                    <label class="form-label" for="multicol-invoice_date">Invoice Date</label>
                    <input type="date" id="multicol-reference_no"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'invoice_date')}`"
                        placeholder="Invoice Date" v-model="invoice.invoice_date" />
                    <validate-input :errors="errors?.errors" value="invoice_date"></validate-input>
                </div>
                <div class="col-md-6 col-sm-12">
                    <label class="form-label" for="multicol-payer_name">Payer Name</label>
                    <input type="text" id="multicol-reference_no"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'payer_name')}`"
                        placeholder="Payer Name" v-model="invoice.payer_name" />
                    <validate-input :errors="errors?.errors" value="payer_name"></validate-input>
                </div>
                <div class="col-md-6 col-sm-12">
                    <label class="form-label" for="multicol-email">Payer Email</label>
                    <div class="input-group input-group-merge">
                        <input type="email" id="multicol-email"
                            :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'email')}`"
                            placeholder="john.doe" aria-label="john.doe" v-model="invoice.email"
                            aria-describedby="multicol-email2"><span class="input-group-text"
                            id="multicol-email2">@example.com</span>
                    </div>
                    <validate-input :errors="errors?.errors" value="email"></validate-input>
                </div>
                <div class="col-md-6 col-sm-12">
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
                <div class="mb-3 col-lg-6 col-xl-3 col-12">
                    <label class="form-label" for="multicol-Description">Description</label>
                    <input type="text" id="multicol-Description" class="form-control" placeholder="Description"
                        v-model="invoice.description" />
                </div>
                <div class="mb-3 col-lg-6 col-xl-3 col-12 mb-0">
                    <label class="form-label" for="multicol-Quantity">Quantity</label>
                    <input type="number" id="multicol-Quantity" class="form-control" placeholder="Quantity"
                        v-model="invoice.quantity" min="1" />
                </div>
                <div class="mb-3 col-lg-6 col-xl-3 col-12 mb-0">
                    <label class="form-label" for="multicol-UnitPrice">Unit Price</label>
                    <input type="number" id="multicol-UnitPrice" class="form-control" placeholder="Unit Price"
                        v-model="invoice.unit_price" min="0" />
                </div>
                <div class="mb-3 col-lg-12 col-xl-3 col-12 d-flex align-items-center mb-0" v-if="index !== 0">
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
            reference_no: "INV000262",
        },
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
        updateInvoice(data) {
            axios.put('/invoice/' + this.invoice.id, data).then((res) => {
                this.$router.push('/sales-invoice/invoice');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        createInvoice(data) {
            axios.post('/invoice', data).then((res) => {
                this.$router.push('/sales-invoice/invoice');
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
        if (this.edit_mode) {
            // this.stdInfo = [];
            // this.stdInfo = this.form;
        }
    }
}
</script>
