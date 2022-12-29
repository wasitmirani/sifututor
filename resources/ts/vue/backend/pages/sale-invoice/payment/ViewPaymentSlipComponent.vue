<template>
    <!-- breadcrumb -->
    <breadcrumb :active_name="slug" :previous="[{ name: 'Sales Invoices', link: '/sales-invoice/payments' }]">
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
                            <!-- <p class="mb-2">Staff Name: Wazeeraah Binti Azmi</p>
                            <p class="mb-2">Designation: Digital Marketer</p>
                            <p class="mb-0">Month & Year: November 2022</p> -->
                        </div>
                        <div>
                            <h4 class="fw-semibold mb-2">Official Receipt</h4>
                            <div class="mb-2 pt-1">
                                <span class="fw-semibold">ReceiptNo #: </span>
                                <span>RC027965</span>
                            </div>
                            <div class="pt-1">
                                <span class="fw-semibold">Payment Date: </span>
                                <span>21/01/2022</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="my-0">
                <div class="table-responsive border-top">
                    <table class="table m-0">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-nowrap">1</td>
                                <td class="text-nowrap">Shafiq Haikal Mohd Zailani</td>
                                <td class="text-nowrap">1</td>
                                <td class="text-nowrap">RM 440.00</td>
                            </tr>
                            <tr>
                                <td class="text-nowrap text-end" colspan="3"><strong>Grand Total	</strong> </td>
                                <td class="text-nowrap table-secondary"><strong>RM 440.00</strong></td>
                            </tr>
                            <tr>
                                <td class="text-nowrap text-end" colspan="3"><strong>Paid Amount	</strong> </td>
                                <td class="text-nowrap table-secondary"><strong>RM 440.00</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="card-body border-bottom">
                    <div class="row">
                        <div class="col-sm-12">
                            <p> <b>Receiving Account: </b> Payment Gateway - Ipay88 </p>
                        </div>
                    </div>
                </div>

                <div class="card-body">
                    <div class="row">
                        <div class="col-12">
                            <router-link to="/sales-invoice/payments"
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
