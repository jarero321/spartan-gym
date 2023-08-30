'use client'
import {Container} from "@mui/material/";
import PageDetails from "@/app/components/PageDetails";


const details = [
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
        flexReverse: true,
    }, {
        title: "Trainer Page",
        description: "This page is Visible by Admin, Trainers, Students. User. User able to see the details of trainer.",
        featuredImage: "/trainer.png",
        list_of_features: [
            "User can see the trainers details",
            "Trainer's All Data",
            "Trainer's Image",
            "Server Page",
            "Protected Page"
        ],
        flexReverse: false
    }
]

const AboutTheAppPage = () => {
    return <Container maxWidth={'xl'} component={'main'}
                      sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 2
                      }}
    >
        {
            details.map((p, index) => (
                <PageDetails key={index} title={p.title} description={p.description} featuredImage={p.featuredImage}
                             list_of_features={p.list_of_features}
                             flexReverse={p.flexReverse}/>
            ))
        }


    </Container>
}

export default AboutTheAppPage