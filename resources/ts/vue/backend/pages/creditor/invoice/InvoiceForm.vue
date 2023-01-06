<template>
    <div class="card mb-4">
        <form class="card-body" v-on:submit.prevent="onSubmit">
            <div class="row g-3">
                <div class="col-md-4">
                    <label class="form-label" for="multicol-occurance_date">Occurance Date</label>
                    <input type="date" v-model="invoice.occurance_date" id="occurance_date"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'occurance_date')}`"
                        placeholder="Account Code" />
                    <validate-input :errors="errors?.errors" value="occurance_date"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-AccountName">Creditor Name</label>
                    <input type="text" id="multicol-AccountName" placeholder="Creditor Name"
                        v-model="invoice.creditor_name"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'creditor_name')}`" />
                    <validate-input :errors="errors?.errors" value="creditor_name"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-Description">Description</label>
                    <input type="text" id="multicol-Description" placeholder="Description" v-model="invoice.description"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'description')}`" />
                    <validate-input :errors="errors?.errors" value="description"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-category">Category</label>
                    <input type="text" id="multicol-category" placeholder="Category" v-model="invoice.category"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'category')}`" />
                    <validate-input :errors="errors?.errors" value="category"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-quantity">Quantity</label>
                    <input type="number" id="multicol-quantity" placeholder="Quantity" v-model="invoice.quantity"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'quantity')}`" />
                    <validate-input :errors="errors?.errors" value="quantity"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-cost_price">Cost Price</label>
                    <input type="number" id="multicol-cost_price" placeholder="Cost Price" v-model="invoice.cost_price"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'cost_price')}`" />
                    <validate-input :errors="errors?.errors" value="cost_price"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-payment_due_date">Payment Due Date</label>
                    <input type="date" v-model="invoice.payment_due_date" id="payment_due_date"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'payment_due_date')}`"
                        placeholder="payment_due_date" />
                    <validate-input :errors="errors?.errors" value="payment_due_date"></validate-input>
                </div>
                <div class="col-md-6 col-sm-12">
                    <label class="form-label" for="multicol-payment_attacthment">Attachment</label>
                    <input type="file" id="multicol-payment_attacthment"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'attachment')}`"
                        placeholder="Attachment" :v-model="invoice.attachment">
                    <small> Supported Extensions: doc,docx,pdf,jpg,jpeg,png,zip </small>
                    <validate-input :errors="errors?.errors" value="attachment"></validate-input>
                </div>
                <div class="col-md-12"><label class="form-label" for="basic-icon-default-message">Remark</label>
                    <div class="input-group input-group-merge"><textarea rows="3" id="basic-icon-default-message"
                            :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'remark')}`"
                            placeholder="Remark" v-model="invoice.remark"></textarea></div>
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
export default {
    name: "InvoiceForm",
    components: { ValidateInput },
    props: ['edit_mode', 'form'],
    data: () => ({
        invoice: {},
        errors: [],
        loading: false,
    }),
    methods: {
        updateInvoice(data) {
            axios.put('/invoice/' + this.invoice.id, data).then((res) => {
                this.$router.push('/creditor/invoice');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        createInvoice(data) {
            axios.post('/invoice', data).then((res) => {
                this.$router.push('/creditor/invoice');
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
            // this.invoice = [];
            // this.invoice = this.form;
        }
    }
}
</script>
