<template >
    <!-- Layout wrapper -->
    <div class="layout-wrapper layout-content-navbar  ">
        <div class="layout-container">







            <!-- Menu -->
            <sidebar-menu-component></sidebar-menu-component>
            <!-- / Menu -->



            <!-- Layout container -->
            <div class="layout-page">





                <!-- Navbar -->
                <header-component></header-component>
                <!-- / Navbar -->



                <!-- Content wrapper -->
                <div class="content-wrapper">

                    <!-- Content -->

                    <transition name="fade">
                        <router-view />
                    </transition>
                    <notifications   class="mt-1 mr-1"/>
                    <!-- / Content -->
                    <!-- Footer -->
                    <footer-component/>
                    <!-- / Footer -->
                    <div class="content-backdrop fade"></div>
                </div>
                <!-- Content wrapper -->
            </div>
            <!-- / Layout page -->
        </div>
        <!-- Overlay -->
        <div class="layout-overlay layout-menu-toggle"></div>
        <!-- Drag Target Area To SlideIn Menu On Small Screens -->
        <div class="drag-target"></div>
    </div>
    <!-- / Layout wrapper -->
    <div class="buy-now">
        <a href="#" target="_blank" class="btn btn-danger btn-buy-now">Test</a>
    </div>

</template>
<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import SidebarMenuComponent from "./components/SidebarMenuComponent.vue";

export default {
    components: {HeaderComponent,FooterComponent,SidebarMenuComponent},

}
</script>
<style >

</style>
