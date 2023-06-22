import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import Home from "views/Home";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import IndexNavbar from 'components/Navbars/IndexNavbar';
import Login from 'views/Auth/Login';
import Register from 'views/Auth/Register';
import Protected from 'Utils/Protected';
import Personalised from 'views/Personalised';
import PersonalisedNews from 'views/PersonalisedNews';

const app = () => {
 
    return (
        <>
            {/* <IndexNavbar /> */}

            <Routes>
                <Route element={<Protected />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/personalised" element={<Personalised />} />
                    <Route path="/news" element={<PersonalisedNews />} />
                </Route>

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* remove this part later */}
                <Route path="/index" element={<Index />} />

                <Route path="/nucleo-icons" element={<NucleoIcons />} />
                <Route path="/landing-page" element={<LandingPage />} />
                <Route path="/profile-page" element={<ProfilePage />} />
                <Route path="/login-page" element={<LoginPage />} />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    )
}

export default app