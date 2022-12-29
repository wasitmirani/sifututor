<template>
    <div class="card mb-4">
        <form class="card-body" v-on:submit.prevent="onSubmit">
            <div class="row g-3">
                <div class="col-md-6">
                    <label class="form-label" for="multicol-AccountName">Creditor Name</label>
                    <input type="text" id="multicol-AccountName" placeholder="Creditor Name"
                        v-model="payment.creditor_name"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'creditor_name')}`" />
                    <validate-input :errors="errors?.errors" value="creditor_name"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-payment_amount">Payment Amount</label>
                    <input type="text" id="multicol-payment_amount" placeholder="Payment Amount"
                        v-model="payment.payment_amount"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'payment_amount')}`" />
                    <validate-input :errors="errors?.errors" value="payment_amount"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-payment_date">Payment Date</label>
                    <input type="date" v-model="payment.payment_date" id="payment_date"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'payment_date')}`"
                        placeholder="payment date" />
                    <validate-input :errors="errors?.errors" value="payment_date"></validate-input>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="multicol-PayingAccount">Paying Account</label>
                    <select id="multicol-PayingAccount"
                        :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'payment_account')}`"
                        data-allow-clear="true" v-model="payment.payment_account">
                        <option value="44">Cash At Bank - Maybank</option>
                        <option value="45">Cash In Hand</option>
                        <option value="73">Payment Gateway - BillPlz Sdn Bhd</option>
                        <option value="76">Payment Gateway - Ipay88</option>
                        <option value="68">Public Bank</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="payment_account"></validate-input>
                </div>
                <div class="col-md-12 col-sm-12">
                    <label class="form-label" for="multicol-payment_attacthment">Attachment</label>
                    <input type="file" id="multicol-payment_attacthment"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'attachment')}`"
                        placeholder="Attachment" :v-model="payment.attachment">
                    <small> Supported Extensions: doc,docx,pdf,jpg,jpeg,png,zip </small>
                    <validate-input :errors="errors?.errors" value="attachment"></validate-input>
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
    name: "PaymentForm",
    components: { ValidateInput },
    props: ['edit_mode', 'form'],
    data: () => ({
        payment: {},
        errors: [],
        loading: false,
    }),
    methods: {
        updatePayment(data) {
            axios.put('/payment/' + this.payment.id, data).then((res) => {
                this.$router.push('/creditor/payments');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        createPayment(data) {
            axios.post('/payment', data).then((res) => {
                this.$router.push('/creditor/payments');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        onSubmit() {
            this.loading = true;
            let data = { ...this.payment };
            if (!this.edit_mode) {
                this.createPayment(data);
            } else {
                this.updatePayment(data);
            }
            setTimeout(() => {
                this.loading = false;
            }, 1000);

        },
    },
    mounted() {
        if (this.edit_mode) {
            // this.payment = [];
            // this.payment = this.form;
        }
    }
}
</script>
