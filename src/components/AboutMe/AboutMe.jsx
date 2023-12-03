import React from 'react';
import { Typography, Box, Link, Container, Avatar } from '@mui/material';
import linkedinLogo from '../../images/linkedin.png';
import instaLogo from "../../images/instagram.png";
import githubLogo from "../../images/github.png"

const AboutMe = () => {
    return (
        <Container maxWidth="md">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    About Me
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Hello! I'm a passionate software developer with a keen interest in web development and data visualization. I love exploring new technologies and using them to solve complex problems.
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                    My Project
                </Typography>
                <Typography variant="body1" gutterBottom>
                    I recently completed a project where I used a variety of technologies to create a dynamic and interactive web application. Here are some of the key technologies I used:
                </Typography>
                <ul>
                    <li>React.js: A JavaScript library for building user interfaces.</li>
                    <li>Redux Toolkit: A powerful tool for managing application state. I used RTK Query, a library built into Redux Toolkit, to simplify data fetching and caching. This allowed me to efficiently manage the application's data and ensure a smooth user experience.</li>
                    <li>Material-UI: A popular React UI framework that allowed me to build a modern, responsive UI with pre-built components.</li>
                    <li>Chart.js and react-chartjs-2: Libraries that I used to create beautiful, interactive charts for data visualization.</li>
                    <li>Axios: A promise-based HTTP client for making asynchronous requests.</li>
                    <li>Moment.js: A library that I used to manipulate and format dates.</li>
                    <li>Millify: A utility used to convert large numbers into human-readable strings.</li>
                </ul>
                <Typography variant="h6" component="h2" gutterBottom>
                    Connect with Me
                </Typography>
                <div style={{display:'flex',alignItems:'center'}}>
                <Typography variant="body1" gutterBottom>
                    I'm always open to new opportunities and collaborations. Feel free to connect with me
                </Typography>
                <Link><Avatar src={linkedinLogo} alt="linkedin"/></Link>
                <Link><Avatar src={instaLogo} alt="instagram"/></Link>
                <Link><Avatar src={githubLogo} alt="github"/></Link>
                
                </div>

            </Box>
        </Container>
    );
}

export default AboutMe;
