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
                "title" => 'Students',
                'can' => 'student-dropdown',
                "icon" => "ti-settings",
                'type' => 'multi',
                "sub_menu" => [
                    setSubMenu(
                        "Customer List",
                        null,
                        "customer-list-view",
                        "/students/customer-list",
                    ),
                    setSubMenu(
                        "Student List",
                        null,
                        "student-list-view",
                        "/students/student-list",
                    ),
                    setSubMenu(
                        "Student Assignments",
                        null,
                        "student-assignments-view",
                        "/students/student-assignments",
                    ),
                    setSubMenu(
                        "Subject",
                        null,
                        "subject-list-view",
                        "/subject/subject-list",
                    ),
                ]

            ],
            [
                "title" => 'Job Tickets',
                'can' => 'job-tickets-dropdown',
                "icon" => "ti-settings",
                'type' => 'multi',
                "sub_menu" => [
                    setSubMenu(
                        "Ticket List",
                        null,
                        "ticket-list-view",
                        "/job-ticket/ticket-list",
                    ),
                    setSubMenu(
                        "Tutor Application",
                        null,
                        "tutor-application-list-view",
                        "/job-ticket/tutor-application",
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
