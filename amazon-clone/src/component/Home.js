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
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                        price={19.19}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                    />
                    <Product
                        id="12321348"
                        title="Kenwood Mix Stand for Baking, Syylish Kitchen Mixer With K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.78}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="12321342"
                        title="Fitbit Charge 3 Fitness Activity Tracker"
                        price={32}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71YGrhhoqUL._AC_UL1500_.jpg"
                    />
                    <Product
                        id="12321343"
                        title="Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric"
                        price={98.02}
                        rating={4}
                        image="https://www.scan.co.uk/images/products/3196456-a.jpg"
                    />
                    <Product
                        id="12321344"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
                        price={239.78}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81WhK5%2Bgf2L._AC_SL1500_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="12321342"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.78}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/41Fx-wYHMOL._AC_SY400_.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;