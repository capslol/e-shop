import React, {Component, useState} from 'react';


import './app.css';
import data from "../../services/service";
import {Route, Routes, Router} from "react-router-dom";
import Header from "../header";
import Form from "../form";

import {QueryClient, QueryClientProvider, useQuery} from 'react-query'
import {ReactQueryDevtools} from "react-query/devtools";
import HomePage from "../HomePage/HomePage";


// const queryClient = new QueryClient()


const App = () => {
    const [isLoggedIn, setLogin] = useState(localStorage.getItem('isLoggedIn') ? localStorage.getItem('isLoggedIn') : false)

    const onLogin = () => {
        setLogin(() => true)
        localStorage.setItem('isLoggedIn', isLoggedIn)
    }

    if (!isLoggedIn) {
        return (
            <Form isLoggedIn={isLoggedIn} onLogin={onLogin}/>
        );
    }

    return (
        <div>
            <Header/>

            <Routes>
                <Route path={'/home'} element={<HomePage/>}/>
                {/*<QueryClientProvider client={queryClient}>*/}

                {/*<ReactQueryDevtools/>*/}
                {/*</QueryClientProvider>*/}
            </Routes>
        </div>
    );
};

export default App;

