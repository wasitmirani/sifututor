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
    setRoute('/products/product-list/edit/:slug/:id','product-list-edit','products/EditProductList'),
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
