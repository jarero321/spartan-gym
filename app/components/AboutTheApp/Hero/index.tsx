import {Box, Button, Container, Typography} from "@mui/material";
import Link from "next/link";

const Hero = () => {
    return (
        <Box
            component="section"
            sx={{
                backgroundImage: "url('/hero-background.jpg')",
                backdropFilter: "brightness(0.5) blur(15px)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#000",
                textAlign: "center",
                padding: "80px 0",
            }}
        >
            <Container maxWidth="md">
                <Typography variant="h1" component="h1" sx={{
                    marginBottom: 2,
                    fontSize: {
                        xs: "2rem",
                        sm: "3rem",
                        md: "4rem"
                    }
                }}>
                    Welcome to Our Fitness App
                </Typography>
                <Typography variant="h5" sx={{marginBottom: 4}}>
                    Achieve Your Fitness Goals with Ease
                </Typography>
                <Link href={'/'}>
                    <Button variant="contained" color="primary" size="large">
                        Get Started
                    </Button>
                </Link>
            </Container>
        </Box>
    );
};

export default Hero;
