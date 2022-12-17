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
                "title" => 'Tutors',
                'can' => 'tutor-dropdown',
                "icon" => "ti-settings",
                'type' => 'multi',
                "sub_menu" => [
                    setSubMenu(
                        "Tutor List",
                        null,
                        "tutor-list-view",
                        "/tutor/tutor-list",
                    ),
                    setSubMenu(
                        "Schedule Calander",
                        null,
                        "schedule-calander-view",
                        "/tutor/schedule-calander",
                    ),
                    setSubMenu(
                        "Reports",
                        null,
                        "reports-view",
                        "/tutor/reports",
                    ),
                    setSubMenu(
                        "Reports V2",
                        null,
                        "reports-v2-view",
                        "/tutor/reports-v2",
                    ),
                    setSubMenu(
                        "Tutor Assigments",
                        null,
                        "tutor-assigment-view",
                        "/tutor/tutor-assigment",
                    ),
                    setSubMenu(
                        "Tutor Payments",
                        null,
                        "tutor-payment-view",
                        "/tutor/tutor-payment",
                    ),
                    setSubMenu(
                        "Tutor Payment Journal",
                        null,
                        "tutor-payment-journal-view",
                        "/tutor/tutor-payment-journal",
                    ),
                    setSubMenu(
                        "Find Tutor",
                        null,
                        "find-tutor-view",
                        "/tutor/find-tutor",
                    ),
                ]

            ],
            [
                "title" => 'Staffs',
                'can' => 'staff-dropdown',
                "icon" => "ti-settings",
                'type' => 'multi',
                "sub_menu" => [
                    setSubMenu(
                        "Staff List",
                        null,
                        "staff-list-view",
                        "/staff/staff-list",
                    ),
                    setSubMenu(
                        "Staff Payments",
                        null,
                        "staff-paymentt-view",
                        "/staff/staff-payment-list",
                    ),
                    setSubMenu(
                        "PIC Commission",
                        null,
                        "pic-commission-view",
                        "/staff/pic-commission-list",
                    ),
                ]

            ],
            [
                "title" => 'Products',
                'can' => 'product-dropdown',
                "icon" => "ti-settings",
                'type' => 'multi',
                "sub_menu" => [
                    setSubMenu(
                        "Product List",
                        null,
                        "product-list-view",
                        "/products/product-list",
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
            setSingleLink("Chart of Accounts", "ti-settings", "chart-account-view", "/chart-account"),

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
