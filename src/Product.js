import React from 'react'
import './Product.css';
import {useStateValue} from "./StateProvider";

function Product({ id,title, image, price, rating}) {
     const [{basket}, dispatch] = useStateValue();
     console.log('this is the basket >>>', basket);

     const addToBasket = () => {
         //When the add to basket button is clicked , this function will dispatch the Item in to the data layer
         dispatch({
             type: 'ADD_TO_BASKET',
             item:{
                 id:id,
                 title:title,
                 image:image,
                 price:price,
                 rating: rating
             },
         });
     };

    return (
        <div className="product">
            <div className="product__info">
                    <p>{title} </p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{price}</strong> </p>
                        <div className="product__rating">
                            {Array(rating)
                            .fill()
                            .map((_, i) => (
                               <p>⭐</p> 
                            ))}
                            
                        </div>                 
            </div>       

            <img className="product__img" 
            src={image}
            alt="" />
            <button onClick={addToBasket} className="product__button"> Add to Basket</button>                            
                      
        </div>
    );
}

export default Product;

