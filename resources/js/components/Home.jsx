import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';
import Footer from './home_components/Footer';
import Header from './home_components/Header';
import Main from './home_components/Main';
import SideBar from './home_components/SideBar';

function Home({name}) {
    return (
        <div classname="wrapper">
            <Header />
            <SideBar />
            <Main />
        </div>
    );
}

export default Home;
