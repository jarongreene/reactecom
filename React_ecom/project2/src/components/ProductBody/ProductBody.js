import React from 'react'



const Product = ({ name, description, price, image }) => {
    return (
         <div className="">
         <img src={image} alt="Image of product" className="" />
            <div className="">
                <h3 className="">{name}</h3>
                <p className="">{description}</p>
                <p className="">{price}</p>
                <button className="" type="button">Buy Now</button>
            </div>
        </div>
    );
}
export default Product;


