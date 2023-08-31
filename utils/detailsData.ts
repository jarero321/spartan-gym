export const details = [
    {
        title: "Sign in Page",
        description: "By using correct email and password user can access their account. Only authorized user",
        featuredImage: "/sign-in.png",
        list_of_features: [
            "No sign up system",
            "Correct Email Password",
            "Next-Auth",
            "Protected Pages"
        ],
        accessRole: ["Public"],
        flexReverse: true
    },
    {
        title: "Profile Page",
        description: "Here user can see his/her profile with all details and also can update his data.",
        featuredImage: "/profile.png",
        list_of_features: [
            "See all details",
            "Update Image",
            "Update All data",
            "Update Password",
            "Can not update email, gender and user role."
        ],
        accessRole: ["Logged in User"],
        flexReverse: false
    }, {
        title: "Add Member Page",
        description: "Admin can add both trainer and students. but trainer can only add students.",
        featuredImage: "/add-member.png",
        list_of_features: [
            "Admin add trainer & students",
            "Trainer can add only students",
            "Image Upload to cloudinary",
            "User Name, Email, Password",
            "Age, Weight, Height",
            "User Goal, User Level"
        ],
        accessRole: ["Admin", "Trainer"],
        flexReverse: true
    }, {
        title: "Attendance Page",
        description: "Admin and trainer can create attendance for the students one time for a day and can monitor who is attend and when attend. Can see all the attendances",
        featuredImage: '/attendance.png',
        list_of_features: [
            "Create attendance",
            "Monitor attendance",
            "Table view all attendance"
        ],
        accessRole: ["Admin", "Trainer"],
        flexReverse: false,
    }, {
        title: "Trainers page",
        description: "This page is Visible by Admin, Trainers, Students. There is a table for showing all the trainers. Pagination Available.",
        featuredImage: '/trainers.png',
        list_of_features: [
            'Visible by Admin, Trainers, Students',
            "Table View List of trainers",
            "Pagination",
            "Protected Page"
        ],
        accessRole: ["Admin", "Trainer", "Student"],
        flexReverse: true,
    }, {
        title: "Trainer Page",
        description: "This page is Visible by Admin, Trainers, Students. User. User able to see the details of trainer.",
        featuredImage: "/trainer.png",
        list_of_features: [
            "User can see the trainer's details",
            "Trainer's All Data",
            "Trainer's Image",
            "Server Page",
            "Protected Page"
        ],
        accessRole: ["Admin", "Trainer", "Student"],
        flexReverse: false
    },
    {
        title: "Students page",
        description: "This page is only visible by Admin, Trainers. Students can't visit the page There is a table for showing all the trainers. Pagination Available.",
        featuredImage: '/students.png',
        list_of_features: [
            'Visible by Admin, Trainers.',
            "Table View List of trainers",
            "Pagination",
            "Protected Page"
        ],
        accessRole: ["Admin", "Trainer"],
        flexReverse: true,
    }, {
        title: "Student Page",
        description: "This page is Visible by Admin, Trainers. Admin and trainer able to see the details of student.",
        featuredImage: "/student.png",
        list_of_features: [
            "User can see the student's details",
            "Student's All Data",
            "Student's Image",
            "Server Page",
            "Protected Page"
        ],
        accessRole: ["Admin", "Trainer"],
        flexReverse: false
    }, {
        title: "Fees Page",
        description: "This page is can be visited by Admin and Trainers. Admin or Trainer can add fees for the students. He can track the status of the fees. He can send a reminder to the students.",
        featuredImage: "/fees-admin-trainer.png",
        list_of_features: [
            "Add Fees",
            "Send Notification for Fees",
            "Track Fees Status",
            "Send Reminder for unpaid fees",
            "Protected Page"
        ],
        accessRole: ["Admin", "Trainer"],
        flexReverse: true
    }, {
        title: "Manage Exercise Page",
        description: "This page is can be visited by Admin and Trainers. They can add new exercises and can see all the exercises. They can also delete the exercises.",
        featuredImage: "/manage-exercise.png",
        list_of_features: [
            "Add Exercise",
            "See All Exercises",
            "Delete Exercise",
            "Protected Page"
        ],
        accessRole: ["Admin", "Trainer"],
        flexReverse: false
    }, {
        title: "Assign Exercise Page",
        description: "This page is can be visited by Admin and Trainers. They can assign exercises to the students. First time Admin or Trainer assign the exercises and then always update the exercises. They also add the time (in days) like From Date and To Date",
        featuredImage: "/assign-exercise.png",
        list_of_features: [
            "Select users",
            "Assign Exercise to users",
            "Update Exercise to users",
            "Add Time",
            "From Date and To Date",
            "Add Sets, Steps, kg, Rest time for each exercise",
            "Send Notification",
            "Protected Page"
        ],
        accessRole: ["Admin", "Trainer"],
        flexReverse: true
    }, {
        title: "Manage (Diet) Food Page",
        description: "This page is can be visited by Admin and Trainers. They can add new foods and can see all the foods. They can also delete the foods.",
        featuredImage: "/manage-diet-food.png",
        list_of_features: [
            "Add food",
            "See All foods",
            "Delete food",
            "Protected Page"
        ],
        accessRole: ["Admin", "Trainer"],
        flexReverse: false
    }, {
        title: "Assign Diet Sheet Page",
        description: "This page is can be visited by Admin and Trainers. They can assign diet sheet to the students. First time Admin or Trainer assign the diet sheet and then always update the sheet. They also add the time (in days) like From Date and To Date",
        featuredImage: "/assign-diet-sheet.png",
        list_of_features: [
            "Select users",
            "Assign diet sheet to users",
            "Update diet sheet to users",
            "Add Time",
            "From Date and To Date",
            "Check mark the food for Morning, Mid Morning, Lunch, Evening Snack, Dinner",
            "Send Notification",
            "Protected Page"
        ],
        accessRole: ["Admin", "Trainer"],
        flexReverse: true
    }, {
        title: "Admin Dashboard Page",
        description: "Admin can see the total number of users, total number of trainers, total number of students, Online Users, paid fees, unpaid fees,  Activity Status, Attendance Graph.",
        featuredImage: "/admin-dashboard.png",
        list_of_features: [
            "Total Users",
            "Total Trainers",
            "Total Students",
            "Online Users",
            "Paid Fees",
            "Unpaid Fees",
            "Activity Status",
            "Attendance Graph",
            "Protected Page"
        ],
        accessRole: ["Admin"],
        flexReverse: false
    }, {
        title: "Trainer Dashboard Page",
        description: "Trainer can see the total number of users, total number of trainers, total number of students, Online Users,  Activity Status, Attendance Graph.",
        featuredImage: "/trainer-dashboard.png",
        list_of_features: [
            "Total Users",
            "Total Trainers",
            "Total Students",
            "Online Users",
            "Activity Status",
            "Attendance Graph",
            "Protected Page"
        ],
        accessRole: ["Trainer"],
        flexReverse: true
    }, {
        title: "Student Dashboard Page",
        description: "Student can see his fees status, attendance graph, Activity Status",
        featuredImage: "/student-dashboard.png",
        list_of_features:
            [
                "Fees Status",
                "Activity Status",
                "Attendance Graph",
                "Protected Page"
            ],
        accessRole: ["Student"],
        flexReverse: false
    }, {
        title: "Notification Page",
        description: "User can send notification. User can see the notification. They mark the notification as read. They can also see who send the notification. They can visit the page by clicking the notification.",
        featuredImage: "/notification.png",
        list_of_features: [
            "Send Notification",
            "See Notification",
            "Mark as Read",
            "See who send the notification",
            "Visit the page by clicking the notification",
            "Protected Page"
        ],
        accessRole: ["Admin", "Trainer", "Student"],
        flexReverse: true
    }, {
        title: "Manage User Page",
        description: "This page is only visible by Admin. Admin can see all the users. Admin can delete the users. Admin can also update the users. Admin can assign trainer to the students.",
        featuredImage: "/manage-user.png",
        list_of_features: [
            "See All Users",
            "Delete User",
            "Update User",
            "Assign Trainer to the students",
            "Protected Page"
        ],
        accessRole: ["Admin"],
        flexReverse: false
    }, {
        title: "Student Attendance Page",
        description: "Student can see his attendance. He can mark the attendance as present everyday one time only. Late attendance is not allowed and automatically marked as absent.",
        featuredImage: "/student-attendance.png",
        list_of_features: [
            "See Attendance",
            "Mark Attendance",
            "Late attendance is not allowed",
            "Protected Page"
        ],
        accessRole: ["Student"],
        flexReverse: true
    }, {
        title: "Student Exercise Page",
        description: "Student can see his exercise. There is a table for showing all the exercises, also show the time period. Student can see the sets, steps, kg, rest time for each exercise.",
        featuredImage: "/student-exercise.png",
        list_of_features: [
            "See Exercise",
            "See Time Period",
            "See Sets, Steps, kg, rest time for each exercise",
            "Protected Page"
        ],
        accessRole: ["Student"],
        flexReverse: false
    }, {
        title: "Student Diet Sheet Page",
        description: "Student can see his diet sheet. There is a table for showing all the foods, also show the time period. Student can see the food for Morning, Mid Morning, Lunch, Evening Snack, Dinner.",
        featuredImage: "/student-diet-sheet.png",
        list_of_features: [
            "See Diet Sheet",
            "See Time Period",
            "See food for Morning, Mid Morning, Lunch, Evening Snack, Dinner",
            "Protected Page"
        ],
        accessRole: ["Student"],
        flexReverse: true
    }, {
        title: "Student Fees Page",
        description: "Student can see his fees status. He can pay the fees. He can see the fees history.",
        featuredImage: "/student-fees.png",
        list_of_features: [
            "See Fees Status",
            "Pay Fees",
            "See Fees History",
            "Protected Page"
        ],
        accessRole: ["Student"],
        flexReverse: false
    }, {
        title: "Student Fees Stripe CheckOut Page",
        description: "Student can pay the fees by using stripe checkout. He can pay the fees by using credit card, debit card, master card, visa card.",
        featuredImage: "/student-fees-stripe-checkout.png",
        list_of_features: [
            "Pay Fees",
            "Pay by using credit card, debit card, master card, visa card",
            "Protected Page"
        ],
        accessRole: ["Student"],
        flexReverse: true
    }, {
        title: "Student Payment Success Page",
        description: "Student can see the payment success page after paying the fees. He can see the payment details, billing details, payment method, total amount",
        featuredImage: "/student-payment-success.png",
        list_of_features: [
            "See Payment Details",
            "See Billing Details",
            "See Payment Method",
            "See Total Amount",
            "Download the receipt",
            "Protected Page"
        ],
        accessRole: ["Student"],
        flexReverse: false
    }

]