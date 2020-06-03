import React from "react"
import productData from "../data/products.json"
import ProductBody from "./ProductBody/ProductBody"


const productsState = {
    products : productData 
}

//Extends functionalitiy 
class Products extends React.Component{

    
    constructor(){ 
        //super is calling back to the constructor. Need it to acess variables
        super() 
        this.state = productsState
    }
    //This is where I filter thru the products
    filterProducts = (genre) => {
        let value = genre.target.value 

        //Using spread operator to make a copy of exsiting objects
        const allProducts = [...productData]
        if (value==='all'){
            //This.setState makes my filter go back to regular search
            this.setState({products : allProducts})

            return
        }

        const filterProducts = allProducts.filter(product => product.genre === value)
        
        //Filtering thru the products
        this.setState({products : filterProducts})
    }
    render(){
        const mapProduct = this.state.products.map(product =>{
            return <ProductBody name ={product.name} price = {product.price} genre = {product.genre} image = {product.image}/>

        })
    

   
    return(
        <div className = "App">
        <select onChange={evt => this.filterProducts(evt)}>

                    <option value="All">Featured</option>
                    <option value="Shonen">Shonen</option>
                    <option value="Dark">Dark</option>
                    <option value="Adventure">Adventure</option>
        </select>
    <div>{mapProduct}</div>
                
                </div>
    )
}
}

export default Products;
