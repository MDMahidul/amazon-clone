import React from 'react';
import '../assets/css/Home.css';
import Product from "./Product";

function Home(props) {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

                <div className="home__row">
                    <Product
                        title="The learn startup"
                        price={19.19}
                        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                        rating={4}
                    />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                </div>
            </div>
        </div>
    );
}

export default Home;