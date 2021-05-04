import React from 'react'
import './Home.css';
import Product from './Product.js';



function Home() {
    return (
        <div className="home">
                <div className="home__Container">
                    <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="BannerImage" />
                </div>

                <div className="home__row">                
                    <Product 
                    id="40957309457"
                    title ="The subtle art of not giving a fuck..... "
                    price = {29.99}
                    image = "https://5.imimg.com/data5/LK/KF/BA/ANDROID-86418013/product-jpeg-500x500.jpeg"
                    rating = {3}
                    />
                    <Product 
                    id = "124786231"
                    title ="Swarovski-Infinity Heart Halskette "
                    price = {65.99}
                    image = "https://m.media-amazon.com/images/I/71I+HBWQG6L._AC_UL320_.jpg"
                    rating = {4}
                    />                                     
                </div>

                <div className="home__row">                
                   <Product 
                    id = "2342345244 "
                    title =" Samsung Monitor, Black, glossy black "
                    price = {173.48}
                    image = "https://m.media-amazon.com/images/I/810XT4GfG+L._AC_UY218_.jpg"
                    rating = {4}
                    />
                     <Product 
                    id = "123585145 "
                    title =" LIEBESKIND Berlin Unisex Adult Analogue Quartz Watch"
                    price = {59.99}
                    image = "https://m.media-amazon.com/images/I/61jIC6nTA0L._AC_UY218_.jpg"
                    rating = {3}
                    />
                    <Product 
                    id = "145624231"
                    title ="Swarovski-Infinity Heart Halskette "
                    price = {65.99}
                    image = "https://m.media-amazon.com/images/I/71I+HBWQG6L._AC_UL320_.jpg"
                    rating = {4}
                    />   
                     <Product 
                    title ="The subtle art of not giving a fuck..... "
                    price = {29.99}
                    image = "https://5.imimg.com/data5/LK/KF/BA/ANDROID-86418013/product-jpeg-500x500.jpeg"
                    rating = {3}
                    />                                
                </div>

                <div className="home__row">                
                <Product 
                    id = "2342234544 "
                    title =" Samsung Monitor, ULTRA WIDE Black, WQHD "
                    price = {599.99}
                    image = "https://m.media-amazon.com/images/I/71uidmTtOZL._AC_UY218_.jpg"
                    rating = {5}
                    />                                                     
                </div>
            
        </div> /*home*/
    );
}

export default Home;



