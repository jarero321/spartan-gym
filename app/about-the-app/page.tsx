'use client'
import {Container, Box} from "@mui/material/";
import PageDetails from "@/app/components/PageDetails";
import {details} from "@/utils/detailsData";
import Header from "@/app/components/AboutTheApp/Header";
import StackAndTools from "@/app/components/AboutTheApp/StackAndTools";
import PackageJson from "@/app/components/AboutTheApp/PackageJson";


const AboutTheAppPage = () => {
    return <Container maxWidth={'xl'} component={'main'}>
        <Header/>
        <StackAndTools/>
        <PackageJson/>
        <Box component={'section'} sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            my: 4
        }}>

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
        </Box>


    </Container>
}

export default AboutTheAppPage