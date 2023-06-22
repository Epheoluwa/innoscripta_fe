import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Home from "views/Home";
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


                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    )
}

export default app