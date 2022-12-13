<template >
    <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
        <div class="app-brand demo ">
            <a router-link="/" class="app-brand-link">
                <span class="app-brand-logo demo">
                    <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                            fill="#7367F0" />
                        <path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z" fill="#161616" />
                        <path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd"
                            d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z" fill="#161616" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                            fill="#7367F0" />
                    </svg>
                </span>
                <span class="app-brand-text demo menu-text fw-bold">{{ config?.app_name }}</span>
            </a>

            <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto">
                <i class="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i>
                <i class="ti ti-x d-block d-xl-none ti-sm align-middle"></i>
            </a>
        </div>

        <!-- <div class="menu-inner-shadow"></div> -->



        <ul class="menu-inner py-1">
            <!-- Dashboards -->
            <!-- class="menu-item active open" -->
            <li v-for="item in sidebar_menu" :key="item.id" :class="getClass(item)">
                <span class="menu-header-text"
                    v-if="item?.heading && isAllowed(item?.heading_can)">{{ item.heading }}</span>
                <router-link v-if="item.type == 'single_link' && isAllowed(item.can)" :to="item.route"
                    class="menu-link">
                    <i :class="`menu-icon tf-icons ti ${item.icon}`"></i>
                    <div>{{ item.title }}</div>
                </router-link>
                <a href="javascript:void(0);" v-if="item.type == 'multi' && isAllowed(item.can)"
                    class="menu-link menu-toggle">
                    <i :class="`menu-icon tf-icons ti ${item.icon}`"></i>
                    <div data-i18n="Dashboards">{{ item.title }}</div>
                    <!-- <div class="badge bg-label-primary rounded-pill ms-auto">3</div> -->
                </a>
                <ul class="menu-sub" v-if="item?.sub_menu">
                    <li class="menu-item" v-for="submenu in item.sub_menu" :key="submenu.id">
                        <router-link class="menu-link" v-if="isAllowed(submenu?.can)" :to="submenu.route">
                            <div>{{ submenu.title }}</div>
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </aside>
</template>
<script>
export default {
    data() {
        return {
            config: {},
            sidebar_menu: [],
            index: 0,
            loading: false,
        }
    },
    methods: {
        logout() {
            window.location.href = window.location.origin + "/logout";
        },
        isAllowed(value) {
            // if (permissions.includes(value))
                return true;
        //     else
        //         return true;
        },
        getClass(item) {
            if (item?.heading) {
                return 'menu-header small text-uppercase'
            }
            if (item.type == 'single_link') {
                return 'menu-item'
            } else {
                // menu-item active open
                return 'menu-item'
            }
        },
        getSideBarMenu() {
            this.loading = true;
            axios.get('/config/sidebar-menu').then(response => {
                this.sidebar_menu = response.data.sidebar_menu;
                this.loading = false;
            });
        }
    },
    mounted() {
        //    console.log("mounted",sidebarmenu);
        this.getSideBarMenu();
    },
}
</script>
<style lang="">

</style>
