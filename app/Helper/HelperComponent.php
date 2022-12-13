<?php

namespace App\Helper;

class HelperComponent
{


    public static function SideBar()
    {
        $prefix = "portal";
        return [
            [
                "heading" => "Analytics",
                "heading_can" => "analytics-heading-view",
            ],

            [

                "title" => 'Dashboard',
                'can' => 'dashboard-dropdown',
                "icon" => "ti-smart-home",
                'type' => 'multi',
                "sub_menu" => [
                    setSubMenu(
                        "Overview",
                        null,
                        "dashboard-overview-view",
                        "/dashboard/overview",
                    ),
                ],
            ],

            [
                "heading" => "Management",
                "heading_can" => "management-heading-view",

            ],
            [

                "title" => 'User Management',
                'can' => 'user-management-dropdown',
                "icon" => "ti-users",
                'type' => 'multi',
                "sub_menu" => [
                    setSubMenu(
                        "Users",
                        null,
                        "users-list-view",
                        "/users",
                    ),
                    // setSubMenu(
                    //     "Clients",
                    //     null,
                    //     "clients-list-view",
                    //     "/clients",
                    // ),
                    setSubMenu(
                        "Roles",
                        null,
                        "roles-list-view",
                        "/roles",
                    ),
                    setSubMenu(
                        "Permissions",
                        null,
                        "permissions-list-view",
                        "/permissions",
                    ),

                ]

            ],

            [
                "heading" => "Tools",
                "heading_can" => "tools-heading-view",
            ],
            [
                "title" => 'Settings',
                'can' => 'setting-dropdown',
                "icon" => "ti-settings",
                'type' => 'multi',
                "sub_menu" => [
                    setSubMenu(
                        "Profile",
                        null,
                        "profile-view",
                        "/settings",
                    ),
                    setSubMenu(
                        "Change Password",
                        null,
                        "changepassword-view",
                        "/settings/change-password",
                    ),
                ]

            ],
        ];
    }
}
