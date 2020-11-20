import React from 'react';
import Footer from '../Footer/Footer';

import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import Service from '../Service/Service';
import './Home.css';


const Home = () => {
    return (
        <div className="background-image">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;