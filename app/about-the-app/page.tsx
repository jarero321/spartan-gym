'use client'
import {Container} from "@mui/material/";
import PageDetails from "@/app/components/PageDetails";
import {details} from "@/utils/detailsData";


const AboutTheAppPage = () => {
    return <Container maxWidth={'xl'} component={'main'}
                      sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 2,
                          my: 4
                      }}
    >
        {
            details.map((p, index) => (
                <PageDetails
                    key={index}
                    title={p.title}
                    description={p.description}
                    featuredImage={p.featuredImage}
                    list_of_features={p.list_of_features}
                    accessRole={p.accessRole}
                    flexReverse={p.flexReverse}
                />
            ))
        }


    </Container>
}

export default AboutTheAppPage