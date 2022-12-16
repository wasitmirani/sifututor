<template>
    <!-- breadcrumb -->
    <breadcrumb :active_name="slug" :previous="[{ name: 'Staff Payment', link: '/staff/staff-payment-list' }]">
    </breadcrumb>
    <!-- /breadcrumb -->
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Payment Slip</h5>
        </div>
    </div>

    <div class="row invoice-preview">
        <!-- Invoice -->
        <div class="col-xl-12 col-md-12 col-12 mb-md-0 mb-4">
            <div class="card invoice-preview-card">
                <div class="card-body">
                    <div
                        class="d-flex justify-content-between flex-xl-row flex-md-column flex-sm-row flex-column m-sm-3 m-0">
                        <div class="mb-xl-0 mb-4">
                            <div class="d-flex svg-illustration mb-4 gap-2 align-items-center">

                                <svg width="32" height="22" viewBox="0 0 32 22" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                                        fill="#7367F0"></path>
                                    <path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                                        fill="#161616"></path>
                                    <path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                                        fill="#161616"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                                        fill="#7367F0"></path>
                                </svg>

                                <span class="app-brand-text fw-bold fs-4">
                                    Vuexy
                                </span>
                            </div>
                            <p class="mb-2">Staff Name: Wazeeraah Binti Azmi</p>
                            <p class="mb-2">Designation: Digital Marketer</p>
                            <p class="mb-0">Month & Year: November 2022</p>
                        </div>
                        <div>
                            <h4 class="fw-semibold mb-2">INVOICE #86423</h4>
                            <div class="mb-2 pt-1">
                                <span>Pay date: </span>
                                <span class="fw-semibold"> 30/11/2022</span>
                            </div>
                            <div class="pt-1">
                                <span>IC/ Passport: </span>
                                <span class="fw-semibold"> 930218145036</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="my-0">
                <div class="table-responsive border-top">
                    <table class="table m-0">
                        <thead>
                            <tr>
                                <th>Earnings</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-nowrap">November - 2022 Salary</td>
                                <td class="text-nowrap">RM 111.67</td>
                            </tr>
                            <tr>
                                <td class="text-nowrap">Bonus</td>
                                <td class="text-nowrap">RM 0.00</td>
                            </tr>
                            <tr>
                                <td class="text-nowrap">Commission</td>
                                <td class="text-nowrap">RM 0.00</td>
                            </tr>
                            <tr>
                                <td class="text-nowrap"><strong>Deductions</strong> </td>
                                <td class="text-nowrap"><strong>Amount</strong></td>
                            </tr>
                            <tr>
                                <td class="text-nowrap">EPF</td>
                                <td class="text-nowrap">- RM 14.00</td>
                            </tr>
                            <tr>
                                <td class="text-nowrap">SOCSO</td>
                                <td class="text-nowrap">- RM 0.60</td>
                            </tr>
                            <tr>
                                <td class="text-nowrap">EIS</td>
                                <td class="text-nowrap">- RM 0.25</td>
                            </tr>
                            <tr>
                                <td class="text-nowrap"><strong>Nett Pay</strong> </td>
                                <td class="text-nowrap"><strong>RM 96.82</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="card-body border-bottom">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <p><b> Employer EPF: </b> RM 16.00 Employer <b> Socso: </b> RM 2.10 <b>Employer EIS:</b> RM 0.25</p>
                        </div>
                        <div class="col-sm-12">
                            <p> <b>Paying Account: </b> Cash At Bank - Maybank </p>
                            <p> <b>Remark:</b> </p>
                        </div>
                    </div>
                </div>

                <div class="card-body">
                    <div class="row">
                        <div class="col-12">
                            <router-link to="/staff/staff-payment-list"
                                class="btn btn-label-secondary">Back</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Invoice -->
    </div>

</template>
<script>
import breadcrumb from "../../../components/BreadcrumbComponent.vue";
export default {
    name: "EditProductListComponent",
    components: { breadcrumb },
    data: () => ({
        form: {},
        edit_mode: false,
        slug: "",
    }),
    methods: {
        getStaffPayment(id) {
            axios.get('/staff-list/' + id).then((res) => {
                this.form = res.data.products;
                this.edit_mode = true;
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
                this.$router.push('/staff/staff-list');
            });
        }
    },
    mounted() {
        this.slug = this.$route.params.slug;
        this.getStaffPayment(this.$route.params.id);
    }
}
</script>
 