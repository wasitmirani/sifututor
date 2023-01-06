<template>
    <!-- breadcrumb -->
    <breadcrumb :active_name="slug" :previous="[{ name: 'Student Invoices', link: '/student-invoices/payment' }]">
    </breadcrumb>
    <!-- /breadcrumb -->
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h5 class="card-title">Offical Receipt</h5>
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
                               

                                <span class="app-brand-text fw-bold fs-4">
                                    sifututor
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
                                <td class="text-nowrap"><strong>Nett Pay</strong> </td>
                                <td class="text-nowrap"><strong>RM 96.82</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="card-body border-bottom">
                    <div class="row">
                        <div class="col-sm-12">
                            <p> <b>Paying Account: </b> Cash At Bank - Maybank </p>
                            <p> <b>Remark:</b> </p>
                        </div>
                    </div>
                </div>

                <div class="card-body">
                    <div class="row">
                        <div class="col-12">
                            <router-link to="/student-invoices/payment"
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
    name: "ViewPaymentSlipComponent",
    components: { breadcrumb },
    data: () => ({
        form: {},
        edit_mode: false,
        slug: "",
    }),
    methods: {
        getStudentInvoicePayment(id) {
            axios.get('/student-paymentslip/' + id).then((res) => {
                this.form = res.data.products;
                this.edit_mode = true;
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
                this.$router.push('/student-invoices/payment');
            });
        }
    },
    mounted() {
        this.slug = this.$route.params.slug;
        this.getStudentInvoicePayment(this.$route.params.id);
    }
}
</script>
