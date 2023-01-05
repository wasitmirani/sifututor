<template>
    <div class="card mb-4">
        <form class="card-body" v-on:submit.prevent="onSubmit">
            <div class="row g-3">
                <div class="col-md-4">
                    <label class="form-label" for="multicol-AccountCode">Account Code</label>
                    <input type="text" v-model="account.code" id="AccountCode"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'code')}`"
                        placeholder="Account Code" />
                    <validate-input :errors="errors?.errors" value="code"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-AccountName">Account Name</label>
                    <input type="text" id="multicol-AccountName" placeholder="Account Name"
                        v-model="account.name"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'name')}`" />
                    <validate-input :errors="errors?.errors" value="name"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-AccountType">Account Type</label>
                    <select id="multicol-Gender" :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'type')}`" data-allow-clear="true"
                        v-model="account.type">
                        <option value="Expense">Expense</option>
                        <option value="Equity">Equity</option>
                        <option value="Current assets">Current assets</option>
                        <option value="Non-current assets">Non-current assets</option>
                        <option value="Current liabilities">Current liabilities</option>
                        <option value="Non-current liabilities">Non-current liabilities</option>
                        <option value="Cost of sales">Cost of sales</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="type"></validate-input>
                </div>
                <div class="col-md-12"><label class="form-label" for="basic-icon-default-message">Description</label>
                    <div class="input-group input-group-merge"><textarea rows="3" id="basic-icon-default-message"
                            :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'description')}`"
                            placeholder="Description" v-model="account.description"></textarea></div>
                    <validate-input :errors="errors?.errors" value="description"></validate-input>
                </div>
                <div class="col-sm-12">
                    <div class="form-check form-check-primary">
                        <input class="form-check-input" type="checkbox" value="" id="customCheckPrimary" v-model="account.is_cash_source" :true-value="1" :false-value="0">
                        <label class="form-check-label" for="customCheckPrimary">Is a cash source</label>
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
import ValidateInput from "../../components/ValidateInputComponent.vue";
export default {
    name: "ChartAccountForm",
    components: { ValidateInput },
    props: ['edit_mode', 'form'],
    data: () => ({
        account: {},
        errors: [],
        loading: false,
    }),
    methods: {
        updateAccount(data) {
            axios.put('/chart-account/' + this.account.id, data).then((res) => {
                this.$router.push('/chart-account');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        createAccount(data) {
            axios.post('/chart-account', data).then((res) => {
                this.$router.push('/chart-account');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        onSubmit() {
            this.loading = true;
            let data = { ...this.account };
            if (!this.edit_mode) {
                this.createAccount(data);
            } else {
                this.updateAccount(data);
            }
            setTimeout(() => {
                this.loading = false;
            }, 1000);

        },
    },
    mounted() {
        if (this.edit_mode) {
            this.account = [];
            this.account = this.form;
        }
    }
}
</script>
