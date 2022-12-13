import {createRouter,createWebHistory,RouteRecordRaw,} from "vue-router";

console.log('loca', window.location.href)
let getComponent=(file_name:string)=>{
    const route= import(`./vue/backend/pages/${file_name}Component.vue`);
    return route;
  }
const prefix="/portal";
let setRoute=(url:string,name:string,path:string)=>{
    return {
      path: prefix+url,
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
