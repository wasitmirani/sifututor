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
    setRoute('/students/customer-list/edit','customer-list-edit','student/customer-list/EditCustomerList'),
    setRoute('/students/student-list','student-list-view','student/student-list/StudentList'),
    setRoute('/students/student-list/create','student-list-create','student/student-list/CreateStudentList'),
    setRoute('/students/student-list/edit','student-list-edit','student/student-list/EditStudentList'),
    setRoute('/students/student-assignments','student-assignments-view','student/student-assignment/StudentAssignment'),
    setRoute('/subject/subject-list','subject-list-view','student/subject-list/SubjectList'),
    setRoute('/subject/subject-list/create','subject-list-create','student/subject-list/CreateSubject'),




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
