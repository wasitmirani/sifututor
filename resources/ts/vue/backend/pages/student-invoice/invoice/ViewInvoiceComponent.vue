<template>
    <!-- breadcrumb -->
    <breadcrumb :active_name="slug" :previous="[{ name: 'Student Invoice Details', link:'/student-invoices/invoice' }]"></breadcrumb>
    <!-- /breadcrumb -->
    <div class="row invoice-preview">
        <!-- Invoice -->
        <div class="col-xl-9 col-md-8 col-12 mb-md-0 mb-4">
          <div class="card invoice-preview-card">
            <div class="card-body">
              <div class="d-flex justify-content-between flex-xl-row flex-md-column flex-sm-row flex-column m-sm-3 m-0">
                <div class="mb-xl-0 mb-4">
                  <div class="d-flex svg-illustration mb-4 gap-2 align-items-center">

                        <img src="/assets/img/logo/blacklogo.png" width="120" alt="" srcset="">

                    <span class="app-brand-text fw-bold fs-4">
                        <!-- Sifututor -->
                    </span>
                  </div>
                  <h4 class="mb-2">Student Invoice</h4>
                  <!-- <p class="mb-2">San Diego County, CA 91905, USA</p>
                  <p class="mb-0">+1 (123) 456 7891, +44 (876) 543 2198</p> -->
                </div>
                <div>
                  <h4 class="fw-semibold mb-2">INVOICE #{{form.slug}}</h4>
                  <div class="mb-2 pt-1">
                    <span>Invoice Date:</span>
                    <span class="fw-semibold">{{form.invoice_date}}</span>
                  </div>
                  <!-- <div class="pt-1">
                    <span>Date Due:</span>
                    <span class="fw-semibold">May 25, 2021</span>
                  </div> -->
                </div>
              </div>
            </div>
            <hr class="my-0">
            <div class="card-body">
              <!-- <div class="row p-sm-3 p-0">
                <div class="col-xl-6 col-md-12 col-sm-5 col-12 mb-xl-0 mb-md-4 mb-sm-0 mb-4">
                  <h6 class="mb-3">Invoice To:</h6>
                  <p class="mb-1">Thomas shelby</p>
                  <p class="mb-1">Shelby Company Limited</p>
                  <p class="mb-1">Small Heath, B10 0HF, UK</p>
                  <p class="mb-1">718-986-6062</p>
                  <p class="mb-0">peakyFBlinders@gmail.com</p>
                </div>
                <div class="col-xl-6 col-md-12 col-sm-7 col-12">
                  <h6 class="mb-4">Bill To:</h6>
                  <table>
                    <tbody>
                      <tr>
                        <td class="pe-4">Total Due:</td>
                        <td><strong>$12,110.55</strong></td>
                      </tr>
                      <tr>
                        <td class="pe-4">Bank name:</td>
                        <td>American Bank</td>
                      </tr>
                      <tr>
                        <td class="pe-4">Country:</td>
                        <td>United States</td>
                      </tr>
                      <tr>
                        <td class="pe-4">IBAN:</td>
                        <td>ETD95476213874685</td>
                      </tr>
                      <tr>
                        <td class="pe-4">SWIFT code:</td>
                        <td>BR91905</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div> -->
            </div>
            <div class="table-responsive border-top">
              <table class="table m-0">
                <thead>
                  <tr>
                    <th>Description of classes</th>
                    <th>Hours</th>
                    <th>Unit Price	</th>

                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in form.invoice_items">
                    <td class="text-nowrap">{{item.subject.name}}--<small>{{item.subject.code}}</small></td>
                    <td>{{item.quantity}}</td>
                    <td class="text-nowrap">RM {{item.subject.cost}}</td>
                    <td>RM {{item.quantity*item.subject.cost}}</td>
                  </tr>
                  <tr>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
                    <strong>  Commitment Fees: </strong>
                    <small class="text-danger">  RM -{{ getFees(this.form.deductions_items)}}</small>
               	</td>

                  </tr>
                  <tr>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
                    <strong> Grand Total	:</strong>
                   <small class="text-success ml-4">RM {{form.total_amount - getFees(this.form.deductions_items) }}</small>
                   	</td>

                  </tr>


                </tbody>
              </table>
            </div>

            <div class="card-body mx-3">
              <div class="row">
                <div class="col-12">
                  <span class="fw-semibold">Note:</span>
                  <span>
                    Management Remark:<br>
                    Customer Remark:<br>
                    1) This invoice is computer generated and no signature is required<br>
                    2) Payment is due within 3 working days of issuance of this invoice<br>
                    3) You can pay online via online banking by clicking the button PAY NOW or alternatively can transfer to account no below :
                    <br>
                    <hr>
                    MAYBANK - 562115516678 SIFU EDU & LEARNING SDN BHD
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Invoice -->

        <!-- Invoice Actions -->
        <div class="col-xl-3 col-md-4 col-12 invoice-actions">
          <div class="card">
            <div class="card-body">
              <button class="btn btn-primary d-grid w-100 mb-2 waves-effect waves-light" data-bs-toggle="offcanvas" data-bs-target="#sendInvoiceOffcanvas">
                <span class="d-flex align-items-center justify-content-center text-nowrap"><i class="ti ti-send ti-xs me-1"></i>Send Invoice</span>
              </button>
              <button class="btn btn-label-secondary d-grid w-100 mb-2 waves-effect">
                Download
              </button>
              <a class="btn btn-label-secondary d-grid w-100 mb-2 waves-effect"  role="button" onclick="window.print();">
                Print
              </a>
              <router-link  :to="`/student-invoices/invoice/edit/${form.slug}/${form.uid}`" class="btn btn-label-secondary d-grid w-100 mb-2 waves-effect">
                Edit Invoice
              </router-link>
              <button class="btn btn-primary d-grid w-100 waves-effect waves-light" data-bs-toggle="offcanvas" data-bs-target="#addPaymentOffcanvas">
                <span class="d-flex align-items-center justify-content-center text-nowrap"><i class="ti ti-currency-dollar ti-xs me-1"></i>Add Payment</span>
              </button>
            </div>
          </div>
        </div>
        <!-- /Invoice Actions -->
      </div>

</template>
<script>
import breadcrumb from "../../../components/BreadcrumbComponent.vue";

export default {
    name: "ViewInvoiceComponent",
    components: { breadcrumb },
    data: () => ({
        form: {},
        edit_mode: false,
        slug: "",
        errors: [],
    }),
    methods:{
        getFees(items){
        console.log(items);
            let fees=items?.map((item)=>{
                return item.amount;
            });
            if(fees){
                const sum = fees.reduce((partialSum, a) => partialSum + a, 0);
                return sum;
            }
            // let fees=items.map(x=>x.amount);
            //
            return 0;
        },
        update_form(){
        },
        getInvoice(id) {
            axios.get('/student-invoice/' + id).then((res) => {
                // console.log('res', res.data.student);
                this.form = res.data.invoice;
                this.edit_mode = true;
            }).catch((err) => {
                this.errors = err.response.data;
                this.$root.alertNotify(err.response.status, null, "error", err.response.data);
                this.$router.push('/student-invoices/invoice');
            });
        }
    },
    mounted() {
        this.slug = this.$route.params.slug;
        this.getInvoice(this.$route.params.id);
    }
}
</script>
