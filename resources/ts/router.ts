import {createRouter,createWebHistory,RouteRecordRaw,} from "vue-router";

console.log('loca', window.location.href)
let getComponent=(file_name:string)=>{
    const route= import(`./vue/backend/pages/${file_name}Component.vue`);
    return route;
  }
const prefix="/portal";
let setRoute=(url:string,name:string,path:string)=>{
    return {
      path: url,
      name: name,
      component:()=> getComponent(path),

    }
  }

  const routes =[
    {
        path: "/dashboard",
        redirect: { name: 'dashboard' }
    },
    {
        path: "/",
        redirect: { name: 'dashboard' }
    },
    setRoute('/:catchAll(.*)','404','error/404'),
    setRoute('/dashboard/overview','dashboard','dashboard/Dashboard'),
    setRoute('/students/customer-list','customer-list-view','student/customer-list/CustomerList'),
    setRoute('/students/customer-list/edit/:slug/:id','customer-list-edit','student/customer-list/EditCustomerList'),
    setRoute('/students/student-list','student-list-view','student/student-list/StudentList'),
    setRoute('/students/student-list/create','student-list-create','student/student-list/CreateStudentList'),
    setRoute('/students/student-list/edit/:slug/:id','student-list-edit','student/student-list/EditStudentList'),
    setRoute('/students/student-assignments','student-assignments-view','student/student-assignment/StudentAssignment'),
    setRoute('/subject/subject-list','subject-list-view','student/subject-list/SubjectList'),
    setRoute('/subject/subject-list/create','subject-list-create','student/subject-list/CreateSubject'),
    setRoute('/subject/subject-list/edit/:slug/:id','subject-list-edit','student/subject-list/EditSubject'),
    setRoute('/job-ticket/ticket-list','ticket-list-view','job-ticket/ticket-list/TicketList'),
    setRoute('/job-ticket/ticket-list/create','ticket-list-create','job-ticket/ticket-list/CreateTicketList'),
    setRoute('/job-ticket/ticket-list/edit/:slug/:id','ticket-list-edit','job-ticket/ticket-list/EditTicketList'),
    setRoute('/job-ticket/tutor-application','tutor-application-list-view','job-ticket/tutor-application/TutorApplication'),
    setRoute('/chart-account','chart-account-view','chart-account/ChartAccount'),
    setRoute('/chart-account/create','chart-account-create','chart-account/CreateChartAccount'),
    setRoute('/chart-account/edit/:slug/:id','chart-account-edit','chart-account/EditChartAccount'),
    setRoute('/products/product-list','product-list-view','products/ProductList'),
    setRoute('/products/product-list/create','product-list-create','products/CreateProductList'),
    setRoute('/products/product-list/edit/:slug/:uid','product-list-edit','products/EditProductList'),
    setRoute('/staff/staff-list','staff-list-view','staff/staff-list/StaffList'),
    setRoute('/staff/staff-list/create','staff-list-create','staff/staff-list/CreateStaffList'),
    setRoute('/staff/staff-list/edit/:slug/:id','staff-list-edit','staff/staff-list/EditStaffList'),
    setRoute('/staff/staff-payment-list','staff-payments-view','staff/staff-payment/StaffPayment'),
    setRoute('/staff/staff-payment-list/create','staff-payments-create','staff/staff-payment/CreateStaffPayment'),
    setRoute('/staff/staff-payment-list/edit/:slug/:id','staff-payments-edit','staff/staff-payment/EditStaffPayment'),
    setRoute('/staff/staff-payment/view-payment-slip/:slug/:id','staff-payments-slip-view','staff/staff-payment/ViewPaymentSlip'),
    setRoute('/staff/pic-commission-list','pic-commission-view','staff/pic-commission/PicCommission'),
    setRoute('/staff/pic-commission/view-commission-breakdown/:slug/:id','commission-breakdown-view','staff/pic-commission/commission-breakdown/CommissionBreakDown'),
    setRoute('/tutor/tutor-list','tutor-list-view','tutor/tutor-list/TutorList'),
    setRoute('/tutor/tutor-list/create','tutor-list-create','tutor/tutor-list/CreateTutorList'),
    setRoute('/tutor/tutor-list/edit/:slug/:id','tutor-list-edit','tutor/tutor-list/EditTutorList'),
    setRoute('/tutor/tutor-assigment','tutor-assigment-view','tutor/tutor-assignments/TutorAssignments'),
    setRoute('/tutor/tutor-payment','tutor-payment-view','tutor/tutor-payment/TutorPayment'),
    setRoute('/tutor/tutor-payment/view-payment-slip/:slug/:id','tutor-payments-slip-view','tutor/tutor-payment/ViewTutorPaymentSlip'),
    setRoute('/tutor/tutor-finder','tutor-finder-view','tutor/tutor-finder/TutorFinder'),
    setRoute('/tutor/tutor-payment-journal','tutor-payment-journal-view','tutor/tutor-payment-journal/TutorPaymentJournal'),
    setRoute('/tutor/reports-v2','reports-v2-view','tutor/reports-v2/ReportsV2'),
    setRoute('/tutor/tutor-reports','tutor-reports-list','tutor/reports/Reports'),
    setRoute('/tutor/tutor-reports/create','tutor-reports-create','tutor/reports/CreateReport'),
    setRoute('/tutor/tutor-reports/edit/:slug/:id','tutor-reports-edit','tutor/reports/EditReport'),
    setRoute('/student-invoices/payment','student-payment-view','student-invoice/payments/Payment'),
    setRoute('/student-invoices/payment/payment-slip/:slug/:id','student-paymentslip-view','student-invoice/payments/ViewPaymentSlip'),
    setRoute('/student-invoices/invoice','invocie-list-view','student-invoice/invoice/Invoice'),
    setRoute('/student-invoices/invoice/create','invocie-list-create','student-invoice/invoice/CreateInvoice'),
    setRoute('/student-invoices/invoice/edit/:slug/:id','invocie-list-edit','student-invoice/invoice/EditInvoice'),
    setRoute('/student-invoices/invoice/view/:slug/:id','invocie-list-details','student-invoice/invoice/ViewInvoice'),
    setRoute('/users','users','user/Users'),
    setRoute('/user/create','user-create','user/CreateUser'),
    setRoute('/user/edit/:uid','user-edit','user/EditUser'),
    setRoute('/roles','roles','role/Roles'),
    setRoute('/permissions','permissions','permission/Permissions'),
    setRoute('/settings','settings','setting/Settings'),
    setRoute('/app-settings','app-settings','setting/AppSettings'),
    setRoute('/class-schedules','class-schedule-view','class-schedule/ClassSchedule'),
    setRoute('/class-schedules/schedule-history/:slug/:id','schedule-history-view','class-schedule/schedule-history/ScheduleHistory'),
    setRoute('/class-schedules/schedule-history/create/:slug/:id','schedule-history-create','class-schedule/schedule-history/CreateScheduleHistory'),
    setRoute('/class-schedules/schedule-history/edit/:slug/:id','schedule-history-edit','class-schedule/schedule-history/EditScheduleHistory'),
    setRoute('/cash-flow/journal-ledger','journal-ledger-view','cash-flow/journal-ledger/JournalLedger'),
    setRoute('/cash-flow/journal-ledger/create','journal-ledger-create','cash-flow/journal-ledger/CreateJournalLedger'),
    setRoute('/cash-flow/journal-ledger/edit/:slug/:id','journal-ledger-edit','cash-flow/journal-ledger/EditJournalLedger'),
    setRoute('/cash-flow/expenditures','expenditures-view','cash-flow/expenditure/Expenditure'),
    setRoute('/cash-flow/expenditures/create','expenditures-create','cash-flow/expenditure/CreateExpenditure'),
    setRoute('/cash-flow/expenditures/edit/:slug/:id','expenditures-edit','cash-flow/expenditure/EditExpenditure'),







];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth',
            }
        }
    },
});

router.beforeEach((to, from, next) => {

    next()

  });
export default router;
