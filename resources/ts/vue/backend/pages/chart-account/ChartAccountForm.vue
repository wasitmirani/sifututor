<template>
    <div class="card mb-4">
        <form class="card-body" v-on:submit.prevent="onSubmit">
            <div class="row g-3">
                <div class="col-md-4">
                    <label class="form-label" for="multicol-AccountCode">Account Code</label>
                    <input type="text" v-model="account.account_code" id="AccountCode"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'account_code')}`"
                        placeholder="Account Code" />
                    <validate-input :errors="errors?.errors" value="account_code"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-AccountName">Account Name</label>
                    <input type="text" id="multicol-AccountName" placeholder="Account Name"
                        v-model="account.account_name"
                        :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'account_name')}`" />
                    <validate-input :errors="errors?.errors" value="account_name"></validate-input>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="multicol-AccountType">Account Type</label>
                    <select id="multicol-Gender" :class="`select2 form-select ${this.$root.appendValidateClass(errors?.errors, 'account_type')}`" data-allow-clear="true"
                        v-model="account.account_type">
                        <option>Expense</option>
                        <option>Equity</option>
                        <option>Current assets</option>
                        <option>Non-current assets</option>
                        <option>Current liabilities</option>
                        <option>Non-current liabilities</option>
                        <option>Cost of sales</option>
                    </select>
                    <validate-input :errors="errors?.errors" value="account_type"></validate-input>
                </div>
                <div class="col-md-12"><label class="form-label" for="basic-icon-default-message">Description</label>
                    <div class="input-group input-group-merge"><textarea rows="3" id="basic-icon-default-message"
                            :class="`form-control ${this.$root.appendValidateClass(errors?.errors, 'description')}`"
                            placeholder="Description" v-model="account.description"></textarea></div>
                    <validate-input :errors="errors?.errors" value="description"></validate-input>
                </div>
                <div class="col-sm-12">
                    <div class="form-check form-check-primary">
                        <input class="form-check-input" type="checkbox" value="" id="customCheckPrimary" v-model="account.source" :true-value="1" :false-value="0">
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
            axios.put('/account/' + this.account.id, data).then((res) => {
                this.$router.push('/chart-account');
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
            });
        },
        createAccount(data) {
            axios.post('/account', data).then((res) => {
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
